import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./styles/main.scss";

function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/blogs");
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs: ", error);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="blog-list">
      <h2>Blog Posts</h2>
      <ul>
        {blogs.map((blog) => (
          <li key={blog._id}>
            <Link to={`/blog/${blog._id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
