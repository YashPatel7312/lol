import React from "react";
import "./JoinFunSection.css";

import orbit from "../assets/joinrotaed.png"; // your uploaded orbit image
import playQR from "../assets/playstore.png";
import appleQR from "../assets/appstore.png";

const JoinFunSection = () => {
  return (
    <section className="joinfun-container">
      {/* Rotating orbit background */}
      <div className="orbit-wrapper">
        <img src={orbit} alt="orbit" className="rotating-orbit" />
      </div>
      
      {/* Center content */}
      <div className="joinfun-content">
        <div className="qr-box">
          <img src={playQR} alt="Play Store QR" className="qr-img" />
          <img src={appleQR} alt="App Store QR" className="qr-img" />
        </div>
        <h2 className="join-title">Join</h2>
        <h2 className="join-title">the fun</h2>
      </div>
    </section>
  );
};

export default JoinFunSection;
