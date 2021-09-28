let { query } = require("../helpers/db.js");

let createpostUser = async (pid, activeUser, title, category, price, username, pass, description, tags, postStatus) => 
{
    let sqlCommand = `INSERT INTO post_details(pid, user_id, title, description, puser_name, puser_pass, post_cat, post_status, post_time, price, tag)
     VALUES (${pid}, ${activeUser}, '${title}', '${description}', '${username}', '${pass}', ${category}, 'unsold', CURRENT_TIMESTAMP, ${price}, '${tags}');`;
     let result = await query(sqlCommand);
    console.log(result);
    return result;
}


let getPostCount = async (userID) =>
{
    let sqlCommand = `SELECT COUNT(*) AS c FROM post_details WHERE user_id = ${ userID };`
    // let sqlCommand = `SELECT * FROM user_login_info WHERE 1;`
    let result = await query(sqlCommand);
    return result;
}


let getAllPosts = async (userID) =>
{
    let sqlCommand = ` SELECT pid, pd.user_id, title, description, puser_name, puser_pass, post_cat, post_status, post_time, price, tag cat_name, uli.user_name 
    FROM post_details AS pd JOIN post_cat AS pc ON pd.pid = pc.cat_id JOIN user_login_info AS uli ON pd.user_id = uli.user_id WHERE pd.user_id = ${ userID } `
    // let sqlCommand = `SELECT * FROM post_details WHERE user_id = ${ userID };`
    let result = await query(sqlCommand);
    return result;
}

let getUserAllPosts = async (userID) =>
{
    let sqlCommand = ` SELECT pid, pd.user_id, title, description, puser_name, puser_pass, post_cat, post_status, post_time, price, tag cat_name, uli.user_name 
    FROM post_details AS pd JOIN post_cat AS pc ON pd.pid = pc.cat_id JOIN user_login_info AS uli ON pd.user_id = uli.user_id WHERE pd.post_status = 'unsold' AND pd.user_id != ${ userID } `
    // let sqlCommand = `SELECT * FROM post_details WHERE user_id != ${ userID };`
    let result = await query(sqlCommand);
    return result;
}



let getPost = async (postID) =>
{
    let sqlCommand = `SELECT * FROM post_details WHERE pid = ${ postID };`
    let result = await query(sqlCommand);
    return result;
}

let editpostUser = async (pid,title, category, price, username,description, tags) => 
{
    let sqlCommand = `UPDATE post_details SET title='${title}',description='${description}',puser_name='${username}',
    post_cat='${category}',price= ${price},post_time= CURRENT_TIMESTAMP,tag='${tags}' WHERE pid = ${pid}`;

     let result = await query(sqlCommand);
    console.log(result);
    return result;
}

let deletepost = async (postID) =>
{
    let sqlCommand = `DELETE FROM post_details WHERE pid = ${postID}`
    let result = await query(sqlCommand);
    return result;
}

let buyPost = async (activeUser, uid, pid, curr) => {
    let sqlCommand = `UPDATE post_details SET post_Status = 'sold' WHERE user_id = ${uid} AND pid = ${pid}`
    let result = await query(sqlCommand);
    sqlCommand = `UPDATE post_details SET post_Status = 'sold' WHERE user_id = ${uid} AND pid = ${pid}`;
    result = await query(sqlCommand);
    sqlCommand = `SELECT currency FROM user_info WHERE user_id = ${activeUser}`;
    result = await query(sqlCommand);
    console.log(result)
    let currency = result[0].currency;
    let finalCurr = curr - currency;
    console.log(" currency " + currency);
    console.log("curr " + curr);
    sqlCommand = `UPDATE user_info SET  currency = ${finalCurr} WHERE user_id = ${activeUser}`;
    await query(sqlCommand);
    return result;
}

let getPostInfo = async (uid, pid) => {
    let sqlCommand = `SELECT  puser_name, puser_pass FROM post_details WHERE pid = ${pid} AND user_id = ${uid}`;
    let result = await query(sqlCommand);
    return result;
}

module.exports = 
{
   createpostUser,
   getPostCount,
   getAllPosts,
   getPost,
   editpostUser,
   deletepost,
   getUserAllPosts,
   buyPost,
   getPostInfo

}