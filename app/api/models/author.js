import mongoose from "mongoose";
const { Schema } = mongoose;

const AuthorSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
  },
  { collection: "author" }
);

export default mongoose.model("Author", AuthorSchema);
