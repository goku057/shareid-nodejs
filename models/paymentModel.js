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

let paymentDetails = async (userID, amount) =>{
    let sqlCommand = `SELECT COUNT(*) AS c FROM payment_details WHERE user_id = ${userID};`;
    let result = await query(sqlCommand);
    let count = result[0].c + 1;
    sqlCommand = `INSERT INTO payment_details(id, user_id, pay_amount, pay_time) VALUES (${count}, ${userID}, ${amount}, CURRENT_TIMESTAMP)`;
    result = await query(sqlCommand);
    return result;
}
let insertIntoNotification = async (userID,payment) =>{
    let sqlCommand = `SELECT COUNT(*) AS c FROM notification WHERE user_id = ${userID};`;
    let result = await query(sqlCommand);
    let count = result[0].c + 1;
    sqlCommand = `INSERT INTO notification(id, user_id, content) VALUES (${count},${userID}, 'Payment ${payment} Successfull')`;
    result = await query(sqlCommand);
    return result;
}



module.exports = {
    getUserInfo,
    getCurrency,
    updateCurrency,
    paymentDetails,
    insertIntoNotification
}