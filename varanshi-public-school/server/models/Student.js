const pool = require("../config/db");

class Student {
  // ==========================
  // Get All Students
  // ==========================
  static async getAll() {
    const result = await pool.query(
      "SELECT * FROM students ORDER BY student_id ASC"
    );

    return result.rows;
  }

  // ==========================
  // Get Student By ID
  // ==========================
  static async getById(id) {
    const result = await pool.query(
      "SELECT * FROM students WHERE student_id = $1",
      [id]
    );

    return result.rows[0];
  }

  // ==========================
  // Create Student
  // ==========================
  static async create(data) {
    const {
      first_name,
      last_name,
      email,
      phone,
      gender,
      class_name,
    } = data;

    const result = await pool.query(
      `INSERT INTO students
      (
        first_name,
        last_name,
        email,
        phone,
        gender,
        class_name
      )
      VALUES($1,$2,$3,$4,$5,$6)
      RETURNING *`,
      [
        first_name,
        last_name,
        email,
        phone,
        gender,
        class_name,
      ]
    );

    return result.rows[0];
  }

  // ==========================
  // Update Student
  // ==========================
  static async update(id, data) {
    const {
      first_name,
      last_name,
      email,
      phone,
      gender,
      class_name,
    } = data;

    const result = await pool.query(
      `UPDATE students
      SET
        first_name = $1,
        last_name = $2,
        email = $3,
        phone = $4,
        gender = $5,
        class_name = $6
      WHERE student_id = $7
      RETURNING *`,
      [
        first_name,
        last_name,
        email,
        phone,
        gender,
        class_name,
        id,
      ]
    );

    return result.rows[0];
  }

  // ==========================
  // Delete Student
  // ==========================
  static async delete(id) {
    const result = await pool.query(
      "DELETE FROM students WHERE student_id = $1 RETURNING *",
      [id]
    );

    return result.rows[0];
  }

  // ==========================
  // Count Students
  // ==========================
  static async count() {
    const result = await pool.query(
      "SELECT COUNT(*) FROM students"
    );

    return Number(result.rows[0].count);
  }
}

module.exports = Student;