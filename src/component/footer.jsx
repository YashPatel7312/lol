import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./footer.css";
import logo from "../assets/lol.png";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToSafety = () => {
    navigate("/safety");
    handleScrollTop();
  };

  const goToHome = () => {
    navigate("/");
    handleScrollTop();
  };

  const handleContactClick = () => {
    window.location.href = "mailto:support@lolapp.com";
  };

  return (
    <footer className={`footer ${isHomePage ? "footer-home" : "footer-other"}`}>
       <div className="container">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left" onClick={goToHome} style={{ cursor: "pointer" }}>
          <img src={logo} alt="LOL Logo" className="footer-logo" />
          <h3>Join our newsletter</h3>
          <p>
            Stay in the know on the latest alpha,
            news and product updates.
          </p>
        </div>

        {/* Middle Section */}
        <div className="footer-middle">
          <ul>
            <li>
              <button onClick={goToSafety} className="footer-link-btn">Safety</button>
            </li>
            <li>
              <button onClick={handleContactClick} className="footer-link-btn">Contact us</button>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <div className="social-section">
            <h4>Follow us:</h4>
            <a
              href="https://www.instagram.com/lol_anonymous_game"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-badge"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram"
              />
              <span>Instagram</span>
            </a>
          </div>

          <div className="download-section">
            <h4>Download:</h4>
            <div className="download-icons">
              <a
                href="https://play.google.com/store/apps/details?id=com.lol.android&pcampaignid=web_share"
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

      {/* ✅ Bottom Bar */}
      <div className="footer-bottom">
        {/* First line: Back to Top centered */}
        <button className="back-to-top" onClick={handleScrollTop}>
          Back To Top ↑
        </button>

        {/* Second line: Text + Privacy side by side */}
        <div className="footer-bottom-row">
          <p>©2024 Cabin. All rights reserved</p>
          <a href="/privacy" className="privacy-link">
            Privacy Policy
          </a>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
