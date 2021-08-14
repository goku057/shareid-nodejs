let { query } = require("../../helpers/db.js");

let updateInfo = async (fName, lName, dob, phone) => {
    
    let sqlCommand = `INSERT INTO user_info( user_id, first_name, last_name, dob, phone, currency) VALUES (2, '${fName}', '${lName}', '${dob}', '${phone}', '');`

    let result = await query(sqlCommand);
    return result;
}

// let find = async (fName) => {
    
//     let sqlCommand = `SELECT * FROM user_login_info WHERE user_name = "${fName}";`
    
//     let result = await query(sqlCommand);
//     return result;
// } 

module.exports = {
    updateInfo
    
}