var express = require("express");

var router = express.Router();

// Import the model to use its database functions.
var sushi = require("../models/sushi.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
 
});

router.post("/api/burgers", function(req, res) {
 
});

router.put("/api/burgers/:id", function(req, res) {
  
});

// Export routes for server.js to use.
module.exports = router;