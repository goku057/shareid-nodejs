//requiring models
const accountInfoModel = require("../../models/profileModel/accountInfoModel.js");

let accountInfo = (req, res) =>{
    let pageTitle = "Account-Information";
    let data = {
        pageTitle
    }
    res.render("account-info.ejs", {data});
}

let info = async (req, res) =>{
    
    let FirstName = req.body.fName;
    let LastName = req.body.lName;
    let dob = req.body.dob;
    let phone = req.body.phone;

    console.log(req.body);

    await accountInfoModel.updateInfo(FirstName, LastName, dob, phone);
    res.redirect("/account-info");
    // console.log(checkExist);
    // if(checkExist[0].c == 0){
    //     await authenticationModel.updateInfo(FirstName, LastName, dob, phone);
    //     res.redirect("/");
    // }
    // else{
    //     console.log("The name already exists");
        
    // }
   
}


module.exports = {
    accountInfo,
    info
}