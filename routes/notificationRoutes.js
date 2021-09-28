const express = require("express");
const router = express.Router();

//getting the notification
const notificationController = require("../controllers/notificationController.js");
router.get("/notification",notificationController.getNotification);

module.exports = router;