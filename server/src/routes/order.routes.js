// routes/order.routes.js

import express from "express";
import {
  createOrder,
  getMyOrders
} from "../controllers/order.controller.js";

import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", protect, createOrder);
router.get("/my", protect, getMyOrders);

export default router;