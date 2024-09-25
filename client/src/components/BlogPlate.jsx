import { useState, useEffect } from "react";
import axios from "axios";

import "./styles/main.scss";

const BlogPlate = () => {
  const [latestBlog, setLatestBlog] = useState(null);

  useEffect(() => {
    const fetchLatestBlog = async () => {
      try {
        const response = await axios.get("http://localhost:5000/latest-blog");
        setLatestBlog(response.data);
      } catch (error) {
        console.error("Error fetching latest blog:", error);
      }
    };

    fetchLatestBlog();
  }, []);

  if (!latestBlog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="blog-plate">
      <h2>{latestBlog.title}</h2>
      <p>{latestBlog.content}</p>
      <small>
        Published on: {new Date(latestBlog.createdAt).toLocaleDateString()}
      </small>
    </div>
  );
};

export default BlogPlate;

// function BlogPlate() {
//   return (
//     <div className="main plate">
//       <p>Blog Plate</p>
//     </div>
//   );
// }

// export default BlogPlate;
