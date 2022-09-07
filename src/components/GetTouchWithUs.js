import React from "react";

const GetTouchWithUs = () => {
  return (
    <div className="container">
      <h1 className="text-blue fw-bold text-center">Get Touch With Us</h1>
      <p className="text-center col-5 mx-auto">
        We are here to help and answer any questions you might have or any
        services you are looking for!
      </p>

      <form className="col-11 p-5 rounded-4 mx-auto border" action="">
        <div className="col-10 mx-auto row row-cols-2">
          <div>
            <label for="name" class="form-label">
              Name
            </label>
            <div class="mb-3">
              <input
                type="text"
                class="form-control p-3"
                id="name"
                placeholder="Enter Your Name"
                aria-describedby="basic-addon3"
              />
            </div>
          </div>
          <div>
            <label for="email" class="form-label">
              Email ID
            </label>
            <div class="mb-3">
              <input
                type="text"
                class="form-control p-3"
                id="email"
                placeholder="Enter Your Email ID"
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
