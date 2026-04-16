// routes/user.routes.js

import express from "express";
import {
  getCurrentUser,
  updateProfile,
  updateAvatar,
  changePassword,
  getMyCourses,
  deleteAccount
} from "../controllers/user.controller.js";

import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/me", protect, getCurrentUser);
router.put("/update", protect, updateProfile);
router.put("/avatar", protect, updateAvatar);
router.put("/password", protect, changePassword);
router.get("/my-courses", protect, getMyCourses);
router.delete("/delete", protect, deleteAccount);

export default router;