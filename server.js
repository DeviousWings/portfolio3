const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const DataModel = require("./DataModel");
const BlogModel = require("./BlogModel");
const connectDB = require("./Database");
connectDB();

const app = express();
app.use(express.json({ extended: false }));

const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the server. Connection succsessful");
});

app.get("/readfromserver", (req, res) => {
  res.json({ message: "Hello from server" });
});

app.post("/writetodatabase", async (req, res) => {
  try {
    const { content } = req.body;
    const newData = new DataModel({ content });
    await newData.save();
    res.json({ message: "Data saved successfully" });
  } catch (error) {
    console.log("There is an error: ", error.message);
    res.status(500).json({ error: "Server error while saving data" });
  }
});

app.get("/latest-blog", async (req, res) => {
  try {
    const latestBlog = await BlogModel.findOne().sort({ createdAt: -1 });
    res.json(latestBlog);
  } catch (error) {
    console.error("Error fetching latest blog: ", error);
    res.status(500).send("Server error");
  }
});

app.get("/blogs", async (req, res) => {
  try {
    const blogs = await BlogModel.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (error) {
    console.error("Error fetching blogs: ", error);
    res.status(500).send("Server error");
  }
});

app.get("/blogs/:id", async (req, res) => {
  try {
    const blog = await BlogModel.findById(req.params.id);
    if (!blog) return res.status(404).send("Blog not found");
    res.json(blog);
  } catch (error) {
    console.error("Error fetching blog: ", error);
    res.status(500).send("Server error");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT: ${PORT}`);
});

/*
// OPTIONAL: FOR DEPLOYMENT
//import path package
const path = require("path");
// Serve static files from the React app by using path package
app.use(express.static(path.join(__dirname, "client/build")));
// Handle any requests that don't match the above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});
//on client CMD, "npm build"
//also remove "build" entry from client .gitignore
//also you'll need to enter .env connection string as an environment variable in your platform
//also make sure you are using relative paths in your react components for server.js routes
*/
