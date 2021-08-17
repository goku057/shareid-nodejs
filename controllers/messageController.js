const messageModel = require("../models/messageModel.js");
const { id } = require("../helpers/activeUser");
const df = require("dateformat");



let message = async (req, res) =>{
    let activeUser = id;
    let msgList = await messageModel.getMsgList(activeUser);
    let pageTitle = "Message" ;
    let data = {
        pageTitle,
        msgList,
        df
    }
    res.render("messageList.ejs", {data});

}

let messageUser  = (req, res) =>{

    console.log(req,body) 
    

}
let viewUser = async (req, res) =>{
    let activeUser = id;
    let userList = await messageModel.getUserList(activeUser);
    let pageTitle = "User List" ;
    let data = {
        pageTitle,
        userList
    }
    res.render("user-newmsg-List.ejs", {data});

}
let msgInbox = async (req, res) =>{
    let activeUser = id;
    let msgWithID = req.query.uid;
    let msgCreated = await messageModel.checkIfMsgCreated(activeUser, msgWithID);
    if(msgCreated.length == 0){
        let msgCreateForActiveUser = await messageModel.getCreatedMsgCount(activeUser);
        let msgCreateForUser = await messageModel.getCreatedMsgCount(activeUser);
        msgCreateForActiveUser = msgCreateForActiveUser[0].c + 1;
        msgCreateForUser = msgCreateForUser[0].c +1;


        await messageModel.createMsg(activeUser,msgCreateForActiveUser,msgWithID,msgCreateForUser);

    }
    let msg = await messageModel.getMsg(activeUser,msgWithID);
    let pageTitle = "User List" ;
    let data = {
        pageTitle,
        userList
        
    }
    res.render("user-newmsg-List.ejs", {data});
}

module.exports = {
    message,
    messageUser,
    viewUser,
    msgInbox
}