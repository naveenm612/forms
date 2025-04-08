const mongoose = require("mongoose");

const genderSchema = new mongoose.Schema({
  name: {
    type: String,
    enum: ['Male', 'Female', 'Trans', 'Others'],
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("Gender", genderSchema);
