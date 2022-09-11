import React, { useEffect, useState } from "react";
import styles from "./OTP.module.css";

const OTP = ({ phoneOrEmail }) => {
  const [digitOne, setDigitOne] = useState("");
  const [digitTwo, setDigitTwo] = useState("");
  const [digitThree, setDigitThree] = useState("");
  const [digitFour, setDigitFour] = useState("");
  const [error, setError] = useState(false);

  const checkOTP = (e) => {
    e.preventDefault();
    const result = digitOne + digitTwo + digitThree + digitFour;

    // here dynamic value can be use for checking the otp
    result === "1234" ? setError(false) : setError(true);
  };

  useEffect(() => {
    if (error) {
      for (const items of document.getElementsByClassName(styles.otp)) {
        items.style.color = "#FF2A2A";
        items.style.border = "1px solid #FF2A2A";
      }
    } else {
      for (const items of document.getElementsByClassName(styles.otp)) {
        items.style.border = "1px solid #d9d9d9";
        items.style.color = "#d9d9d9";
      }
    }
  }, [error]);

  const handleDigitOne = (e) => {
    if (e !== null) {
      document.getElementById("digit1").style.border = "1px solid #283891";
      document.getElementById("digit1").style.color = "#283891";
      document.getElementById("digit2").focus();
    } else {
      document.getElementById("digit1").style.border = "1px solid #d9d9d9";
    }
  };
  const handleDigitTwo = (e) => {
    if (e !== null) {
      document.getElementById("digit2").style.border = "1px solid #283891";
      document.getElementById("digit2").style.color = "#283891";

      document.getElementById("digit3").focus();
    } else {
      document.getElementById("digit1").focus();
      document.getElementById("digit2").style.border = "1px solid #d9d9d9";
    }
  };
  const handleDigitThree = (e) => {
    if (e !== null) {
      document.getElementById("digit3").style.border = "1px solid #283891";
      document.getElementById("digit3").style.color = "#283891";

      document.getElementById("digit4").focus();
    } else {
      document.getElementById("digit2").focus();
      document.getElementById("digit3").style.border = "1px solid #d9d9d9";
    }
  };
  const handleDigitFour = (e) => {
    if (e === null) {
      document.getElementById("digit3").focus();
      document.getElementById("digit4").style.border = "1px solid #d9d9d9";
    } else {
      document.getElementById("digit4").style.border = "1px solid #283891";
      document.getElementById("digit4").style.color = "#283891";
    }
  };

  return (
    <div id={styles.loginRight} className="rounded-4 rounded-md-0 text-dark">
      <div className="mx-0 px-0 h-100">
        <p className="text-center fw-bold mt-5 pt-3">
          Please enter the OTP sent to <br /> {phoneOrEmail}.
          <span className="text-blue py-1 px-1">Change</span>
        </p>
        <h6 className="mt-4 fw-bolder ps-1" style={{ marginTop: "32px" }}>
          Enter OTP
        </h6>
        <form style={{ marginTop: 10 }} onSubmit={checkOTP}>
          <div className="row row-cols-4 justify-content-between px-3">
            <input
              type="text"
              maxLength={1}
              onChange={(e) => {
                setDigitOne(e.target.value);
                handleDigitOne(e.nativeEvent.data);
              }}
              id="digit1"
              className={styles.otp}
            />
            <input
              type="text"
              maxLength={1}
              onChange={(e) => {
                setDigitTwo(e.target.value);
                handleDigitTwo(e.nativeEvent.data);
              }}
              id="digit2"
              className={styles.otp}
            />
            <input
              type="text"
              maxLength={1}
              onChange={(e) => {
                setDigitThree(e.target.value);
                handleDigitThree(e.nativeEvent.data);
              }}
              id="digit3"
              className={styles.otp}
            />
            <input
              type="text"
              maxLength={1}
              onChange={(e) => {
                setDigitFour(e.target.value);
                handleDigitFour(e.nativeEvent.data);
              }}
              id="digit4"
              className={styles.otp}
            />
          </div>

          {error ? <p id="error">Please enter a valid PIN</p> : ""}

          <input
            type="submit"
            className={`btn-blue w-100 ${error ? "mt-0" : ""}`}
            onClick={checkOTP}
            value="VERIFY"
          />
        </form>
        <p
          className="text-center w-100 ms-1"
          style={{ fontSize: "15px", fontWeight: 600, marginTop: 24 }}
        >
          Not received your code?
          <span className="text-green py-1 px-2 mt-0 cursor-pointer">
            Resend Code
          </span>
        </p>
      </div>
    </div>
  );
};

export default OTP;
