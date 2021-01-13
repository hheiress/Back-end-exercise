const pool = require("../db.js");

function find() {
  return pool.query("SELECT * FROM modules;").then((result) => result.rows);
}

function create(module) {
  // ... create module in db
}

function update(module) {
  // ... update module in db
}

function remove(id) {
  // ... remove module from db
}

module.exports = {
  find: find,
  create: create,
  update: update,
  remove: remove,
};