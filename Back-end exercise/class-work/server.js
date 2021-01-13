const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes.js");

const app = express();
app.use(bodyParser.json());
app.use(routes);

// //students
// // function postStudent(req, res) {
// //   // ... insert a student into the students table
// //     const name = req.body.name;
// //     const email = req.body.email;
// //     const address = req.body.address;
// //     const phone_number = req.body.phone_number;
// //     const batch = req.body.batch;
// //     const status = req.body.status;

// //     if (!name|| !email || !address || !phone_number || !batch || !status) {
// //       return res
// //         .status(400)
// //         .send("Please provide a name, email, address, phone_number, batch, status.");
// //     }
// //   pool 
// //   .query(
// //     `
// //     INSERT INTO students (name, email, address, phone_number, batch, status)
// //     VALUES ($1, $2, $3, $4, $5, $6);
// //     `,
// //   [name, email, address, phone_number, batch, status]
// // )
// // .then(() => res.send("Student inserted!"))
// // .catch((err) => {
// //   console.error(err.stack);
// //   res.status(500).send("Internal Server Error");
// // });
// // }

// function getStudents (req, res) {
//   pool
//     .query("SELECT * FROM students;")
//     .then((result) => res.json(result.rows))
//     .catch((err) => {
//       console.error(err.message);
//       res.status(500).send("Internal Server Error");
//     });
// }

// // function updateStudent(req, res) {  //check ?
// //   // ... update a student in the students table
// //     const studentId = req.params.studentId;
// //     const name = req.body.name;
// //     const email = req.body.email;
// //     const address = req.body.address;
// //     const phone_number = req.body.phone_number;
// //     const batch = req.body.batch;
// //     const status = req.body.status;

// //     if (!name|| !email || !address || !phone_number || !batch || !status) {
// //       return res
// //         .status(400)
// //         .send("Please provide a name, email, address, phone_number, batch, status.");
// //     }
// //     pool
// //       .query(
// //         "UPDATE students SET name=$1, email=$2, address=$3, phone_number=$4, batch=$4, status=$5 WHERE id=$6",
// //         [name, email, address, phone_number, batch, status]
// //       )
// //       .then(() => res.send(`Student ${studentId} updated!`))
// //       .catch((err) => {
// //         console.error(err.stack);
// //         res.status(500).send("Internal Server Error");
// //       });
// // }

// function deleteStudent (req, res) {
//   // ... delete a student from the students table
//   const studentId = req.params.studentId;
//       pool
//         .query("DELETE FROM students WHERE id=$1;", [studentId])
//         .then(() => res.send(`Student ${studentId} deleted!`))
//         .catch((err) => {
//           console.error(err.stack);
//           res.status(500).send("Internal Server Error");
//         });
// }


// //languages
// function insertLanguage (req, res) {
//   // ... insert a language into the languages table
//     const name = req.body.name;

//     if (!name) {
//       return res
//         .status(400)
//         .send("Please provide a name!");
//     }
//   pool 
//   .query(
//     `
//     INSERT INTO languages (name)
//     VALUES ($1);
//     `,
//   [name]
// )
// .then(() => res.send("Language inserted!"))
// .catch((err) => {
//   console.error(err.stack);
//   res.status(500).send("Internal Server Error");
// });
// }
// function getLanguages (req, res) {
//   // ... select all languages from the languages table
//   pool
//   .query("SELECT * FROM languages;")
//   .then((result) => res.json(result.rows))
//   .catch((err) => {
//     console.error(err.message);
//     res.status(500).send("Internal Server Error");
//   });
// }

// function deleteLanguage (req, res) {
//   // ... delete a language from the languages table
//   const languageId = req.params.languageId;
//   pool
//     .query("DELETE FROM teachers WHERE language=$1;", [languageId])
//     .then(() => {
//       pool
//         .query("DELETE FROM languages WHERE id=$1;", [languageId])
//         .then(() => res.send(`Language ${languageId} deleted!`))
//         .catch((err) => {
//           console.error(err.stack);
//           res.status(500).send("Internal Server Error");
//         });
//       })
//       .catch((err) => {
//         console.error(err.stack);
//         res.status(500).send("Internal Server Error");
//       });
// }


