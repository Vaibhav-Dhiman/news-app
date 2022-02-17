import mongoose from "mongoose";
const { Schema } = mongoose;

const CategorySchema = new Schema(
  {
    name: {
      type: String,
    },
  },
  { collection: "category" }
);

export default mongoose.model("Category", CategorySchema);
