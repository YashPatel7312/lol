import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import logo from "./assets/lol.png";
import Navbar from "./component/navbar";
import Footer from "./component/footer";

import Homepage from "./pages/homepage";
import BlogPage from "./pages/blogpage";
import Safetypage from "./pages/safetypage";

import "./loader.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <img src={logo} alt="Loading..." className="loader-logo" />
        </div>
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/safety" element={<Safetypage />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
