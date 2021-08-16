let { query } = require("../../helpers/db.js");

let createInfo = async (activeUser, fName, lName, dob, phone) => {
    
    let sqlCommand = `INSERT INTO user_info( user_id, first_name, last_name, dob, phone, currency) VALUES ('${activeUser}', '${fName}', '${lName}', '${dob}', '${phone}', '');`

    let result = await query(sqlCommand);
    return result;
}


let showInfo = async (activeUser) => {
    
    let sqlCommand = `SELECT user_id, first_name, last_name, dob, phone, currency FROM user_info WHERE user_id = '${activeUser}';`

    let result = await query(sqlCommand);
    return result;
}

// let find = async (fName) => {
    
//     let sqlCommand = `SELECT * FROM user_login_info WHERE user_name = "${fName}";`
    
//     let result = await query(sqlCommand);
//     return result;
// } 

module.exports = {
    createInfo,
    showInfo
    
}