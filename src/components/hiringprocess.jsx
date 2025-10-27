import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/hiringprocess.css";
import hireImg from "../assets/images/hireprocess.svg"; // replace with your image path
import { FaCheckCircle } from "react-icons/fa";
import { BsBarChartFill, BsDatabaseFill, BsFillPersonCheckFill, BsPeopleFill } from "react-icons/bs";

const HiringProcess = () => {
  return (
  <section className="hiring-process-section py-5">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Image */}
          <div className="col-md-6  mb-4 mb-md-0">

             <p className="section-subtitle">Hiring Process</p>

            <h2 className="section-title mb-3">
              Skilled No Skipped In Our <br /> Hiring Process
            </h2>
            <img
              src={hireImg}
              alt="Hiring Process"
              className="img-fluid rounded "
            />
          </div>

          {/* Right Content */}
          <div className="col-md-6">
           

            <div className="mission-badge d-inline-flex align-items-center mb-4 px-3 py-2 rounded-pill">
              <FaCheckCircle className="text-success me-2" />
              <span>Mission Accomplish</span>
            </div>

            <p>
              Build Smarter Software with Python Developers You Can Rely On. Do
              you want to move fast, drive security, and embark on scalability
              for your product?
            </p>

            <p>
              Build Smarter Software with Python Developers You Can Rely On. Do
              you want to move fast, drive security, and embark on scalability
              for your product?
            </p>

            <h5 className="fw-semibold mt-4 mb-3">
              Right Skills Only Right Place
            </h5>

            <ul className="list-unstyled">
              <li className="d-flex align-items-center mb-2">
                <BsBarChartFill className="text-success me-2" />
                <span>Recrutement Efficiency</span>
              </li>
              <li className="d-flex align-items-center mb-2">
                <BsDatabaseFill className="text-success me-2" />
                <span>Use Data, Not Guess work</span>
              </li>
              <li className="d-flex align-items-center mb-2">
                <BsFillPersonCheckFill className="text-success me-2" />
                <span>Reduce Bad Hires</span>
              </li>
              <li className="d-flex align-items-center mb-2">
                <BsPeopleFill className="text-success me-2" />
                <span>Improve Employee Retention</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiringProcess;
