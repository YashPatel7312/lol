import React from "react";
import HeroSection from "../homecomponets/HeroSection";
import "./homepage.css";
import JoinFunSection from "../homecomponets/JoinFunSection";

const Homepage = () => {
  return (
    <div className="home-container">
      <HeroSection />
      <JoinFunSection />
    </div>
  );
};

export default Homepage;
