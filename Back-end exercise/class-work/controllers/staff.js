const { staffRepo } = require("../repositories");
const ctrl = require("express").Router();

ctrl.post("/", function (req, res) {
  // ... insert a staff member
});

ctrl.get("/", function (req, res) {
  // ... select all staff members
});

ctrl.put("/:staffId", function (req, res) {
  // ... update a staff member
});

ctrl.delete("/:staffId", function (req, res) {
  // ... delete a staff member
});

module.exports = ctrl;