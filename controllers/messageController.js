const messageModel = require("../models/messageModel.js");
const { id } = require("../helpers/activeUser");



let message = (req, res) =>{
    let activeUser = id;

    let pageTitle = "Message" ;
    let data = {
        pageTitle
    }
    res.render("messageList.ejs", {data});

}

let messageUser  = (req, res) =>{

    console.log(req,body) 
    

}

module.exports = 
{
    message,
    messageUser
}