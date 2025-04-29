import React from "react";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Intro from "./components/Intro";
import Second_page from "./components/Second_page";
import Our_Pillars from "./components/Our_Pillars";
import PricingPlans from "./components/PricingPlans";
import Contact from "./components/Contact";
import Thirdpage from "./components/Thirdpage";
// import Chatbot from "./components/Chatbot";
// import { BrowserRouter } from "react-router-dom"; // Not needed if not using routing

function Apple() {
  return (
    <>
      <Navbar />
      <Intro />
      <AboutUs />
      <PricingPlans />
      <Our_Pillars />
      <Second_page />
      <Contact />
      <Thirdpage />
      {/* <Chatbot /> */}
    </>
  );
}

export default Apple;
