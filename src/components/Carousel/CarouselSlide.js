import React from "react";
import "./Carousel.module.css";

const CarouselSlide = ({ image, header, paragraph }) => {
  return (
    <div className="position-relative">
      <img src={image} className="img-fluid rounded-4" alt="" />
      <div className="position-absolute bottom-0 text-white p-4 ps-5">
        <h3>{header}</h3>
        <p className="text-white">{paragraph}</p>
      </div>
    </div>
  );
};

export default CarouselSlide;
