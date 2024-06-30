import React from "react";
import './styles/ServicesSection.css'; // Styling for ServicesSection


// constructii civile, industriale si amenajari


const ServicesSection = () => {
    return (
        <div className="servicesSection" id="services">
            <h2>Serviciile noastre</h2>
            <ul>
                <li>Constructii civile</li>
                <li>Constructii industirale</li>
                <li>Amenajari</li>
            </ul>
        </div>
    );
};

export default ServicesSection;