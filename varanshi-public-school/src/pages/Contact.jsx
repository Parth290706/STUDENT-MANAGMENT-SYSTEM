import { useState } from "react";
import "./Contact.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import API from "../api/axios";

const Contact = () => {

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await API.post("/contacts", formData);

      alert(res.data.message);

      setFormData({
        full_name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

    } catch (err) {

      alert(
        err.response?.data?.message ||
        "Failed to send message."
      );

    }

  };

  return (
    <div className="contact">

      <section className="page-banner">
        <h1>Contact Us</h1>
        <p>We're Here To Help You</p>
      </section>

      <section className="contact-container">

        <div className="contact-info">

          <h2>Get In Touch</h2>

          <div className="info">
            <FaMapMarkerAlt />
            <span>Ahmedabad, Gujarat, India</span>
          </div>

          <div className="info">
            <FaPhoneAlt />
            <span>+91 98765 43210</span>
          </div>

          <div className="info">
            <FaEnvelope />
            <span>info@varanshipublicschool.com</span>
          </div>

          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Ahmedabad&output=embed"
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: "10px" }}
            loading="lazy"
          ></iframe>

        </div>

        <div className="contact-form">

          <h2>Send Message</h2>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="full_name"
              placeholder="Your Name"
              value={formData.full_name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </section>

    </div>
  );
};

export default Contact;