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
    const items = document.getElementsByClassName(styles.active);
    let item = [];

    if (!document.getElementById(id).classList.contains(styles.active)) {
      document.getElementById(id).classList.add(styles.active);
      item = [...items];
      item.length > 0 ? setButtonActive(true) : setButtonActive(false);
    } else {
      document.getElementById(id).classList.remove(styles.active);

      item = [...items];
      item.length > 0 ? setButtonActive(true) : setButtonActive(false);
    }
  };

  const nextOfDeals = () => {
    document.getElementById("next").click();
  };

  return (
    <div className="text-dark pt-4 ms-lg-4" id={styles.typeOfStartUps}>
      <h5 className="text-center">
        What type of startups are you looking for?
      </h5>

      <div className="row text-blue text-dark pt-5 pb-0 mb-0">
        <div
          className="row row-cols-3 row-cols-md-5 justify-content-center align-items-start gap-0 mx-auto"
          id={styles.startUpContainer}
        >
          <div
            className={`${styles.startUp} text-center py-2 p-0 d-flex align-items-center justify-content-center flex-column`}
            id="technology"
          >
            <div
              className={`${styles.startUpImg} rounded-circle d-flex justify-content-center align-items-center`}
              onClick={() => {
                setStartUp("technology");
              }}
            >
              <img src={technology} alt="" className="mx-auto" />
            </div>
            <h6 className={`pt-1 ${styles.startUpText}`}>Technology</h6>
          </div>
          <div
            className={`${styles.startUp} text-center py-2 p-0 d-flex align-items-center justify-content-center flex-column`}
            id="ecommerce"
          >
            <div
              className={`${styles.startUpImg} rounded-circle d-flex justify-content-center align-items-center`}
              onClick={() => {
                setStartUp("ecommerce");
              }}
            >
              <img src={ecommerce} alt="" className="mx-auto" />
            </div>
            <h6 className={`pt-1 ${styles.startUpText}`}>ECommerce</h6>
          </div>
          <div
            className={`${styles.startUp} text-center py-2 p-0 d-flex align-items-center justify-content-center flex-column`}
            id="wearables"
          >
            <div
              className={`${styles.startUpImg} rounded-circle d-flex justify-content-center align-items-center`}
              onClick={() => {
                setStartUp("wearables");
              }}
            >
              <img src={wearables} alt="" className="mx-auto" />
            </div>
            <h6 className={`pt-1 ${styles.startUpText}`}>Wearables</h6>
          </div>
          <div
            className={`${styles.startUp} text-center py-2 p-0 d-flex align-items-center justify-content-center flex-column`}
            id="agency"
          >
            <div
              className={`${styles.startUpImg} rounded-circle d-flex justify-content-center align-items-center`}
              onClick={() => {
                setStartUp("agency");
              }}
            >
              <img src={agency} alt="" className="mx-auto" />
            </div>
            <h6 className={`pt-1 ${styles.startUpText}`}>Agency</h6>
          </div>
          <div
            className={`${styles.startUp} text-center py-2 p-0 d-flex align-items-center justify-content-center flex-column`}
            id="marketing"
          >
            <div
              className={`${styles.startUpImg} rounded-circle d-flex justify-content-center align-items-center`}
              onClick={() => {
                setStartUp("marketing");
              }}
            >
              <img src={marketing} alt="" className="mx-auto" />
            </div>
            <h6 className={`pt-1 ${styles.startUpText}`}>Marketing</h6>
          </div>

          <div
            className={`${styles.startUp} text-center py-2 p-0 d-flex align-items-center justify-content-center flex-column`}
            id="services"
          >
            <div
              className={`${styles.startUpImg} rounded-circle d-flex justify-content-center align-items-centere`}
              onClick={() => {
                setStartUp("services");
              }}
            >
              <img src={services} alt="" className="mx-auto" />
            </div>
            <h6 className={`pt-1 ${styles.startUpText}`}>Services</h6>
          </div>
          <div
            className={`${styles.startUp} text-center py-2 p-0 d-flex align-items-center justify-content-center flex-column`}
            id="saas"
          >
            <div
              className={`${styles.startUpImg} rounded-circle d-flex justify-content-center align-items-center`}
              onClick={() => {
                setStartUp("saas");
              }}
            >
              <img src={saas} alt="" className="mx-auto" />
            </div>
            <h6 className={`pt-1 ${styles.startUpText}`}>SAAS</h6>
          </div>
          <div
            className={`${styles.startUp} text-center py-2 p-0 d-flex align-items-center justify-content-center flex-column`}
            id="consumer"
          >
            <div
              className={`${styles.startUpImg} rounded-circle mt-sm-0 p-4 d-flex justify-content-center align-items-center`}
              onClick={() => {
                setStartUp("consumer");
              }}
            >
              <img src={consumer} alt="" className="mx-auto img-fluid" />
            </div>
            <h6 className={`pt-1 ${styles.startUpText}`}>
              Consumer <br /> Products
            </h6>
          </div>
          <div
            className={`${styles.startUp} text-center py-2 p-0 d-flex align-items-center justify-content-center flex-column`}
            id="others"
          >
            <div
              className={`${styles.startUpImg} rounded-circle d-flex justify-content-center align-items-center`}
              onClick={() => {
                setStartUp("others");
              }}
            >
              <img src={others} alt="" className="mx-auto" />
            </div>
            <h6 className={`pt-1 ${styles.startUpText}`}>Other</h6>
          </div>
        </div>
        <div className="text-center pb-3">
          <button
            className={`btn btn-blue py-3 ${buttonActive ? "" : "disabled"}`}
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
