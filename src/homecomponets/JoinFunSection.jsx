import React from "react";
import "./JoinFunSection.css";
import orbitImage from "../assets/joinrotaed.png";
import playQR from "../assets/playstore.png";
import appleQR from "../assets/appstore.png";

const JoinFunSection = () => {
  return (
    <section className="joinfun-section">
  <div className="orbit-bg">
    <img src={orbitImage} alt="orbit" className="rotating-bg" />
  </div>

  <div className="center-content">
    <div className="qr-wrapper">
      <img src={playQR} alt="Google Play QR" className="qr" />
      <img src={appleQR} alt="App Store QR" className="qr" />
    </div>
    <h2 className="join-text">
      Join <br /> the fun
    </h2>
  </div>
</section>

  );
};

export default JoinFunSection;
