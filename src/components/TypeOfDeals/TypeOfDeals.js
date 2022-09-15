import React, { useState } from "react";
import styles from "./TypeOfDeals.module.css";

const TypeOfDeals = () => {
  console.log(styles);
  const [buttonActive, setButtonActive] = useState(false);

  const setRetailActive = () => {
    document.getElementById(styles.retail).classList.add(styles.active);
    document.getElementById(styles.angel).classList.remove(styles.active);
  };

  const setAngelActive = () => {
    document.getElementById(styles.retail).classList.remove(styles.active);
    document.getElementById(styles.angel).classList.add(styles.active);
  };

  const nextOfDeals = () => {
    document.getElementById("next").click();
  };

  return (
    <div className="text-dark mt-5" id={styles.typeOfDeals}>
      <h5 className="text-center">What type of deals are you looking for?</h5>

      <div
        id={styles.types}
        className="row row-cols-2 justify-content-center text-blue py-5 m-5 text-center"
      >
        <div
          className={`bg-white border-1 border border-secondary rounded-4 ${styles.deal}`}
          id={styles.retail}
          onClick={() => {
            setRetailActive();
            setButtonActive(true);
          }}
        >
          <h6>Retail Investor</h6> <p>upto ₹ 2 lakhs </p>
        </div>
        <div
          className={`bg-white border-1 border border-secondary rounded-4 ${styles.deal}`}
          id={styles.angel}
          onClick={() => {
            setAngelActive();
            setButtonActive(true);
          }}
        >
          <h6>Angel Investor</h6> <p>above ₹ 2 lakhs </p>
        </div>
        <div className="text-center">
          <button
            className={`btn btn-blue px-4 ${buttonActive ? "" : "disabled"}`}
            onClick={nextOfDeals}
          >
            Next
          </button>

          <button
            className="carousel-control-next mt-3"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
            id="next"
          ></button>
        </div>
      </div>
    </div>
  );
};

export default TypeOfDeals;
