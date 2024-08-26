import React from "react";
import { HeroSectionHome } from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import "./styles/HomePage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import data from "../data/imageData.json";

const HomePage = () => {
  return (
    <div className="homePage">
      <div
        className="header"
        style={{
          backgroundImage: `url(${data.homepage.url})`,
        }}
      >
        <Navbar />
        <HeroSectionHome />
      </div>
      <div className="content">
        <ServicesSection />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
