import React from "react";
import styles from "./JoinAsInvestor.module.css";

const JoinAsInvestor = () => {
  return (
    <div className="container-fluid px-lg-5 py-5">
      <div className="bg-secondary-blue text-blue text-center rounded-4 mx-lg-5">
        <div className="col-12 col-lg-6 mx-auto px-1" id={styles.container}>
          <h1 className={styles.joinHeader}>Join us as an Investor</h1>
          <p className={`mt-3 mb-5 ${styles.joinPara} col-9 mx-auto`}>
            We offer end-to-end business consulting services to help you in all
            stages of your company's growth.
          </p>

          <a href="#" className="btn-blue">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default JoinAsInvestor;
