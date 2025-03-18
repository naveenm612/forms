const express = require("express");
const Profile = require("../models/Profile");

const router = express.Router();

// Create Profile
router.post("/", async (req, res) => {
  try {
    const { email, name, mobileNumber, experience } = req.body;

    // Validation
    if (!email || !name || !mobileNumber) {
      return res.status(400).json({ error: "Email, Name, and Mobile Number are required." });
    }

    const profile = new Profile({
      ...req.body,
      experience: experience || [], // Ensure experience is always an array
    });
    await profile.save();
    res.status(201).json({ message: "Profile created successfully!", profile });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update Profile
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProfile = await Profile.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true, runValidators: true }
    );

    if (!updatedProfile) {
      return res.status(404).json({ error: "Profile not found." });
    }

    res.status(200).json({ message: "Profile updated successfully!", updatedProfile });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get Last Updated Profile
router.get("/", async (req, res) => {
  try {
    const lastUpdatedProfile = await Profile.findOne().sort({ updatedAt: -1 });

    if (!lastUpdatedProfile) {
      return res.status(404).json({ error: "No profiles found." });
    }

    res.status(200).json(lastUpdatedProfile);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get Profile by ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const profile = await Profile.findById(id);

    if (!profile) {
      return res.status(404).json({ error: "Profile not found." });
    }

    res.status(200).json(profile);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
