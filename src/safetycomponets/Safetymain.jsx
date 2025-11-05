import React, { useState, useEffect, useRef } from "react";
import "./Safetymain.css";

// Import shared CSS for content
import "./data/sefetycss.css";

// Import all content files
import Sefety1 from "./data/sefety1"; // ✅ Note the capital letter & .jsx file
import Sefety2 from "./data/sefety2";
import Sefety3 from "./data/sefety3";
import Sefety4 from "./data/sefety4";
import Sefety5 from "./data/sefety5";
import Sefety6 from "./data/sefety6";

const Safetymain = () => {
  const [active, setActive] = useState(1);
  const contentRef = useRef(null);

  const sections = [
    { id: 1, title: "Our Approach to Safety", content: <Sefety1 /> }, // ✅ Use component
    { id: 2, title: "Our Guide to Online Safety", content: <Sefety2 /> },
    { id: 3, title: "Our Community Guidelines", content: <Sefety3 /> },
    { id: 4, title: "Our Safety Tools", content: <Sefety4 /> },
    { id: 5, title: "Our Resources", content: <Sefety5 /> },
    { id: 6, title: "Contact Us", content: <Sefety6 /> },
  ];

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [active]);

  return (
    <div className="safety-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Safety</h2>
        <ul>
          {sections.map((section) => (
            <li
              key={section.id}
              className={active === section.id ? "active" : ""}
              onClick={() => setActive(section.id)}
            >
              {section.id}. {section.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Scrollable Right Section */}
      <div className="content-area" ref={contentRef}>
        <h3>{sections[active - 1].title}</h3>
        <div className="sefety-content">{sections[active - 1].content}</div>
      </div>
    </div>
  );
};

export default Safetymain;
