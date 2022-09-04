import React, { useState } from "react";
import gIcon from "./../icons/google-icon.png";

const LoginEmail = ({ setPhoneOrEmail }) => {
  const emailValidation =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
  const phoneValidation = /^((\+91)?|91|91\s|\+91\s)?[789][0-9]{9}/g;

  const [emailOrPhone, setEmailOrPhone] = useState("");

  const emailValidate = (e) => {
    e.preventDefault();

    if (phoneValidation.test(emailOrPhone)) {
      document.getElementById("next").click();
    } else {
      if (emailValidation.test(emailOrPhone)) {
        document.getElementById("next").click();
      } else {
        document
          .getElementById("emailOrPhone")
          .setCustomValidity("Email Or Phone Not Valid");
        document.getElementById("emailOrPhone").reportValidity();
      }
    }
  };

  return (
    <div>
      <div id="login-right" className="col-10">
        <form className="my-auto d-flex flex-column justify-content-between">
          <h1>Login</h1>
          <h6>Email ID or Mobile number</h6>
          <input
            type="text"
            className="form-control p-3"
            id="emailOrPhone"
            onChange={(e) => {
              setEmailOrPhone(e.target.value);
              setPhoneOrEmail(e.target.value);
            }}
            placeholder="Email ID or Mobile number"
            required
          />
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
            id="next"
          ></button>

          <input
            type="submit"
            value="CONTINUE"
            onClick={emailValidate}
            className="w-100 btn-blue fw-bolder"
            id="continue"
          />

          <p className="text-center or">OR</p>

          <button className="btn-outline-blue w-100">
            <img src={gIcon} className="img-fluid me-3" width={20} alt="" />
            Login with Google
          </button>

          <p className="text-center" id="signUp">
            Don't Have an Account?{" "}
            <a href="##" className="text-green">
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginEmail;
