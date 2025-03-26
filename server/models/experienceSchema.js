const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema(
  {
    jobTitle: { type: String },
    employmentType: { type: String },
    companyName: { type: String },
    location: { type: String },
    startDate: { type: String },
    endDate: { type: String },
    currentCTC: { type: Number },
    expectedCTC: { type: Number },
    description: { type: String },
  },
  { _id: false } // Prevents automatic creation of `_id` for subdocuments
);

module.exports = experienceSchema;
