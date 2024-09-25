import { useState } from "react";
import axios from "axios";
import "./styles/main.scss";

const Write = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/writetodatabase",
        {
          title,
          content,
        }
      );
      alert(response.data.message);
      setTitle("");
      setContent("");
    } catch (error) {
      console.error("Error posting blog:", error);
    }
  };

  return (
    <div className="write">
      <h2>Write a New Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Write;
