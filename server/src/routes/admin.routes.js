// routes/admin.routes.js

import express from "express";
import {
  getDashboardStats,
  getAllUsers,
  getAllOrders
} from "../controllers/admin.controller.js";

import { protect } from "../middleware/auth.middleware.js";
import { adminOnly } from "../middleware/admin.middleware.js";

const router = express.Router();

router.get("/stats", protect, adminOnly, getDashboardStats);
router.get("/users", protect, adminOnly, getAllUsers);
router.get("/orders", protect, adminOnly, getAllOrders);

export default router;