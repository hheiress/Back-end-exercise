const { modulesRepo } = require("../repositories");
const ctrl = require("express").Router();

ctrl.post("/", function (req, res) {
  // ... insert a module
});

ctrl.get("/", function (req, res) {
  // ... select all modules
});

ctrl.put("/:moduleId", function (req, res) {
  // ... update a module
});

ctrl.delete("/:moduleId", function (req, res) {
  // ... delete a module
});

module.exports = ctrl;