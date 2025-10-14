import React from "react";
import { useNavigate } from "react-router-dom";
import "./homepage.css";

const Homepage = () => {
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
    <div className="home-container">
      {/* ✅ Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <h1 className="hero-title">Welcome to LOL App 🚀</h1>
          <p className="hero-subtitle">
            Connect, explore, and stay updated with the latest news and safety guidelines.
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

      {/* ✅ Intro Section */}
      <section className="intro-section">
        <h2>Why LOL?</h2>
        <p>
          LOL App brings people together with secure and innovative features.
          Stay informed through our blog and keep yourself safe with our
          community guidelines.
        </p>
      </section>
    </div>
  );
};

export default Homepage;
