//setting up express and routing app
const express = require("express");
const router = express.Router();

//getting the authentication controller
const authenticationController = require("../controllers/authenticationController.js");


router.get("/register", authenticationController.register);
router.post("/register", authenticationController.registerUser);


module.exports = router;