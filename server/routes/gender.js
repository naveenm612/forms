const express = require("express");
const router = express.Router();
const Gender = require("../models/gender");

// POST - Add a new gender
router.post("/", async (req, res) => {
  try {
    const gender = new Gender(req.body);
    const saved = await gender.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET - All genders
router.get("/", async (req, res) => {
  try {
    const genders = await Gender.find();
    res.json(genders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
