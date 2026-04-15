import Comment from "../models/Comment.model.js";
import mongoose from "mongoose";

/**
 * ➕ Add Comment
 */
export const addComment = async (userId, courseId, text) => {
  if (!text || text.trim() === "") {
    throw new Error("Comment text is required");
  }

  if (!mongoose.Types.ObjectId.isValid(courseId)) {
    throw new Error("Invalid course ID");
  }

  const comment = await Comment.create({
    user: userId,
    course: courseId,
    text,
  });

  return await comment.populate("user", "name avatar");
};