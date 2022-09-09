import React from "react";
import rohitImg from "./../images/rohit.png";
import jeniffer from "./../images/Jenifar.png";
import Niromi from "./../images/Niromi.png";
import star from "./../images/star.png";

const Testimonial = () => {
  return (
    <div className="container py-5" id="testimonial">
      <h1 className="text-blue text-center fw-bold">
        What Clients say About us
      </h1>

      <div class="d-flex align-items-start flex-column flex-lg-row py-5">
        <div
          class="nav nav-pills me-lg-3 col-12 col-lg-4"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="horizontal"
        >
          <button
            class="nav-link active d-flex align-items-center"
            id="v-pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-home"
            type="button"
            role="tab"
            aria-controls="v-pills-home"
            aria-selected="true"
          >
            <img src={rohitImg} className="col-3 my-2" alt="" />
            <div className="col-9 text-start">
              <div className="d-flex align-items-center ps-3 bold">
                <h5 className="comment-name mb-0 pe-2 text-black">
                  Rohit Ransore
                </h5>
                <p className="ms-2 mb-0 text-blue">Investor</p>
              </div>
              <div className="ms-3 pt-0 text-secondary">UX Designer, ATG</div>
            </div>
          </button>
          <button
            class="nav-link d-flex align-items-center my-3"
            id="v-pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-profile"
            type="button"
            role="tab"
            aria-controls="v-pills-profile"
            aria-selected="false"
          >
            <img src={jeniffer} className="col-3 my-2" alt="" />
            <div className="col-9 text-start">
              <div className="d-flex align-items-center ps-3 bold">
                <h5 className="comment-name mb-0 pe-2 text-black">
                  Jeniffer White
                </h5>
                <p className="ms-2 mb-0 text-blue">Investor</p>
              </div>
              <div className="ms-3 pt-0 text-secondary">
                Vice President, Google
              </div>
            </div>
          </button>

          <button
            class="nav-link d-flex align-items-center my-3"
            id="v-pills-messages-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-messages"
            type="button"
            role="tab"
            aria-controls="v-pills-messages"
            aria-selected="false"
          >
            <img src={Niromi} className="col-3 my-2" alt="" />
            <div className="col-9 text-start">
              <div className="d-flex align-items-center ps-3 bold">
                <h5 className="comment-name mb-0 pe-2 text-black">
                  Niromi Taylor
                </h5>
                <p className="ms-2 mb-0 text-blue">Business</p>
              </div>
              <div className="ms-3 pt-0 text-secondary">
                Senior Manager, IKEA
              </div>
            </div>
          </button>
        </div>
        <div class="tab-content col-12 col-lg-8" id="v-pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="v-pills-home"
            role="tabpanel"
            aria-labelledby="v-pills-home-tab"
            tabindex="0"
          >
            <div className="col-10 mx-auto">
              <h4 className="fw-bolder">It was a great experience</h4>
              <div className="d-flex gap-2">
                <img className="star" src={star} alt="" />
                <img className="star" src={star} alt="" />
                <img className="star" src={star} alt="" />
                <img className="star" src={star} alt="" />
                <img className="star" src={star} alt="" />
              </div>
              <p className="pt-2 pt-lg-5 comment">
                It was a great experience It was a great experience It was a
                great experience It was a great experience It was a great
                experience It was a great experience It was a great experience
                It was a great experience It was a great experience It was a
                great experience It was a great experience It was a great
                experience It was a great experience It was a great experience
                It was a great experience It was a great experience It was a
                great experience It was a great experience It was a great
                experience It was a great experience{" "}
              </p>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-profile"
            role="tabpanel"
            aria-labelledby="v-pills-profile-tab"
            tabindex="0"
          >
            <div className="col-10 mx-auto">
              <h4 className="fw-bolder">It was a great experience</h4>
              <div className="d-flex gap-2">
                <img className="star" src={star} alt="" />
                <img className="star" src={star} alt="" />
                <img className="star" src={star} alt="" />
                <img className="star" src={star} alt="" />
                <img className="star" src={star} alt="" />
              </div>
              <p className="pt-2 pt-lg-5 comment">
                It was a great experience It was a great experience It was a
                great experience It was a great experience It was a great
                experience It was a great experience It was a great experience
                It was a great experience It was a great experience It was a
                great experience It was a great experience It was a great
                experience It was a great experience It was a great experience
                It was a great experience It was a great experience It was a
                great experience It was a great experience It was a great
                experience It was a great experience{" "}
              </p>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-messages"
            role="tabpanel"
            aria-labelledby="v-pills-messages-tab"
            tabindex="0"
          >
            <div className="col-10 mx-auto">
              <h4 className="fw-bolder">It was a great experience</h4>
              <div className="d-flex gap-2">
                <img className="star" src={star} alt="" />
                <img className="star" src={star} alt="" />
                <img className="star" src={star} alt="" />
                <img className="star" src={star} alt="" />
                <img className="star" src={star} alt="" />
              </div>
              <p className="pt-2 pt-lg-5 comment">
                It was a great experience It was a great experience It was a
                great experience It was a great experience It was a great
                experience It was a great experience It was a great experience
                It was a great experience It was a great experience It was a
                great experience It was a great experience It was a great
                experience It was a great experience It was a great experience
                It was a great experience It was a great experience It was a
                great experience It was a great experience It was a great
                experience It was a great experience{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
