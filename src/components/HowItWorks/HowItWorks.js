import React from "react";
import HowItWorks1 from "./../../Assets/images/how-it-works-1.png";
import HowItWorks2 from "./../../Assets/images/how-it-works-2.png";
import HowItWorks3 from "./../../Assets/images/how-it-works-3.png";
import HowItWorks4 from "./../../Assets/images/how-it-works-4.png";
import styles from "./HowItWorks.module.css";
import HowItWorksItem from "./HowItWorksItem";

const HowItWorks = () => {
  const items = [
    {
      id: 1,
      heading: "Become an Investor",
      paragraph:
        "Easy and safe payment methods to begin your investment journey",
      image: HowItWorks1,
      reverse: false,
    },
    {
      id: 2,
      heading: "Explore startups",
      paragraph:
        "Search and select from handpicked  list of promising startups.",
      image: HowItWorks2,
      reverse: true,
    },
    {
      id: 3,
      heading: "Get your agreements",
      paragraph: "Hassle free paper work",
      image: HowItWorks3,
      reverse: false,
    },
    {
      id: 4,
      heading: "Relax and earn 10x return",
      paragraph: "Easy and safe payment methods investment journey",
      image: HowItWorks4,
      reverse: true,
    },
  ];

  return (
    <div id={styles.howItWorks}>
      <div className="container-fluid col-lg-7 col-11 mt-5">
        <div className="text-center">
          <h1 className="text-center text-blue fw-bold">How It Works</h1>
          <p>Get Started in 4 easy steps</p>

          <div className="text-start">
            {items.map((item) => (
              <HowItWorksItem
                key={item.id}
                serial={item.id}
                heading={item.heading}
                paragraph={item.paragraph}
                image={item.image}
                reverse={item.reverse}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="my-5 py-5 bg-green text-white" id="counts">
        <div className="container-fluid px-5">
          <div className="row row-cols-1 row-cols-lg-4">
            <div className="d-flex align-items-center justify-content-center flex-column flex-lg-row my-3">
              <h1 className="fw-bolder">1.8B</h1>
              <h6 className="ms-3">Total Valuation</h6>
            </div>
            <div className="d-flex align-items-center justify-content-center flex-column flex-lg-row my-3">
              <h1 className="fw-bolder">200+</h1>
              <h6 className="ms-3">Businesses assisted all over an India</h6>
            </div>
            <div className="d-flex align-items-center justify-content-center flex-column flex-lg-row my-3">
              <h1 className="fw-bolder">60+</h1>
              <h6 className="ms-3">Valued Startups</h6>
            </div>
            <div className="d-flex align-items-center justify-content-center flex-column flex-lg-row my-3">
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
