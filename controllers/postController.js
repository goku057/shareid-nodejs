const {id} = require("../helpers/activeUser.js");

let createpost = (req, res) => {
    let pageTitle = "CreatePost";
    let data =
    {
        pageTitle
    }
    res.render("createpost.ejs", { data });
}


let createpostUser = (req, res) => {
    console.log(req.body);
}



module.exports =
{
    createpost,
    createpostUser
}