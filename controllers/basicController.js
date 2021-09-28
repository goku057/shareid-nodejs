let { id } = require("../helpers/activeUser");
const postModel = require("../models/postModel.js");
const accountInfoModel = require("../models/profileModel/accountInfoModel.js");

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

module.exports = {
    home,
    userProfile,
    userDashboard,
}