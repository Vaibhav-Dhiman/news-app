import mongoose from "mongoose";

const { Schema } = mongoose;

const NewsSchema = new Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Author",
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    imageUrl: {
      type: String,
    },
    videoUrl: {
      type: String,
    },
    newsText: {
      type: String,
    },
    createdAt: {
      type: Date,
    },
  },
  { collection: "news" }
);

export default mongoose.model("News", NewsSchema);
