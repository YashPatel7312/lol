import React from "react";
import { Link } from "react-router-dom";
import "./BlogGrid.css";

// ✅ Import all blog images
import id1 from "../assets/id1.jpg";
import id2 from "../assets/id2.jpg";
import id3 from "../assets/id3.jpg";
import id4 from "../assets/id4.jpg";
import id5 from "../assets/id5.jpg";
import id6 from "../assets/id6.jpg";
import id7 from "../assets/id7.jpg";

// ✅ Blog data
const blogs = [
  { id: 1, title: "Hidden Gems: Tips & Tricks for the LOL App", img: id1 },
  { id: 2, title: "Uplift Your Community: Getting Involved IRL", img: id2 },
  { id: 3, title: "Announcing New Features and User Controls", img: id3 },
  { id: 4, title: "LOL Response to FTC Settlement", img: id4 },
  { id: 5, title: "Staying Safe on LOL: Tips for User Safety", img: id5 },
  { id: 6, title: "A Guide to Online Privacy", img: id6 },
  { id: 7, title: "LOL Procedures for Information Requests", img: id7 },
];

const BlogGrid = () => {
  return (
    <div className="container">
    <div className="custom-grid">
      {blogs.map((blog) => (
        <Link
          key={blog.id}
          to={`/blog/${blog.id}`} // opens internal new page
          className={`grid-item id${blog.id}`}
        >
          <img src={blog.img} alt={blog.title} />
          <div className="overlay">
            <h3 className="ovtext">{blog.title}</h3>
          </div>
        </Link>
      ))}
    </div>
    </div>
  );
};

export default BlogGrid;
