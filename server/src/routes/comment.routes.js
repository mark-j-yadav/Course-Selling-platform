// routes/comment.routes.js

import express from "express";
import {
  addComment,
  getComments
} from "../controllers/comment.controller.js";

import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", protect, addComment);
router.get("/:courseId", getComments);

export default router;