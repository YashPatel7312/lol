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

const Blog1 = () => {
  return (
    <div className="container">
      <div className="blog-detail">

        {/* ✅ Banner Image with Title Inside */}
        <div className="blog-banner">
          <img src={id1} alt="Hidden Gems: Tips & Tricks for the LOL App" />
          <div className="banner-overlay-text">
            <h1>
              Hidden Gems: Tips & Tricks <br /> for the LOL App
            </h1>
          </div>
        </div>

        {/* ✅ Blog Content Section */}
        <div className="blog-content">
          <p>
            All of our users know the best way to traditionally use LOL: sharing
            your LOL link with your friends to receive prompts from fun games,
            strengthening your friendships and deepening your connections. But did
            you know about some other ways that you can use LOL to get the most of
            your experience in the app? Keep reading to find out tips and tricks
            straight from the LOL team to help you maximize the fun of LOL!
          </p>

          <h2>Use your link anywhere</h2>
          <p>
            While the LOL app offers a variety of social media platforms to which you
            can share your link, your inbox will work anywhere you place it as a tappable link.
            In order to use it in other places, just tap “copy link” under the game that
            you want to use, and paste it to your preferred destination. As long as the
            destination allows linking, your friends will be able to tap your LOL link
            and send you messages!
          </p>

          <h2>Make your own games</h2>
          <p>
            While the LOL app offers a variety of social media platforms to which you can
            share your link, your inbox will work anywhere you place it as a tappable link.
            In order to use it in other places, just tap “copy link” under the game that you
            want to use, and paste it to your preferred destination. As long as the destination
            allows linking, your friends will be able to tap your LOL link and send you messages!
          </p>

          <h2>Customize your replies</h2>
          <p>
            We offer a few different ways for users to customize their replies to LOL messages, such as:
          </p>
          <ul>
            <li><strong>Color Changing</strong>  Tap the color picker circle to change the color of your reply image.</li>
            <li><strong>Photo Replies</strong>  Tap the Camera logo to reply to the message with a photo background.</li>
            <li><strong>Pick a Profile Pic</strong>  Change your profile picture directly from your message prompt!</li>
          </ul>

          <p>
            No matter how you choose to share your LOL link, the app offers a variety of ways
            to customize your in-app experience and have the most fun possible.
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

export default Blog1;
