import React from "react";

const GetTouchWithUs = () => {
  return (
    <div className="container">
      <h1 className="text-blue fw-bold text-center">Get Touch With Us</h1>
      <p className="text-center col-12 col-lg-5 mx-auto">
        We are here to help and answer any questions you might have or any
        services you are looking for!
      </p>

      <form className="col-11 p-5 rounded-4 mx-auto border my-3" action="">
        <div className="col-12 col-lg-10 mx-auto row justify-content-between px-1">
          <div className="col-6 pe-4">
            <label for="name" class="form-label">
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
          <div className="col-6 ps-4">
            <label for="email" class="form-label">
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
        <div className="col-10 mx-auto px-3">
          <input type="submit" value="Send" className="btn btn-blue col-12" />
        </div>
      </form>
    </div>
  );
};

export default GetTouchWithUs;
