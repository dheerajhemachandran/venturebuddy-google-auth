import React from "react";

const HowItWorksItem = ({ serial, heading, paragraph, image, reverse }) => {
  return (
    <div className="row row-cols-1 row-cols-lg-2 align-items-center justify-content-center">
      {reverse ? (
        <>
          <div className="col px-0">
            <img src={image} alt="" className="img-fluid" />
          </div>
          <div className="col order-2 order-lg-0 ps-5">
            <div className="col-12 col-lg-9">
              <h1 className="text-blue text-start fw-bolder">{serial}</h1>
              <h2 className="fw-bolder">{heading}</h2>
              <div className="">
                <hr className="w-25" />
              </div>
              <p className="">{paragraph}</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="col order-2 order-lg-0 ps-5 ">
            <div className="col-12 col-lg-9">
              <h1 className="text-blue text-start fw-bolder">{serial}</h1>
              <h2 className="fw-bolder">{heading}</h2>
              <div className="">
                <hr className="w-25" />
              </div>
              <p className="">{paragraph}</p>
            </div>
          </div>
          <div className="col">
            <img src={image} alt="" className="img-fluid" />
          </div>
        </>
      )}
    </div>
  );
};

export default HowItWorksItem;
