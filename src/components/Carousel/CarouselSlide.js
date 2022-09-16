import React from "react";
import styles from "./Carousel.module.css";

const CarouselSlide = ({ image, header, paragraph }) => {
  return (
    <div className="position-relative rounded-4">
      <img src={image} id={styles.img} className="img-fluid rounded-4" alt="" />
      <div className="position-absolute bottom-0 rounded-4 text-white p-4 pe-5">
        <h3>{header}</h3>
        <p className="text-white">{paragraph}</p>
      </div>
    </div>
  );
};

export default CarouselSlide;
