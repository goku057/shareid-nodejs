let { query } = require("../helpers/db.js");

let createpostUser = async (pid, activeUser, title, category, price, username, pass, description, tags, postStatus) => 
{
    let sqlCommand = `INSERT INTO post_details(pid, user_id, title, description, puser_name, puser_pass, post_cat, post_status, post_time, price, tag)
     VALUES (${pid}, ${activeUser}, '${title}', '${description}', '${username}', '${pass}', ${category}, '${pid}', CURRENT_TIMESTAMP, ${price}, '${tags}');`;
     let result = await query(sqlCommand);
    console.log(result);
    return result;
}


let getPostCount = async (userID) =>
{
    let sqlCommand = `SELECT COUNT(*) AS c FROM post_details WHERE user_id = ${ userID };`
    // let sqlCommand = `SELECT * FROM user_login_info WHERE 1;`
    let result = await query(sqlCommand);
    console.log(result);
    return result;
}


let getAllPosts = async (userID) =>
{
    let sqlCommand = ` SELECT pid, pd.user_id, title, description, puser_name, puser_pass, post_cat, post_status, post_time, price, tag cat_name, uli.user_name 
    FROM post_details AS pd JOIN post_cat AS pc ON pd.pid = pc.cat_id JOIN user_login_info AS uli ON pd.user_id = uli.user_id WHERE pd.user_id = ${ userID } `
    // let sqlCommand = `SELECT * FROM user_login_info WHERE 1;`
    let result = await query(sqlCommand);
    console.log(result);
    return result;
}


module.exports = 
{
   createpostUser,
   getPostCount,
   getAllPosts

}