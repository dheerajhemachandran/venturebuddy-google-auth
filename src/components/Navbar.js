import React from "react";
import logo from "./../images/logo.png";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-white py-4 fixed-top fw-bold">
      <div class="container-fluid mx-0 mx-lg-5">
        <div className="col-1">
          <img src={logo} className="img-fluid col-12" alt="" />
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
            <li class="nav-item text-light px-4 py-0">
              <a class="nav-link" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item text-light px-4 py-0">
              <a class="nav-link" href="#">
                Invest and Raise
              </a>
            </li>
            <li class="nav-item text-light px-4 py-0">
              <a class="nav-link" href="#">
                Valuation Calculation
              </a>
            </li>
            <li class="nav-item text-light mx-4 py-0 border-bottom d-lg-none border-3">
              <a class="nav-link" href="#">
                Contact Us
              </a>
            </li>
            <li class="nav-item text-light">
              <a
                class="px-4 py-0 nav-link border-end d-none d-lg-block border-3"
                style={{ marginTop: 9 }}
                href="#"
              >
                Contact Us
              </a>
            </li>
            <li class="nav-item text-light px-4 py-0">
              <a class="nav-link text-green" href="#">
                Login & SignUp
              </a>
            </li>
            <li class="nav-item text-light px-4 py-0">
              <a class="nav-link btn btn-green px-4 py-2 text-light" href="#">
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
