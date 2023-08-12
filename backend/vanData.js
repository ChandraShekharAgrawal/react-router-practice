import mongoose from "mongoose";

const vanSchema = new mongoose.Schema({
  id: Number,
  name: String,
  price: Number,
  desctiption: String,
  imageUrl: String,
  type: String,
});

const Van = mongoose.model("Van", vanSchema);

export default Van;