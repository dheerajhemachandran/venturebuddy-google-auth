import React from "react";
import Footer from "../components/Footer/Footer";
import GetTouchWithUs from "../components/GetTouch/GetTouchWithUs";
import Header from "../components/Header/Header";
import JoinAsInvestor from "../components/JoinAsInvestor";
import Organizations from "../components/Organizations";
import WhyChooseUs from "../components/WhyChooseUs";
import HowItWorks from "./../components/HowItWorks";
import Testimonial from "./../components/Testimonial";
const Home = () => {
  return (
    <>
      <Header />
      <WhyChooseUs />
      <JoinAsInvestor />
      <HowItWorks />
      <Testimonial />
      <Organizations />
      <GetTouchWithUs />
      <Footer />
    </>
  );
};

export default Home;
