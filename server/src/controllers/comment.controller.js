// controllers/comment.controller.js

import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import Comment  from "../models/Comment.model.js";

// ➕ Add Comment
const addComment = asyncHandler(async (req, res) => {
  const { courseId, text } = req.body;

  if (!text) {
    throw new ApiError(400, "Comment is required");
  }

  const comment = await Comment.create({
    user: req.user._id,
    course: courseId,
    text,
  });

  return res.status(201).json(
    new ApiResponse(201, comment, "Comment added")
  );
});


// 📥 Get Comments
const getComments = asyncHandler(async (req, res) => {
  const comments = await Comment.find({
    course: req.params.courseId,
  }).populate("user", "name");

  return res.status(200).json(
    new ApiResponse(200, comments, "Comments fetched")
  );
});

export { addComment, getComments };