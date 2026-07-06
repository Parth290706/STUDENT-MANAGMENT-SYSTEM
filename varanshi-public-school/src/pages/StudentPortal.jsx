import { useState } from "react";
import "./StudentPortal.css";
import { FaUserGraduate } from "react-icons/fa";
import API from "../api/axios";

const StudentPortal = () => {
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/student-login", {
        studentId,
        password,
      });

      alert(res.data.message);

      localStorage.setItem("token", res.data.token);
    } catch (err) {
      alert(err.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="portal">
      <section className="page-banner">
        <h1>Student Portal</h1>
        <p>Access Your Academic Information</p>
      </section>

      <div className="login-box">
        <FaUserGraduate className="student-icon" />

        <h2>Student Login</h2>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Student ID"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default StudentPortal;
