const pool = require("../config/db");

// ======================================
// Get All Teachers
// ======================================
const getTeachers = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM teachers ORDER BY teacher_id ASC"
    );

    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch teachers",
    });
  }
};

// ======================================
// Get Teacher By ID
// ======================================
const getTeacherById = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      "SELECT * FROM teachers WHERE teacher_id = $1",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Teacher not found",
      });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// ======================================
// Add Teacher
// ======================================
const addTeacher = async (req, res) => {
  const {
    first_name,
    last_name,
    email,
    phone,
    subject,
    qualification,
    experience,
  } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO teachers
      (
        first_name,
        last_name,
        email,
        phone,
        subject,
        qualification,
        experience
      )
      VALUES($1,$2,$3,$4,$5,$6,$7)
      RETURNING *`,
      [
        first_name,
        last_name,
        email,
        phone,
        subject,
        qualification,
        experience,
      ]
    );

    res.status(201).json({
      success: true,
      message: "Teacher added successfully",
      teacher: result.rows[0],
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Unable to add teacher",
    });
  }
};

// ======================================
// Update Teacher
// ======================================
const updateTeacher = async (req, res) => {
  const { id } = req.params;

  const {
    first_name,
    last_name,
    email,
    phone,
    subject,
    qualification,
    experience,
  } = req.body;

  try {
    const result = await pool.query(
      `UPDATE teachers
      SET
      first_name=$1,
      last_name=$2,
      email=$3,
      phone=$4,
      subject=$5,
      qualification=$6,
      experience=$7
      WHERE teacher_id=$8
      RETURNING *`,
      [
        first_name,
        last_name,
        email,
        phone,
        subject,
        qualification,
        experience,
        id,
      ]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Teacher not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Teacher updated successfully",
      teacher: result.rows[0],
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Update failed",
    });
  }
};

// ======================================
// Delete Teacher
// ======================================
const deleteTeacher = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      "DELETE FROM teachers WHERE teacher_id=$1 RETURNING *",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Teacher not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Teacher deleted successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Delete failed",
    });
  }
};

module.exports = {
  getTeachers,
  getTeacherById,
  addTeacher,
  updateTeacher,
  deleteTeacher,
};