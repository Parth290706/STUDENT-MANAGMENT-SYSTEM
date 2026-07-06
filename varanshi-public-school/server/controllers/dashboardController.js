const pool = require("../config/db");

// ======================================
// Dashboard Statistics
// ======================================
const getDashboardStats = async (req, res) => {
  try {

    // Total Students
    const studentResult = await pool.query(
      "SELECT COUNT(*) FROM students"
    );

    // Total Admissions
    const admissionResult = await pool.query(
      "SELECT COUNT(*) FROM admissions"
    );

    // Total Admins
    const adminResult = await pool.query(
      "SELECT COUNT(*) FROM admins"
    );

    // Recent Students
    const recentStudents = await pool.query(
      `SELECT *
       FROM students
       ORDER BY student_id DESC
       LIMIT 5`
    );

    // Recent Admissions
    const recentAdmissions = await pool.query(
      `SELECT *
       FROM admissions
       ORDER BY admission_id DESC
       LIMIT 5`
    );

    res.status(200).json({

      success: true,

      statistics: {

        totalStudents: Number(studentResult.rows[0].count),

        totalAdmissions: Number(admissionResult.rows[0].count),

        totalAdmins: Number(adminResult.rows[0].count)

      },

      recentStudents: recentStudents.rows,

      recentAdmissions: recentAdmissions.rows

    });

  } catch (error) {

    console.error(error);

    res.status(500).json({

      success: false,

      message: "Unable to load dashboard"

    });

  }
};

module.exports = {
  getDashboardStats
};