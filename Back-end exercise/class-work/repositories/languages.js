const pool = require("../db.js");

function find() {
  return pool.query("SELECT * FROM languages;").then((result) => result.rows);
}

function create(req, res) {
  // ... create language in db
  const name = req.body.name;
  if (!name) {
    return res
      .status(400)
      .send("Please provide a name!");
  }
return pool.query(
  `
  INSERT INTO languages (name)
  VALUES ($1);
  `,
[name]
)
.then(() => res.send("Language inserted!"))
}

function update(language) {
  // ... update language in db
}

function remove(id) {
  // ... remove language from db
}

module.exports = {
  find: find,
  create: create,
  update: update,
  remove: remove,
};