// //teachers
// function insertTeacher (req, res) {
//   // ... insert a teacher into the teachers table
//   const name = req.body.name;
//   const email = req.body.email;
//   const country = req.body.country;
//   const language = req.body.language; // make search language by id (?)
//   //const languageId = req.params.languageId;
//   if (!name|| !email || !country || !language ) {
//     return res
//       .status(400)
//       .send("Please provide a name, email, country, language.");
//   }
// pool 
// .query(
//   `
//   INSERT INTO teachers (name, email, country, language)
//   VALUES ($1, $2, $3, $4);
//   `,
// [name, email, country, language]
// )
// .then(() => res.send("Teacher inserted!"))
// .catch((err) => {
// console.error(err.stack);
// res.status(500).send("Internal Server Error");
// });
// // pool
//   // .query(
//   //   `
//   //     SELECT l.name
//   //     FROM languages l
//   //     JOIN teachers t ON t.language = l.name
//   //     WHERE language=$1;
//   // `,
//   //   [languageId]
//   // )
//   // .then((result) => res.json(result.rows))
//   // .catch((err) => {
//   //   console.error(err.message);
//   //   res.status(500).send("Internal Server Error 2");
//   // });
// }

// function getTeachers(req, res) {
//   // ... select all teachers from the teachers table
//   pool
//   .query("SELECT * FROM teachers;")
//   .then((result) => res.json(result.rows))
//   .catch((err) => {
//     console.error(err.message);
//     res.status(500).send("Internal Server Error");
//   });
  
// }

// function updateTeacher(req, res) {
//   // ... update a teacher in the teachers table
// }

// function deleteTeacher(req, res) {
//   // ... delete a teacher from the teachers table
//   const teacherId = req.params.teacherId;
//       pool
//         .query("DELETE FROM teachers WHERE id=$1;", [teacherId])
//         .then(() => res.send(`Teacher ${teacherId} deleted!`))
//         .catch((err) => {
//           console.error(err.stack);
//           res.status(500).send("Internal Server Error");
//         });
// }


// //staff members
// function insertStaffMember(req, res) {
//   // ... insert a staff member into the staff table
//     const name = req.body.name;
//     const email = req.body.email;
//     const address = req.body.address;
//     const years =req.body.years;
//     const bank_account= req.body.bank_account;
//     const phone_number = req.body.phone_number;
//     const position = req.body.position;
//     const language = req.body.language; // make search language by id (?)

//     if (!name|| !email || !address || !years || !bank_account || !phone_number || !position || !language) {
//       return res
//         .status(400)
//         .send("Please provide a name, email, address, years, bank_account, phone_number, position, language.");
//     }
//   pool 
//   .query(
//     `
//     INSERT INTO staff (name, email, address, years, bank_account, phone_number, position, language)
//     VALUES ($1, $2, $3, $4, $5, $6, $7, $8);
//     `,
//   [name, email, address, years, bank_account, phone_number, position, language]
// )
// .then(() => res.send("Staff member inserted!"))
// .catch((err) => {
//   console.error(err.stack);
//   res.status(500).send("Internal Server Error");
// });
// }

// function getStaff (req, res) {
//   // ... select all staff members from the staff table
//   pool
//   .query("SELECT * FROM staff;")
//   .then((result) => res.json(result.rows))
//   .catch((err) => {
//     console.error(err.message);
//     res.status(500).send("Internal Server Error");
//   });
// }

// function updateStaff (req, res) {
//   // ... update a staff member in the staff table
// }

// function deleteStaff(req, res) {
//   // ... delete a staff member from the staff table
//   const staffId = req.params.staffId;
//       pool
//       .query("DELETE FROM staff WHERE id=$1;", [staffId])
//       .then(() => res.send(`Staff member ${staffId} deleted!`))
//       .catch((err) => {
//         console.error(err.stack);
//         res.status(500).send("Internal Server Error");
//       });
// }


// //modules
// function insertModules (req, res) {
//   // ... insert a module into the modules table
//   const name = req.body.name;
//   const language =req.body.language;
//     if (!name || !language ) {
//       return res
//         .status(400)
//         .send("Please provide a name of modul and language!");
//     }
//   pool 
//   .query(
//     `
//     INSERT INTO modules (name, language)
//     VALUES ($1, $2);
//     `,
//   [name, language]
// )
// .then(() => res.send("Modul inserted!"))
// .catch((err) => {
//   console.error(err.stack);
//   res.status(500).send("Internal Server Error");
// });
// }

