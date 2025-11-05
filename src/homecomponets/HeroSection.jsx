import React, { useEffect, useRef } from "react";
import "./HeroSection.css";
import heroImg from "../assets/homeherocontain.png";

const HomeSection = () => {
  const imageRef = useRef(null);
  const isHovering = useRef(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isHovering.current || !imageRef.current) return;

      const moveX = (e.clientX - window.innerWidth / 2) / 50;
      const moveY = (e.clientY - window.innerHeight / 2) / 50;

      imageRef.current.style.transform = `translate(-50%, -50%) translate(${moveX}px, ${moveY}px)`;
    };

    const resetTransform = () => {
      if (imageRef.current) {
        imageRef.current.style.transform = `translate(-50%, -50%)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", resetTransform);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", resetTransform);
    };
  }, []);

  return (
    <section className="home-hero">
      <div className="hero-container">
        <img
          ref={imageRef}
          src={heroImg}
          alt="Hero graphics"
          className="hero-image"
          onMouseEnter={() => (isHovering.current = true)}
          onMouseLeave={() => {
            isHovering.current = false;
            if (imageRef.current)
              imageRef.current.style.transform = `translate(-50%, -50%)`;
          }}
        />

        <div className="hero-text">
          <h1>
          
            real <br />
            fun with <br />
            friends
          </h1>

          <button className="download-btn">
            <span className="text top-text">Download the app!</span>
            <span className="text bottom-text">Download the app!</span>
          </button>

          <div className="mouse-indicator">
            <div className="wheel"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
