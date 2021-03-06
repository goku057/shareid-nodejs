//requiring models
const accountInfoModel = require("../../models/profileModel/accountInfoModel.js");
const { id } = require("../../helpers/activeUser");


let accountInfo = async (req, res) =>{
    let activeUser = id; 
    let showUserInfo = await accountInfoModel.showInfo(activeUser);
    
    let pageTitle = "Account-Information";
    let data = {
        pageTitle,
        showUserInfo
    }
    console.log(data.showUserInfo);
    var resultArray = Object.values(JSON.parse(JSON.stringify(data.showUserInfo)))

    console.log(resultArray);
    res.render("account-info.ejs", {data});
}

let info = async (req, res) =>{
    
    let FirstName = req.body.fName;
    let LastName = req.body.lName;
    let dob = req.body.dob;
    let phone = req.body.phone;
    let activeUser = id; 
    console.log(req.body);

    await accountInfoModel.createInfo(activeUser, FirstName, LastName, dob, phone);
    res.redirect("/account-info");
    
}

let showInfo = async (req, res) =>{
    
    let activeUser = id; 
    console.log(req.body);
    let showUserInfo = await accountInfoModel.showInfo(activeUser);
    console.log(showUserInfo);
    let pageTitle = "Account-Information";
    let data = {
        pageTitle
    }

    res.render("account-info.ejs", {data});
}



module.exports = {
    accountInfo,
    info,
    showInfo
}