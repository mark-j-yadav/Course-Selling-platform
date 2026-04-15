import express from "express";
import {
  createCourse,
  getCourses,
} from "../controllers/course.controller.js";
import { auth, isAdmin } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", getCourses);
router.post("/", auth, isAdmin, createCourse);

export default router;