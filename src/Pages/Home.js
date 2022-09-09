import React from "react";
import Footer from "../components/Footer";
import GetTouchWithUs from "../components/GetTouchWithUs";
import Header from "../components/Header";
import JoinAsInvestor from "../components/JoinAsInvestor";
import Organizations from "../components/Organizations";
import WhyChooseUs from "../components/WhyChooseUs";
import HowItWorks from "./../components/HowItWorks";
import Testimonial from "./../components/Testimonial";
const Home = () => {
  return (
    <div>
      <Header />
      <WhyChooseUs />
      <JoinAsInvestor />
      <HowItWorks />
      <Testimonial />
      <Organizations />
      <GetTouchWithUs />
      <Footer />
    </div>
  );
};

export default Home;
