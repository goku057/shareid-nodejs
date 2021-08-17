//setting up express and routing app
const express = require("express");
const router = express.Router();


let messageController = require("../controllers/messageController.js")

router.get("/message", messageController.message);
router.post("/message", messageController.messageUser)
router.get("/viewmsguser", messageController.viewUser);
router.get("/message-inbox", messageController.msgInbox);
router.post("/message-inbox", messageController.insertMsg);


module.exports = router;