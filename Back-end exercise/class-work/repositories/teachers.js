const pool = require("../db.js");

function find() {
  return pool.query("SELECT * FROM teachers;").then((result) => result.rows);
}

function create(teacher) {
  // ... create teacher in db
}

function update(teacher) {
  // ... update teacher in db
}

function remove(id) {
  // ... remove teacher from db
}

module.exports = {
  find: find,
  create: create,
  update: update,
  remove: remove,
};