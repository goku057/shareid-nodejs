let { query } = require("../helpers/db.js");

let createMessage = async (msgId,activeUser,created_with_id) => {
    
    let sqlCommand = `INSERT INTO is_msg_created(msg_id, user_id, created_with_id) VALUES ('${msgId}','${activeUser}','${created_with_id}');`
    let result = await query(sqlCommand);
    return result;
}

module.exports = {
    createMessage
    
}