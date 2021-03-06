//setting up express and routing app
const express = require("express");
const router = express.Router();

//getting the authentication controller
const dashboardController = require("../../controllers/profileController/dashboardController.js");

router.get("/dashboard", dashboardController.dashboardData);
router.get("/dashboard-data", dashboardController.dashboardAjaxData);




module.exports = router;