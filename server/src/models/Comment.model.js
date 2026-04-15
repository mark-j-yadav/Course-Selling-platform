import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },

    text: {
      type: String,
      required: true,
      maxlength: 300,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Comment", commentSchema);