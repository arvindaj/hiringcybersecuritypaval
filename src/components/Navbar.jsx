import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/images/pavallogo.png";
import "../assets/css/Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="custom-navbar">
      <div className=" nav-inner">
        <a href="/" className="navbar-brand">
          <img src={logo} alt="Logo" className="nav-logo" />
        </a>

        <div className="navbar-links d-none d-lg-flex">
          <a href="#" className="nav-link">
            Top Jobs
          </a>
          <a href="#" className="nav-link">
            Upload Resume
          </a>
          <a href="#" className="nav-link">
            Companies
          </a>
          <a href="#" className="nav-link">
            Hiring
          </a>
        </div>

        <div className="right-controls d-none d-lg-flex">
          <button className=" contact-btn">Contact</button>
          <button className=" quote-btn">Get Quote</button>
        </div>

        <button
          className="mobile-toggle d-lg-none"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>

        <div className={`mobile-nav ${open ? "open" : ""}`}>
          <div className="mobile-links">
            <a href="#" className="nav-link" onClick={() => setOpen(false)}>
              Top Jobs
            </a>
            <a href="#" className="nav-link" onClick={() => setOpen(false)}>
              Upload Resume
            </a>
            <a href="#" className="nav-link" onClick={() => setOpen(false)}>
              Companies
            </a>
            <a href="#" className="nav-link" onClick={() => setOpen(false)}>
              Hiring
            </a>

            <div className="mobile-btns">
              <button className=" contact-btn" onClick={() => setOpen(false)}>
                Contact
              </button>
              <button className=" quote-btn" onClick={() => setOpen(false)}>
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
