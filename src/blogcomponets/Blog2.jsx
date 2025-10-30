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

const Blog2 = () => {
  return (
    <div className="container">
      <div className="blog-detail">

        {/* ✅ Banner Image with Title Inside */}
        <div className="blog-banner">
          <img src={id2} alt="Hidden Gems: Tips & Tricks for the LOL App" />
          <div className="banner-overlay-text">
            <h1>
              Uplift Your Community <br /> Getting Involved IEL
            </h1>
          </div>
        </div>

        {/* ✅ Blog Content Section */}
        <div className="blog-content">
          <p>
            LOL was built in order to foster community amongst its users. 
            In an increasiLOLy online world, it's easy to feel lonely; digital 
            connection doesn't provide the same depth of community as getting 
            to connect in-person. That's why it's essential to give back to 
            your community. Community involvement is essential for creating 
            a sense of collective belonging and connection. Whether you're new 
            to your neighborhood or a long-time resident, there are plenty of 
            ways to get involved and make a positive impact.
          </p>

          <p>
            Volunteering your time is a fantastic way to give back. Numerous 
            organizations need help, whether it's serving meals at a soup kitchen, 
            walking dogs at an animal shelter, or tutoring students. Find a cause 
            that resonates with you and donate your skills and energy. Attending 
            local events is another great way to connect with your community. 
            Festivals, fairs, concerts, and farmers' markets offer opportunities 
            to meet neighbors, support local businesses, and learn more about your area.
          </p>

          <p>
            Consider joining clubs or organizations aligned with your interests. 
            This could be a sports league, book club, gardening group, or volunteer 
            fire department. These groups provide a space to socialize, learn new skills, 
            and work towards common goals. Supporting local businesses is crucial for a 
            thriving community. Instead of opting for large chains, explore the unique 
            shops, restaurants, and services offered by local entrepreneurs. Your patronage 
            helps sustain the local economy and fosters a vibrant atmosphere.
          </p>

          <p>
            Engaging in local government is a powerful way to shape your community. Attend city 
            council meetings, voice your opinions on important issues, and consider running for 
            office yourself. By participating in the decision-making process, you can ensure your 
            community reflects the values and needs of its residents. Remember, even small 
            actions can have a significant impact. Every act of kindness, volunteer hour, and 
            purchase from a local business contributes to a stronger, more connected community.
          </p>

          <p style={{ fontWeight: 600 }}>
            Remember - change doesn't happen without a catalyst. So get involved, make a difference, 
            and watch your community flourish.
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

export default Blog2;
