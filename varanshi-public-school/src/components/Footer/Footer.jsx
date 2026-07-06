import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* About */}

        <div className="footer-col">

          <h2>Varanshi Public School</h2>

          <p>
            Empowering young minds through quality education, innovation,
            discipline, and holistic development to build future leaders.
          </p>

          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaYoutube /></a>
          </div>

        </div>

        {/* Quick Links */}

        <div className="footer-col">

          <h3>Quick Links</h3>

          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Academics</a></li>
            <li><a href="#">Admissions</a></li>
            <li><a href="#">Campus Life</a></li>
            <li><a href="#">Student Portal</a></li>
          </ul>

        </div>

        {/* Resources */}

        <div className="footer-col">

          <h3>Resources</h3>

          <ul>
            <li><a href="#">School Calendar</a></li>
            <li><a href="#">Examination</a></li>
            <li><a href="#">Library</a></li>
            <li><a href="#">Transport</a></li>
            <li><a href="#">Downloads</a></li>
          </ul>

        </div>

        {/* Contact */}

        <div className="footer-col">

          <h3>Contact Us</h3>

          <p>
            <FaMapMarkerAlt className="footer-icon" />
            Ahmedabad, Gujarat, India
          </p>

          <p>
            <FaPhoneAlt className="footer-icon" />
            +91 98765 43210
          </p>

          <p>
            <FaEnvelope className="footer-icon" />
            info@varanshipublicschool.com
          </p>

        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Varanshi Public School. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;