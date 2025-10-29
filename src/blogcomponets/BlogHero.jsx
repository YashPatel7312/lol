import React from "react";
import "./BlogHero.css";

const BlogHero = () => {
  return (
    <section
      className="blog-hero">
      <div className="hero-content">
        <h1 className="hero-title">Blog</h1>
        <p className="hero-subtitle">
          My favorite app is the one that tells me <br />
          how much time I've wasted on other apps.
        </p>
      </div>
    </section>
  );
};

export default BlogHero;
