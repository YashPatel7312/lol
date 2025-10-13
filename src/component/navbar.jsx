import React from "react";
import "./navbar.css";
import { FaApple, FaAndroid } from "react-icons/fa";
import logo from "../assets/lol.png";

const Navbar = () => {
  // ✅ When the logo is clicked → navigate to homepage
  const handleLogoClick = () => {
    window.location.href = "/"; // redirects to home
  };

  return (
    <nav className="navbar">
      {/* Left Logo - Clickable */}
      <div className="nav-left" onClick={handleLogoClick} style={{ cursor: "pointer" }}>
        <img
          src={logo}
          alt="LOL Logo"
          className="nav-logo"
        />
      </div>

      {/* Center Menu */}
      <div className="nav-center">
        <ul>
          <li><a href="#safety">Safety</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact us</a></li>
        </ul>
      </div>

      {/* Right App Buttons */}
      <div className="nav-right">
        <div className="app-buttons">
          <button className="app-btn">
            <FaApple />
          </button>
          <span className="divider"></span>
          <button className="app-btn">
            <FaAndroid />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
