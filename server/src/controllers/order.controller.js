// controllers/order.controller.js

import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import Order  from "../models/Order.model.js";
import Course  from "../models/Course.model.js";


// 🛒 Create Order
const createOrder = asyncHandler(async (req, res) => {
  const { courseId } = req.body;

  const course = await Course.findById(courseId);

  if (!course) {
    throw new ApiError(404, "Course not found");
  }

  const order = await Order.create({
    user: req.user._id,
    course: courseId,
    amount: course.price,
  });

  return res.status(201).json(
    new ApiResponse(201, order, "Order created")
  );
});


// 📦 Get My Orders
const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id })
    .populate("course");

  return res.status(200).json(
    new ApiResponse(200, orders, "Orders fetched")
  );
});

export { createOrder, getMyOrders };