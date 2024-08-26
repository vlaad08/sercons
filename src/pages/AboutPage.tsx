import React from "react";
import CompanyInfo from "../components/CompanyInfo";
import "./styles/AboutPage.css";
import Navbar from "../components/Navbar";
import { HeroSectionAbout } from "../components/HeroSection";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <div className="aboutPage">
      <Navbar />
      <div className="content">
        <HeroSectionAbout />
        <CompanyInfo />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
