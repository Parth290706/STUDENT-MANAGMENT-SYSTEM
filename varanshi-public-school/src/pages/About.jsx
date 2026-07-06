import "./About.css";
import { FaBullseye, FaEye, FaAward } from "react-icons/fa";
import schoolImg from "../assets/images/about-school.png";

const About = () => {
  return (
    <div className="about">

      {/* Hero Banner */}

      <section className="about-hero">
        <div className="about-overlay">
          <h1>About Varanshi Public School</h1>
          <p>
            Inspiring Excellence • Building Character • Shaping Future Leaders
          </p>
        </div>
      </section>

      {/* About School */}

      <section className="about-school">

        <div className="about-image">
          <img src={schoolImg} alt="School" />
        </div>

        <div className="about-content">

          <h2>Who We Are</h2>

          <p>
            Varanshi Public School is dedicated to nurturing young minds through
            academic excellence, creativity, discipline, and innovation. We
            believe every child has unique potential, and our mission is to help
            students discover, develop, and achieve their dreams.
          </p>

          <p>
            Our experienced faculty, modern infrastructure, smart classrooms,
            laboratories, sports facilities, and extracurricular activities
            ensure holistic development for every student.
          </p>

        </div>

      </section>

      {/* Mission Vision Values */}

      <section className="mission-section">

        <div className="mission-card">

          <FaBullseye className="mission-icon" />

          <h3>Our Mission</h3>

          <p>
            To provide quality education that empowers students with knowledge,
            skills, confidence, and strong moral values.
          </p>

        </div>

        <div className="mission-card">

          <FaEye className="mission-icon" />

          <h3>Our Vision</h3>

          <p>
            To become one of India's leading educational institutions by
            creating responsible citizens and lifelong learners.
          </p>

        </div>

        <div className="mission-card">

          <FaAward className="mission-icon" />

          <h3>Core Values</h3>

          <p>
            Excellence, Integrity, Respect, Innovation, Leadership, and
            Continuous Learning.
          </p>

        </div>

      </section>

      {/* Why Choose */}

      <section className="why-us">

        <h2>Why Choose Varanshi Public School?</h2>

        <div className="why-grid">

          <div>✔ Smart Classrooms</div>

          <div>✔ Experienced Teachers</div>

          <div>✔ Digital Learning</div>

          <div>✔ Robotics & AI Labs</div>

          <div>✔ Sports Facilities</div>

          <div>✔ Music & Arts</div>

          <div>✔ Personality Development</div>

          <div>✔ 100% Student Support</div>

        </div>

      </section>

    </div>
  );
};

export default About;