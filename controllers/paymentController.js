//including model
const paymentModel = require("../models/paymentModel.js");

//including helpers
const {id} = require("../helpers/activeUser.js");
const {Publishable_Key, stripe} = require("../helpers/stripeConfig.js");


let showPayForm = async (req, res)=>{

    let userID = id;
    let currentAmount = await paymentModel.getCurrency(userID);
    let title = "payment";
    let data = {
        pageTitle : title,
        currentAmount
    }
    res.render("pay-form", {data});


}

let getFormInfo = async (req, res)=>{

    let userID = id;
    let currentAmount = await paymentModel.getCurrency(userID);
    let data = {
        currentAmount
    }
    res.json({data});


}


let pay = async (req, res)=>{

    let userID = id;
    let amount = req.body.amount;
    let userInfo =  await paymentModel.getUserInfo(userID);
    // console.log(userInfo)
    let email = userInfo[0].user_email;
    let name = userInfo[0].user_name;
    let currentAmount = await paymentModel.getCurrency(userID);

    let title = "payment";
    let data = {
        pageTitle : title,
        key: Publishable_Key,
        amount,
        email,
        name,
        currentAmount
    }
    res.render("pay", {data});


}

let payment = async (req, res) => { 

    let userID = id;
    // console.log(req.body);
    
    let amount = req.body.amount;
    let paidAmount = parseInt(amount, 10);
    let userInfo =  await paymentModel.getUserInfo(userID);
    // let email = req.body.email;
    let name = userInfo[0].user_name;
    let description = "Topping up currency";

    
    stripe.customers.create({ 
        email: req.body.stripeEmail, 
        source: req.body.stripeToken, 
        name, 
         
    }) 
    .then((customer) => { 

        // console.log("The customer id is " + customer.id);
        return stripe.charges.create({ 
            amount: amount * 100,     
            description, 
            currency: 'USD', 
            customer: customer.id 
            
        }); 
    }) 
    .then( async (charge) => { 
        // console.log("The charge is ");
        // console.log(charge);
        // res.send("Success") // If no error occurs
        let currentAmount = await paymentModel.getCurrency(userID);
        let totalAmount = currentAmount + paidAmount;
        // console.log(totalAmount);
        await  paymentModel.updateCurrency(userID, totalAmount);
        await  paymentModel.paymentDetails(userID, paidAmount);
        res.redirect("/pay-form")
    }) 
    .catch((err) => { 
        res.send(err)    // If some error occurs 
    }); 
}

module.exports = {
    showPayForm,
    getFormInfo,
    pay,
    payment,
}