var mongoose = require("mongoose");

// Schema
var studentsSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number,
  dob: String,
  department: String,
});

// Model
var StudentModel = mongoose.model("Student", studentsSchema);

module.exports = StudentModel;
