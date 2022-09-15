import React, { useState } from "react";
import RegisterEmail from "../../components/RegisterEmail/RegisterEmail";
import RegisterVerification from "../../components/RegisterVerification/RegisterVerification";
import RegisterPass from "../../components/RegisterPass/RegisterPass";
import loginImage from "./../../Assets/images/login-image.png";
import TypeOfDeals from "../../components/TypeOfDeals/TypeOfDeals";
import TypeOfStartUps from "../../components/TypeOfStartUps/TypeOfStartUps";
import TermsAndCondition from "../../components/TermsAndCondition/TermsAndCondition";
import styles from "./Register.module.css";

const Register = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [name, setName] = useState("");
  const { pass, setPass } = useState("");

  const emailValidation =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
  const phoneValidation = /^((\+91)?|91|91\s|\+91\s)?[789][0-9]{9}/g;
  const nameValidation = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/;

  const emailValidate = () => {
    if (!nameValidation.test(name)) {
      document
        .getElementById("name")
        .setCustomValidity("Please enter your name correctly");
    }

    if (!emailOrPhone) {
      document
        .getElementById("register-email")
        .setCustomValidity("Please Enter Your Email");
      document
        .getElementById("register-phone")
        .setCustomValidity("Please Enter Your Phone Number");
    }

    if (phoneValidation.test(emailOrPhone) && nameValidation.test(name)) {
      document.getElementById("next").click();
    } else {
      if (emailValidation.test(emailOrPhone) && nameValidation.test(name)) {
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
    <div className="container" id="register">
      <div className="row mt-5 mx-auto col-12 col-lg-9">
        <div
          className="text-center col-4 d-none d-md-block"
          id={styles.registerLeft}
        >
          <p className="text-white mx-4" id={styles.registerPara}>
            “Don't shoot your shot, without testing your aim”
          </p>
          <img src={loginImage} className="mx-auto col-6" alt="" />
        </div>

        <div className="col-12 col-md-7" id={styles.registerRight}>
          <div
            id="carouselExampleControls2"
            className="carousel slide"
            data-loop="false"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <RegisterEmail
                  setName={setName}
                  setEmailOrPhone={setEmailOrPhone}
                  emailValidate={emailValidate}
                />
              </div>
              <div className="carousel-item">
                <RegisterVerification email={emailOrPhone} />
              </div>
              <div className="carousel-item">
                <RegisterPass setPassword={setPass} />
              </div>
              <div className="carousel-item">
                <TypeOfDeals />
              </div>
              <div className="carousel-item">
                <TypeOfStartUps />
              </div>
              <div className="carousel-item" id={styles.termsContainer}>
                <TermsAndCondition />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
