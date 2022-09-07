import React from "react";
import Header from "../components/Header";
import JoinAsInvestor from "../components/JoinAsInvestor";
import WhyChooseUs from "../components/WhyChooseUs";
import HowItWorks from "./../components/HowItWorks";
const Home = () => {
  return (
    <div>
      <Header />
      <WhyChooseUs />
      <JoinAsInvestor />
      <HowItWorks />
    </div>
  );
};

export default Home;
