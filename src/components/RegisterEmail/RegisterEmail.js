import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import gIcon from "./../../Assets/icons/google-icon.png";
import styles from "./RegisterEmail.module.css";

const RegisterEmail = ({
  setEmail,
  setPhone,
  emailValidate,
  setName,
  setEmailOrPhone,
}) => {
  const [method, setMethod] = useState("email");

  useEffect(() => {
    document.getElementById("email2")?.click();
  }, [document.getElementById("email2")]);

  useEffect(() => {
    document.getElementById("email").click();
  }, []);

  useEffect(() => {
    if (method === "phone") {
      document.getElementById("email-input").style.display = "none";
      document.getElementById("mobile-input").style.display = "block";
      document.getElementById("email-input-2").style.display = "none";
      document.getElementById("mobile-input-2").style.display = "block";
    }
    if (method === "email") {
      document.getElementById("mobile-input").style.display = "none";
      document.getElementById("email-input").style.display = "block";
      document.getElementById("mobile-input-2").style.display = "none";
      document.getElementById("email-input-2").style.display = "block";
    }
  }, [method]);

  return (
    <>
      <form
        className="my-auto d-none d-lg-flex flex-column justify-content-between text-dark"
        onSubmit={(e) => e.preventDefault()}
        id={styles.registerEmail}
      >
        <h1 className="my-0">Signup</h1>
        <p className="pb-3 fw-normal">Let’s get you started.</p>
        <h6 className="pb-2">Full Name</h6>

        <input
          id="name"
          type="text"
          placeholder="Your full name"
          className="form-control px-4 py-3"
          name="name"
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
          <div id="email-input">
            <input
              type="email"
              id="register-email"
              className="form-control px-4 py-3"
              placeholder="Your email address"
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailOrPhone(e.target.value);
              }}
              required
            />
          </div>
          <div id="mobile-input">
            <input
              type="phone"
              id="register-phone"
              className="form-control px-4 py-3"
              placeholder="Your mobile number"
              onChange={(e) => {
                setPhone(e.target.value);
                setEmailOrPhone(e.target.value);
              }}
              required
            />
          </div>
        </div>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls2"
          data-bs-slide="next"
          id="next"
        ></button>

        <input
          type="submit"
          value="NEXT"
          onClick={emailValidate}
          className="w-100 btn-blue fw-bolder mt-3"
          id="continue"
        />

        <p className="text-center" id={styles.or}>
          OR
        </p>

        <button className="btn-outline-blue w-100">
          <img src={gIcon} className="img-fluid me-3" width={20} alt="" />
          <span id={styles.google}>Signup with Google</span>
        </button>

        <p className="text-center" id="signUp">
          Already have an account?{" "}
          <Link to="/login" className="text-green">
            Login
          </Link>
        </p>
      </form>

      <form
        className="my-auto d-flex d-lg-none flex-column justify-content-between text-dark px-3 bg-white"
        onSubmit={(e) => e.preventDefault()}
        id={styles.registerEmail}
      >
        <div className="signup-heading">
          <h1 className="my-0">Signup</h1>
          <p className="fw-normal my-0">Let’s get you started.</p>
        </div>
        <h6>Full Name</h6>

        <input
          id="name"
          type="text"
          placeholder="Your full name"
          className="form-control px-4 py-3"
          name="name"
          onChange={(e) => setName(e.target.value)}
          required
        />

        <div className="row row-cols-2">
          <div className="d-flex align-items-center py-3">
            <input
              id="email2"
              name="method2"
              className="border"
              type="radio"
              onChange={() => setMethod("email")}
            />
            <label htmlFor="email2" className="ms-2" value="Email Address">
              Email Address
            </label>
          </div>
          <div className="d-flex align-items-center py-3">
            <input
              id="phone2"
              name="method2"
              type="radio"
              onChange={() => setMethod("phone")}
            />
            <label htmlFor="phone2" className="ms-2" value="Mobile Number">
              Mobile Number
            </label>
          </div>
        </div>

        <div id="email-or-mobile">
          <div id="email-input-2">
            <input
              type="email"
              id="register-email"
              className="form-control px-4 py-3"
              placeholder="Your email address"
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailOrPhone(e.target.value);
              }}
              required
            />
          </div>
          <div id="mobile-input-2">
            <input
              type="phone"
              id="register-phone"
              className="form-control px-4 py-3"
              placeholder="Your mobile number"
              onChange={(e) => {
                setPhone(e.target.value);
                setEmailOrPhone(e.target.value);
              }}
              required
            />
          </div>
        </div>
        <button
          className="carousel-control-next mt-3"
          type="button"
          data-bs-target="#carouselExampleControls2"
          data-bs-slide="next"
          id="next2"
        ></button>

        <input
          type="submit"
          value="NEXT"
          onClick={emailValidate}
          className="w-100 btn-blue fw-bolder"
          id="continue"
        />

        <p className="text-center" id={styles.or}>
          OR
        </p>

        <button className="btn-outline-blue w-100">
          <img src={gIcon} className="img-fluid me-3" width={20} alt="" />
          <span id={styles.google}>Signup with Google</span>
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
