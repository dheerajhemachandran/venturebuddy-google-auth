import React, { useEffect, useState } from "react";
import eyeImage from "./../../Assets/images/eye.png";
import styles from "./RegisterPass.module.css";

const stars = [];
const passwordChars = [];

const RegisterPass = () => {
  const [display, setDisplay] = useState("block");
  const passwordValidate =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
  const passwordField = document.getElementById("passwordField2");

  const [isVisible, setPasswordVisibility] = useState(false);

  if (document.getElementById("register-left")) {
    document.getElementById("register-left").style.display = display;
  }

  const submitPassword = () => {
    if (passwordChars.join("").length >= 6) {
      if (passwordValidate.test(passwordChars.join(""))) {
        setDisplay("none");
        document.getElementById("next").click();
        document
          .getElementById("Register_registerRight__IOYTK")
          .classList.remove("col-md-7");
        document
          .getElementById("Register_registerLeft__hroVu")
          .classList.remove("d-md-block");
      } else {
        passwordField.setCustomValidity("Try to create a stronger password");
        passwordField.reportValidity();
      }
    } else {
      passwordField.setCustomValidity(
        "Password should be at least 6 character long"
      );
      passwordField.reportValidity();
    }
  };

  useEffect(() => {
    const img = document.createElement("img");
    if (isVisible) {
      img.src = eyeImage;
      img.width = 20;
      document.getElementById(styles.eye).innerHTML = "";
      document.getElementById(styles.eye).appendChild(img);
    } else {
      document.getElementById(styles.eye).innerHTML = "";
      const i = document.createElement("i");
      i.classList.add("fas");
      i.classList.add("fa-eye-slash");
      document.getElementById(styles.eye).appendChild(i);
    }
  }, [isVisible]);

  const createPassword = (e) => {
    if (e.nativeEvent.data !== null) {
      stars.push("*");
      passwordChars.push(e.target.value.split("").pop());
      document.getElementById("passwordField2").value = stars.join("");
    } else {
      stars.pop();
      passwordChars.pop();
      document.getElementById("passwordField2").value = stars.join("");
    }
  };

  const createEncodedPassword = (e) => {
    if (e.nativeEvent.data !== null) {
      passwordChars.push(e.target.value.split("").pop());
      stars.push("*");
      e.target.value = stars.join("");
      document.getElementById("passwordField").value = passwordChars.join("");
    } else {
      passwordChars.pop();
      stars.pop();
      e.target.value = stars.join("");

      document.getElementById("passwordField").value = passwordChars.join("");
    }
  };

  return (
    <div className="text-dark" id={styles.registerPass}>
      <h1>Signup</h1>
      <h6>Set Password</h6>

      <div id={styles.password}>
        <input
          type="text"
          className="form-control p-3 position-absolute"
          id="passwordField"
          autoComplete="off"
          placeholder="your password"
          onChange={(e) => createPassword(e)}
          required
          style={isVisible ? { zIndex: 1 } : { zIndex: 0 }}
        />
        <input
          type="text"
          className="form-control p-3 position-absolute"
          id="passwordField2"
          autoComplete="off"
          placeholder="your password"
          onChange={(e) => createEncodedPassword(e)}
          style={isVisible ? { zIndex: 0 } : { zIndex: 1 }}
          required
        />

        <label id={styles.eye} htmlFor={styles.check}>
          <i className="fas fa-eye"></i>
        </label>

        <input
          type="checkbox"
          id={styles.check}
          onChange={() =>
            setPasswordVisibility(document.getElementById(styles.check).checked)
          }
        />
      </div>

      <div className="mt-5 pt-3">
        <h6 className="pt-4 pb-2">Referral Code (Optional)</h6>
        <input
          type="text"
          className="form-control p-3"
          placeholder="Your referral code"
          id="referral"
        />
      </div>
      <input
        type="submit"
        className="btn-blue w-100 mt-4"
        onClick={submitPassword}
        value="NEXT"
      />
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
        id="next"
      ></button>
    </div>
  );
};

export default RegisterPass;
