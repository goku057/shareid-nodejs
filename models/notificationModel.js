let { query } = require("../helpers/db.js");

let getNotification = async (userID) =>{
  let sqlCommand = `SELECT * FROM notification WHERE user_id = ${userID};`
  let result = await query(sqlCommand);
  return result;
}

module.exports = {
  getNotification
}