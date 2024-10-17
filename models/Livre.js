import mongoose, { Types } from "mongoose";

const livreShema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Livre", livreShema);
