import React from "react";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import ContactForm from "../components/ContactForm";
import './styles/HomePage.css'; // Assuming we have a CSS file for HomePage specific styles
import Navbar from "../components/Navbar";

const HomePage = () => {
    return (
        <div className="homePage">
            <Navbar />
            <HeroSection />
            <ServicesSection />
            <ContactForm />
        </div>
    );
};

export default HomePage;