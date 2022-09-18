import React from "react";
import dhl from "./../../Assets/images/organizations/dhl.png";
import next from "./../../Assets/images/organizations/next.png";
import aviva from "./../../Assets/images/organizations/aviva.png";
import santander from "./../../Assets/images/organizations/santander.png";
import healthShield from "./../../Assets/images/organizations/health-shield.png";
import serco from "./../../Assets/images/organizations/serco.png";
import styles from "./Organization.module.css";

const Organizations = () => {
  return (
    <>
      <div id={styles.organizations} className="container-fluid">
        <>
          <h4 className="text-blue text-center" id={styles.orgHead}>
            2500+ Organisations using our services
          </h4>

          <div className="row row-cols-6 mx-5 px-4">
            <div className="col text-center my-auto">
              <img src={dhl} alt="" />
            </div>
            <div className="col text-center my-auto px-5">
              <img src={next} alt="" />
            </div>
            <div className="col my-auto p-4 pe-3">
              <div className="ps-0 pe-5 me-3">
                <img src={aviva} alt="" />
              </div>
            </div>
            <div className="col text-center my-auto p-0 m-0">
              <div className="px-2 pe-0 me-5">
                <img src={santander} alt="" />
              </div>
            </div>
            <div className="col text-center my-auto px-4 ps-0">
              <img src={serco} alt="" />
            </div>
            <div className="col text-center my-auto px-3git add">
              <img src={healthShield} alt="" />
            </div>
          </div>
        </>
      </div>

      <div className="container-fluid px-5">
        <div
          className="bg-secondary-blue p-5 rounded-4 mx-5 text-center"
          id={styles.joinGrowingBusinesses}
        >
          <h1 className="text-blue mb-0" id={styles.growHead}>
            Join 23,000+ growing businesses that use Venturebuddy.
          </h1>
          <p className="text-blue">
            We offer end-to-end business consulting services to help you in all
            stages of your company's growth.
          </p>

          <a href="#" className="btn-blue" id={styles.growBtn}>
            Get Started
          </a>
        </div>
      </div>
    </>
  );
};

export default Organizations;
