// routes/comment.routes.js

import express from "express";
import {
  addComment,
  getComments,
  deleteComment,
} from "../controllers/comment.controller.js";

import { auth } from "../middleware/auth.middleware.js";

const router = express.Router();

// Add comment
router.post("/", auth, addComment);

// Get comments of course
router.get("/:courseId", getComments);

// Delete comment
router.delete("/:id", auth, deleteComment);

export default router;