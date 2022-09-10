import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import gIcon from "./../icons/google-icon.png";

const RegisterEmail = ({ setEmailOrPhone, emailValidate, setName }) => {
  const [method, setMethod] = useState("email");

  useEffect(() => {
    document.getElementById("email").click();
  }, []);

  useEffect(() => {
    if (method === "phone") {
      document.getElementById("email-input").style.display = "none";
      document.getElementById("mobile-input").style.display = "block";
    }
    if (method === "email") {
      document.getElementById("mobile-input").style.display = "none";
      document.getElementById("email-input").style.display = "block";
    }
  }, [method]);

  return (
    <>
      <form
        className="my-auto d-flex flex-column justify-content-between text-dark"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="my-0 h1 fw-bolder pb-4">Signup</h1>
        <h6 className="pb-2">Full Name</h6>

        <input
          id="name"
          type="text"
          placeholder="Your full name"
          className="form-control px-4 py-3"
          onChange={(e) => setName(e.target.value)}
          required
        />

        <div className="row row-cols-2">
          <div className="d-flex align-items-center py-3">
            <input
              id="email"
              name="method"
              className="border"
              type="radio"
              onChange={() => setMethod("email")}
            />
            <label htmlFor="email" className="ms-2" value="Email Address">
              Email Address
            </label>
          </div>
          <div className="d-flex align-items-center py-3">
            <input
              id="phone"
              name="method"
              type="radio"
              onChange={() => setMethod("phone")}
            />
            <label htmlFor="phone" className="ms-2" value="Mobile Number">
              Mobile Number
            </label>
          </div>
        </div>

        <div id="email-or-mobile">
          <div id="mobile-input">
            <input
              type="text"
              id="register-email"
              className="form-control px-4 py-3"
              placeholder="Your mobile number"
              onChange={(e) => setEmailOrPhone(e.target.value)}
              required
            />
          </div>
          <div id="email-input">
            <input
              type="email"
              id="register-phone"
              className="form-control px-4 py-3"
              placeholder="Your email address"
              onChange={(e) => setEmailOrPhone(e.target.value)}
              required
            />
          </div>
        </div>
        <button
          className="carousel-control-next mt-3"
          type="button"
          data-bs-target="#carouselExampleControls2"
          data-bs-slide="next"
          id="next"
        ></button>

        <input
          type="submit"
          value="NEXT"
          onClick={emailValidate}
          className="w-100 btn-blue fw-bolder"
          id="continue"
        />

        <p className="text-center or">OR</p>

        <button className="btn-outline-blue w-100">
          <img src={gIcon} className="img-fluid me-3" width={20} alt="" />
          Signup with Google
        </button>

        <p className="text-center" id="signUp">
          Already have an account?{" "}
          <Link to="/login" className="text-green">
            Login
          </Link>
        </p>
      </form>
    </>
  );
};

export default RegisterEmail;
