import React from "react";
import Navbar from "../components/Navbar";
import ImageGallery from "../components/ImageGallery";
import { HeroSectionPortfolio } from "../components/HeroSection";
import Footer from "../components/Footer";
import "./styles/PortfolioPage.css";

const PortfolioPage = () => {
  return (
    <div className="portfolioPage">
      <Navbar />
      <div className="content">
        <HeroSectionPortfolio />
        <ImageGallery />
      </div>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
