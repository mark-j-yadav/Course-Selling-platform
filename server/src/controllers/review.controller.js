// controllers/review.controller.js

import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import  Review  from "../models/Review.model.js";

// ✍️ Add Review
const addReview = asyncHandler(async (req, res) => {
  const { courseId, rating, comment } = req.body;

  if (!rating || !comment) {
    throw new ApiError(400, "All fields required");
  }

  const review = await Review.create({
    user: req.user._id,
    course: courseId,
    rating,
    comment,
  });

  return res.status(201).json(
    new ApiResponse(201, review, "Review added successfully")
  );
});


// 📥 Get Reviews
const getReviews = asyncHandler(async (req, res) => {
  const reviews = await Review.find({
    course: req.params.courseId,
  }).populate("user", "name");

  return res.status(200).json(
    new ApiResponse(200, reviews, "Reviews fetched")
  );
});

export { addReview, getReviews };