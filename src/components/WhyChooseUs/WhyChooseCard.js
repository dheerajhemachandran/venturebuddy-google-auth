import React from "react";
import styles from "./WhyChooseUs.module.css";

const WhyChooseCard = ({ img, header, desc }) => {
  return (
    <div className="col" style={styles.whyChooseCard}>
      <div className="col-10 mx-auto">
        <img src={img} alt="" className="img-fluid" />
        <h2 className={`${styles.whyChooseCardHeader} mx-auto`}>{header}</h2>
        <p className={`col-9 mx-auto ${styles.whyChooseCardParagraph}`}>
          {desc}
        </p>
      </div>
    </div>
  );
};

export default WhyChooseCard;
