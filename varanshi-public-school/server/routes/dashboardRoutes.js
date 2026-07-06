const express = require("express");
const router = express.Router();

const {
  getDashboardStats,
} = require("../controllers/dashboardController");

const authMiddleware = require("../middleware/authMiddleware");

// Dashboard Statistics (Protected Route)
router.get("/", authMiddleware, getDashboardStats);

module.exports = router;