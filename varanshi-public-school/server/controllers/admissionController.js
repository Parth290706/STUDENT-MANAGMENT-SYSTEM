const pool = require("../config/db");

// ======================================
// Get All Admission Enquiries
// ======================================
const getAdmissions = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM admissions ORDER BY admission_id DESC"
    );

    res.status(200).json({
      success: true,
      data: result.rows,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Unable to fetch admission enquiries",
    });
  }
};

// ======================================
// Get Admission By ID
// ======================================
const getAdmissionById = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      "SELECT * FROM admissions WHERE admission_id = $1",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Admission enquiry not found",
      });
    }

    res.status(200).json({
      success: true,
      data: result.rows[0],
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// ======================================
// Create Admission Enquiry
// ======================================
const createAdmission = async (req, res) => {
  const {
    student_name,
    parent_email,
    parent_phone,
    class_applied,
    message,
  } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO admissions
      (
        student_name,
        parent_email,
        parent_phone,
        class_applied,
        message
      )
      VALUES($1,$2,$3,$4,$5)
      RETURNING *`,
      [
        student_name,
        parent_email,
        parent_phone,
        class_applied,
        message,
      ]
    );

    res.status(201).json({
      success: true,
      message: "Admission enquiry submitted successfully",
      data: result.rows[0],
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to submit admission enquiry",
      error: error.message,
    });
  }
};

// ======================================
// Update Admission Enquiry
// ======================================
const updateAdmission = async (req, res) => {
  const { id } = req.params;

  const {
    student_name,
    parent_email,
    parent_phone,
    class_applied,
    message,
  } = req.body;

  try {
    const result = await pool.query(
      `UPDATE admissions
      SET
        student_name = $1,
        parent_email = $2,
        parent_phone = $3,
        class_applied = $4,
        message = $5
      WHERE admission_id = $6
      RETURNING *`,
      [
        student_name,
        parent_email,
        parent_phone,
        class_applied,
        message,
        id,
      ]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Admission enquiry not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Admission enquiry updated successfully",
      data: result.rows[0],
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Update failed",
      error: error.message,
    });
  }
};

// ======================================
// Delete Admission Enquiry
// ======================================
const deleteAdmission = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      "DELETE FROM admissions WHERE admission_id = $1 RETURNING *",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Admission enquiry not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Admission enquiry deleted successfully",
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Delete failed",
      error: error.message,
    });
  }
};

module.exports = {
  getAdmissions,
  getAdmissionById,
  createAdmission,
  updateAdmission,
  deleteAdmission,
};