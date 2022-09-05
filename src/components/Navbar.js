import React from "react";
import { Link } from "react-router-dom";
import logo from "./../images/logo.png";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-white py-4 fixed-top fw-bold">
      <div class="container-fluid px-lg-5 mx-lg-5 px-4">
        <div className="col-4 col-lg-2">
          <Link to="/">
            <img src={logo} className="img-fluid col-8" alt="" />
          </Link>
        </div>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item text-light py-0">
              <Link class="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item text-light py-0">
              <Link class="nav-link" to="/">
                Invest and Raise
              </Link>
            </li>
            <li class="nav-item text-light py-0">
              <Link class="nav-link" to="/">
                Valuation Calculation
              </Link>
            </li>
            <li class="nav-item text-light py-0 border-bottom d-lg-none border-3">
              <Link class="nav-link" to="/">
                Contact Us
              </Link>
            </li>
            <li class="nav-item text-light">
              <Link
                class="py-0 nav-link border-end d-none d-lg-block border-3"
                style={{ marginTop: 9, paddingRight: "32px" }}
                to="/"
              >
                Contact Us
              </Link>
            </li>
            <li class="py-0 my-auto">
              <Link
                class="text-green nav-link"
                to="/login"
                style={{ marginLeft: 16 }}
              >
                Login & SignUp
              </Link>
            </li>
            <li class="nav-item ps-4 py-0">
              <Link class="nav-link btn btn-green px-4 py-2" to="/">
                Live Deals
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
