let { query } = require("../helpers/db.js");

let createMsg = async (activeUser,activeMsgCount, userId, userMsgCount) => {
    
    let sqlCommand = `INSERT INTO is_msg_created(msg_id, user_id, created_with_id)
     VALUES ('${activeMsgCount}','${activeUser}','${userId}');`
    let result = await query(sqlCommand);
    // return result;

    sqlCommand = `INSERT INTO is_msg_created(msg_id, user_id, created_with_id)
     VALUES ('${userMsgCount}','${userId}','${activeUser}');`
    result = await query(sqlCommand);
    return result;
}
let getMsgList = async (activeUser) => {
    
    // let sqlCommand = `SELECT imc.msg_id, imc.user_id, created_with_id, user_name, msg,
    //  msg_time FROM is_msg_created AS imc JOIN user_login_info AS uli ON uli.user_id = imc.created_with_id JOIN inbox ON inbox.sender_id 
    // WHERE imc.user_id = ${activeUser};`
    let sqlCommand = `SELECT imc.msg_id, imc.user_id, created_with_id, user_name FROM is_msg_created AS imc JOIN user_login_info AS uli ON uli.user_id = imc.created_with_id 
    WHERE imc.user_id = ${activeUser};`
    let result = await query(sqlCommand);
    return result;
}
let getUserList = async (activeUser) => {
    
    let sqlCommand = `SELECT user_id,user_name, user_email FROM user_login_info WHERE user_id != ${activeUser} && user_id != 1 ;;`
    let result = await query(sqlCommand);
    return result;
}
let getMsg = async (activeUser,msgWithID) => {
    
    let sqlCommand = `SELECT msg_id, sender_id, reciever_id, msg, msg_time FROM inbox WHERE (sender_id = ${activeUser} || sender_id = ${msgWithID}) AND (reciever_id = ${activeUser} || reciever_id = ${msgWithID});`
    let result = await query(sqlCommand);
    return result;
}
let checkIfMsgCreated = async (activeUser,msgWithID) => {
    
    let sqlCommand = `SELECT COUNT(*) AS c FROM is_msg_created WHERE user_id = ${activeUser} AND created_with_id = ${msgWithID};`
    let result = await query(sqlCommand);
    return result;
}
let getCreatedMsgCount = async (activeUser) => {
    
    let sqlCommand = `SELECT COUNT(*) AS c FROM is_msg_created WHERE user_id = ${activeUser};;`
    let result = await query(sqlCommand);
    return result;
}

let getMsgCount = async (activeUser,msgWithID) => {
    
    let sqlCommand = `SELECT COUNT(*) AS c FROM inbox WHERE (sender_id = ${activeUser} OR sender_id = ${msgWithID}) AND (reciever_id = ${activeUser} OR reciever_id = ${msgWithID});`
    let result = await query(sqlCommand);
    return result;
}

let insertMsg = async (msgID, activeUser, msgWithID, msg) => {
    console.log("The id is " + msgWithID)
    let sqlCommand = `INSERT INTO inbox(msg_id, sender_id, reciever_id, msg, msg_time) VALUES ('${msgID}', ${activeUser}, ${msgWithID}, '${msg}', CURRENT_TIMESTAMP);`
    let result = await query(sqlCommand);
    return result;
}

let getUserInfo =async (userID) => {
    
    let sqlCommand = `SELECT user_id, user_name FROM user_login_info WHERE user_id = ${userID};`
    let result = await query(sqlCommand);
    return result;
}

module.exports = {
    createMsg,
    getMsgList,
    getUserList,
    getMsg,
    checkIfMsgCreated,
    getCreatedMsgCount,
    getMsgCount,
    insertMsg,
    getUserInfo
    
}