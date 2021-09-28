const notificationModel = require("../models/notificationModel.js");
const {id} = require("../helpers/activeUser.js");
let getNotification = async (req , res)=>
{

    let notificationID= id;
    let notificationresult = await notificationModel.getNotification(notificationID);
    let data ={notificationresult} ;
    // res.render("navbar.ejs" , { data });
    res.json({data});
}


module.exports =
{
  getNotification 
}