import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "./../../Assets/images/logo.png";
import styles from "./Navbar.module.css";

const Navbar = ({ arrowVisibility, setArrowVisibility }) => {
  const links = document.getElementsByClassName("nav-link");
  const location = useLocation();

  const registerEmailActiveness = document.getElementById("register-email-page")
    ?.classList[1];

  useEffect(() => {
    for (let i = 0; i <= links.length; i++) {
      links[i]?.addEventListener("click", () => {
        i === 0
          ? (document.getElementById("hello").style.display = "block")
          : (document.getElementById("hello").style.display = "none");
      });
    }
  }, [links]);

  useEffect(() => {
    if (
      location.pathname === "/register" &&
      registerEmailActiveness === "active"
    ) {
      setArrowVisibility(false);
    } else {
      setArrowVisibility(true);
    }

    if (location.pathname !== "/register") {
      setArrowVisibility(false);
    }
  }, [registerEmailActiveness, location.pathname]);

  return (
    <div className={`bg-white sticky-top py-0`}>
      <div
        className={`container-fluid bg-blue text-white text-center text-uppercase ${
          location.pathname === "/" ? "d-block" : "d-none"
        }`}
        id="hello"
      >
        Calculate the valuation of your business in just 15 minutes.{" "}
        <a className="text-white" href="#">
          Click here
        </a>
      </div>
      <nav
        className={`navbar navbar-expand-lg fw-bold mt-0 px-lg-5`}
        id={styles.navbar}
      >
        <div
          className="col-4 col-lg-2 order-1 mx-auto fixed-sm-top mx-lg-0 order-lg-0 position-absolute top-0 my-3 ms-lg-5 ps-lg-5"
          id={styles.logo}
        >
          <NavLink to="/">
            <img src={logo} className="img-fluid col-8" alt="" />
          </NavLink>
        </div>
        <div className="container-fluid py-0">
          <button
            className="carousel-control-prev text-dark d-lg-none mt-5"
            type="button"
            data-bs-target="#carouselExampleControls2"
            data-bs-slide="prev"
            id="prev2"
            style={arrowVisibility ? { display: "block" } : { display: "none" }}
          >
            &#x2794;
          </button>

          <button
            className="navbar-toggler border-0 col-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
            id="toggler"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ms-auto gap-4 mb-2 mb-lg-0">
              <li className="nav-item text-light py-0">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item text-light py-0">
                <NavLink className="nav-link" to="/invest">
                  Invest and Raise
                </NavLink>
              </li>
              <li className="nav-item text-light py-0">
                <NavLink className="nav-link" to="/valuation">
                  Valuation calculator
                </NavLink>
              </li>
              <li className="nav-item text-light py-0 border-bottom d-lg-none border-3">
                <NavLink className="nav-link" to="/contact">
                  Contact us
                </NavLink>
              </li>
              <li className="nav-item text-light">
                <NavLink
                  className="py-0 nav-link border-end d-none d-lg-block border-3"
                  style={{ marginTop: 9, paddingRight: "32px" }}
                  to="/contact"
                >
                  Contact us
                </NavLink>
              </li>
              <li className="py-0 my-auto">
                <NavLink className="nav-link" to="/login">
                  Login & Signup
                </NavLink>
              </li>
              <li
                className="nav-item px-4 ps-4 py-0"
                id={styles.animatedButton}
              >
                <div className={styles.outline}></div>
                <a
                  href="https://tiny-marzipan-457afd.netlify.app/"
                  className={`${styles.liveDeals}`}
                >
                  Live Deals
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
