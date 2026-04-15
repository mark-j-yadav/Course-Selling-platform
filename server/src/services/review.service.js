import Review from "../models/Review.model.js";
import Course from "../models/Course.model.js";

export const addReview = async (userId, courseId, rating, comment) => {
  const review = await Review.create({
    user: userId,
    course: courseId,
    rating,
    comment,
  });

  const reviews = await Review.find({ course: courseId });

  const avg =
    reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;

  await Course.findByIdAndUpdate(courseId, {
    ratings: avg,
    numReviews: reviews.length,
  });

  return review;
};