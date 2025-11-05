import "./CircleComponent.css";
import sp from "../assets/sp.png";
import girl from "../assets/girl.png";
import card11 from "../assets/crad11.jpg";

const HeroSection = () => {
  return (
    <div className="hero">
      {/* Background Image */}
      <img src={sp} alt="background" className="rotating-bg2" />

      {/* Left Text */}
      <div className="hero-text2">
        <p>flood</p>
        <p>your</p>
        <p>inbox of</p>
        <p>your</p>
        <p>friends &</p>
        <p>strangers</p>
      </div>

      {/* Center Girl Image */}
      <div className="girl-container">
        <img src={girl} alt="girl" className="girl-image" />
      </div>

      {/* Right Side Card */}
      <div className="card-container">
        <img src={card11} alt="funny card" className="card-image" />
      </div>
    </div>
  );
};

export default HeroSection;
