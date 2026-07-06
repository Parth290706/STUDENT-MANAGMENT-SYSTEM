const pool = require("../config/db");

// =============================
// Get All Contacts
// =============================
const getContacts = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM contacts ORDER BY contact_id DESC"
    );

    res.status(200).json({
      success: true,
      data: result.rows,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Unable to fetch contacts",
    });
  }
};

// =============================
// Create Contact
// =============================
const createContact = async (req, res) => {

  const {
    full_name,
    email,
    phone,
    subject,
    message,
  } = req.body;

  try {

    const result = await pool.query(

      `INSERT INTO contacts
      (
        full_name,
        email,
        phone,
        subject,
        message
      )

      VALUES($1,$2,$3,$4,$5)

      RETURNING *`,

      [
        full_name,
        email,
        phone,
        subject,
        message,
      ]

    );

    res.status(201).json({

      success: true,

      message: "Message sent successfully.",

      data: result.rows[0],

    });

  } catch (error) {

    console.error(error);

    res.status(500).json({

      success: false,

      message: "Failed to send message.",

    });

  }

};

// =============================
// Delete Contact
// =============================
const deleteContact = async (req, res) => {

  try {

    const result = await pool.query(

      "DELETE FROM contacts WHERE contact_id=$1 RETURNING *",

      [req.params.id]

    );

    if (result.rows.length === 0) {

      return res.status(404).json({
        success: false,
        message: "Message not found",
      });

    }

    res.json({
      success: true,
      message: "Message deleted successfully",
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
  getContacts,
  createContact,
  deleteContact,
};