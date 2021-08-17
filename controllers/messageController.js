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
    if(msgCreated[0].c == 0){
        let msgCreateForActiveUser = await messageModel.getCreatedMsgCount(activeUser);
        let msgCreateForUser = await messageModel.getCreatedMsgCount(activeUser);
        msgCreateForActiveUser = msgCreateForActiveUser[0].c + 1;
        msgCreateForUser = msgCreateForUser[0].c +1;
        await messageModel.createMsg(activeUser,msgCreateForActiveUser,msgWithID,msgCreateForUser);
    }
    console.log("The msg created length " + msgCreated.length);
    // console.log("The active user = " + activeUser);
    let msg = await messageModel.getMsg(activeUser,msgWithID);
    let activeUserInfo = await messageModel.getUserInfo(activeUser);
    let msgWithInfo = await messageModel.getUserInfo(msgWithID);
    // console.log(activeUserInfo[0].user_name);
    let pageTitle = "User List" ;
    let data = {
        pageTitle,
        msg,
        activeUserInfo,
        msgWithInfo,
        df
    }
    res.render("message.ejs", {data});
}

let insertMsg = async (req, res) =>{
    let activeUser = id;
    let msgWithID = req.body.uid;
    let msg = req.body.msg;
    // console.log("The id is " + msgWithID);
    let msgCount = await messageModel.getMsgCount(activeUser, msgWithID);
    msgCount = msgCount[0].c + 1;
    // console.log("The id is " + msgWithID);
    // console.log(msg);
    // console.log("The count is " + msgCount);
    await messageModel.insertMsg(msgCount, activeUser, msgWithID, msg);
    
    res.redirect(`/message-inbox?uid=${msgWithID}`);
}

module.exports = {
    message,
    messageUser,
    viewUser,
    msgInbox,
    insertMsg
}