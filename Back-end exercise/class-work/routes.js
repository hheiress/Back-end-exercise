const router = require("express").Router();
const {
       attendancesCtrl,
       classesCtrl,
       languagesCtrl,
       modulesCtrl,
       staffCtrl,
       studentsCtrl, 
       teachersCtrl,
    } = require("./controllers");

router
  .use("/attendances", attendancesCtrl)
  .use("/classes", classesCtrl)
  .use("/languages", languagesCtrl)
  .use("/modules", modulesCtrl)
  .use("/staff", staffCtrl)
  .use("/students", studentsCtrl)
  .use("/teachers", teachersCtrl);

module.exports = router;