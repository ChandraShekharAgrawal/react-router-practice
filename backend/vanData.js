import Van from "./vanDataModel.js";
import vans from "./data/vans.js";
import mongoose from "mongoose";

mongoose
  .connect("mongodb://127.0.0.1:27017/van", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB in feeding data");
    Van.insertMany(vans)
      .then(() => {
        console.log("Documents inserted successfully");
      })
      .catch((error) => {
        console.error("Error inserting documents:", error);
      })
      .finally(() => {
        mongoose.disconnect(); // Close the connection when done
      });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1);
  });
