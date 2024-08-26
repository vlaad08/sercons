import React from "react";
import data from "../data/imageData.json";
import "./styles/ImageGallery.css";

const ImageGallery = () => {
  return (
    <div className="gallery">
      {data.images.map((image) => (
        <img
          className="galleryImage"
          key={image.id}
          src={image.url}
          alt={image.alt}
        />
      ))}
    </div>
  );
};

export default ImageGallery;
