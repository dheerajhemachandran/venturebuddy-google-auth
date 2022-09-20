import React from "react";
import styles from "./HowItWorks.module.css";

const HowItWorksItem = ({ serial, heading, paragraph, image, reverse }) => {
  return (
    <div className="row row-cols-1 row-cols-lg-2 align-items-center justify-content-center">
      {reverse ? (
        <>
          <div className="col px-0">
            <img src={image} alt="" className="img-fluid col-9" />
          </div>
          <div className="col order-2 order-lg-0 ps-3 ps-lg-5">
            <div className="col-12 col-lg-8">
              <h1 className={`text-blue text-start fw-bolder ${styles.serial}`}>
                {serial}
              </h1>
              <h2 className={styles.itemHeader}>{heading}</h2>
              <div className={styles.hr}>{/* <hr className="w-25" /> */}</div>
              <p className={styles.itemPara}>{paragraph}</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="col order-2 order-lg-0 ps-3">
            <div className="col-12 col-lg-9">
              <h1 className={`text-blue text-start fw-bolder ${styles.serial}`}>
                {serial}
              </h1>
              <h2 className={styles.itemHeader}>{heading}</h2>
              <div className={styles.hr}>{/* <hr className="w-25" /> */}</div>
              <p className={styles.itemPara}>{paragraph}</p>
            </div>
          </div>
          <div className="col">
            <img src={image} alt="" className="img-fluid col-9" />
          </div>
        </>
      )}
    </div>
  );
};

export default HowItWorksItem;
