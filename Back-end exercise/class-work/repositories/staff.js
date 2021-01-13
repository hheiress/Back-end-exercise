const pool = require("../db.js");

function find() {
  return pool.query("SELECT * FROM staff;").then((result) => result.rows);
}

function create(staffMember) {
  // ... create staff member in db
}

function update(staffMember) {
  // ... update staff member in db
}

function remove(id) {
  // ... remove staff member from db
}

module.exports = {
  find: find,
  create: create,
  update: update,
  remove: remove,
};