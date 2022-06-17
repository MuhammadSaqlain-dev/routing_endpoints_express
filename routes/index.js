var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Express",
    subTitle: "I am begginer Or I would rather say I am in a learning phase.",
  });
});

module.exports = router;
