const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("Backend is working with Expo!");
});

// Login Route
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // For now, hardcoded login validation
  if (username === "testuser" && password === "12345") {
    res.json({ message: "Login successful", user: { username } });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
