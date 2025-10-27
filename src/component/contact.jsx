import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/contact.css";

const ContactCard = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="container my-5 p-lg-0 py-o pb-0 p-4 ">
      <div
        className="row g-4 rounded-4 p-4 overflow-hidden align-items-center"
        style={{
          background:
            "linear-gradient(102.81deg, #1E1E1E 50.12%, rgba(142, 196, 64, 0.9) 161.15%)",
        }}
      >
        {/* Left Section */}
        <div
          className="col-12 col-lg-7 text-white"
          data-aos="fade-right"
        >
          <button className="bg-white rounded-pill mb-4 px-4 py-2 d-flex align-items-center gap-2">
            <span
              style={{
                display: "inline-block",
                width: "10px",
                height: "10px",
                backgroundColor: "#B6ED55",
                borderRadius: "50%",
              }}
            ></span>
            <span className="fw-bold text-dark">Call to Action</span>
          </button>

          <h1 className="fw-bold display-5 display-md-4 display-lg-3">
            Blockchain Now
          </h1>
          <p className="text-white-50 mt-3" style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 200,
            fontStyle: "normal",
            fontSize: "16px",
            letterSpacing: "0%",
            verticalAlign: "middle",
            width: "90%",
          }}>
            We can upgrade your business to transparent, secure, and efficient solutions using a blockchain. Contact us today to get a customised consultation and pilot project.
          </p>
        </div>

        {/* Right Section - Form */}
        <div
          className="col-12 col-lg-5"
          data-aos="fade-left"
        >
          <div
            className="bg-white p-4 rounded-4 shadow contact-form"
            style={{ maxWidth: "400px", margin: "0 auto" }}
          >
            <h5 className="fw-semibold mb-4 text-center">Quick Proposal</h5>
            <form>
              <input
                type="text"
                placeholder="Name"
                className="form-control mb-3"
              />
              <input
                type="email"
                placeholder="Email"
                className="form-control mb-3"
              />

              <div className="input-group mb-3">
                <select className="form-select" style={{ maxWidth: "100px" }}>
                  <option value="+91">IN (+91)</option>
                  <option value="+1">US (+1)</option>
                  <option value="+44">UK (+44)</option>
                </select>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="form-control"
                />
              </div>

              <textarea
                rows="4"
                placeholder="Your message..."
                className="form-control mb-4"
              ></textarea>

              <div className="d-grid">
                <button className="btn btn-dark rounded-pill quote-btn" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
