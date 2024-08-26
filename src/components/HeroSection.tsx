import React from "react";
import "./styles/HeroSection.css";

export const HeroSectionHome = () => {
  return (
    <div className="heroSectionHome">
      <div className="heroOverlay">
        <h1>Bine ati venit pe Sercons&Contractor</h1>
        <p>
          Proiectele dumneavostra de vis, construite cu integritate si precizie.
        </p>
      </div>
    </div>
  );
};

export const HeroSectionPortfolio = () => {
  return (
    <div className="heroSection heroSectionPortfolio">
      <div className="heroOverlay">
        <h1>Bine ați venit în galeria noastră!</h1>
        <p>
          Vă invităm să explorați colecția noastră de imagini. Pentru imagini
          mai recente, urmăriți-ne pe Facebook.
        </p>
      </div>
    </div>
  );
};

export const HeroSectionAbout = () => {
  return (
    <div className="heroSection heroSectionAbout">
      <div className="heroOverlay">
        <h1>Despre noi</h1>
        <p>
          Suntem o echipă de profesioniști pasionați de construcții și design.
          Vă invităm să ne cunoașteți mai bine.
        </p>
      </div>
    </div>
  );
};
