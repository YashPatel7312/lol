import React from "react";
import { useNavigate } from "react-router-dom";
import "../blogcomponets/BlogGrid.css   ";

const BlogGrid = () => {
  const navigate = useNavigate();

  const blogs = [
    {
      id: 1,
      title: "Hidden Gems: Tips & Tricks for the LOL App",
      image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6",
      link: "/hidden-gems",
    },
    {
      id: 2,
      title: "Uplift Your Community: Getting Involved IRL",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
      link: "/uplift-community",
    },
    {
      id: 3,
      title: "Announcing New Features and User Controls",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      link: "/new-features",
    },
    {
      id: 4,
      title: "LOL Response to FTC Settlement",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
      link: "/ftc-response",
    },
    {
      id: 5,
      title: "Staying Safe on LOL: Tips for User Safety",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      link: "/user-safety",
    },
    {
      id: 6,
      title: "A Guide to Online Privacy",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
      link: "/online-privacy",
    },
    {
      id: 7,
      title: "LOL Procedures for Information Requests",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      link: "/information-requests",
    },
  ];

  return (
    <div className="custom-blog-grid">
      {blogs.map((blog, index) => (
        <div
          key={blog.id}
          className={`blog-card ${
            index === 3 ? "blog-card-large" : ""
          }`}
          onClick={() => navigate(blog.link)}
        >
          <img src={blog.image} alt={blog.title} className="blog-img" />
          <div className="blog-overlay">
            <h3>{blog.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogGrid;
