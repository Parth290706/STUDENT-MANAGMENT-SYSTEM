import "./Features.css";
import { FaBookOpen, FaLightbulb, FaTrophy } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaBookOpen />,
      title: "Academic Excellence",
      desc: "Providing quality education with experienced faculty and excellent academic performance.",
    },
    {
      icon: <FaLightbulb />,
      title: "Innovative Curriculum",
      desc: "Modern teaching methods, smart classrooms and practical learning experiences.",
    },
    {
      icon: <FaTrophy />,
      title: "Holistic Development",
      desc: "Sports, arts, leadership programs and extracurricular activities for every student.",
    },
  ];

  return (
    <section className="features">
      <div className="features-container">
        {features.map((item, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{item.icon}</div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

            <button>Learn More →</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;