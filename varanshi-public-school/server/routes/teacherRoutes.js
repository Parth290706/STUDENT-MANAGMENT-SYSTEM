const express = require("express");
const router = express.Router();

const {
  getTeachers,
  getTeacherById,
  addTeacher,
  updateTeacher,
  deleteTeacher,
} = require("../controllers/teacherController");

// Get All Teachers
router.get("/", getTeachers);

// Get Teacher By ID
router.get("/:id", getTeacherById);

// Add Teacher
router.post("/", addTeacher);

// Update Teacher
router.put("/:id", updateTeacher);

// Delete Teacher
router.delete("/:id", deleteTeacher);

module.exports = router;