let { query } = require("../helpers/db.js");


let getSearchedPosts = async (searchQuery) =>
{
    let sqlCommand = ` SELECT * FROM post_details WHERE title LIKE '%${searchQuery}%'`
    // let sqlCommand = `SELECT * FROM user_login_info WHERE 1;`
    let result = await query(sqlCommand);
    console.log(result);
    return result;
}


module.exports = 
{
   getSearchedPosts

}