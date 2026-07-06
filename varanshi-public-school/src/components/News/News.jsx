import "./News.css";
import {
  FaCalendarAlt,
  FaUserGraduate,
  FaChartLine,
} from "react-icons/fa";

import news1 from "../../assets/images/news1.png";
import news2 from "../../assets/images/news2.png";
import news3 from "../../assets/images/news3.png";
import dashboard from "../../assets/images/dashboard.png";

const News = () => {
  return (
    <section className="news-section">

      <div className="news-container">

        {/* Left Side */}

        <div className="latest-news">

          <h2>Latest News & Events</h2>

          <div className="news-cards">

            <div className="news-card">
              <img src={news1} alt="" />

              <h3>
                <FaCalendarAlt /> Annual Sports Day
              </h3>

              <p>
                Students participated enthusiastically in various sports
                competitions.
              </p>

              <button>Learn More</button>
            </div>

            <div className="news-card">
              <img src={news2} alt="" />

              <h3>
                <FaUserGraduate /> Student Achievement
              </h3>

              <p>
                Our students secured top ranks in the district science fair.
              </p>

              <button>Learn More</button>
            </div>

            <div className="news-card">
              <img src={news3} alt="" />

              <h3>
                <FaChartLine /> New Smart Labs
              </h3>

              <p>
                New AI & Robotics laboratories are now available for students.
              </p>

              <button>Learn More</button>
            </div>

          </div>

        </div>

        {/* Right Side */}

        <div className="dashboard">

          <h2>Student Insights: Data in Action</h2>

          <p>Live Analytics powered by Power BI</p>

          <img src={dashboard} alt="" />

        </div>

      </div>

    </section>
  );
};

export default News;