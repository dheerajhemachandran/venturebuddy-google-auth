import React, { useEffect, useState } from "react";

const LoginPass = ({ setPassword }) => {
  const [isVisible, setPasswordVisibility] = useState(false);
  const [eye, setEye] = useState("eye");

  useEffect(() => {
    if (isVisible) {
      document.getElementById("passwordField").type = "text";
      setEye("eye");
    } else {
      setEye("eye-slash");
      document.getElementById("passwordField").type = "password";
    }
  }, [isVisible]);

  return (
    <div className="d-flex justify-content-center">
      <div id="login-right" className="col-10">
        <div>
          <h3>Login</h3>
          <div id="password">
            <input
              type="password"
              className="form-control p-3"
              id="passwordField"
              placeholder="Your Password"
              onBlur={(e) => setPassword(e.target.value)}
              required
            />
            <label id="eye" htmlFor="check">
              <i className={`fa fa-${eye}`}></i>
            </label>
            <input
              type="checkbox"
              id="check"
              onChange={() =>
                setPasswordVisibility(document.getElementById("check").checked)
              }
            />
          </div>

          <input type="submit" value="LOGIN" className="w-100 btn-blue" />
          <p id="or" className="text-center">
            OR
          </p>

          <button
            className="carousel-control-next btn-outline-blue w-100 p-3"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            Request OTP
          </button>

          <p className="text-center fw-bold">
            Don't Have an Account?{" "}
            <a href="#" className="text-blue">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPass;
