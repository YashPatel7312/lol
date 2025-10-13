import React from "react";
import "./footer.css";
import logo from "../assets/lol.png";
import { useLocation } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={`footer ${isHomePage ? "footer-home" : "footer-other"}`}>
      <div className="footer-container">

        {/* Left Section */}
        <div className="footer-left">
          <img src={logo} alt="LOL Logo" className="footer-logo" />
          <h3>Join our newsletter</h3>
          <p>
            Stay in the know on the latest alpha, <br />
            news and product updates.
          </p>
        </div>

        {/* Middle Section */}
        <div className="footer-middle">
          <ul>
            <li><a href="/safety">Safety</a></li>
            <li><a href="/contact">Contact us</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <div className="social-section">
            <h4>Follow us:</h4>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaInstagram className="social-icon" /> Instagram
            </a>
          </div>

          <div className="download-section">
            <h4>Download:</h4>
            <div className="download-icons">
              <a
                href="https://play.google.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                />
              </a>
              <a
                href="https://apps.apple.com/us/app/6670788272"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="App Store"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <button className="back-to-top" onClick={handleScrollTop}>
          Back To Top ↑
        </button>
        <p>©2024 LOL. All rights reserved</p>
        <a href="/privacy" className="privacy-link">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
