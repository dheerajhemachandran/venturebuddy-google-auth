import React, { useEffect, useRef, useState } from "react";
import RegisterEmail from "../../components/RegisterEmail/RegisterEmail";
import RegisterVerification from "../../components/RegisterVerification/RegisterVerification";
import RegisterPass from "../../components/RegisterPass/RegisterPass";
import loginImage from "./../../Assets/images/login-image.png";
import TypeOfDeals from "../../components/TypeOfDeals/TypeOfDeals";
import TypeOfStartUps from "../../components/TypeOfStartUps/TypeOfStartUps";
import TermsAndCondition from "../../components/TermsAndCondition/TermsAndCondition";
import styles from "./Register.module.css";

const Register = () => {
  const [name, setName] = useState("");
  const { pass, setPass } = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const emailValidation =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
  const phoneValidation = /^((\+91)?|91|91\s|\+91\s)?[789][0-9]{9}/g;
  const nameValidation = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/;

  const emailValidate = () => {
    document.getElementById("toggler").style.display = "none";
    document.getElementById("prev2").style.display = "block";

    if (emailValidation.test(email) && nameValidation.test(name)) {
      document.getElementById("next").click();
      document.getElementById("next2").click();
      clearTimer(getDeadTime());
    }
    if (!emailValidation.test(email)) {
      document
        .getElementById("register-email")
        .setCustomValidity("Please enter a valid email address");
    }
    if (!nameValidation.test(name)) {
      document
        .getElementById("name")
        .setCustomValidity("Your Name is not correct");
    }

    if (phoneValidation.test(phone) && nameValidation.test(name)) {
      document.getElementById("next").click();
      clearTimer(getDeadTime());
    }
    if (!phoneValidation.test(phone)) {
      document
        .getElementById("register-phone")
        .setCustomValidity("Please enter a valid phone number");
    }
  };

  const [timer, setTimer] = useState("00:00");

  const Ref = useRef(null);

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    return {
      total,
      minutes,
      seconds,
    };
  };

  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };

  const clearTimer = (e) => {
    setTimer("00:30");

    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();

    deadline.setSeconds(deadline.getSeconds() + 30);
    return deadline;
  };

  const onClickReset = () => {
    clearTimer(getDeadTime());
  };

  const sendOTP = () => {
    onClickReset();
  };

  return (
    <div className="container px-0 pt-2 pt-lg-5" id="register">
      <div className="row mx-auto col-12 col-lg-9 justify-content-center">
        <div
          className="text-center col-5 d-none d-md-block"
          id={styles.registerLeft}
        >
          <p className="text-white" id={styles.registerPara}>
            “Don't shoot your shot, without testing your aim”
          </p>
          <img src={loginImage} className="mx-auto" alt="" />
        </div>

        <div className="col-12 col-md-7" id={styles.registerRight}>
          <div
            id="carouselExampleControls2"
            className="carousel slide"
            data-loop="false"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" id="register-email-page">
                <RegisterEmail
                  setName={setName}
                  setEmail={setEmail}
                  setPhone={setPhone}
                  setEmailOrPhone={setEmailOrPhone}
                  emailValidate={emailValidate}
                />
              </div>
              <div className="carousel-item">
                <RegisterVerification
                  email={emailOrPhone}
                  timer={timer}
                  sendOTP={sendOTP}
                />
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
