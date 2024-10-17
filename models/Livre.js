import mongoose, { Types } from "mongoose";

const livreShema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  publishedYear: Number,
  genre: String,
});

export default mongoose.model("Livre", livreShema);
