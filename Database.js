require("dotenv").config();
const mongoose = require("mongoose");

const uri = process.env.SERVER_MONGODB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Successfully connected");
  } catch (error) {
    console.log("Hey, mongoDB Error: ", error.message);
  }
};
module.exports = connectDB;
