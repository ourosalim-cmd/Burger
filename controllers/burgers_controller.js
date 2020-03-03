var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();


//console.log("Making controles");
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      //console.log("Printing from controler: " + hbsObject);
      //res.send(hbsObject)// res.send
      res.render("index", hbsObject);
    });
  });
 
  router.post("/api/burgers", function(req, res) {
    //var burger = require("../models/burger.js");
    burger.create([
      "burger_name", "devoured"
    ], [
      req.body.burger_name, req.body.devoured
    ], function(result) {
      // Send back the ID of the new quote
      //res.json({ id: result.insertId });
      console.log("New Poste " + result)
      res.json({ id: result.insertId });
      //res.json(result);
    });
///////////////////////////
router.put("/api/burgers/:id", function(req, res) {
  console.log("id = " + req.params.id);
  var condition = "id = " + req.params.id;
  //var condition = req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: req.body.devoured//replaced body. with params.
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      //res.status(200).end();
      res.render("index", result.changedRows);
    }
  });
});
});
  module.exports = router;