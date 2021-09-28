// //setting up express and routing app
// const express = require("express");
// const router = express.Router();

// //getting the search input
// const searchController = require("../controllers/searchController.js");

// router.post("/search", searchController.search);

// module.exports = router;

//setting up express and routing app
const express = require("express");
const router = express.Router();

//getting the search
const searchController = require("../controllers/searchController.js");
router.post("/search",searchController.search)

module.exports = router;