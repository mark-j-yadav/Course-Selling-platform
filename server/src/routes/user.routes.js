// routes/user.routes.js

import express from "express";
import {
  getProfile,
  updateProfile,
  updateAvatar,
} from "../controllers/user.controller.js";

import { auth } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/me", auth, getProfile);
router.put("/me", auth, updateProfile);
router.put("/avatar", auth, updateAvatar);

export default router;