// function getModules(req, res) {
//   // ... select all modules from the modules table
//   pool
//   .query("SELECT * FROM modules;")
//   .then((result) => res.json(result.rows))
//   .catch((err) => {
//     console.error(err.message);
//     res.status(500).send("Internal Server Error");
//   });
// }

// function updateModule (req, res) {
//   // ... update a module in the modules table
// }

// function deleteModule(req, res) {
//   // ... delete a module from the modules table
//   const moduleId = req.params.moduleId;
//       pool
//       .query("DELETE FROM modules WHERE id=$1;", [moduleId])
//       .then(() => res.send(`Module ${moduleId} deleted!`))
//       .catch((err) => {
//         console.error(err.stack);
//         res.status(500).send("Internal Server Error");
//       });
// }



// //classes
// function insertClass(req, res) {
//   // ... insert a class into the classes table
//   const datetime = req.body.datetime;
//   const topic = req.body.topic;
//   const teacher =req.body.teacher;

//     if (!datetime || !topic || !teacher) {
//       return res
//         .status(400)
//         .send("Please provide a datetime, topic and teacher!");
//     }
//   pool 
//   .query(
//     `
//     INSERT INTO classes (datetime, topic, teacher)
//     VALUES ($1, $2, $3);
//     `,
//   [datetime, topic, teacher]
// )
// .then(() => res.send("Class inserted!"))
// .catch((err) => {
//   console.error(err.stack);
//   res.status(500).send("Internal Server Error");
// });
// }

// function getClasses (req, res) {
//   // ... select all classes from the classes table
//   pool
//   .query("SELECT * FROM classes;")
//   .then((result) => res.json(result.rows))
//   .catch((err) => {
//     console.error(err.message);
//     res.status(500).send("Internal Server Error");
//   });
// }


// //attendances
// function postAttendances(req, res) {
//   // ... record a student's attendance of a class in the attendances table
//   const student_id = req.body.student_id;
//   const class_id = req.body.class_id;

//     if (!student_id || !class_id) {
//       return res
//         .status(400)
//         .send("Please provide a student and class!");
//     }
//   pool 
//   .query(
//     `
//     INSERT INTO attendances (student_id, class_id)
//     VALUES ($1, $2);
//     `,
//   [student_id, class_id]
// )
// .then(() => res.send("Attendance inserted!"))
// .catch((err) => {
//   console.error(err.stack);
//   res.status(500).send("Internal Server Error");
// });
// }

// function getAttendances (req, res) {
//   // ... select all attendances from the attendances table
//   pool
//   .query("SELECT * FROM attendances;")
//   .then((result) => res.json(result.rows))
//   .catch((err) => {
//     console.error(err.message);
//     res.status(500).send("Internal Server Error");
//   });
// }

// //ENDPOINTS 

// //students
// // app.get("/students", getStudents);//done
// // app.post("/students",postStudent); //done
// // app.put("/students/:studentId",updateStudent);
// // app.delete("/students/:studentId",deleteStudent); //done

// //languages
// app.post("/languages",insertLanguage); //done
// app.get("/languages",getLanguages); //done
// app.delete("/languages/:languageId",deleteLanguage);//done

// //teachers
// app.post("/teachers",insertTeacher);//done
// app.get("/teachers",getTeachers);//done
// app.put("/teachers/:teacherId",updateTeacher);
// app.delete("/teachers/:teacherId",deleteTeacher);//done

// //staff
// app.post("/staff",insertStaffMember);//done
// app.get("/staff",getStaff);//done
// app.put("/staffs/:staffId",updateStaff);
// app.delete("/staffs/:staffId",deleteStaff);//done

// //modules
// app.post("/modules",insertModules);//done
// app.get("/modules",getModules);//done
// app.put("/modules/:moduleId",updateModule);
// app.delete("/modules/:moduleId",deleteModule);//done

// //classes
// app.post("/classes",insertClass);//done
// app.get("/classes",getClasses);//done

// //attendances
// app.post("/attendances",postAttendances);
// app.get("/attendances",getAttendances);//done


app.listen(3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});