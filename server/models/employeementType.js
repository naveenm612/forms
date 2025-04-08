const mongoose = require("mongoose");

const employmentTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    enum: ['Full-Time', 'Part-Time', 'Freelance','Remote','Internship','Contract'],
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("EmploymentType", employmentTypeSchema);
