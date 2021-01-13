const studentsRepo = require("../repositories/students.js");
const ctrl = require("express").Router();

ctrl.get("/", getStudents);//done
ctrl.post("/",postStudent); //done
ctrl.put("/:studentId",updateStudent);
ctrl.delete("/:studentId",deleteStudent);

function getStudents (req, res) {
  studentsRepo //insteed of pool
    .find()// query in another file
    .then((result) => res.json(result))
    .catch((err) => {
      console.error(err.message);
      res.status(500).send("Internal Server Error");
    });
}

function postStudent(req, res) {
    // ... insert a student into the students table
    const studentId = req.params.studentId;
    studentsRepo
    .create()
    .then(() => res.send("Student inserted!"))
    .catch((err) => {
    console.error(err.stack);
    res.status(500).send("Internal Server Error");
  });
}
  
function updateStudent(req, res) {  //check ?
    // ... update a student in the students table
    studentsRepo
        .update()
        .then(() => res.send(`Student ${studentId} updated!`))
        .catch((err) => {
          console.error(err.stack);
          res.status(500).send("Internal Server Error");
        });
}
  
function deleteStudent (req, res) {
    // ... delete a student from the students table
    studentsRepo
          .remove()
          .then(() => res.send(`Student ${studentId} deleted!`))
          .catch((err) => {
            console.error(err.stack);
            res.status(500).send("Internal Server Error");
          });
  }

module.exports = ctrl;