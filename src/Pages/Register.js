import React, { useState } from "react";
import RegisterEmail from "../components/RegisterEmail";
import loginImage from "./../images/login-image.png";

const Register = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [method, setMethod] = useState("email");

  const emailValidation =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
  const phoneValidation = /^((\+91)?|91|91\s|\+91\s)?[789][0-9]{9}/g;

  const emailValidate = () => {
    if (phoneValidation.test(emailOrPhone)) {
      document.getElementById("next").click();
    } else {
      if (emailValidation.test(emailOrPhone)) {
        document.getElementById("next").click();
      } else {
        document
          .getElementById("email-input")
          .setCustomValidity("Email Or Phone Not Valid");
        document.getElementById("email-input").reportValidity();
      }
    }
  };

  return (
    <div
      className="container"
      id="register"
      style={{ height: "100vh", display: "flex", alignItems: "center" }}
    >
      <div className="row login-form mx-auto col-12 col-lg-8">
        <div className="text-center col-5 d-none d-md-block" id="login-left">
          <p className="text-white mx-auto col-9">
            “Don't shoot your shot, without testing your aim”
          </p>
          <img
            src={loginImage}
            id="loginImage"
            className="mx-auto col-6"
            alt=""
          />
        </div>

        <div className="col-12 col-md-7" id="register-right">
          <div
            id="carouselExampleControls2"
            className="carousel slide"
            data-loop="false"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                {/* <LoginEmail setPhoneOrEmail={setPhoneOrEmail}></LoginEmail> */}
                <RegisterEmail
                  setEmailOrPhone={setEmailOrPhone}
                  emailValidate={emailValidate}
                />
              </div>
              <div className="carousel-item">
                {/* <LoginPass setPassword={setPassword}></LoginPass> */}
              </div>
              <div className="carousel-item">
                {/* <OTP phoneOrEmail={phoneOrEmail}></OTP> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
