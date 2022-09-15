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
    <div className="text-dark pt-4 ms-4" id={styles.typeOfStartUps}>
      <h5 className="text-center">
        What type of startups are you looking for?
      </h5>

      <div className="row text-blue text-dark pt-5 pb-0 mb-0">
        <div
          className="row row-cols-2 row-cols-md-5 justify-content-center mx-auto gap-0"
          id={styles.startUpContainer}
        >
          <div className="text-center py-2 p-0 d-flex align-items-center justify-content-center flex-column">
            <div
              className={`${styles.startUp} rounded-circle d-flex justify-content-center align-items-center`}
              id="technology"
              onClick={() => {
                setStartUp("technology");
                setButtonActive(true);
              }}
            >
              <img src={technology} alt="" className="mx-auto" />
            </div>
            <h6 className="pt-1">Technology</h6>
          </div>
          <div className="text-center py-2 p-0 d-flex align-items-center justify-content-center flex-column">
            <div
              className={`${styles.startUp} rounded-circle d-flex justify-content-center align-items-center`}
              id="ecommerce"
              onClick={() => {
                setStartUp("ecommerce");
                setButtonActive(true);
              }}
            >
              <img src={ecommerce} alt="" className="mx-auto" />
            </div>
            <h6 className="pt-1">ECommerce</h6>
          </div>
          <div className="text-center py-2 p-0 d-flex align-items-center justify-content-center flex-column">
            <div
              className={`${styles.startUp} rounded-circle d-flex justify-content-center align-items-center`}
              id="wearables"
              onClick={() => {
                setStartUp("wearables");
                setButtonActive(true);
              }}
            >
              <img src={wearables} alt="" className="mx-auto" />
            </div>
            <h6 className="pt-1">Wearables</h6>
          </div>
          <div className="text-center py-2 p-0 d-flex align-items-center justify-content-center flex-column">
            <div
              className={`${styles.startUp} rounded-circle d-flex justify-content-center align-items-center`}
              id="agency"
              onClick={() => {
                setStartUp("agency");
                setButtonActive(true);
              }}
            >
              <img src={agency} alt="" className="mx-auto" />
            </div>
            <h6 className="pt-1">Agency</h6>
          </div>
          <div className="text-center py-2 p-0 d-flex align-items-center justify-content-center flex-column">
            <div
              className={`${styles.startUp} rounded-circle d-flex justify-content-center align-items-center`}
              id="marketing"
              onClick={() => {
                setStartUp("marketing");
                setButtonActive(true);
              }}
            >
              <img src={marketing} alt="" className="mx-auto" />
            </div>
            <h6 className="pt-1">Marketing</h6>
          </div>

          <div className="text-center py-2 p-0 d-flex align-items-center justify-content-center flex-column">
            <div
              className={`${styles.startUp} rounded-circle d-flex justify-content-center align-items-centere`}
              id="services"
              onClick={() => {
                setStartUp("services");
                setButtonActive(true);
              }}
            >
              <img src={services} alt="" className="mx-auto" />
            </div>
            <h6 className="pt-1">Services</h6>
          </div>
          <div className="text-center py-2 p-0 d-flex align-items-center justify-content-center flex-column">
            <div
              className={`${styles.startUp} rounded-circle d-flex justify-content-center align-items-center`}
              id="saas"
              onClick={() => {
                setStartUp("saas");
                setButtonActive(true);
              }}
            >
              <img src={saas} alt="" className="mx-auto" />
            </div>
            <h6 className="pt-1">SAAS</h6>
          </div>
          <div className="text-center py-2 p-0 d-flex align-items-center justify-content-center flex-column">
            <div
              className={`${styles.startUp} rounded-circle mt-4 p-4 d-flex justify-content-center align-items-center`}
              id="consumer"
              onClick={() => {
                setStartUp("consumer");
                setButtonActive(true);
              }}
            >
              <img src={consumer} alt="" className="mx-auto img-fluid" />
            </div>
            <h6 className="pt-1">Consumer Products</h6>
          </div>
          <div className="text-center py-2 p-0 d-flex align-items-center justify-content-center flex-column">
            <div
              className={`${styles.startUp} rounded-circle d-flex justify-content-center align-items-center`}
              id="others"
              onClick={() => {
                setStartUp("others");
                setButtonActive(true);
              }}
            >
              <img src={others} alt="" className="mx-auto" />
            </div>
            <h6 className="pt-1">Other</h6>
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
