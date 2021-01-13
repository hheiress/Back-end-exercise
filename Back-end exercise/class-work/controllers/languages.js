const { languagesRepo } = require("../repositories");
const ctrl = require("express").Router();

//ENDPOINTS
ctrl.post("/",insertLanguage); //done
ctrl.get("/",getLanguages); //done
ctrl.delete("/:languageId",deleteLanguage);

function insertLanguage (req, res) {
    // ... insert a language into the languages table
  repo
  .create()
  .then(() => res.send("Language inserted!"))
  .catch((err) => {
    console.error(err.stack);
    res.status(500).send("Internal Server Error");
  });
  }
  function getLanguages (req, res) {
    // ... select all languages from the languages table
   repo
    .find()
    .then((result) => res.json(result.rows))
    .catch((err) => {
      console.error(err.message);
      res.status(500).send("Internal Server Error");
    });
  }
  
  function deleteLanguage (req, res) {
    // ... delete a language from the languages table
    const languageId = req.params.languageId;
    pool
      .query("DELETE FROM teachers WHERE language=$1;", [languageId])
      .then(() => {
        pool
          .query("DELETE FROM languages WHERE id=$1;", [languageId])
          .then(() => res.send(`Language ${languageId} deleted!`))
          .catch((err) => {
            console.error(err.stack);
            res.status(500).send("Internal Server Error");
          });
        })
        .catch((err) => {
          console.error(err.stack);
          res.status(500).send("Internal Server Error");
        });
  }
  
module.exports = ctrl;