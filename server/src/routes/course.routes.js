// routes/course.routes.js

import express from "express";
import {
  createCourse,
  getAllCourses,
  getCourseById,
  deleteCourse
} from "../controllers/course.controller.js";

import { protect } from "../middleware/auth.middleware.js";
import { adminOnly } from "../middleware/admin.middleware.js";

const router = express.Router();

// Public
router.get("/", getAllCourses);
router.get("/:id", getCourseById);

// Admin
router.post("/", protect, adminOnly, createCourse);
router.delete("/:id", protect, adminOnly, deleteCourse);

export default router;