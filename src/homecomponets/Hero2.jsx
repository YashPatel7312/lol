import React from "react";
import "./Hero2.css";

// Import all assets
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";
import card5 from "../assets/card5.png";
import card6 from "../assets/card6.png";
import card7 from "../assets/card7.png";
import card8 from "../assets/card8.png";
import monkey from "../assets/monkey.png";
import cloud from "../assets/cloud.svg";

const Hero2 = () => {
  return (
    <section className="hero2">
      {/* PART 1 */}
      <div className="part1">
        <div className="text-block">
          <h2>Test how much your<br /> friend knows you.</h2>
          <div className="line-effect"></div>
          <p>A new way to share.</p>
          <p>your question's link on IG & Snapchat</p>
        </div>
        <img src={cloud} alt="cloud" className="cloud" />
      </div>

      {/* BELOW PART 1 */}
      <div className="parts-wrapper">
        {/* PART 2 */}
        <div className="part2 floating">
          <img src={card1} alt="card1" className="card-img" />
          <img src={card2} alt="card2" className="card-img" />
          <img src={card3} alt="card3" className="card-img" />
        </div>

        {/* PART 3 */}
        <div className="part3">
          <div className="monkey-wrapper">
            <img src={monkey} alt="monkey" className="monkey-img behind" />
            <div className="monkey-cards">
              <img src={card4} alt="card4" className="monkey-card left" />
              <img src={card5} alt="card5" className="monkey-card right" />
            </div>
          </div>
          <p className="love-text">Do you <br />Love the LOL app?</p>
        </div>

        {/* PART 4 */}
        <div className="part4 floating">
          <img src={card6} alt="card6" className="card-img" />
          <img src={card7} alt="card7" className="card-img" />
          <img src={card8} alt="card8" className="card-img" />
        </div>
      </div>
    </section>
  );
};

export default Hero2;
