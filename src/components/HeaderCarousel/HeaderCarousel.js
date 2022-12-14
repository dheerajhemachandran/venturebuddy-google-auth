import React from "react";
import { Autoplay, EffectCreative } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import airbnb from "./../../Assets/images/slider/airbnb-2.png";
import cocacola from "./../../Assets/images/slider/coca-cola-2.png";
import uberEats from "./../../Assets/images/slider/uber-eats2.png";
import slide4 from "./../../Assets/images/slider/slide-4-2.png";
import insightsImg from "./../../Assets/images/insights.png";
import barchartImg from "./../../Assets/images/bar-charts.png";
import CarouselSlide from "../Carousel/CarouselSlide";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/autoplay";
import styles from "./HeaderCarousel.module.css";

const HeaderCarousel = () => {
  const { borderImg, insights, barchart, carContainer } = styles;

  return (
    <div className={`mx-lg-4 ${carContainer}`}>
      <div className="border border-1 p-3 me-lg-5" id={styles.sliderContainer}>
        <Swiper
          autoplay={{ delay: 3000 }}
          grabCursor={true}
          effect={"creative"}
          creativeEffect={{
            prev: {
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          modules={[EffectCreative, Autoplay]}
          width={452}
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
        <img className={borderImg} id={insights} src={insightsImg} alt="" />
        <img className={borderImg} id={barchart} src={barchartImg} alt="" />
      </div>
    </div>
  );
};

export default HeaderCarousel;
