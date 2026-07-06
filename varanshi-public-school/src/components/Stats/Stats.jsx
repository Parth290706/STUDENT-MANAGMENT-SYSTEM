import "./Stats.css";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaTrophy,
  FaSchool,
} from "react-icons/fa";

const Stats = () => {
  const stats = [
    {
      icon: <FaUserGraduate />,
      number: "2500+",
      title: "Students",
    },
    {
      icon: <FaChalkboardTeacher />,
      number: "150+",
      title: "Qualified Teachers",
    },
    {
      icon: <FaTrophy />,
      number: "100+",
      title: "Awards Won",
    },
    {
      icon: <FaSchool />,
      number: "30+",
      title: "Years of Excellence",
    },
  ];

  return (
    <section className="stats">
      <div className="stats-container">
        {stats.map((item, index) => (
          <div className="stat-card" key={index}>
            <div className="stat-icon">{item.icon}</div>

            <h2>{item.number}</h2>

            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;