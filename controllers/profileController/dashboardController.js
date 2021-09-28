//requiring models
const accountInfoModel = require("../../models/profileModel/dashboardModel.js");
const { id } = require("../../helpers/activeUser");


let dashboardData = async (req, res) =>{
    let activeUser = id; 
    let dashboardCurrency = await accountInfoModel.showCurrency(activeUser);
    let dashboardEarned = await accountInfoModel.showEarned(activeUser);
    let dashboardPaid = await accountInfoModel.showPaid(activeUser);
    let dashboardTotalPost = await accountInfoModel.showTotalpost(activeUser);
    // console.log(dashboardData.length);
    let pageTitle = "Dashboard";
    let data = {
        pageTitle,
        dashboardCurrency,
        dashboardEarned,
        dashboardPaid,
        dashboardTotalPost

    }
    console.log(dashboardCurrency);
    res.render("dashboard.ejs", {data});
}

// let info = async (req, res) =>{    
//     let FirstName = req.body.fName;
//     let LastName = req.body.lName;
//     let dob = req.body.dob;
//     let phone = req.body.phone;
//     let activeUser = id; 
//     console.log(req.body);
//     await accountInfoModel.createInfo(activeUser, FirstName, LastName, dob, phone);
//     res.redirect("/account-info");
// }

// let showInfo = async (req, res) =>{

//     let activeUser = id; 
//     console.log(req.body);
//     let dashboardData = await accountInfoModel.showInfo(activeUser);
//     console.log(dashboardData);
//     let pageTitle = "Account-Information";
//     let data = {
//         pageTitle
//     }

//     res.render("account-info.ejs", {data});
// }



module.exports = {
    dashboardData
   
}