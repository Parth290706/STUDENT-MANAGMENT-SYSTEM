const pool = require("../config/db");

class User {
  // ==========================
  // Get All Users
  // ==========================
  static async getAll() {
    const result = await pool.query(
      "SELECT user_id, name, email, role, created_at FROM users ORDER BY user_id ASC"
    );

    return result.rows;
  }

  // ==========================
  // Get User By ID
  // ==========================
  static async getById(id) {
    const result = await pool.query(
      "SELECT user_id, name, email, role, created_at FROM users WHERE user_id = $1",
      [id]
    );

    return result.rows[0];
  }

  // ==========================
  // Get User By Email
  // ==========================
  static async getByEmail(email) {
    const result = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    return result.rows[0];
  }

  // ==========================
  // Get User By Student ID
  // ==========================
  static async getByStudentId(studentId) {
    const result = await pool.query(
      "SELECT * FROM users WHERE student_id = $1",
      [studentId]
    );

    return result.rows[0];
  }

  // ==========================
  // Create User
  // ==========================
  static async create(data) {
    const {
      name,
      email,
      password,
      role,
      student_id,
    } = data;

    const result = await pool.query(
      `INSERT INTO users
      (
        name,
        email,
        password,
        role,
        student_id
      )
      VALUES($1,$2,$3,$4,$5)
      RETURNING user_id, name, email, role, student_id`,
      [
        name,
        email,
        password,
        role,
        student_id,
      ]
    );

    return result.rows[0];
  }

  // ==========================
  // Update User
  // ==========================
  static async update(id, data) {
    const {
      name,
      email,
      role,
      student_id,
    } = data;

    const result = await pool.query(
      `UPDATE users
      SET
        name = $1,
        email = $2,
        role = $3,
        student_id = $4
      WHERE user_id = $5
      RETURNING user_id, name, email, role, student_id`,
      [
        name,
        email,
        role,
        student_id,
        id,
      ]
    );

    return result.rows[0];
  }

  // ==========================
  // Update Password
  // ==========================
  static async updatePassword(id, password) {
    const result = await pool.query(
      `UPDATE users
      SET password = $1
      WHERE user_id = $2
      RETURNING user_id`,
      [
        password,
        id,
      ]
    );

    return result.rows[0];
  }

  // ==========================
  // Delete User
  // ==========================
  static async delete(id) {
    const result = await pool.query(
      "DELETE FROM users WHERE user_id = $1 RETURNING user_id",
      [id]
    );

    return result.rows[0];
  }

  // ==========================
  // Count Users
  // ==========================
  static async count() {
    const result = await pool.query(
      "SELECT COUNT(*) FROM users"
    );

    return Number(result.rows[0].count);
  }
}

module.exports = User;