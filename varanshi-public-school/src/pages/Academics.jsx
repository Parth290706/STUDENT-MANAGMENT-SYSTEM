import "./Academics.css";
import {
  FaBookOpen,
  FaLaptopCode,
  FaFlask,
  FaFutbol,
  FaPaintBrush,
  FaMusic,
} from "react-icons/fa";

const Academics = () => {
  const programs = [
    {
      icon: <FaBookOpen />,
      title: "Primary Education",
      desc: "Building a strong academic foundation with activity-based learning.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Digital Learning",
      desc: "Smart classrooms, coding, AI and computer education.",
    },
    {
      icon: <FaFlask />,
      title: "Science Labs",
      desc: "Modern Physics, Chemistry and Biology laboratories.",
    },
    {
      icon: <FaFutbol />,
      title: "Sports",
      desc: "Indoor & outdoor sports with professional coaching.",
    },
    {
      icon: <FaPaintBrush />,
      title: "Arts & Crafts",
      desc: "Creativity through painting, drawing and craft activities.",
    },
    {
      icon: <FaMusic />,
      title: "Music & Dance",
      desc: "Classical, western music and dance training.",
    },
  ];

  return (
    <div className="academics">

      <section className="page-banner">
        <h1>Academics</h1>
        <p>Learning Today • Leading Tomorrow</p>
      </section>

      <section className="academic-content">

        <div className="section-title">
          <h2>Our Academic Programs</h2>
          <p>
            We provide quality education with innovation, practical learning,
            and holistic student development.
          </p>
        </div>

        <div className="program-grid">
          {programs.map((item, index) => (
            <div className="program-card" key={index}>
              <div className="program-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

      </section>

      <section className="curriculum">
        <div className="curriculum-content">

          <h2>Curriculum Highlights</h2>

          <ul>
            <li>✔ CBSE Pattern Education</li>
            <li>✔ Smart Classrooms</li>
            <li>✔ Weekly Practical Sessions</li>
            <li>✔ Robotics & Coding</li>
            <li>✔ Spoken English Program</li>
            <li>✔ Personality Development</li>
            <li>✔ Regular Assessments</li>
            <li>✔ Career Guidance</li>
          </ul>

        </div>
      </section>

    </div>
  );
};

export default Academics;