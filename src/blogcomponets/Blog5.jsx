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

const Blog5 = () => {
  return (
    <div className="container">
      <div className="blog-detail">

        {/* ✅ Banner Image with Title Inside */}
        <div className="blog-banner">
          <img src={id5} alt="Hidden Gems: Tips & Tricks for the LOL App" />
          <div className="banner-overlay-text">
            <h1>
              Staying Safe ON LOL: <br /> Tips for User Safaety
            </h1>
          </div>
        </div>

        {/* ✅ Blog Content Section */}
        <div className="blog-content">
        
          <h2>We’re here for you</h2>
          <p>
            We made LOL as a place where you can foster meaningful and authentic connections with 
            your friends, and we are committed to a community rooted in kindness and understanding.
            You should learn more about your friends, and you should get to be your authentic self, 
            too. But what’s not OK — what’s never OK — is attacking, intimidating, or otherwise being 
            unkind to others. Stopping this is a team effort, so here’s a rundown of how abuse is 
            handled on LOL: how we keep users safe and what to do if you see objectionable content 
            on the app.
          </p>

          <h2>Keeping users safe</h2>
          <p>
            Our number one priority is keeping our users safe. That’s why we offer various ways to 
            keep negative content at bay to make sure you have a great LOL experience. For starters, 
            we use Hive's AI-enabled content moderation to keep our safety techniques up-to-date 
            while helping keep our users’ inboxes free of negativity. We also have a dedicated, 24/7 
            safety team constantly working to combat abuse, bullying, and harassment on LOL. Email 
            info@plexus-technology.in to get in touch with us; we’re here to help you!
          </p>

          <h2>See something, say something</h2>
          <p>
            What should you do if you see a friend receiving abusive messages on LOL? This is where 
            the power of community comes in. If you see something, say something! Report abuse by 
            emailing our safety team right away; get in touch with us at info@plexus-technology.in 
            and we can review the situation and take the necessary steps to ensure all users’ safety.
          </p>

          <h2>I feel uncomfortable as a result of an LOL message; what do I do?</h2>
          <p>
           We at LOL do our best to keep our incredible community safe. However, sometimes a message 
           can still leave you feeling threatened, unsafe, or uneasy, and you may want to take 
           additional measures to ensure your safety and wellbeing. If you receive a message on LOL 
           that leaves you feeling this way, here are some steps to take to keep you safe:
          </p>

          <ul>
            <li><strong>Block the message sender</strong><br />Head to the “Report” menu and Block the 
            user from your inbox permanently.</li>

            <li><strong>Report the message to Team LOL</strong><br />Our number one priority is keeping our 
            users safe. That’s why we offer various ways to keep negative content at bay to make sure you 
            have a great LOL experience.</li>

            <li><strong>Find resources that can help you feel comfortable</strong><br />Visit "Our Resources" 
            to find help with getting back to feeling good!</li>
          </ul>
          
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

export default Blog5;
