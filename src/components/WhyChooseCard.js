import React from "react";

const WhyChooseCard = ({ img, header, desc }) => {
  return (
    <div className="col why-choose-card">
      <div className="col-10 mx-auto">
        <img src={img} alt="" className="img-fluid" />
        <h2 className="col-8 mx-auto">{header}</h2>
        <p className="col-10 mx-auto">{desc}</p>
      </div>
    </div>
  );
};

export default WhyChooseCard;
