var express = require("express");
var router = express.Router();
var studentsModel = require("../model/students.model");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("These are students resources");
});

// Create/ POST
router.post("/add", (req, res) => {
  // Dynamic Data Posting
  const newStudent = new studentsModel({
    firstName: req.body.fName,
    lastName: req.body.lName,
    age: req.body.age,
    dob: req.body.dob,
    department: req.body.depart,
  });

  newStudent.save((err, newStudent) => {
    if (err) res.send(err);
    else
      res.send({
        status: 200,
        message: "Saved SuccessFully",
        savedStudent: newStudent,
      });
  });
});

// Read/ GET
router.get("/list", (req, res) => {
  // QueryParameter
  let id = req.query.id;
  studentsModel.findById({ id }, (err, resp) => {
    if (err) res.send(err);
    else
      res.send({
        status: 200,
        length: res.length,
        studentList: resp,
      });
  });
});

// Update/ PUT
router.put("/update", (req, res) => {
  var id = req.query.id;
  studentsModel.findByIdAndUpdate(
    { _id: id },
    { firstName: "Ali", department: "CSE" },
    (err, response) => {
      if (err) res.send(err);
      else
        res.send({
          status: 200,
          studentList: response,
        });
    }
  );
});

router.delete("/delete", (req, res) => {
  // QueryParameter
  let fName = req.query.fName;
  studentsModel.deleteOne({ firstName: fName }, (err, resp) => {
    if (err) res.send(err);
    else
      res.send({
        status: 200,
        studentList: resp,
      });
  });
});

module.exports = router;
