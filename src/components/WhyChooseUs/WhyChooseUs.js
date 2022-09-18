import React from "react";
import HasselessProject from "./../../Assets/images/Hasseless-Process.png";
import investorDashboard from "./../../Assets/images/investor-dashboard.png";
import periodic from "./../../Assets/images/periodic-reports.png";
import buddies from "./../../Assets/images/genuine-startups.png";
import verfiedStartups from "./../../Assets/images/verified-startups.png";
import WhyChooseCard from "./WhyChooseCard";
import styles from "./WhyChooseUs.module.css";

const WhyChooseUs = () => {
  const servicess = [
    {
      id: 1,
      imgId: "hasseless",
      img: HasselessProject,
      header: "1. Hasseless Process",
      description:
        "Innovation plays an important role in our business services and solutions",
    },
    {
      id: 2,
      imgId: "investor",
      img: investorDashboard,
      header: "2. Investor Dashboards",
      description:
        "Venture Buddy is one of the most affordable consulting services out there, with the best value for your money.",
    },
    {
      id: 3,
      imgId: "periodic",
      img: periodic,
      header: "3. Periodic Reports",
      description:
        "Venturebuddy's team of industry experts & consultants is committed to providing high-quality service to take your business to the next level.",
    },
    {
      id: "rocket",
      imgId: "verified",
      img: verfiedStartups,
      header: "4. Verified and Genuine Startups",
      description:
        "We offer end-to-end business consulting services to help you in all stages of your company's growth.",
    },
    {
      id: 5,
      imgId: "buddies",
      img: buddies,
      header: "5. Venturebuddy’s Tools valuation tool access for Lifetime",
      description:
        "We offer end-to-end business consulting services to help you in all stages of your company's growth.",
    },
  ];

  return (
    <section className="text-center" id={styles.whyChooseUs}>
      <div className="col-10 col-lg-6 mx-auto container">
        <h1 className={styles.sectionHeader}>Why businesses choose us</h1>
        <p className={`col-9 mx-auto ${styles.sectionText}`}>
          At VentureBuddy, we believe that the success of your business is our
          success. That's why we work closely with you, to help you succeed.
        </p>
      </div>

      <div className="container">
        <div className="row row-cols-1 row-cols-lg-3 justify-content-center align-items-baseline mt-5">
          {servicess.map((item) => (
            <WhyChooseCard
              id={item.id}
              img={item.img}
              header={item.header}
              desc={item.description}
              imgId={item.imgId}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
