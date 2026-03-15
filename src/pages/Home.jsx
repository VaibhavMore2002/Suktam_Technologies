import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Industries from "../components/Industries";
import Testimonial from "../components/Testimonial";
import Values from "../components/Values";
import AboveFooter from "../components/AboveFooter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Industries />
      {/* <Testimonial /> */}
      <Values />
      <AboveFooter />
    </>
  );
};

export default Home;
