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

        <div className="col-12 col-md-7" id={styles.loginRight}>
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-loop="false"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" id={styles.carouselItem}>
                <LoginEmail setPhoneOrEmail={setPhoneOrEmail}></LoginEmail>
              </div>
              <div className="carousel-item" id={styles.carouselItem}>
                <LoginPass setPassword={setPassword}></LoginPass>
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
