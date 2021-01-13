const pool = require("../db.js");

function find() {
  return pool.query("SELECT * FROM attendances;").then((result) => result.rows);
}

function create(attendance) {
  // ... create attendance in db
}

function update(attendance) {
  // ... update attendance in db
}

function remove(id) {
  // ... remove attendance from db
}

module.exports = {
  find: find,
  create: create,
  update: update,
  remove: remove,
};