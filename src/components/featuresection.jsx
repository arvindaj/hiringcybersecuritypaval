import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSearch, FaFileAlt, FaUsers, FaDatabase } from "react-icons/fa";


import "@fontsource/poppins"; // npm install @fontsource/poppins

const features = [
  {
    icon: <FaSearch size={28} color="#83DB10" />,
    title: "Find Resource",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    icon: <FaFileAlt size={28} color="#83DB10" />,
    title: "Document Verification",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    icon: <FaUsers size={28} color="#83DB10" />,
    title: "Three tier interview",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    icon: <FaDatabase size={28} color="#83DB10" />,
    title: "Backend Verification",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
];

const FeatureSection = () => {
  return (
    <section className="py-5 text-center bg-white">
      <div className="container">
        <h2 className="fw-bold mb-3 text-dark">
          Scalable. Collaborative. Innovative
        </h2>
        <p
          className="text-muted mb-5"
          style={{
            fontFamily: "Poppins",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "18px",
            lineHeight: "100%",
            letterSpacing: "0%",
          }}
        >
          Build Smarter Software with Python Developers You Can Rely On.
          <br />
          Do you want to move fast, drive security, and embark on scalability
          for your product?
        </p>

        <div className="row g-4 justify-content-center">
          {features.map((feature, index) => (
            <div className="col-12 col-sm-6 col-lg-3" key={index}>
              <div
                className="card text-start border-0 shadow-sm h-100 rounded-3"
                style={{
                  background:
                    "linear-gradient(149.18deg, #111B26 3.38%, #111B26 82.28%, #83DB10 96.62%)",
                  color: "#fff",
                }}
              >
                <div className="card-body p-4">
                  {/* icon and title same row */}
                  <div className="d-flex align-items-center mb-3">
                    <div className="me-2">{feature.icon}</div>
                    <h6
                      className="fw-bold text-white mb-0"
                      style={{ fontFamily: "Poppins" }}
                    >
                      {feature.title}
                    </h6>
                  </div>

                  {/* paragraph text styling */}
                  <p
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: 400,
                      fontStyle: "normal",
                      fontSize: "17px",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                      color: "rgba(255,255,255,0.7)",
                    }}
                  >
                    {feature.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
