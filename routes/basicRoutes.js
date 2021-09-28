//setting up express and routing app
const express = require("express");
const router = express.Router();

//getting the controllers
const basicController = require("../controllers/basicController.js");

router.get("/", basicController.home);
router.get("/user-profile", basicController.userProfile)
router.get("/user-dashboard", basicController.userDashboard)
router.get("/purchase", basicController.purchase)

module.exports = router;