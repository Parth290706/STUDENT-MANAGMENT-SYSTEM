const pool = require("../config/db");

class Teacher {
  // ==========================
  // Get All Teachers
  // ==========================
  static async getAll() {
    const result = await pool.query(
      "SELECT * FROM teachers ORDER BY teacher_id ASC"
    );

    return result.rows;
  }

  // ==========================
  // Get Teacher By ID
  // ==========================
  static async getById(id) {
    const result = await pool.query(
      "SELECT * FROM teachers WHERE teacher_id = $1",
      [id]
    );

    return result.rows[0];
  }

  // ==========================
  // Create Teacher
  // ==========================
  static async create(data) {
    const {
      first_name,
      last_name,
      email,
      phone,
      subject,
      qualification,
      experience,
    } = data;

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

    return result.rows[0];
  }

  // ==========================
  // Update Teacher
  // ==========================
  static async update(id, data) {
    const {
      first_name,
      last_name,
      email,
      phone,
      subject,
      qualification,
      experience,
    } = data;

    const result = await pool.query(
      `UPDATE teachers
      SET
        first_name = $1,
        last_name = $2,
        email = $3,
        phone = $4,
        subject = $5,
        qualification = $6,
        experience = $7
      WHERE teacher_id = $8
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

    return result.rows[0];
  }

  // ==========================
  // Delete Teacher
  // ==========================
  static async delete(id) {
    const result = await pool.query(
      "DELETE FROM teachers WHERE teacher_id = $1 RETURNING *",
      [id]
    );

    return result.rows[0];
  }

  // ==========================
  // Count Teachers
  // ==========================
  static async count() {
    const result = await pool.query(
      "SELECT COUNT(*) FROM teachers"
    );

    return Number(result.rows[0].count);
  }
}

module.exports = Teacher;