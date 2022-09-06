import React from "react";
import uberEats from "./../images/uber-eats.png";
import insights from "./../images/insights.png";
import barcharts from "./../images/bar-charts.png";

const Header = () => {
  return (
    <header className="container">
      <div className="row align-items-center">
        <div className="col-6">
          <div className="text-blue">THE INVESTMENT PLATFORM</div>
          <h2>Start investing and earning money now.</h2>
          <p className="pt-2">
            Start Uber Eats is an online food ordering and delivery platform
            launched by Uber in 2014.
          </p>

          <a href="#" className="btn btn-secondary-blue mt-3">
            Become an Investor
          </a>
        </div>
        <div className="col-6">
          <div className="col-10 border border-1 p-3 rounded-4">
            <div>
              <div className="position-relative">
                <img src={uberEats} className="img-fluid rounded-4" alt="" />
                <div className="position-absolute bottom-0 text-white p-4 ps-5">
                  <h3>Uber Eats</h3>
                  <p className="text-white">
                    Uber Eats is an online food ordering and delivery platform
                    launched by Uber in 2014.
                  </p>
                </div>
              </div>
            </div>
            <img className="border-image" id="insights" src={insights} alt="" />
            <img
              className="border-image"
              id="bar-charts"
              src={barcharts}
              alt=""
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
