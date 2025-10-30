import React from "react";
import { Link } from "react-router-dom";
import "./BlogDetails.css";

import id1 from "../assets/id1.jpg";
import id2 from "../assets/id2.jpg";
import id3 from "../assets/id3.jpg";
import id4 from "../assets/id4.jpg";
import id5 from "../assets/id5.jpg";
import id6 from "../assets/id6.jpg";
import id7 from "../assets/id7.jpg";

const blogs = [
  { id: 1, title: "Hidden Gems: Tips & Tricks for the LOL App", img: id1 },
  { id: 2, title: "Uplift Your Community: Getting Involved IRL", img: id2 },
  { id: 3, title: "Announcing New Features and User Controls", img: id3 },
  { id: 4, title: "LOL Response to FTC Settlement", img: id4 },
  { id: 5, title: "Staying Safe on LOL: Tips for User Safety", img: id5 },
  { id: 6, title: "A Guide to Online Privacy", img: id6 },
  { id: 7, title: "LOL Procedures for Information Requests", img: id7 },
];

const Blog7 = () => {
  return (
    <div className="container">
      <div className="blog-detail">

        {/* ✅ Banner Image with Title Inside */}
        <div className="blog-banner">
          <img src={id7} alt="Hidden Gems: Tips & Tricks for the LOL App" />
          <div className="banner-overlay-text">
            <h1>
              LOL Procedures<br />For Information Requests
            </h1>
          </div>
        </div>

        {/* ✅ Blog Content Section */}
        <div className="blog-content">
          <p>
            The safety of our users is extremely important to Team LOL. In order to ensure 
            our users’ safety and the wellbeing of the community at large, we at LOL comply 
            with law enforcement to protect users whenever it is deemed necessary.
          </p>

          <h2>What should I do if I witness illegal activity on LOL?‍</h2>
          <p>
            If you see something that you believe may constitute illegal or criminal activity 
            on LOL, please report this to our team by using the Report function in the app and 
            by emailing our safety team a info@plexus-technology.in .
          </p>

          <h2>What will you do with my report?</h2>
          <p>
            After careful consideration by our team, we may deem which authorities are best to 
            contact and may share the activity with the appropriate channels. We will comply with 
            law enforcement and secure the LOL community from further criminal activity by ensuring 
            that the user is banned, and law enforcement will determine the appropriate legal action 
            to take going forward.
          </p>

          <h2>More Post</h2>
        </div>
        
        {/* ✅ Infinite Slider (Already Correct) */}
        <div className="infinite-slider">
          <div className="slider-track">
            {blogs.concat(blogs).map((blog, index) => (
              <Link key={index} to={`/blog/${blog.id}`} className="slide-item">
                <img src={blog.img} alt={blog.title} />
                <div className="slide-overlay">
                  <h3>{blog.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Blog7;
