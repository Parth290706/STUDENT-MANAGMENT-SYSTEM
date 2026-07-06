import "./CampusLife.css";
import {
  FaBasketballBall,
  FaMusic,
  FaLaptopCode,
  FaBookReader,
  FaTree,
  FaCamera,
} from "react-icons/fa";

const CampusLife = () => {
  const activities = [
    {
      icon: <FaBasketballBall />,
      title: "Sports",
      desc: "Indoor & outdoor sports with professional coaching.",
    },
    {
      icon: <FaMusic />,
      title: "Music & Dance",
      desc: "Creative learning through music and dance programs.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Coding Club",
      desc: "Learn programming, robotics and AI.",
    },
    {
      icon: <FaBookReader />,
      title: "Library",
      desc: "Thousands of books with digital learning resources.",
    },
    {
      icon: <FaTree />,
      title: "Green Campus",
      desc: "Beautiful eco-friendly campus environment.",
    },
    {
      icon: <FaCamera />,
      title: "Events",
      desc: "Annual day, cultural festivals and competitions.",
    },
  ];

  return (
    <div className="campus">

      <section className="page-banner">
        <h1>Campus Life</h1>
        <p>Learning Beyond Classrooms</p>
      </section>

      <section className="campus-container">

        <h2>Life at Varanshi Public School</h2>

        <div className="campus-grid">

          {activities.map((item, index) => (
            <div className="campus-card" key={index}>
              <div className="campus-icon">{item.icon}</div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>
            </div>
          ))}

        </div>

      </section>

    </div>
  );
};

export default CampusLife;