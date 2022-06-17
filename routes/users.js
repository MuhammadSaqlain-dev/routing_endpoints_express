var express = require("express");
var router = express.Router();
const connection = require("../db_config");

/* GET users comments listing. */
router.get("/comments", function (req, res, next) {
  connection.query("SELECT * FROM `comments`", (err, result) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else res.send(result);
  });
});

router.get("/comment/:id", function (req, res, next) {
  var getCommentQ = "SELECT * FROM `comments` WHERE `cid` = " + req.params.id;
  connection.query(getCommentQ, (err, result) => {
    if (err) {
      console.log(err);
      res.send("Unable to getthe comments");
    } else res.send(result);
  });
});

module.exports = router;
