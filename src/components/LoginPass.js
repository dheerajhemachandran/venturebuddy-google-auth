import React, { useEffect, useState } from "react";
import eyeImage from "./../Assets/images/eye.png";

const LoginPass = ({ setPassword }) => {
  const [isVisible, setPasswordVisibility] = useState(false);
  const [eye, setEye] = useState("eye");

  useEffect(() => {
    const img = document.createElement("img");
    if (isVisible) {
      document.getElementById("passwordField").type = "text";

      img.src = eyeImage;
      img.width = 18;
      document.getElementById("eye").innerHTML = "";
      document.getElementById("eye").appendChild(img);
    } else {
      document.getElementById("eye").innerHTML = "";
      const i = document.createElement("i");
      i.classList.add("fas");
      i.classList.add("fa-eye-slash");
      document.getElementById("eye").appendChild(i);
      document.getElementById("passwordField").type = "password";
    }
  }, [isVisible]);

  return (
    <>
      <div id="login-right">
        <>
          <h1>Login</h1>
          <h6 style={{ fontWeight: 500, marginTop: 18, marginBottom: 12 }}>
            Password
          </h6>
          <div id="password">
            <input
              type="password"
              className="form-control p-3"
              id="passwordField"
              placeholder="your password"
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
            Don’t have an account?{" "}
            <a href="#" className="text-green">
              Sign Up
            </a>
          </p>
        </>
      </div>
    </>
  );
};

export default LoginPass;
