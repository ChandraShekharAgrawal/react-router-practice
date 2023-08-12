import express from "express";
import mongoose from "mongoose";

const App = express();

// connect to mongodb
mongoose
  .connect("mongodb://127.0.0.1:27017/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1);
  });

App.get("/", (req, res) => {
  res.send("Hello");
  console.log("server running");
});

App.listen(5000, () => {
  console.log("listening on port 5000");
});
