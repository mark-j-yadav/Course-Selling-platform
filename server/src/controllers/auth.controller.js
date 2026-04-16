// controllers/auth.controller.js

import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import  User  from "../models/User.models.js";
import jwt from "jsonwebtoken";

// 🔐 Generate Token
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};


// 📝 Signup
const signup = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new ApiError(400, "All fields required");
  }

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new ApiError(400, "User already exists");
  }

  const user = await User.create({ name, email, password });

  return res.status(201).json(
    new ApiResponse(201, user, "User registered successfully")
  );
});


// 🔐 Login
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user || !(await user.isPasswordCorrect(password))) {
    throw new ApiError(401, "Invalid credentials");
  }

  const token = generateToken(user._id);

  return res.status(200).json(
    new ApiResponse(200, { user, token }, "Login successful")
  );
});


// 👤 Get Profile
const getProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id).select("-password");

  return res.status(200).json(
    new ApiResponse(200, user, "Profile fetched")
  );
});

export { signup, login, getProfile };