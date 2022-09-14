import React, { useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "./../../Assets/images/logo.png";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const links = document.getElementsByClassName("nav-link");
  const location = useLocation();
  useEffect(() => {
    for (let i = 0; i <= links.length; i++) {
      links[i]?.addEventListener("click", () => {
        i === 0
          ? (document.getElementById("hello").style.display = "block")
          : (document.getElementById("hello").style.display = "none");
      });
    }
  }, [links]);

  return (
    <div className={`bg-white sticky-top px-5`}>
      <nav className={`navbar navbar-expand-lg fw-bold mt-0 ${styles.navbar}`}>
        <div className="container-fluid">
          <div className="col-4 col-lg-2">
            <NavLink to="/">
              <img src={logo} className="img-fluid col-8" alt="" />
            </NavLink>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item px-4 text-light py-0">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item px-4 text-light py-0">
                <NavLink className="nav-link" to="/invest">
                  Invest and Raise
                </NavLink>
              </li>
              <li className="nav-item px-4 text-light py-0">
                <NavLink className="nav-link" to="/valuation">
                  Valuation Calculator
                </NavLink>
              </li>
              <li className="nav-item px-4 text-light py-0 border-bottom d-lg-none border-3">
                <NavLink className="nav-link" to="/contact">
                  Contact us
                </NavLink>
              </li>
              <li className="nav-item px-4 text-light">
                <NavLink
                  className="py-0 nav-link border-end d-none d-lg-block border-3"
                  style={{ marginTop: 9, paddingRight: "32px" }}
                  to="/contact"
                >
                  Contact us
                </NavLink>
              </li>
              <li className="py-0 my-auto">
                <NavLink
                  className="text-green nav-link"
                  to="/login"
                  style={{ marginLeft: 16 }}
                >
                  Login & SignUp
                </NavLink>
              </li>
              <li className="nav-item px-4 ps-4 py-0">
                <div className="position-relative">
                  <div className="outline mx-auto"></div>
                  <Link
                    to="/"
                    className="btn btn-green rounded-pill mx-auto px-4 py-2 w-100"
                  >
                    Live deals
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
