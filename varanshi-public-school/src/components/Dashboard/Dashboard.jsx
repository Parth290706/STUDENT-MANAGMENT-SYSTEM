import "./Dashboard.css";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaUserCheck,
  FaBookOpen,
} from "react-icons/fa";

const Dashboard = () => {
  return (
    <section className="dashboard-section">

      <div className="dashboard-header">
        <h2>Student Management Dashboard</h2>
        <p>Monitor academic performance and school statistics in real-time.</p>
      </div>

      {/* KPI Cards */}

      <div className="dashboard-cards">

        <div className="dashboard-card">
          <div className="icon blue">
            <FaUserGraduate />
          </div>

          <div>
            <h3>2,548</h3>
            <span>Total Students</span>
          </div>
        </div>

        <div className="dashboard-card">
          <div className="icon green">
            <FaChalkboardTeacher />
          </div>

          <div>
            <h3>148</h3>
            <span>Teachers</span>
          </div>
        </div>

        <div className="dashboard-card">
          <div className="icon orange">
            <FaUserCheck />
          </div>

          <div>
            <h3>96%</h3>
            <span>Attendance</span>
          </div>
        </div>

        <div className="dashboard-card">
          <div className="icon purple">
            <FaBookOpen />
          </div>

          <div>
            <h3>28</h3>
            <span>Courses</span>
          </div>
        </div>

      </div>

      {/* Dashboard Preview */}

      <div className="dashboard-preview">

        <div className="chart">

          <h3>Monthly Student Admissions</h3>

          <img
            src="https://quickchart.io/chart?c={type:'bar',data:{labels:['Jan','Feb','Mar','Apr','May','Jun'],datasets:[{label:'Admissions',data:[120,180,220,170,240,280]}]}}"
            alt="Chart"
          />

        </div>

        <div className="recent">

          <h3>Recent Activities</h3>

          <ul>

            <li>✅ New admission completed</li>

            <li>📚 Mid-term exams scheduled</li>

            <li>🏆 Sports competition announced</li>

            <li>👨‍🏫 Teacher meeting on Friday</li>

            <li>🎉 Annual function registration started</li>

          </ul>

        </div>

      </div>

    </section>
  );
};

export default Dashboard;