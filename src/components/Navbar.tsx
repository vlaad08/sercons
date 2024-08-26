import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";
import data from "../data/imageData.json";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={data.serconsLogo.url} alt={data.serconsLogo.alt} />
        </div>
        <button
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <ul className={`navbar-list ${isOpen ? "open" : ""}`}>
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Acasă
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/portfolio" className="navbar-link">
              Portfolio
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/desprenoi" className="navbar-link">
              Despre Noi
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
