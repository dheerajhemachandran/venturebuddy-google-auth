import React, { useEffect, useState } from "react";

const OTP = ({ phoneOrEmail }) => {
  const [digitOne, setDigitOne] = useState("");
  const [digitTwo, setDigitTwo] = useState("");
  const [digitThree, setDigitThree] = useState("");
  const [digitFour, setDigitFour] = useState("");
  const [error, setError] = useState(false);

  const checkOTP = () => {
    const result = digitOne + digitTwo + digitThree + digitFour;

    // here dynamic value can be use for checking the otp
    result === "1234" ? setError(false) : setError(true);
  };

  useEffect(() => {
    if (error) {
      for (const items of document.getElementsByClassName("otp")) {
        items.style.color = "#FF2A2A";
        items.style.border = "3px solid #FF2A2A";
      }
    } else {
      for (const items of document.getElementsByClassName("otp")) {
        items.style.border = "3px solid #d9d9d9";
        items.style.color = "#d9d9d9";
      }
    }
  }, [error]);

  const handleDigitOne = (e) => {
    if (e !== null) {
      document.getElementById("digit1").style.border = "3px solid #283891";
      document.getElementById("digit1").style.color = "#283891";
      document.getElementById("digit2").focus();
    } else {
      document.getElementById("digit1").style.border = "1px solid #d9d9d9";
    }
  };
  const handleDigitTwo = (e) => {
    if (e !== null) {
      document.getElementById("digit2").style.border = "3px solid #283891";
      document.getElementById("digit2").style.color = "#283891";

      document.getElementById("digit3").focus();
    } else {
      document.getElementById("digit1").focus();
      document.getElementById("digit2").style.border = "1px solid #d9d9d9";
    }
  };
  const handleDigitThree = (e) => {
    if (e !== null) {
      document.getElementById("digit3").style.border = "3px solid #283891";
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
      document.getElementById("digit4").style.border = "3px solid #283891";
      document.getElementById("digit4").style.color = "#283891";
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <div
        id="login-right"
        className="col-10 mx-auto rounded-4 rounded-md-0 col-md-10 d-flex align-items-center justify-content-center"
      >
        <div>
          <p className="text-center col-7 mx-auto fw-bold">
            Please enter the OTP sent to {phoneOrEmail}.{" "}
            <span className="btn btn-outline-blue py-1 px-2 mt-0">Change</span>
          </p>
          <h6 className="mt-4 fw-bolder ps-1">Enter OTP</h6>
          <div className="row row-cols-4 justify-content-between px-3">
            <input
              type="text"
              maxLength={1}
              onChange={(e) => {
                setDigitOne(e.target.value);
                handleDigitOne(e.nativeEvent.data);
              }}
              id="digit1"
              className="otp"
            />
            <input
              type="text"
              maxLength={1}
              onChange={(e) => {
                setDigitTwo(e.target.value);
                handleDigitTwo(e.nativeEvent.data);
              }}
              id="digit2"
              className="otp"
            />
            <input
              type="text"
              maxLength={1}
              onChange={(e) => {
                setDigitThree(e.target.value);
                handleDigitThree(e.nativeEvent.data);
              }}
              id="digit3"
              className="otp"
            />
            <input
              type="text"
              maxLength={1}
              onChange={(e) => {
                setDigitFour(e.target.value);
                handleDigitFour(e.nativeEvent.data);
              }}
              id="digit4"
              className="otp"
            />
          </div>

          {error ? (
            <p className="mt-2" id="error">
              Please enter a valid PIN
            </p>
          ) : (
            ""
          )}

          <button className="btn-blue w-100 mx-1 mt-3" onClick={checkOTP}>
            VERIFY
          </button>
          <p className="text-center">
            Not Received Your Code?
            <br />
            <span className="btn btn-outline-blue py-1 px-2 mt-0 fw-bold">
              Resend Code
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OTP;
