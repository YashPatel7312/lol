import React from "react";
import HeroSection from "../homecomponets/HeroSection";
import "./homepage.css";
import JoinFunSection from "../homecomponets/JoinFunSection";
import Hero2 from "../homecomponets/Hero2";
import CircleComponent from "../homecomponets/CircleComponent";
import Spiner from "../homecomponets/spiner";

const Homepage = () => {
  return (
    <div className="home-container">
      <HeroSection />
      <Hero2 />
      <CircleComponent />
      <Spiner />
      <JoinFunSection />
    </div>
  );
};

export default Homepage;
