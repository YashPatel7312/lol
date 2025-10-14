import React, { useState } from "react";
import { FaApple, FaAndroid } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/lol.png";
import "./navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <header className="navbar">
      {/* Left Logo */}
      <div className="nav-left" onClick={() => (window.location.href = "/")}>
        <img src={logo} alt="LOL Logo" className="nav-logo" />
      </div>

      {/* Center Menu (Desktop only) */}
      <div className="nav-center desktop-menu">
        <ul>
          <li><a href="#safety">Safety</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact us</a></li>
        </ul>
      </div>

      {/* Right App Buttons (Desktop only) */}
      <div className="nav-right desktop-menu">
        <div className="app-buttons">
          <a
            href="https://apps.apple.com/us/app/6670788272"
            target="_blank"
            rel="noopener noreferrer"
            className="app-btn"
          >
            <FaApple />
          </a>
          <span className="divider"></span>
          <a
            href="https://play.google.com/store/apps/details?id=com.lol.android&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
            className="app-btn"
          >
            <FaAndroid />
          </a>
        </div>
      </div>

      {/* Hamburger (Mobile only) */}
      <div className="mobile-menu-icon" onClick={toggleMenu}>
        {open ? <FiX /> : <FiMenu />}
      </div>

      {/* Dropdown (Mobile only) */}
      <div className={`mobile-dropdown ${open ? "show" : ""}`}>
        <ul>
          <li><a href="#safety" onClick={toggleMenu}>Safety</a></li>
          <li><a href="#blog" onClick={toggleMenu}>Blog</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact us</a></li>
        </ul>

        {/* ✅ App buttons ONLY inside dropdown on mobile */}
        <div className="app-buttons mobile-app-buttons">
          <a
            href="https://apps.apple.com/us/app/6670788272"
            target="_blank"
            rel="noopener noreferrer"
            className="app-btn"
          >
            <FaApple />
          </a>
          <span className="divider"></span>
          <a
            href="https://play.google.com/store/apps/details?id=com.lol.android&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
            className="app-btn"
          >
            <FaAndroid />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
