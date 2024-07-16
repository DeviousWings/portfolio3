const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const DataModel = require("DataModel");
const connectDB = require("Database");
connectDB();

const app = express();
app.use(express.json({ extended: false }));

const cors = require("cors");
app.use(cors());

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
    res.status(500).send("Server error while saving data");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT: ${PORT}`);
});
