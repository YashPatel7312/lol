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
          <img src={id3} alt="Hidden Gems: Tips & Tricks for the LOL App" />
          <div className="banner-overlay-text">
            <h1>
              Announcing New<br /> Features and user Controls
            </h1>
          </div>
        </div>

        {/* ✅ Blog Content Section */}
        <div className="blog-content">
          <p>
            All of our users know the best way to traditionally use LOL: sharing your 
            LOL link with your friends to receive prompts from fun games, strengthening 
            your friendships and deepening your connections. But did you know about some 
            other ways that you can use LOL to get the most of your experience in the app? 
            Keep reading to find out tips and tricks straight from the LOL team to help you 
            maximize the fun of LOL!
          </p>

          <h2>Here’s what’s new: </h2>
          <ul>
            <li><strong>LOL verification: </strong>  We are now exclusively available to users over 18 and 
            will require your birth date before creating an account.</li>

            <li><strong>Team LOL messages:</strong>  Messages from Team LOL will now be clearly labeled and 
            marked with a different color in your inbox  so you can more easily tell which messages are from 
            us, and which are from your friends. You can also opt out of receiving these messages in your 
            settings at any time.</li>

            <li><strong>Updates to LOL Pro: </strong> We have made it easier to manage your subscription 
            from the LOL app. The terms of LOL Pro are more clear before you subscribe, and you can cancel 
            at any time.</li>
          </ul>

          <h2>User controls:</h2>
          <ul>
            <li><strong>Block users:</strong> You now have more control over which users can send messages 
            to you.</li>

            <li><strong>Pause my link:</strong>You can stop receiving messages at your LOL link for any 
            chosen amount of time</li>

            <li><strong>Advanced Message Filtering:</strong>You can choose to have our content moderation 
            filter prevent even more messages from reaching your inbox.</li>
          </ul>
          <p>
            As always, we do not tolerate bullying, harassment, or illegal activity, and encourage users 
            to report messages and users who are violating our Community Guidelines or Terms of Service. 
            It’s easy to report: Simply locate the message, tap on the Report button (⚠), select your 
            Report reason, and tap “Get help from Safety Team.” This will immediately flag the message 
            for review by LOL's Safety Team.
          </p>

          <p>
            By reporting messages that you deem harmful, you play a crucial role in maintaining a safe 
            and respectful environment on LOL. Your actions help protect yourself and other users from 
            harassment and bullying. Learn more at our Safety Center.
          </p>

          <p>
            We see LOL as an app where you can show up authentically, deepen your personal connections, 
            and have genuine fun with your friends. We’re excited to see our community put these new 
            features to good use.
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
