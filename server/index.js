const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

// Import routes
const profileRoutes = require("./routes/profileRoutes");
const authRoutes = require("./routes/auth");
const employmentTypeRoutes = require("./routes/employmentType");
const genderRoutes = require("./routes/gender");

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON bodies

// MongoDB Connection
const mongoURI = process.env.MONGO_URI;
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Database connection error:", err));

// ✅ Add this route to fix "Cannot GET /"
app.get("/", (req, res) => {
  res.send("Naveen's Project running");
});

// API Routes
app.use("/api/profile", profileRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/employment-types", employmentTypeRoutes);
app.use("/api/genders", genderRoutes);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
