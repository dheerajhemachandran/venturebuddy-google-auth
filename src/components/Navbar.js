import React from "react";
import logo from "./../images/logo.png";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-light px-0 px-lg-5 fixed-top">
      <div class="container-fluid mx-5">
        <a class="navbar-brand" href="#">
          <img src={logo} className="col-5" alt="" />
        </a>
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
            <li class="nav-item px-4">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item px-4">
              <a class="nav-link" href="#">
                Invest and Raise
              </a>
            </li>
            <li class="nav-item px-4">
              <a class="nav-link" href="#">
                Valuation Calculation
              </a>
            </li>
            <li class="nav-item px-4 border-bottom d-lg-none border-2">
              <a class="nav-link" href="#">
                Contact Us
              </a>
            </li>
            <li class="nav-item px-4 border-end d-none d-lg-block border-2">
              <a class="nav-link" href="#">
                Contact Us
              </a>
            </li>
            <li class="nav-item px-4">
              <a class="nav-link text-green" href="#">
                Login & SignUp
              </a>
            </li>
            <li class="nav-item px-4">
              <a class="nav-link btn btn-green px-4 text-white" href="#">
                Live Demo
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
