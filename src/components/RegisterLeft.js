import React from "react";
import loginImage from "./../images/login-image.png";

const RegisterLeft = () => {
  return (
    <div className="text-center col-5 d-none d-md-block" id="login-left">
      <p className="text-white mx-auto col-9">
        “Don't shoot your shot, without testing your aim”
      </p>
      <img src={loginImage} id="loginImage" className="mx-auto col-6" alt="" />
    </div>
  );
};

export default RegisterLeft;
