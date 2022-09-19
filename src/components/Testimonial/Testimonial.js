import React from "react";
import rohitImg from "./../../Assets/images/rohit.png";
import jeniffer from "./../../Assets/images/Jenifar.png";
import Niromi from "./../../Assets/images/Niromi.png";
import star from "./../../Assets/images/star.png";
import styles from "./Testimonial.module.css";

const Testimonial = () => {
  return (
    <div className="container-fluid p-5" id="testimonial">
      <h1 className="text-blue text-center" id={styles.sectionHeader}>
        What Clients say About us
      </h1>

      <div class="row align-items-start flex-column flex-lg-row p-5">
        <div
          class="nav nav-pills col-12 col-lg-5"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="horizontal"
        >
          <button
            class="nav-link active d-flex align-items-center my-3 py-4"
            id="v-pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-home"
            type="button"
            role="tab"
            aria-controls="v-pills-home"
            aria-selected="true"
          >
            <div className="col-2">
              <img src={rohitImg} className="my-2 img-fluid" alt="" />
            </div>
            <div className="col-10 text-start ps-1">
              <div className="row align-items-center bold">
                <div className="col-7 ps-4 pe-0">
                  <h5 className={`${styles.commentName} mb-0 text-black`}>
                    Rohit Ransore
                  </h5>
                </div>

                <div className="col-4 px-0 d-flex align-items-center gap-1">
                  <div className="hr"></div>
                  <p className={`pt-1 mb-0 ${styles.designation}`}>Investor</p>
                </div>
              </div>
              <div className="pt-0 text-secondary ps-2">UX Designer, ATG</div>
            </div>
          </button>
          <button
            class="nav-link d-flex align-items-center my-3 py-4"
            id="v-pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-profile"
            type="button"
            role="tab"
            aria-controls="v-pills-profile"
            aria-selected="false"
          >
            <div className="col-2">
              <img src={jeniffer} className="my-2 img-fluid" alt="" />
            </div>
            <div className="col-10 text-start ps-1">
              <div className="row align-items-center bold">
                <div className="col-7 ps-4 pe-0">
                  <h5 className={`${styles.commentName} mb-0 text-black`}>
                    Jeniffer White
                  </h5>
                </div>

                <div className="col-4 px-0 d-flex align-items-center gap-1">
                  <div className="hr"></div>
                  <p className={`pt-1 mb-0 ${styles.designation}`}>INVESTOR</p>
                </div>
              </div>
              <div className="pt-0 text-secondary ps-2">
                Vice President, Google
              </div>
            </div>
          </button>

          <button
            class="nav-link d-flex align-items-center my-3 py-4"
            id="v-pills-messages-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-messages"
            type="button"
            role="tab"
            aria-controls="v-pills-messages"
            aria-selected="false"
          >
            <div className="col-2">
              <img src={Niromi} className="my-2 img-fluid" alt="" />
            </div>
            <div className="col-10 text-start ps-1">
              <div className="row align-items-center bold">
                <div className="col-7 ps-4 pe-0">
                  <h5 className={`${styles.commentName} mb-0 text-black`}>
                    Niromi Taylor{" "}
                  </h5>
                </div>

                <div className="col-4 px-0 d-flex align-items-center gap-1">
                  <div className="hr"></div>
                  <p className={`pt-1 mb-0 ${styles.designation} px-0`}>
                    Business
                  </p>
                </div>
              </div>
              <div className="pt-0 text-secondary ps-2">
                Senior Manager, IKEA
              </div>
            </div>
          </button>
        </div>
        <div class="tab-content col-12 col-lg-7 pt-3" id="v-pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="v-pills-home"
            role="tabpanel"
            aria-labelledby="v-pills-home-tab"
            tabindex="0"
          >
            <>
              <h4 className={styles.commentHeader}>
                It was a great experience
              </h4>
              <div className="d-flex gap-2">
                <img className="star" src={star} alt="" />
                <img className="star" src={star} alt="" />
                <img className="star" src={star} alt="" />
                <img className="star" src={star} alt="" />
                <img className="star" src={star} alt="" />
              </div>
              <p className={`pt-2 pt-lg-5 ${styles.comment}`}>
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
            </>
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-profile"
            role="tabpanel"
            aria-labelledby="v-pills-profile-tab"
            tabindex="0"
          >
            <>
              <h4 className={styles.commentHeader}>
                It was a great experience
              </h4>
              <div className="d-flex gap-2">
                <img className="star" src={star} alt="" />
                <img className="star" src={star} alt="" />
                <img className="star" src={star} alt="" />
                <img className="star" src={star} alt="" />
                <img className="star" src={star} alt="" />
              </div>
              <p className={`pt-2 pt-lg-5 ${styles.comment}`}>
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
            </>
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-messages"
            role="tabpanel"
            aria-labelledby="v-pills-messages-tab"
            tabindex="0"
          >
            <>
              <h4 className={styles.commentHeader}>
                It was a great experience
              </h4>
              <div className="d-flex gap-2">
                <img className="star" src={star} alt="" />
                <img className="star" src={star} alt="" />
                <img className="star" src={star} alt="" />
                <img className="star" src={star} alt="" />
                <img className="star" src={star} alt="" />
              </div>
              <p className={`pt-2 pt-lg-5 ${styles.comment}`}>
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
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
