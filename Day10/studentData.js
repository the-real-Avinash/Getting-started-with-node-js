const mongoose = require("mongoose");

const studentdataSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  age: Number,
  branch: String,
});

const Studentdata = new mongoose.model("Student", studentdataSchema);

module.exports = Studentdata;
