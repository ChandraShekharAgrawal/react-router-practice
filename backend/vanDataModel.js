import mongoose from "mongoose";

const vanSchema = new mongoose.Schema({
  id: Number,
  name: String,
  price: Number,
  description: String,
  imageUrl: String,
  type: String,
  hostId: Number,
});

const Van = mongoose.model("Van", vanSchema);

export default Van;
