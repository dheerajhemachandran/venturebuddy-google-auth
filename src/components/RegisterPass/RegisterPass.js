import React, { useEffect, useState } from "react";
import eyeImage from "./../../Assets/images/eye.png";
import styles from "./RegisterPass.module.css";

const RegisterPass = () => {
  const [isVisible, setPasswordVisibility] = useState(false);
  const [eye, setEye] = useState("eye");
  const [display, setDisplay] = useState("block");

  if (document.getElementById("register-left")) {
    document.getElementById("register-left").style.display = display;
  }

  const submitPassword = () => {
    setDisplay("none");
    document.getElementById("register-right").classList.remove("col-md-7");
    document.getElementById("next").click();
    document
      .getElementById("Register_registerLeft__hroVu")
      .classList.remove("d-md-block");
  };

  useEffect(() => {
    const img = document.createElement("img");
    if (isVisible) {
      document.getElementById("passwordField").type = "text";

      img.src = eyeImage;
      img.width = 18;
      document.getElementById(styles.eye).innerHTML = "";
      document.getElementById(styles.eye).appendChild(img);
    } else {
      document.getElementById(styles.eye).innerHTML = "";
      const i = document.createElement("i");
      i.classList.add("fas");
      i.classList.add("fa-eye-slash");
      document.getElementById(styles.eye).appendChild(i);
      document.getElementById("passwordField").type = "password";
    }
  }, [isVisible]);

  return (
    <div className="text-dark">
      <h1 className="my-0 h1 fw-bolder pb-4">Signup</h1>
      <h6 className="pb-2 fw-bold">Set Password</h6>

      <div id={styles.password}>
        <input
          type="password"
          className="form-control p-3"
          id="passwordField"
          placeholder="your password"
          required
        />
        <label id={styles.eye} htmlFor={styles.check}>
          <i className={`fas fa-${eye}`}></i>
        </label>
        <input
          type="checkbox"
          id={styles.check}
          onChange={() =>
            setPasswordVisibility(document.getElementById(styles.check).checked)
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
