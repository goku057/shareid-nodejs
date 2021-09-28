//setting up express and routing app
const express = require("express");
const router = express.Router();

//getting the authentication controller
const accountInfoController = require("../../controllers/profileController/accountInfoController.js");


router.get("/account-info", accountInfoController.accountInfo);
router.post("/account-info", accountInfoController.info);
router.get("/account-info", accountInfoController.showInfo)

module.exports = router;