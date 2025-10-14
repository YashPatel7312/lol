import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaApple, FaAndroid } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/lol.png";
import "../component/navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setOpen(!open);
  };

  const goTo = (path) => {
    navigate(path);
    setOpen(false); // Close menu on mobile
  };

  const handleContactClick = () => {
    window.location.href = "mailto:support@lolapp.com";
    setOpen(false);
  };

  return (
    <header className="navbar">
      {/* Left Logo */}
      <div className="nav-left" onClick={() => goTo("/")}>
        <img src={logo} alt="LOL Logo" className="nav-logo" />
      </div>

      {/* Center Menu (Desktop) */}
      <div className="nav-center desktop-menu">
        <ul>
          <li><button onClick={() => goTo("/safety")}>Safety</button></li>
          <li><button onClick={() => goTo("/blog")}>Blog</button></li>
          <li><button onClick={handleContactClick}>Contact us</button></li>
        </ul>
      </div>

      {/* Right App Buttons (Desktop) */}
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

      {/* Hamburger (Mobile) */}
      <div className="mobile-menu-icon" onClick={toggleMenu}>
        {open ? <FiX /> : <FiMenu />}
      </div>

      {/* Dropdown (Mobile) */}
      <div className={`mobile-dropdown ${open ? "show" : ""}`}>
        <ul>
          <li><button onClick={() => goTo("/safety")}>Safety</button></li>
          <li><button onClick={() => goTo("/blog")}>Blog</button></li>
          <li><button onClick={handleContactClick}>Contact us</button></li>
        </ul>

        {/* App Buttons (Mobile) */}
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
