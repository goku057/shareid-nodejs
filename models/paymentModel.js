let { query } = require("../helpers/db.js");

let getUserInfo = async (userID) =>{
    let sqlCommand = `SELECT user_id, user_name, user_email FROM user_login_info WHERE user_id = ${userID};`
    let result = await query(sqlCommand);
    return result;
}

let getCurrency = async (userID) =>{
    let sqlCommand = `SELECT currency FROM user_info WHERE user_id = ${userID};`
    let result = await query(sqlCommand);

    return parseInt(result[0].currency, 10);
}

let updateCurrency = async (userID, amount) =>{
    let sqlCommand = `UPDATE user_info SET currency = ${amount} WHERE user_id = ${userID};`
    let result = await query(sqlCommand);

    return result;
}



module.exports = {
    getUserInfo,
    getCurrency,
    updateCurrency
}