import express from "express";
import mongoose from "mongoose";
import Van from "./vanDataModel.js";
import cors from "cors";

const App = express();

// connect to mongodb
mongoose
  .connect("mongodb://127.0.0.1:27017/van", {
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

App.use(cors());

App.get("/", async (req, res) => {
  try {
    const vans = await Van.find();
    res.json(vans);
  } catch (error) {
    console.error('Error fetching data from "Van" collection:', error);
    res.status(500).json({ error: "Error fetching data" });
  }
  //console.log("server running");
});

App.listen(5000, () => {
  console.log("listening on port 5000");
});
