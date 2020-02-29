var express = require("express");
var burger = require("../models/burger");
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
  module.exports = router;