const pool = require("../db.js");

function find() {
  return pool.query("SELECT * FROM classes;").then((result) => result.rows);
}

function create(mcClass) {
  // ... create mcClass in db
}

function update(mcClass) {
  // ... update mcClass in db
}

function remove(id) {
  // ... remove mcClass from db
}

module.exports = {
  find: find,
  create: create,
  update: update,
  remove: remove,
};