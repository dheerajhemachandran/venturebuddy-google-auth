import React, { useState } from "react";

const TypeOfDeals = () => {
  const [buttonActive, setButtonActive] = useState(false);
  const setRetailActive = () => {
    document.getElementById("retail").classList.add("active");
    document.getElementById("angel").classList.remove("active");
  };

  const setAngelActive = () => {
    document.getElementById("retail").classList.remove("active");
    document.getElementById("angel").classList.add("active");
  };

  const nextOfDeals = () => {
    document.getElementById("next").click();
  };

  return (
    <div className="text-dark mt-5" id="typeofdeals">
      <h6 className="text-center">What type of deals are you looking for?</h6>

      <div className="row justify-content-center gap-5 text-blue my-5 py-5">
        <div
          id="retail"
          className="col-4 bg-white border-1 border border-secondary rounded-4 deal"
          onClick={() => {
            setRetailActive();
            setButtonActive(true);
          }}
        >
          <div className="p-4">
            <h5>Retail Investor</h5> <p>upto ₹ 2 lakhs </p>
          </div>
        </div>
        <div
          className="col-4 bg-white border-1 border border-secondary rounded-4 p-4 deal"
          id="angel"
          onClick={() => {
            setAngelActive();
            setButtonActive(true);
          }}
        >
          <h5>Angel Investor</h5> <p>above ₹ 2 lakhs </p>
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
