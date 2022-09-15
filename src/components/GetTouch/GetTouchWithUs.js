import React from "react";
import styles from "./GetTouch.module.css";

const GetTouchWithUs = () => {
  return (
    <div className="container my-5 py-5">
      <h1 className="text-blue text-center" id={styles.getTouchHeader}>
        Get Touch With Us
      </h1>
      <p
        className="text-center col-12 col-lg-5 mx-auto"
        id={styles.getTouchPara}
      >
        We are here to help and answer any questions you might have or any
        services you are looking for!
      </p>

      <form className="col-11 p-5 rounded-4 mx-auto border my-4" action="">
        <div className="col-12 col-lg-10 mx-auto row justify-content-between px-1">
          <div className="col-12 col-lg-6 pe-lg-4">
            <label htmlFor="name" className={`form-label ${styles.label}`}>
              Name
            </label>
            <div class="mb-3">
              <input
                type="text"
                class="form-control p-3"
                id="name"
                placeholder="Enter your name"
                aria-describedby="basic-addon3"
              />
            </div>
          </div>
          <div className="col-12 col-lg-6 ps-lg-4">
            <label htmlFor="email" className={`form-label ${styles.label}`}>
              Email ID
            </label>
            <div class="mb-3">
              <input
                type="text"
                class="form-control p-3"
                id="email"
                placeholder="Enter your email Id"
                aria-describedby="basic-addon3"
              />
            </div>
          </div>
        </div>
        <div className="col-lg-10 mx-auto px-3">
          <input type="submit" value="SEND" className="btn btn-blue col-12" />
        </div>
      </form>
    </div>
  );
};

export default GetTouchWithUs;
