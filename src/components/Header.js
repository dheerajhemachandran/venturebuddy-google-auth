import React from "react";
import insights from "./../images/insights.png";
import barcharts from "./../images/bar-charts.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import { EffectCreative, Autoplay } from "swiper";
import "swiper/css/autoplay";
import airbnb from "./../images/slider/airbnb.png";
import cocacola from "./../images/slider/coca-cola.png";
import uberEats from "./../images/slider/uber-eats.png";
import slide4 from "./../images/slider/Slide 4.png";
import CarouselSlide from "./CarouselSlide";

const Header = () => {
  return (
    <header className="container-fluid">
      <div className="row row-cols-1 align-items-center">
        <div className="order-2 col-5 order-lg-0 py-5">
          <div className="text-blue">THE INVESTMENT PLATFORM</div>
          <h2>Start investing and earning money now.</h2>
          <p className="pt-2">
            Start Uber Eats is an online food ordering and delivery platform
            launched by Uber in 2014.
          </p>

          <a href="#" className="btn btn-secondary-blue fw-bold mt-3">
            Become an Investor
          </a>
        </div>
        <div className="col-7">
          <div className="col-8 ms-auto mt-3 pe-5">
            <div className="border border-1 p-3 rounded-4 me-5">
              <Swiper
                autoplay={{ delay: 3000 }}
                grabCursor={true}
                effect={"creative"}
                creativeEffect={{
                  prev: {
                    // shadow: true,
                    translate: [0, 0, -400],
                  },
                  next: {
                    translate: ["100%", 0, 0],
                  },
                }}
                modules={[EffectCreative, Autoplay]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <CarouselSlide
                    image={uberEats}
                    header="Uber Eats"
                    paragraph="Uber Eats is an online food ordering and delivery
                        platform launched by Uber in 2014."
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <CarouselSlide
                    image={cocacola}
                    header="Coca Cola"
                    paragraph="Uber Eats is an online food ordering and delivery
                        platform launched by Uber in 2014."
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <CarouselSlide
                    image={airbnb}
                    header="Airbnb"
                    paragraph="Uber Eats is an online food ordering and delivery
                        platform launched by Uber in 2014."
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <CarouselSlide
                    image={slide4}
                    header="Subway"
                    paragraph="Uber Eats is an online food ordering and delivery
                        platform launched by Uber in 2014."
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            <img className="border-image" id="insights" src={insights} alt="" />
            <img
              className="border-image"
              id="bar-charts"
              src={barcharts}
              alt=""
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
