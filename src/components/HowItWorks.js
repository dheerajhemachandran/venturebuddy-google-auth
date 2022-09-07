import React from "react";
import HowItWorks1 from "./../images/how-it-works-1.png";
import HowItWorks2 from "./../images/how-it-works-2.png";
import HowItWorks3 from "./../images/how-it-works-3.png";
import HowItWorks4 from "./../images/how-it-works-4.png";

const HowItWorks = () => {
  return (
    <div id="how-it-works">
      <div className="container-fluid col-lg-7 col-11 mt-5">
        <div className="text-center">
          <h1 className="text-center text-blue">How It Works</h1>
          <p>Get Started in 4 easy steps</p>

          <div className="text-start">
            <div className="row row-cols-1 row-cols-lg-2 align-items-center justify-content-center">
              <div className="col order-2 order-lg-0">
                <div className="col-12 col-lg-8 mx-auto">
                  <h1 className="text-blue text-start fw-bolder">1</h1>
                  <h2 className="fw-bolder">Become an Investor</h2>
                  <div className="">
                    <hr className="w-25" />
                  </div>
                  <p className="">
                    Easy and safe payment methods to begin your investment
                    journey
                  </p>
                </div>
              </div>
              <div className="col">
                <img src={HowItWorks1} alt="" className="img-fluid" />
              </div>
            </div>

            <div className="row row-cols-1 row-cols-lg-2 align-items-center justify-content-center">
              <div className="col">
                <img src={HowItWorks2} alt="" className="img-fluid" />
              </div>
              <div className="col">
                <div className="col-12 col-lg-8 mx-auto">
                  <h1 className="text-blue text-start fw-bolder">2</h1>
                  <h2 className="fw-bolder">Explore startups</h2>
                  <div className="">
                    <hr className="w-25" />
                  </div>
                  <p className="">
                    Search and select from handpicked list of promising
                    startups.
                  </p>
                </div>
              </div>
            </div>

            <div className="row row-cols-1 row-cols-lg-2 align-items-center justify-content-center">
              <div className="col order-2 order-lg-0">
                <div className="col-12 col-lg-8 mx-auto">
                  <h1 className="text-blue text-start fw-bolder">3</h1>
                  <h2 className="fw-bolder">Get your agreements</h2>
                  <div className="">
                    <hr className="w-25" />
                  </div>
                  <p className="">Hassle free paper work</p>
                </div>
              </div>
              <div className="col">
                <img src={HowItWorks3} alt="" className="img-fluid" />
              </div>
            </div>

            <div className="row row-cols-1 row-cols-lg-2 align-items-center justify-content-center">
              <div className="col">
                <img src={HowItWorks4} alt="" className="img-fluid" />
              </div>
              <div className="col">
                <div className="col-12 col-lg-8 mx-auto">
                  <h1 className="text-blue text-start fw-bolder">4</h1>
                  <h2 className="fw-bolder">Relax and earn 10x return</h2>
                  <div className="">
                    <hr className="w-25" />
                  </div>
                  <p className="">
                    Easy and safe payment methods investment journey
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-5 py-5 bg-green text-white" id="counts">
        <div className="container-fluid px-5">
          <div className="row row-cols-4">
            <div className="d-flex align-items-center justify-content-center">
              <h1 className="fw-bolder">1.8B</h1>
              <h6 className="ms-3">Total Valuation</h6>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <h1 className="fw-bolder">200+</h1>
              <h6 className="ms-3">Businesses assisted all over an India</h6>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <h1 className="fw-bolder">60+</h1>
              <h6 className="ms-3">Valued Startups</h6>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <h1 className="fw-bolder">15</h1>
              <h6 className="ms-3">Industries</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
