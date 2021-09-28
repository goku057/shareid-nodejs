//setting up express and routing app
const express = require("express");
const router = express.Router();

//getting the controllers
const paymentController = require("../controllers/paymentController.js");

router.get("/pay-form", paymentController.showPayForm);
router.get("/payform-info", paymentController.getFormInfo)
router.post("/pay", paymentController.pay);
router.post("/payment", paymentController.payment);


module.exports = router;