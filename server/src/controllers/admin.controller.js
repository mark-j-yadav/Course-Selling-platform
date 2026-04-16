// controllers/admin.controller.js

import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import User from "../models/User.models.js";
import  Course  from "../models/Course.model.js";
import  Order  from "../models/Order.model.js";


// 📊 Dashboard Stats
const getDashboardStats = asyncHandler(async (req, res) => {
  const users = await User.countDocuments();
  const courses = await Course.countDocuments();
  const orders = await Order.countDocuments();

  return res.status(200).json(
    new ApiResponse(200, { users, courses, orders }, "Dashboard stats")
  );
});


// 👥 Get All Users
const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find().select("-password");

  return res.status(200).json(
    new ApiResponse(200, users, "Users fetched")
  );
});


// 📚 Get All Orders (Admin)
const getAllOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find()
    .populate("user", "name email")
    .populate("course", "title");

  return res.status(200).json(
    new ApiResponse(200, orders, "All orders fetched")
  );
});

export {
  getDashboardStats,
  getAllUsers,
  getAllOrders
};