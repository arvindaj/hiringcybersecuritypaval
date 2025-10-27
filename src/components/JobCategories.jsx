
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/JobCategories.css"; // custom styles

import jobcandidateBottom from "../assets/images/jobcta-bottom.png";
import { FaMoneyBillWave, FaTruck, FaBriefcaseMedical, FaLaptopCode } from "react-icons/fa";

const categories = [
  { title: "Accounting & Finance", jobs: "201 Jobs Available", icon: <FaMoneyBillWave />, active: false },
  { title: "Automotive Jobs", jobs: "201 Jobs Available", icon: <FaTruck />, active: false },
  { title: "Transportation", jobs: "201 Jobs Available", icon: <FaTruck />, active: true },
  { title: "Healthcare", jobs: "201 Jobs Available", icon: <FaBriefcaseMedical />, active: false },
  { title: "Education", jobs: "201 Jobs Available", icon: <FaMoneyBillWave />, active: false },
  { title: "Accounting & Finance", jobs: "201 Jobs Available", icon: <FaMoneyBillWave />, active: false },
  { title: "Design UI/UX", jobs: "201 Jobs Available", icon: <FaLaptopCode />, active: false },
  { title: "Hospital", jobs: "201 Jobs Available", icon: <FaMoneyBillWave />, active: false },
];

const JobCategories = () => {
  return (
    <section className="job-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Section */}
          <div className="col-md-5 mb-4 mb-md-0">
            <p className="text-uppercase text-muted small">Integrated With Everything</p>
            <h2 className="fw-bold mb-3">
              Explore <br /> All The <span className="text-dark">Jobs Categories</span>
            </h2>
            <p className="text-muted mb-4">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </p>
            <button className="btn btn-dark rounded-pill px-4 py-2 shadow-sm">
              Learn More
            </button>
          </div>

          {/* Right Section */}
          <div className="col-md-7 ">
            <div className="job-card-grid">
              {categories.map((cat, index) => (
                <div
                  key={index}
                  className={`job-card ${cat.active ? "active" : ""}`}
                >
                  <div className="job-icon">{cat.icon}</div>
                  <h6 className="fw-semibold mb-1">{cat.title}</h6>
                  <p className="small text-muted mb-0">{cat.jobs}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
   
    </section>
  );
};

export default JobCategories;
