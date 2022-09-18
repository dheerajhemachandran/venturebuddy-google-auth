import React from "react";
import styles from "./WhyChooseUs.module.css";

const WhyChooseCard = ({ id, imgId, img, header, desc }) => {
  return (
    <div className="col" style={styles.whyChooseCard} id={id}>
      <div className="col-11 mx-auto">
        <img src={img} id={imgId} alt="" className={styles.whyChooseImg} />
        <h2 className={`${styles.whyChooseCardHeader} mx-auto`}>{header}</h2>
        <p className={`col-10 mx-auto ${styles.whyChooseCardParagraph}`}>
          {desc}
        </p>
      </div>
    </div>
  );
};

export default WhyChooseCard;
