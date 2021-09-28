let { query } = require("../../helpers/db.js");



let showCurrency = async (activeUser) => {
    let sqlCommand = `SELECT currency FROM user_info WHERE user_id = '${activeUser}';`
    let result = await query(sqlCommand);
    return result;
}
let showEarned = async (activeUser) => {
    let sqlCommand = `SELECT SUM(pay_amount) as earn FROM transaction_history WHERE seller_id = '${activeUser}';`
    let result = await query(sqlCommand);
    return result;
}
let showPaid = async (activeUser) => {
    let sqlCommand = `SELECT SUM(pay_amount) as pay FROM transaction_history WHERE seller_id != '${activeUser}';`
    let result = await query(sqlCommand);
    return result;
}
let showTotalpost = async (activeUser) => {
    let sqlCommand = `SELECT MAX(pid) as totalPost FROM post_details WHERE user_id = '${activeUser}';`
    let result = await query(sqlCommand);
    return result;
}

module.exports = {
    showCurrency,
    showEarned,
    showPaid,
    showTotalpost

    
}