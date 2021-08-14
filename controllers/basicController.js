const home = (req, res)=>{

    let title = "ShareID";
    let data = {
        pageTitle : title
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