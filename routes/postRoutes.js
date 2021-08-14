//setting up express and routing app
const express = require("express");
const router = express.Router();

//getting the createpost
const createpost = require("../controllers/postController.js");

router.get("/createpost", createpost.createpost);
router.post("/createpost",createpost.createpostUser)

module.exports = router;