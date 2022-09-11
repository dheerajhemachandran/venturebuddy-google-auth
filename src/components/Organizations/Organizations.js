import React from "react";
import dhl from "./../../Assets/images/organizations/dhl.png";
import next from "./../../Assets/images/organizations/next.png";
import aviva from "./../../Assets/images/organizations/aviva.png";
import santander from "./../../Assets/images/organizations/santander.png";
import healthShield from "./../../Assets/images/organizations/health-shield.png";
import serco from "./../../Assets/images/organizations/serco.png";
import styles from "./Organization.module.css";

const Organizations = () => {
  console.log(styles);
  return (
    <>
      <div id={styles.organizations} className="container-fluid">
        <>
          <h4 className="text-blue text-center fw-bold">
            2500+ Organisations using our services
          </h4>

          <div className="row row-cols-6 align-items-center justify-content-center px-5">
            <div className="d-flex justify-content-center p-5">
              <img className="my-4 img-fluid" src={dhl} alt="" />
            </div>
            <div className="d-flex justify-content-center p-5">
              <img className="my-4 img-fluid" src={next} alt="" />
            </div>
            <div className="d-flex justify-content-center p-5">
              <img className="my-4 img-fluid" src={aviva} alt="" />
            </div>
            <div className="d-flex justify-content-center p-5">
              <img className="my-4 img-fluid" src={santander} alt="" />
            </div>
            <div className="d-flex justify-content-center p-5">
              <img className="my-4 img-fluid" src={serco} alt="" />
            </div>
            <div className="d-flex justify-content-center p-5">
              <img className="my-4 img-fluid" src={healthShield} alt="" />
            </div>
          </div>
        </>
      </div>

      <div className="container px-0 px-3">
        <div
          className="bg-secondary-blue text-center p-5 rounded-4"
          id={styles.joinGrowingBusinesses}
        >
          <h1 className="text-blue" id={styles.organizationsHeading}>
            Join 23,000+ growing businesses that use Venturebuddy.
          </h1>
          <p className="text-blue py-3">
            We offer end-to-end business consulting services to help you in all
            stages of your company's growth.
          </p>

          <a href="#" className="btn-blue px-4">
            Get Started
          </a>
        </div>
      </div>
    </>
  );
};

export default Organizations;