import React, { useEffect, useState } from "react";
import eyeImage from "./../images/eye.png";

const LoginPass = ({ setPassword }) => {
  const [isVisible, setPasswordVisibility] = useState(false);
  const [eye, setEye] = useState("eye");

  useEffect(() => {
    const img = document.createElement("img");
    if (isVisible) {
      document.getElementById("passwordField").type = "text";

      img.src = eyeImage;
      img.width = 20;
      document.getElementById("eye").innerHTML = "";
      document.getElementById("eye").appendChild(img);
      document.getElementById("eye").style.paddingRight = "2px";
    } else {
      document.getElementById("eye").innerHTML = "";
      const i = document.createElement("i");
      i.classList.add("fas");
      i.classList.add("fa-eye-slash");
      i.style.marginTop = "6px";
      document.getElementById("eye").appendChild(i);
      document.getElementById("passwordField").type = "password";
    }
  }, [isVisible]);

  return (
    <div>
      <div id="login-right" className="col-10">
        <div>
          <h1>Login</h1>
          <h6>Your Password</h6>
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
              <i className={`fas fa-${eye}`}></i>
            </label>
            <input
              type="checkbox"
              id="check"
              onChange={() =>
                setPasswordVisibility(document.getElementById("check").checked)
              }
            />
          </div>

          <input
            type="submit"
            value="LOGIN"
            className="w-100 btn-blue fw-bold"
          />
          <p className="text-center or">OR</p>

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
            <a href="#" className="text-green">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPass;
