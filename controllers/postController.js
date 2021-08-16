let { id } = require("../helpers/activeUser.js");
const postModel = require("../models/postModel.js");

let createpost = (req , res)=>
{

    let pageTitle = "CreatePost";
    let data =
    {
        pageTitle
    }
    res.render("createpost.ejs" , { data });
}


let createpostUser = async (req , res)=>
{
    console.log(req.body);
    let activeUser = id;
    let title = req.body.title;
    let category = req.body.category;
    let price = req.body.price;
    let username = req.body.username;
    let pass = req.body.pass;
    let description = req.body.description;
    let tags = req.body.tags;
    let postStatus = "unsold";

    // console.log("the id is" + activeUser);
    let  postCount = await postModel.getPostCount(activeUser);
   
    postCount = postCount[0].c;
    postCount++;
    let pid = postCount;
    //console.log("the post count is" + postCount);
    postModel.createpostUser(pid, activeUser, title, category, price, username, pass, description, tags, postStatus)

    let pageTitle = "CreatePost";
    let data = 
    {
        pageTitle
    }
    res.render("createpost.ejs" , {data});
}


let showLatestPost = async (req , res)=>
{
    let activeUser = id;
    let posts = await postModel.getAllPosts(activeUser);
    console.log(posts);
    let pageTitle = "Posts";
    let data = 
    {
        pageTitle,
        posts
    }
    res.render("latest-posts.ejs" , { data });
} 

module.exports =
{
    createpost,
    createpostUser,
    showLatestPost 
}