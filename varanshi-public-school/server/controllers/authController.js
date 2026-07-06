const pool = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// ======================================
// Admin Login
// ======================================
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query(
      "SELECT * FROM admins WHERE admin_email = $1",
      [email]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Admin not found",
      });
    }

    const admin = result.rows[0];

    const isMatch = await bcrypt.compare(
      password,
      admin.admin_password
    );

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid Password",
      });
    }

    const token = jwt.sign(
      {
        id: admin.admin_id,
        email: admin.admin_email,
        role: "admin",
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    res.status(200).json({
      success: true,
      message: "Admin Login Successful",
      token,
      admin: {
        id: admin.admin_id,
        name: admin.admin_name,
        email: admin.admin_email,
      },
    });

  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// ======================================
// Student Login
// ======================================
const studentLogin = async (req, res) => {

  const { studentId, password } = req.body;

  try {

    const result = await pool.query(
      "SELECT * FROM students WHERE student_id = $1",
      [studentId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Student Not Found",
      });
    }

    const student = result.rows[0];

    const isMatch = await bcrypt.compare(
      password,
      student.password
    );

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid Password",
      });
    }

    const token = jwt.sign(
      {
        id: student.student_id,
        role: "student",
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    res.status(200).json({
      success: true,
      message: "Student Login Successful",
      token,
      student: {
        id: student.student_id,
        name: `${student.first_name} ${student.last_name}`,
        class: student.class_name,
      },
    });

  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// ======================================
// Register Admin
// ======================================
const register = async (req, res) => {

  const { name, email, password, phone } = req.body;

  try {

    const check = await pool.query(
      "SELECT * FROM admins WHERE admin_email = $1",
      [email]
    );

    if (check.rows.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await pool.query(
      `INSERT INTO admins
      (
        admin_name,
        admin_email,
        admin_password,
        phone
      )
      VALUES($1,$2,$3,$4)
      RETURNING admin_id,admin_name,admin_email,phone`,
      [
        name,
        email,
        hashedPassword,
        phone || null,
      ]
    );

    res.status(201).json({
      success: true,
      message: "Admin Registered Successfully",
      admin: result.rows[0],
    });

  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: "Registration Failed",
    });
  }
};

// ======================================
// Get Logged In Admin
// ======================================
const getProfile = async (req, res) => {

  try {

    const result = await pool.query(
      `SELECT
        admin_id,
        admin_name,
        admin_email,
        phone,
        created_at
      FROM admins
      WHERE admin_id = $1`,
      [req.user.id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Admin not found",
      });
    }

    res.status(200).json({
      success: true,
      admin: result.rows[0],
    });

  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  login,
  studentLogin,
  register,
  getProfile,
};