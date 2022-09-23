import { useState } from "react";
import OTP from "../../components/OTP/OTP";
import loginImage from "./../../Assets/images/login-image.png";
import LoginPass from "./../../components/LoginPass/LoginPass";
import LoginEmail from "./../../components/LoginEmail/LoginEmail";
import styles from "./Login.module.css";

const Login = () => {
  const [password, setPassword] = useState("");
  const [phoneOrEmail, setPhoneOrEmail] = useState("");

  return (
    <div className="container">
      <div className="row login-form mx-auto my-5 col-12 col-lg-8">
        <div
          className="text-center col-5 d-none d-md-block"
          id={styles.loginLeft}
        >
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

        <div className="col-12 col-md-7" id={styles.loginRight}>
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-loop="false"
            // data-bs-ride="true"
          >
            <div class="carousel-indicators bg-primary">
              <button
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide-to="0"
                class="active d-none"
                id="slide1"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide-to="1"
                class="d-none"
                id="slide2"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide-to="2"
                aria-label="Slide 3"
                class="d-none"
                id="slide3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" id={styles.carouselItem}>
                <LoginEmail setPhoneOrEmail={setPhoneOrEmail}></LoginEmail>
              </div>
              <div className="carousel-item" id={styles.carouselItem}>
                <LoginPass
                  setPassword={setPassword}
                  email={phoneOrEmail}
                ></LoginPass>
              </div>
              <div className="carousel-item" id={styles.carouselItem}>
                <OTP phoneOrEmail={phoneOrEmail}></OTP>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
