import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/hirejavadevelopers.css";

import centerImg from "../assets/images/Frameface.svg";

import logo1 from "../assets/images/1.png";
import logo2 from "../assets/images/2.png";
import logo3 from "../assets/images/3.png";
import logo4 from "../assets/images/4.png";
import logo5 from "../assets/images/5.png";
import logo6 from "../assets/images/6.png";
import logo7 from "../assets/images/7.png";
import logo8 from "../assets/images/8.png";
import logo9 from "../assets/images/9.png";
import logo10 from "../assets/images/10.png";
import logo11 from "../assets/images/11.png";
import logo12 from "../assets/images/12.png";
import logo13 from "../assets/images/13.png";
import logo14 from "../assets/images/14.png";
import logo15 from "../assets/images/15.png";

const logos = [
  logo1, logo2, logo3, logo4, logo5,
  logo6, logo7, logo8, logo9, logo10,
  logo11, logo12, logo13, logo14, logo15
];

const HireJavaDevelopers = () => {
  useEffect(() => {
    // Add animation class to start auto scroll
    const slider = document.querySelector(".logo-slider");
    slider.classList.add("animate-scroll");
  }, []);

  return (
    <section
      className="text-center py-5 position-relative overflow-hidden  d-flex flex-column justify-content-center vh-100" 
      style={{
        backgroundColor: "#0b0e16",
        color: "#fff",
      }}
    >
      {/* 🔹 Auto Logo Slider Section */}
      <div className="logo-slider-wrapper mb-5  overflow-hidden position-relative">
        <div className="logo-slider d-flex align-items-start">
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="px-4 flex-shrink-0">
              <img
                src={logo}
                alt={`logo-${index}`}
                className="img-fluid opacity-75"
                style={{ maxHeight: "65px", width: "auto" }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* 🌟 Center Background Image */}
      <div
        className="position-absolute top-50 start-50 translate-middle"
        style={{
          zIndex: 0,
          
          transform: "translate(-50%, -50%)",
        }}
      >
        <img
          src={centerImg}
          alt="center-background"
          className="img-fluid"
          style={{
            width: "set(80vh, 80vw)",
            maxWidth: "80vw",
            filter: "drop-shadow(0 0 60px rgba(166,255,0,0.2))",
          }}
        />
      </div>

      {/* 🔹 Text Section */}
      <div className="container position-relative" style={{ zIndex: 1 }}>
        <p className="small mb-2">Hiring Workflow
</p>
        <h2 className="fw-bold mb-3">
          Hire The Best Cyber Security
        </h2>
        <p
          className="text-light mb-4 "
          style={{ maxWidth: "650px", margin: "0 auto" }}
        >
      Build Smarter Software with Python Developers You Can Rely On Do you want to move fast, drive security, and embark on scalability for your product?
        </p>

        <button
          className="btn px-4 py-2 fw-semibold"
          style={{
            backgroundColor: "#a6ff00",
            border: "none",
            color: "#000",
            borderRadius: "30px",
            boxShadow: "0 0 25px rgba(166, 255, 0, 0.6)",
          }}
        >
          Joined With Us
        </button>
      </div>

      {/* 🌌 Glow Background */}
      <div
        className="position-absolute top-50 start-50 translate-middle"
        style={{
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(166,255,0,0.25), transparent 70%)",
          borderRadius: "50%",
          filter: "blur(80px)",
          zIndex: 0,
        }}
      ></div>
    </section>
  );
};

export default HireJavaDevelopers;
