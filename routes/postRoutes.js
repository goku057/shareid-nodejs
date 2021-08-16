//setting up express and routing app
const express = require("express");
const router = express.Router();

//getting the createpost
const postController = require("../controllers/postController.js");

router.get("/createpost", postController.createpost);
router.post("/createpost",postController.createpostUser)

router.get("/latest-posts", postController.showLatestPost)
module.exports = router;