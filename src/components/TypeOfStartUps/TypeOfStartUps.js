import React, { useState } from "react";
import technology from "./../../Assets/images/startups/tech.png";
import ecommerce from "./../../Assets/images/startups/ecommerce.png";
import wearables from "./../../Assets/images/startups/wearables.png";
import agency from "./../../Assets/images/startups//agancy.png";
import marketing from "./../../Assets/images/startups/marketing.png";
import services from "./../../Assets/images/startups/services.png";
import saas from "./../../Assets/images/startups/saas.png";
import consumer from "./../../Assets/images/startups/consumer.png";
import others from "./../../Assets/images/startups/others.png";
import styles from "./TypeOfStartUps.module.css";

const TypeOfStartUps = () => {
  const [buttonActive, setButtonActive] = useState(false);

  const setStartUp = (id) => {
    document.getElementById(id).classList.add(styles.active);
  };

  const nextOfDeals = () => {
    document.getElementById("next").click();
  };

  return (
    <div className="text-dark pt-4 ms-4" id="typeofstartups">
      <h5 className="text-center fw-bold">
        What type of startups are you looking for?
      </h5>

      <div className="row justify-content-center text-blue text-dark pt-5 pb-0 mb-0">
        <div className="row row-cols-5 justify-content-center">
          <div className="text-center py-3">
            <div
              className={`${styles.startUp} d-flex align-items-center justify-content-center rounded-circle mx-auto`}
              id="technology"
              onClick={() => {
                setStartUp("technology");
                setButtonActive(true);
              }}
            >
              <img className="img-fluid" src={technology} alt="" />
            </div>
            <h5 className="pt-1">Technology</h5>
          </div>
          <div className="text-center py-3">
            <div
              className={`${styles.startUp} d-flex align-items-center justify-content-center rounded-circle mx-auto`}
              id="ecommerce"
              onClick={() => {
                setStartUp("ecommerce");
                setButtonActive(true);
              }}
            >
              <img className="img-fluid" src={ecommerce} alt="" />
            </div>
            <h5 className="pt-1">ECommerce</h5>
          </div>
          <div className="text-center py-3">
            <div
              className={`${styles.startUp} d-flex align-items-center justify-content-center rounded-circle mx-auto`}
              id="wearables"
              onClick={() => {
                setStartUp("wearables");
                setButtonActive(true);
              }}
            >
              <img className="img-fluid" src={wearables} alt="" />
            </div>
            <h5 className="pt-1">Wearables</h5>
          </div>
          <div className="text-center py-3">
            <div
              className={`${styles.startUp} d-flex align-items-center justify-content-center rounded-circle mx-auto`}
              id="agency"
              onClick={() => {
                setStartUp("agency");
                setButtonActive(true);
              }}
            >
              <img className="img-fluid" src={agency} alt="" />
            </div>
            <h5 className="pt-1">Agency</h5>
          </div>
          <div className="text-center py-3">
            <div
              className={`${styles.startUp} d-flex align-items-center justify-content-center rounded-circle mx-auto`}
              id="marketing"
              onClick={() => {
                setStartUp("marketing");
                setButtonActive(true);
              }}
            >
              <img className="img-fluid" src={marketing} alt="" />
            </div>
            <h5 className="pt-1">Marketing</h5>
          </div>
          <div className="text-center py-3">
            <div
              className={`${styles.startUp} d-flex align-items-center justify-content-center rounded-circle mx-auto`}
              id="services"
              onClick={() => {
                setStartUp("services");
                setButtonActive(true);
              }}
            >
              <img className="img-fluid" src={services} alt="" />
            </div>
            <h5 className="pt-1">Services</h5>
          </div>
          <div className="text-center py-3">
            <div
              className={`${styles.startUp} d-flex align-items-center justify-content-center rounded-circle mx-auto`}
              id="saas"
              onClick={() => {
                setStartUp("saas");
                setButtonActive(true);
              }}
            >
              <img className="img-fluid" src={saas} alt="" />
            </div>
            <h5 className="pt-1">SAAS</h5>
          </div>
          <div className="text-center py-3">
            <div
              className={`${styles.startUp} d-flex align-items-center justify-content-center rounded-circle mx-auto`}
              id="consumer"
              onClick={() => {
                setStartUp("consumer");
                setButtonActive(true);
              }}
            >
              <img className="img-fluid" src={consumer} alt="" />
            </div>
            <h5 className="pt-1">Consumer Products</h5>
          </div>
          <div className="text-center py-3">
            <div
              className={`${styles.startUp} d-flex align-items-center justify-content-center rounded-circle mx-auto`}
              id="others"
              onClick={() => {
                setStartUp("others");
                setButtonActive(true);
              }}
            >
              <img className="img-fluid" src={others} alt="" />
            </div>
            <h5 className="pt-1">Other</h5>
          </div>
        </div>
        <div className="text-center">
          <button
            className={`btn btn-blue px-4 ${buttonActive ? "" : "disabled"}`}
            onClick={nextOfDeals}
          >
            Next
          </button>
        </div>

        <button
          className="carousel-control-next mt-3"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
          id="next"
        ></button>
      </div>
    </div>
  );
};

export default TypeOfStartUps;