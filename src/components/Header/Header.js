import React from "react";
import HeaderCarousel from "../HeaderCarousel/HeaderCarousel";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className="container-fluid" id={styles.header}>
      <div className="row align-items-center">
        <div className="order-2 col-12 col-lg-5 order-lg-0 py-5">
          <h6 className="text-blue" id={styles.h6}>
            THE INVESTMENT PLATFORM
          </h6>
          <h2 className={styles.h2}>Start investing and earning money now.</h2>
          <p className={`pt-2 ${styles.p}`}>
            Start Uber Eats is an online food ordering and delivery platform
            launched by Uber in 2014.
          </p>

          <a
            href="#"
            className="btn btn-secondary-blue mt-3"
            id={styles.btnText}
          >
            Become an Investor
          </a>
        </div>

        <div className="col-12 col-lg-7 mx-lg-auto">
          <div className="col-12 col-lg-8 ms-0 ms-lg-auto me-lg-5 mt-3 pe-0 pe-lg-5">
            <HeaderCarousel />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
