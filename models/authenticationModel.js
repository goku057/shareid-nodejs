let { query } = require("../helpers/db.js");

let registerUser = async (userName, email, pass) => {
    
    let sqlCommand = `INSERT INTO user_login_info( user_name, user_email, user_pass) VALUES ('${userName}', '${email}', '${pass}');`

    let result = await query(sqlCommand);
    return result;
}

let checUserExists = async (userName) => {
    
    let sqlCommand = `SELECT  COUNT(user_name) AS c FROM user_login_info WHERE user_name = "${userName}";`

    let result = await query(sqlCommand);
    return result;
} 

module.exports = {
    registerUser,
    checUserExists
}