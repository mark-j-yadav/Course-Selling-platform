// controllers/review.controller.js

import * as reviewService from "../services/review.service.js";

export const addReview = async (req, res) => {
  try {
    const { courseId, rating, comment } = req.body;

    const review = await reviewService.addReview(
      req.user.id,
      courseId,
      rating,
      comment
    );

    res.status(201).json({
      success: true,
      data: review,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getCourseReviews = async (req, res) => {
  const reviews = await reviewService.getCourseReviews(
    req.params.courseId
  );

  res.json({
    success: true,
    data: reviews,
  });
};

export const deleteReview = async (req, res) => {
  await reviewService.deleteReview(req.params.id, req.user.id);

  res.json({
    success: true,
    message: "Review deleted",
  });
};