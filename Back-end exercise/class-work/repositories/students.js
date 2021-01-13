const pool = require("../db.js");

function find() {
  return pool.query("SELECT * FROM students;")
  .then((result) => result.rows);
}

function create(req, res) {
  // ... create student in db
    const studentId = req.params.studentId;
    const name = req.body.name;
    const email = req.body.email;
    const address = req.body.address;
    const phone_number = req.body.phone_number;
    const batch = req.body.batch;
    const status = req.body.status;

    if (!name|| !email || !address || !phone_number || !batch || !status) {
      return res
      .status(400)
      .send("Please provide a name, email, address, phone_number, batch, status.");
  }
  return pool.query(
    `
    INSERT INTO students (name, email, address, phone_number, batch, status)
    VALUES ($1, $2, $3, $4, $5, $6);
    `,
  [name, email, address, phone_number, batch, status]
  )
    .then(() => res.send(`Student ${studentId} updated!`))
}

function update(req, res) {
  // ... update student in db
      const studentId = req.params.studentId;
      const name = req.body.name;
      const email = req.body.email;
      const address = req.body.address;
      const phone_number = req.body.phone_number;
      const batch = req.body.batch;
      const status = req.body.status;
  
      if (!name|| !email || !address || !phone_number || !batch || !status) {
        return res
          .status(400)
          .send("Please provide a name, email, address, phone_number, batch, status.");
      }
     return pool.query(
          "UPDATE students SET name=$1, email=$2, address=$3, phone_number=$4, batch=$4, status=$5 WHERE id=$6",
          [name, email, address, phone_number, batch, status]
        )
 }

function remove(req, res) {
  // ... remove student from db
  const studentId = req.params.studentId;
        pool.query("DELETE FROM students WHERE id=$1;", [studentId])
}

module.exports = {
  find: find,
  create: create,
  update: update,
  remove: remove,
};