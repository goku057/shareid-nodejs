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

let editpost = async(req , res)=>
{
    let pageTitle = "EditPost";
    let post = await postModel.getPost(req.params.id);
    let data =
    {
        pageTitle,
        post
    }
    res.render("editpost.ejs" , { data });
}


let editpostUser = async (req , res)=>
{
    console.log(req.params.id);
    console.log(req.body);
    let pid = req.params.id
    let title = req.body.title;
    let category = req.body.category;
    let price = req.body.price;
    let username = req.body.username;
    let description = req.body.description;
    let tags = req.body.tags;
    postModel.editpostUser(pid,title, category, price, username,description, tags)
    res.redirect('/latest-posts')
}


let showLatestPost = async (req , res)=>
{
    let activeUser = id;
    let posts = await postModel.getAllPosts(activeUser);
    let pageTitle = "Posts";
    let data = 
    {
        pageTitle,
        posts
    }
    res.render("latest-posts.ejs" , { data });
} 

let deletepost = async (req , res)=>
{
    console.log('DeleteId',req.params.id);
    let pid = req.params.id
    postModel.deletepost(pid)
    res.redirect('/')

} 



module.exports =
{
    createpost,
    createpostUser,
    showLatestPost,
    editpost, 
    editpostUser,
    deletepost
}