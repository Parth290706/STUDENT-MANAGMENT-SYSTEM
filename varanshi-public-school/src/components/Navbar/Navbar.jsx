import "./Navbar.css";
import { FaGraduationCap } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <div className="logo-icon">
            <FaGraduationCap />
          </div>

          <div className="logo-text">
            <h2>Varanshi</h2>
            <span>Public School</span>
          </div>
        </div>

        <ul className="nav-links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/about">About</NavLink>
          </li>

          <li>
            <NavLink to="/academics">Academics</NavLink>
          </li>

          <li>
            <NavLink to="/admissions">Admissions</NavLink>
          </li>

          <li>
            <NavLink to="/campus-life">Campus Life</NavLink>
          </li>

          <li>
            <NavLink to="/student-portal">Student Portal</NavLink>
          </li>

          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>

        <NavLink to="/admissions" className="apply-btn">
          Apply Now
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
