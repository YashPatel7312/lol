import React, { useState, useEffect } from "react";
import logo from "./assets/lol.png";

// Main Components
import Navbar from "./component/navbar";
import Footer from "./component/footer";   // ✅ FIXED
import "./loader.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (5 seconds)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

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
          <h1 style={{ textAlign: "center", marginTop: "50px" }}>Welcome 🚀</h1>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
