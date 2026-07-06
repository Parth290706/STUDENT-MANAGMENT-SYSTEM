const pool = require("../config/db");

// =============================
// Get All Students
// =============================
const getStudents = async (req, res) => {
  try {

    const result = await pool.query(
      "SELECT * FROM students ORDER BY student_id ASC"
    );

    res.status(200).json(result.rows);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch students"
    });

  }
};

// =============================
// Get Student By ID
// =============================
const getStudentById = async (req, res) => {

  const { id } = req.params;

  try {

    const result = await pool.query(
      "SELECT * FROM students WHERE student_id = $1",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Student not found"
      });
    }

    res.status(200).json(result.rows[0]);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error"
    });

  }

};

// =============================
// Add New Student
// =============================
const addStudent = async (req, res) => {

  const {
    first_name,
    last_name,
    email,
    phone,
    gender,
    class_name
  } = req.body;

  try {

    const result = await pool.query(

      `INSERT INTO students
      (first_name,last_name,email,phone,gender,class_name)

      VALUES($1,$2,$3,$4,$5,$6)

      RETURNING *`,

      [
        first_name,
        last_name,
        email,
        phone,
        gender,
        class_name
      ]

    );

    res.status(201).json({

      success: true,

      message: "Student Added Successfully",

      student: result.rows[0]

    });

  } catch (error) {

    console.error(error);

    res.status(500).json({

      success: false,

      message: "Unable to Add Student"

    });

  }

};

// =============================
// Update Student
// =============================
const updateStudent = async (req, res) => {

  const { id } = req.params;

  const {
    first_name,
    last_name,
    email,
    phone,
    gender,
    class_name
  } = req.body;

  try {

    const result = await pool.query(

      `UPDATE students

      SET

      first_name=$1,
      last_name=$2,
      email=$3,
      phone=$4,
      gender=$5,
      class_name=$6

      WHERE student_id=$7

      RETURNING *`,

      [
        first_name,
        last_name,
        email,
        phone,
        gender,
        class_name,
        id
      ]

    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Student not found"
      });
    }

    res.status(200).json({

      success: true,

      message: "Student Updated",

      student: result.rows[0]

    });

  } catch (error) {

    console.error(error);

    res.status(500).json({

      success: false,

      message: "Update Failed"

    });

  }

};

// =============================
// Delete Student
// =============================
const deleteStudent = async (req, res) => {

  const { id } = req.params;

  try {

    const result = await pool.query(

      "DELETE FROM students WHERE student_id=$1 RETURNING *",

      [id]

    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Student not found"
      });
    }

    res.status(200).json({

      success: true,

      message: "Student Deleted"

    });

  } catch (error) {

    console.error(error);

    res.status(500).json({

      success: false,

      message: "Delete Failed"

    });

  }

};

module.exports = {
  getStudents,
  getStudentById,
  addStudent,
  updateStudent,
  deleteStudent
};