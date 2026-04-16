// routes/auth.routes.js

import express from "express";
import {
  signup,
  login,
  getProfile
} from "../controllers/auth.controller.js";

import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/me", protect, getProfile);

export default router;