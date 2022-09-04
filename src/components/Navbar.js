import React from "react";
import logo from "./../images/logo.png";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-white py-4 fixed-top fw-bold">
      <div class="container-fluid px-lg-5 mx-lg-5 px-4">
        <div className="col-4 col-lg-2">
          <img src={logo} className="img-fluid col-8" alt="" />
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
              <a class="nav-link" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item text-light py-0">
              <a class="nav-link" href="#">
                Invest and Raise
              </a>
            </li>
            <li class="nav-item text-light py-0">
              <a class="nav-link" href="#">
                Valuation Calculation
              </a>
            </li>
            <li class="nav-item text-light py-0 border-bottom d-lg-none border-3">
              <a class="nav-link" href="#">
                Contact Us
              </a>
            </li>
            <li class="nav-item text-light">
              <a
                class="py-0 nav-link border-end d-none d-lg-block border-3"
                style={{ marginTop: 9, paddingRight: "32px" }}
                href="#"
              >
                Contact Us
              </a>
            </li>
            <li class="py-0 my-auto">
              <a
                class="text-green nav-link"
                href="#"
                style={{ marginLeft: 16 }}
              >
                Login & SignUp
              </a>
            </li>
            <li class="nav-item ps-4 py-0">
              <a class="nav-link btn btn-green px-4 py-2" href="#">
                Live Deals
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
