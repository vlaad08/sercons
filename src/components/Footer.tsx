import React from "react";
import FacebookButton from "./FacebookButton";
import data from "../data/imageData.json";
import "./styles/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img
            src={data.serconsLogo.url}
            alt="sercons_logo"
            style={{ width: "150px" }}
          />
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>
            Email:{" "}
            <a href="mailto:serconscontractor@gmail.com">
              serconscontractor@gmail.com
            </a>
          </p>
          <p>Adresă: Str. 14 Noiembrie, 5B, Tulcea, Romania</p>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Acasă</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/desprenoi">Despre Noi</Link>
            </li>
            <li>
              <Link to="/#services">Servicii</Link>
            </li>
          </ul>
        </div>
        <div className="footer-social">
          <h3>Urmariți-ne</h3>
          <FacebookButton />
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Sercons&Contractor</p>
      </div>
    </footer>
  );
};

export default Footer;
