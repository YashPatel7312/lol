import React from "react";
import "./spiner.css";

// Import all your assets
import spinnerImg from "../assets/spiner.svg"; // spinner wheel image
import pointerImg from "../assets/spinerarow.svg"; // arrow pointer image
import bgImg from "../assets/bg4.svg"; // background image

import card1 from "../assets/g1.png";
import card2 from "../assets/g2.png";
import card3 from "../assets/g3.jpg";
import card4 from "../assets/g4.jpg";
import card5 from "../assets/g5.png";
import card6 from "../assets/g6.png";
import card7 from "../assets/g7.png";

const Spiner = () => {
  return (
    <div
      className="spiner-container"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Floating Cards */}
      <div className="floating-cards">
        <img src={card1} alt="card1" className="card card-1" />
        <img src={card2} alt="card2" className="card card-2" />
        <img src={card3} alt="card3" className="card card-3" />
        <img src={card4} alt="card4" className="card card-4" />
        <img src={card5} alt="card5" className="card card-5" />
        <img src={card6} alt="card6" className="card card-6" />
        <img src={card7} alt="card7" className="card card-7" />
      </div>

      {/* Spinner + Text layout */}
      <div className="center-layout">
        {/* Left Text */}
        <div className="text-left">
          <h1>
            <span className="highlight">get to<br /> know</span>
          </h1>
        </div>

        {/* Spinner */}
        <div className="spinner-wrapper">
          <img src={pointerImg} alt="pointer" className="pointer" />
          <img
            src={spinnerImg}
            alt="spinner"
            className="spinner-wheel auto-spin"
          />
        </div>

        {/* Right Text */}
        <div className="text-right">
          <h1>
            <span className="highlight">your <br />friends</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Spiner;
