import React from "react";
import dhl from "./../images/organizations/dhl.png";
import next from "./../images/organizations/next.png";
import aviva from "./../images/organizations/aviva.png";
import santander from "./../images/organizations/santander.png";
import healthShield from "./../images/organizations/health-shield.png";

const Organizations = () => {
  return (
    <>
      <div
        id="organizations"
        className="container-fluid w-100 d-flex align-items-center justify-content-center"
      >
        <div>
          <h4 className="text-blue text-center fw-bold">
            2500+ Organisations using our services
          </h4>

          <div className="row align-items-center justify-content-around mt-5">
            <img className="my-4" src={dhl} alt="" id="dhl" />
            <img className="my-4" src={next} alt="" id="next" />
            <img className="my-4" src={aviva} alt="" id="aviva" />
            <img className="my-4" src={santander} alt="" id="santander" />
            <img className="my-4" src={healthShield} alt="" id="healthShield" />
          </div>
        </div>
      </div>
      <div className="container px-0 px-3">
        <div
          className="bg-secondary-blue text-center p-5 rounded-4"
          id="join-growing-businesses"
        >
          <h1 className="text-blue">
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
