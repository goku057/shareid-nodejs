//requiring models
const dashboardModel = require("../../models/profileModel/dashboardModel.js");
const { id } = require("../../helpers/activeUser");


let dashboardData = async (req, res) =>{
    let activeUser = id; 
    let dashboardEarned = await dashboardModel.showEarned(activeUser);
    let dashboardPaid = await dashboardModel.showPaid(activeUser);
    let dashboardTotalPost = await dashboardModel.showTotalpost(activeUser);
    // console.log(dashboardData.length);
    let pageTitle = "Dashboard";
    let data = {
        pageTitle,
        dashboardEarned,
        dashboardPaid,
        dashboardTotalPost

    }

    res.render("dashboard.ejs", {data});
}

let dashboardAjaxData = async (req, res) =>{
    // console.log("data 2" + data);

    let activeUser = id; 
    let dashboardCurrency = await dashboardModel.showCurrency(activeUser);
    let data = {
        dashboardCurrency
    }
    // console.log("data 2" + data);
    console.log(data);
    res.json({data});
}


module.exports = {
    dashboardData,
    dashboardAjaxData
   
}