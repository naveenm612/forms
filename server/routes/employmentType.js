const express = require("express");
const router = express.Router();
const EmploymentType = require("../models/employeementType");

// POST - Add a new employment type
router.post("/", async (req, res) => {
  try {
    const type = new EmploymentType(req.body);
    const saved = await type.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET - All employment types
router.get("/", async (req, res) => {
  try {
    const types = await EmploymentType.find();
    res.json(types);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
