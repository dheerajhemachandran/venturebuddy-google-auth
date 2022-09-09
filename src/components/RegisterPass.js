import React, { useEffect, useState } from "react";
import eyeImage from "./../images/eye.png";

const RegisterPass = ({ setPassword }) => {
  const [isVisible, setPasswordVisibility] = useState(false);
  const [eye, setEye] = useState("eye");

  const submitPassword = () => {
    document.getElementById("next").click();

    document.getElementById("login-left").style.width = 0;
    document.getElementById("register-right").classList.remove("col-md-7");
    // document.getElementById("register-right").classList.add("col-md-7");
  };

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
    <div className="text-dark">
      <h1 className="my-0 h1 fw-bolder pb-4">Signup</h1>
      <h6 className="pb-2 fw-bold">Set Password</h6>

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

      <h6 className="pt-4 pb-2">
        <span className="fw-bold">Referral Code</span> (Optional)
      </h6>
      <input
        type="text"
        className="form-control p-3"
        placeholder="Your referral code"
      />

      <input
        type="submit"
        className="btn-blue w-100"
        onClick={submitPassword}
        value="NEXT"
      />
      <button
        className="carousel-control-next mt-3"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
        id="next"
      ></button>
    </div>
  );
};

export default RegisterPass;
