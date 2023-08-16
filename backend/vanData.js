import Van from "./vanDataModel.js";
import vans from "./data/vans.js";
import mongoose from "mongoose";

mongoose
  .connect("mongodb://127.0.0.1:27017/van", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    try {
      console.log("Connected to MongoDB in feeding data");

      // Delete existing documents
      await Van.deleteMany({});

      // Insert new documents
      await Van.insertMany(vans);

      console.log("Documents inserted successfully");
    } catch (error) {
      console.error("Error:", error);
    } finally {
      mongoose.disconnect(); // Close the connection when done
    }
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1);
  });
