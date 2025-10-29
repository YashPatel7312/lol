import React, { memo } from "react";
import "./HeroSection.css";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const goToBlog = () => {
    navigate("/blog");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToSafety = () => {
    navigate("/safety");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      className="hero-section">
      <div className="hero-overlay">
        <h1 className="hero-title">Welcome to LOL App 🚀</h1>
        <p className="hero-subtitle">
          Connect, explore, and stay updated with the latest news and safety
          guidelines.
        </p>
        <div className="hero-buttons">
          <button onClick={goToBlog} className="primary-btn">
            Visit Blog
          </button>
          <button onClick={goToSafety} className="secondary-btn">
            View Safety
          </button>
        </div>
      </div>
    </section>
  );
};

export default memo(HeroSection);
