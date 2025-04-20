import mongoose from "mongoose";

const url = "mongodb://127.0.0.1:27017/rest-practice";
mongoose.connect(url);
console.log("MongoDB Connected");
