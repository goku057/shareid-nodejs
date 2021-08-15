//setting up express and routing app
const express = require("express");
const router = express.Router();

//getting the controllers
const paymentController = require("../controllers/paymentController.js");

router.get("/pay", paymentController.pay);


module.exports = router;