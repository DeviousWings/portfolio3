import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import "./styles/BlogDetails.scss";

function BlogDetail() {
  const [blog, setBlog] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/blogs/${id}`);
        setBlog(response.data);
      } catch (error) {
        console.error("Error fetching blog: ", error);
      }
    };
    fetchBlog();
  }, [id]);

  return (
    <div className="blog-detail">
      {blog ? (
        <div>
          <h1>{blog.title}</h1>
          <p>{blog.content}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default BlogDetail;
