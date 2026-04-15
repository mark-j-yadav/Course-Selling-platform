// routes/review.routes.js

import express from "express";
import {
  addReview,
  getCourseReviews,
  deleteReview,
} from "../controllers/review.controller.js";

import { auth } from "../middleware/auth.middleware.js";

const router = express.Router();

// Add review
router.post("/", auth, addReview);

// Get reviews of course
router.get("/:courseId", getCourseReviews);

// Delete review (user can delete own)
router.delete("/:id", auth, deleteReview);

export default router;