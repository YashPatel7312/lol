import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom"; // ✅ no BrowserRouter here

import logo from "./assets/lol.png";
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import ScrollToTop from "./component/ScrollToTop"; // ✅ import

import Homepage from "./pages/homepage";
import BlogPage from "./pages/blogpage";
import Safetypage from "./pages/safetypage";

// ✅ Blog detail pages
import Blog1 from "./blogcomponets/Blog1";
import Blog2 from "./blogcomponets/Blog2";
import Blog3 from "./blogcomponets/Blog3";
import Blog4 from "./blogcomponets/Blog4";
import Blog5 from "./blogcomponets/Blog5";
import Blog6 from "./blogcomponets/Blog6";
import Blog7 from "./blogcomponets/Blog7";

import "./loader.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ScrollToTop /> {/* ✅ scrolls to top on route change */}

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

            {/* ✅ Blog routes */}
            <Route path="/blog/1" element={<Blog1 />} />
            <Route path="/blog/2" element={<Blog2 />} />
            <Route path="/blog/3" element={<Blog3 />} />
            <Route path="/blog/4" element={<Blog4 />} />
            <Route path="/blog/5" element={<Blog5 />} />
            <Route path="/blog/6" element={<Blog6 />} />
            <Route path="/blog/7" element={<Blog7 />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
