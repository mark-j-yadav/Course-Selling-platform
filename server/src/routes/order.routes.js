// routes/order.routes.js

import express from "express";
import {
  createOrder,
  getUserOrders,
  getAllOrders,
} from "../controllers/order.controller.js";

import { auth, isAdmin } from "../middleware/auth.middleware.js";

const router = express.Router();

// User
router.post("/", auth, createOrder);
router.get("/my-orders", auth, getUserOrders);

// Admin
router.get("/", auth, isAdmin, getAllOrders);

export default router;