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

const Blog3 = () => {
  return (
    <div className="container">
      <div className="blog-detail">

        {/* ✅ Banner Image with Title Inside */}
        <div className="blog-banner">
          <img src={id6} alt="Hidden Gems: Tips & Tricks for the LOL App" />
          <div className="banner-overlay-text">
            <h1>
              A Guide to Online Privacy
            </h1>
          </div>
        </div>

        {/* ✅ Blog Content Section */}
        <div className="blog-content">
          <p>
            Platforms for online connection like LOL offer exciting new ways to connect, share, 
            and have fun with your friends. LOL also offers several tools to protect yourself 
            online. While we have an extensive safety system working behind the scenes, this 
            guide will provide you with some other practical tips to help you stay safe and 
            msake the most of your online experience.tips for staying safe
          </p>

          <p>
            Here are some practical tips you can for using LOL:
          </p>

          <h2>Think before you share</h2>
          <ul>
            <li>Pause and consider whether you're comfortable with everyone seeing what 
              you're about to post.</li>
          </ul>

          <h2>Protect Your Personal Information</h2>
          <ul>
            <li>Avoid sharing your full name, address, phone number, or other sensitive 
              details online.</li>
          </ul>

          <h2>Be Kind and Respectful</h2>
          <ul>
            <li>Remember that there's a real person on the other side of the screen. Treat 
              others how you'd like to be treated</li>
          </ul>

          <h2>Block and Report</h2>
          <ul>
            <li>Don't hesitate to block or report users who make you feel uncomfortable 
              or send you harmful messages.</li>
          </ul>

          <h2>Block and Report</h2>
          <ul>
            <li>The LOL Community Team is here to help you, whatever you need; contact us 
              at help@LOLapp.com for any support.</li>
          </ul>

          <p>
            Our commitment to safety - At LOL, your safety is our top priority. As a result, 
            we've implemented features like keyword filtering and reporting mechanisms to help 
            keep our platform safe and positive. We encourage you to use these tools and to 
            report any harmful content you encounter. If you’d like to further bolster the 
            safety of your LOL experience, the Safety Controls available in our Settings menu 
            offers a variety of options to help with this.
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

export default Blog3;
