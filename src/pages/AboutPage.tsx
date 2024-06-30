import React from "react";
import Header from "../components/Header";
import CompanyInfo from "../components/CompanyInfo";
import TeamMembers from "../components/TeamMembers";
import './styles/AboutPage.css'; 
import Navbar from "../components/Navbar";

const AboutPage = () => {
    return (
        <div className="aboutPage">
            <Navbar />
            <Header title="Despre Noi" />
            <CompanyInfo />
            <TeamMembers />
        </div>
    );
};

export default AboutPage;