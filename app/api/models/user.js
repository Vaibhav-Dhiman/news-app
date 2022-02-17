import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    userName: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    phone: {
      type: Number,
    },
    gender: {
      type: String,
    },
    language: {
      type: String,
    },
    materialStatus: {
      type: String,
    },
    dob: {
      type: Date,
    },
  },
  { collection: "user" }
);

export default mongoose.model("User", UserSchema);
