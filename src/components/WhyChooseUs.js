import React from "react";
import HasselessProject from "./../images/Hasseless-Process.png";
import investorDashboard from "./../images/investor-dashboard.png";
import periodic from "./../images/periodic-reports.png";
import buddies from "./../images/genuine-startups.png";
import WhyChooseCard from "./WhyChooseCard";

const WhyChooseUs = () => {
  const servicess = [
    {
      id: 1,
      img: HasselessProject,
      header: "1. Hasseless Process",
      description:
        "Innovation plays an important role in our business services and solutions",
    },
    {
      id: 2,
      img: investorDashboard,
      header: "2. Investor Dashboards",
      description:
        "Venture Buddy is one of the most affordable consulting services out there, with the best value for your money.",
    },
    {
      id: 1,
      img: periodic,
      header: "3. Periodic Reports",
      description:
        "Venturebuddy's team of industry experts & consultants is committed to providing high-quality service to take your business to the next level.",
    },
    {
      id: 1,
      img: buddies,
      header: "4. Verified and Genuine Startups",
      description:
        "We offer end-to-end business consulting services to help you in all stages of your company's growth.",
    },
    {
      id: 1,
      img: buddies,
      header: "5. Venturebuddy’s Tools valuation tool access for Lifetime",
      description:
        "We offer end-to-end business consulting services to help you in all stages of your company's growth.",
    },
  ];

  return (
    <section className="text-center" id="why-choose-us">
      <div className="col-6 mx-auto container">
        <h1>Why Businesses Choose Us</h1>
        <p>
          At VentureBuddy, we believe that the success of your business is our
          success. That's why we work closely with you, to help you succeed.
        </p>
      </div>

      <div className="container">
        <div className="row row-cols-3 justify-content-center mt-5">
          {servicess.map((item) => (
            <WhyChooseCard
              img={item.img}
              header={item.header}
              desc={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
