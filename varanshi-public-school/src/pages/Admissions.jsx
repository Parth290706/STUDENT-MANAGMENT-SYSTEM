import { useState } from "react";
import "./Admissions.css";
import API from "../api/axios";

const Admissions = () => {
  const [formData, setFormData] = useState({
    student_name: "",
    parent_email: "",
    parent_phone: "",
    class_applied: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await API.post("/admissions", formData);

      alert(res.data.message);

      setFormData({
        student_name: "",
        parent_email: "",
        parent_phone: "",
        class_applied: "",
        message: "",
      });
    } catch (err) {
      alert(
        err.response?.data?.message ||
          "Unable to submit admission enquiry."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admissions">
      <section className="page-banner">
        <h1>Admissions</h1>
        <p>Join the Varanshi Public School Family</p>
      </section>

      <section className="admission-container">
        <div className="admission-info">
          <h2>Admission Process</h2>

          <div className="step">
            <span>1</span>
            <div>
              <h3>Fill Application Form</h3>
              <p>Complete the online or offline admission form.</p>
            </div>
          </div>

          <div className="step">
            <span>2</span>
            <div>
              <h3>Document Verification</h3>
              <p>Submit required academic and identity documents.</p>
            </div>
          </div>

          <div className="step">
            <span>3</span>
            <div>
              <h3>Interaction / Entrance Test</h3>
              <p>Students may be invited for a simple assessment.</p>
            </div>
          </div>

          <div className="step">
            <span>4</span>
            <div>
              <h3>Fee Submission</h3>
              <p>Complete admission after fee payment.</p>
            </div>
          </div>
        </div>

        <div className="admission-form">
          <h2>Admission Enquiry</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="student_name"
              placeholder="Student Name"
              value={formData.student_name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="parent_email"
              placeholder="Parent Email"
              value={formData.parent_email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="parent_phone"
              placeholder="Phone Number"
              value={formData.parent_phone}
              onChange={handleChange}
              required
            />

            <select
              name="class_applied"
              value={formData.class_applied}
              onChange={handleChange}
              required
            >
              <option value="">Select Class</option>
              <option>Nursery</option>
              <option>KG</option>
              <option>Class 1</option>
              <option>Class 2</option>
              <option>Class 3</option>
              <option>Class 4</option>
              <option>Class 5</option>
              <option>Class 6</option>
              <option>Class 7</option>
              <option>Class 8</option>
              <option>Class 9</option>
              <option>Class 10</option>
              <option>Class 11 Commerce</option>
              <option>Class 12 Commerce</option>
              <option>Class 11 Science</option>
              <option>Class 12 Science</option>
            </select>

            <textarea
              rows="5"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit Enquiry"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Admissions;