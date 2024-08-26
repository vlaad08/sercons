import React from "react";
import data from "../data/imageData.json";

const FacebookButton = () => {
  return (
    <a
      href="https://www.facebook.com/profile.php?id=100027726264098"
      target="_blank"
      rel="noopener noreferrer"
      className="facebook-button"
    >
      <img
        src={data.facebookLogo.url}
        alt={data.facebookLogo.alt}
        className="facebook-logo"
      />
      Facebook
    </a>
  );
};

export default FacebookButton;
