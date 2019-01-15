var express = require("express");

var router = express.Router();

var db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
 db.Eatsushi.findAll({}).then(function(dbSushi) {
   res.json(dbSushi);
 })
});

router.post("/api/sushi", function(req, res) {
 db.Eatsushi.create(req.body).then(function(dbSushi) {
   res.json(dbSushi);
 })
});

router.put("/api/sushi/:id", function(req, res) {
  db.Eatsushi.update(
    req.body,
    {
      where: {
        id: req.body.id
      }
    }).then(function(dbSushi) {
      res.json(dbSushi);
    })
});

// Export routes for server.js to use.
module.exports = router;