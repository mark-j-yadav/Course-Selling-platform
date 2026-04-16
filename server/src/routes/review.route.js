// routes/review.routes.js

import express from "express";
import {
  addReview,
  getReviews
} from "../controllers/review.controller.js";

import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", protect, addReview);
router.get("/:courseId", getReviews);

export default router;