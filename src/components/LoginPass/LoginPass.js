import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import eyeImage from "./../../Assets/images/eye.png";
import styles from "./LoginPass.module.css";

const stars = [];
const passwordChars = [];

const LoginPass = ({ email }) => {
  const navigate = useNavigate("");
  const passwordValidate =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
  const passwordField = document.getElementById("passwordField2");

  const [isVisible, setPasswordVisibility] = useState(false);

  const submitPassword = () => {
    if (passwordChars.join("").length >= 6) {
      if (passwordValidate.test(passwordChars.join(""))) {
        // login with email and password functionalities will go here

        navigate("/");
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
    <div id={styles.LoginRight} className="text-dark">
      <h1>Login</h1>
      <h6 style={{ fontWeight: 500, marginTop: 18, marginBottom: 12 }}>
        Password
      </h6>
      <div id={styles.password}>
        <input
          type="text"
          className="form-control p-3 position-absolute"
          id="passwordField"
          placeholder="your password"
          onChange={(e) => createPassword(e)}
          required
          style={isVisible ? { zIndex: 1 } : { zIndex: 0 }}
        />
        <input
          type="text"
          className="form-control p-3 position-absolute"
          id="passwordField2"
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

      <input
        type="submit"
        value="LOGIN"
        className="w-100 btn-blue fw-bold"
        id={styles.input}
        onClick={submitPassword}
      />
      <p className={`text-center text-dark ${styles.or}`}>OR</p>

      <button
        className="carousel-control-next btn-outline-blue w-100 p-3"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        Request OTP
      </button>

      <p className="text-center text-dark fw-bold">
        Don’t have an account?{" "}
        <Link to="/register" className="text-green">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default LoginPass;
