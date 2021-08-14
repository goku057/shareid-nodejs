//requiring models
const authenticationModel = require("../models/authenticationModel.js");

let register = (req, res) =>{
    let pageTitle = "Register";
    let data = {
        pageTitle
    }
    res.render("register.ejs", {data});
}

let registerUser = async (req, res) =>{
    
    let userName = req.body.userName;
    let email = req.body.email;
    let pass = req.body.pass;

    let checkExist = await authenticationModel.checUserExists(userName);
    console.log(checkExist);
    if(checkExist[0].c == 0){
        await authenticationModel.registerUser(userName, email, pass);
        res.redirect("/");
    }
    else{
        console.log("The name already exists");
        
    }
   
}


module.exports = {
    register,
    registerUser
}