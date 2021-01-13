const { teachersRepo } = require("../repositories");
const ctrl = require("express").Router();

ctrl.post("/", function (req, res) {
  // ... insert a teacher
});

ctrl.get("/", function (req, res) {
  // ... select all teachers
});

ctrl.put("/:teacherId", function (req, res) {
  // ... update a teacher
});

ctrl.delete("/:teacherId", function (req, res) {
  // ... delete a teacher
});

module.exports = ctrl;