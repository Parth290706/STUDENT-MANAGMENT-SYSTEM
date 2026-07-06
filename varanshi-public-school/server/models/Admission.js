const pool = require("../config/db");

class Admission {
  // ==========================
  // Get All Admissions
  // ==========================
  static async getAll() {
    const result = await pool.query(
      "SELECT * FROM admissions ORDER BY admission_id DESC"
    );

    return result.rows;
  }

  // ==========================
  // Get Admission By ID
  // ==========================
  static async getById(id) {
    const result = await pool.query(
      "SELECT * FROM admissions WHERE admission_id = $1",
      [id]
    );

    return result.rows[0];
  }

  // ==========================
  // Create Admission
  // ==========================
  static async create(data) {
    const {
      student_name,
      parent_email,
      phone,
      class_name,
      message,
    } = data;

    const result = await pool.query(
      `INSERT INTO admissions
      (
        student_name,
        parent_email,
        phone,
        class_name,
        message
      )
      VALUES($1,$2,$3,$4,$5)
      RETURNING *`,
      [
        student_name,
        parent_email,
        phone,
        class_name,
        message,
      ]
    );

    return result.rows[0];
  }

  // ==========================
  // Update Admission
  // ==========================
  static async update(id, data) {
    const {
      student_name,
      parent_email,
      phone,
      class_name,
      message,
    } = data;

    const result = await pool.query(
      `UPDATE admissions
      SET
        student_name=$1,
        parent_email=$2,
        phone=$3,
        class_name=$4,
        message=$5
      WHERE admission_id=$6
      RETURNING *`,
      [
        student_name,
        parent_email,
        phone,
        class_name,
        message,
        id,
      ]
    );

    return result.rows[0];
  }

  // ==========================
  // Delete Admission
  // ==========================
  static async delete(id) {
    const result = await pool.query(
      "DELETE FROM admissions WHERE admission_id=$1 RETURNING *",
      [id]
    );

    return result.rows[0];
  }
}

module.exports = Admission;