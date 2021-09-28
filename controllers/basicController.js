let { id } = require("../helpers/activeUser");
const postModel = require("../models/postModel.js");
const accountInfoModel = require("../models/profileModel/accountInfoModel.js");
const messageModel = require("../models/messageModel.js");

const home = async(req, res)=>{
    let activeUser = id;
    let posts = await postModel.getUserAllPosts(activeUser);
    let activeUserInfo = await accountInfoModel.showInfo(activeUser);
    let curCurrency = activeUserInfo[0].currency;
    // console.log(currency);
    let title = "ShareID";
    let data = {
        pageTitle : title,
        posts,
        curCurrency
    }
    res.render("index", {data});

}

const userProfile = (req, res) =>{

    let title = "Account Info";
    let data = {
        pageTitle : title
    }
    res.render("account-info.ejs", {data});
} 

const userDashboard = (req, res) =>{
    let title = "Dashboard";
    let data = {
        pageTitle : title
    }
    res.render("user-dashboard.ejs", {data});
}


let purchase = async(req, res)=>{

    let adminID = 1;
    let activeUser = id;
    let pid = req.query.pid;
    let uid = req.query.uid;
    let curr = req.query.cur;

    console.log(curr)
    let msgCreated = await messageModel.checkIfMsgCreated(activeUser, adminID);
    if(msgCreated[0].c == 0){
        let msgCreateForActiveUser = await messageModel.getCreatedMsgCount(activeUser);
        let msgCreateForUser = await messageModel.getCreatedMsgCount(adminID);
        msgCreateForActiveUser = msgCreateForActiveUser[0].c + 1;
        msgCreateForUser = msgCreateForUser[0].c +1;
        await messageModel.createMsg(activeUser,msgCreateForActiveUser,adminID,msgCreateForUser);
    }
    await postModel.buyPost(activeUser, pid, uid, curr);
    let msgWithID = activeUser;
    let postInfo = await postModel.getPostInfo( uid, pid)
    console.log("gg")
    console.log(postInfo)
    let userPostID = postInfo[0].puser_name;
    let userPostPass = postInfo[0].puser_pass;
    console.log("User id is " + userPostID);
    console.log("User pass is " + userPostPass);
    let msg = `You have purchased the post user id: ${userPostID} and password: ${userPostPass}`;
    // console.log("The id is " + msgWithID);
    let msgCount = await messageModel.getMsgCount( adminID, msgWithID);
    msgCount = msgCount[0].c + 1;
    // console.log("The id is " + msgWithID);
    // console.log(msg);
    // console.log("The count is " + msgCount);
    await messageModel.insertMsg(msgCount, adminID, activeUser, msg);
    
    
    res.redirect("/message-inbox?uid=1");

}

module.exports = {
    home,
    userProfile,
    userDashboard,
    purchase
}