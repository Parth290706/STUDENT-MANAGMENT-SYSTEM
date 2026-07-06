const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

// Load Environment Variables
dotenv.config();

// Database Connection
require("./config/db");

// Import Routes
const authRoutes = require("./routes/authRoutes");
const studentRoutes = require("./routes/studentRoutes");
const teacherRoutes = require("./routes/teacherRoutes");
const admissionRoutes = require("./routes/admissionRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const app = express();

// ==============================
// Middleware
// ==============================

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// ==============================
// Static Folder
// ==============================

app.use(
  "/uploads",
  express.static(path.join(__dirname, "uploads"))
);

// ==============================
// API Routes
// ==============================

app.use("/api/auth", authRoutes);

app.use("/api/students", studentRoutes);

app.use("/api/teachers", teacherRoutes);

app.use("/api/admissions", admissionRoutes);

app.use("/api/dashboard", dashboardRoutes);

app.use("/api/contacts", require("./routes/contactRoutes"));

// ==============================
// Home Route
// ==============================

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🎉 Student Management System API is Running Successfully"
  });
});

// ==============================
// 404 Route
// ==============================

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found"
  });
});

// ==============================
// Global Error Handler
// ==============================

app.use((err, req, res, next) => {

  console.error(err);

  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error"
  });

});

// ==============================
// Start Server
// ==============================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("======================================");
  console.log(`🚀 Server Running on Port ${PORT}`);
  console.log(`🌐 http://localhost:${PORT}`);
  console.log("======================================");
});