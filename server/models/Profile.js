// const mongoose = require("mongoose");

// const experienceSchema = new mongoose.Schema(
//   {
//     jobTitle: { type: String },
//     employmentType: { type: String },
//     companyName: { type: String },
//     location: { type: String },
//     startDate: { type: String },
//     endDate: { type: String },
//     currentCTC: { type: Number },
//     expectedCTC: { type: Number },
//     description: { type: String },
//   },
//   { _id: false } // Prevents automatic creation of `_id` for subdocuments
// );

// const profileSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     mobileNumber: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     dob: { type: String },
//     gender: { type: String },
//     country: { type: String },
//     state: { type: String },
//     city: { type: String },
//     experience: [experienceSchema], // Nested experience array
//   },
//   { timestamps: true }
// );

// const Profile = mongoose.model("Profile", profileSchema);
// module.exports = Profile;





// profileSchema.js
const mongoose = require("mongoose");
const experienceSchema = require("./experienceSchema");

const profileSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    dob: { type: String },
    gender: { type: String },
    country: { type: String },
    state: { type: String },
    city: { type: String },
    experience: [experienceSchema], // Use the imported schema
  },
  { timestamps: true }
);

const Profile = mongoose.model("Profile", profileSchema);
module.exports = Profile;
