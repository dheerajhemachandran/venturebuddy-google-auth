import { useState } from "react";
import "./App.css";
import LoginEmail from "./components/LoginEmail";
import LoginPass from "./components/LoginPass";
import Navbar from "./components/Navbar";
import OTP from "./components/OTP";
import loginImage from "./images/login-image.png";

function App() {
  const [password, setPassword] = useState("");
  const [phoneOrEmail, setPhoneOrEmail] = useState("");

  return (
    <>
      <Navbar></Navbar>

      <div className="container">
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

          <div className="col-12 col-md-7" id="login-right">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-loop="false"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <LoginEmail setPhoneOrEmail={setPhoneOrEmail}></LoginEmail>
                </div>
                <div className="carousel-item">
                  <LoginPass setPassword={setPassword}></LoginPass>
                </div>
                <div className="carousel-item">
                  <OTP phoneOrEmail={phoneOrEmail}></OTP>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
