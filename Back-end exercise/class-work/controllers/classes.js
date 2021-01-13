const { classesRepo } = require("../repositories");
const ctrl = require("express").Router();

ctrl.post("/", function (req, res) {
  // ... insert a class
});

ctrl.get("/", function (req, res) {
  // ... select all classes
});

module.exports = ctrl;