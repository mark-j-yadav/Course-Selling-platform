import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import  User  from "../models/User.models.js";
import  Order  from "../models/Order.model.js";


// 👤 Get Current User
const getCurrentUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id).select("-password");

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  return res.status(200).json(
    new ApiResponse(200, user, "User fetched successfully")
  );
});


// ✏️ Update Profile
const updateProfile = asyncHandler(async (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    throw new ApiError(400, "All fields are required");
  }

  const user = await User.findByIdAndUpdate(
    req.user._id,
    { name, email },
    { new: true, runValidators: true }
  ).select("-password");

  return res.status(200).json(
    new ApiResponse(200, user, "Profile updated successfully")
  );
});


// 🖼️ Update Avatar
const updateAvatar = asyncHandler(async (req, res) => {
  const { avatar } = req.body;

  if (!avatar) {
    throw new ApiError(400, "Avatar is required");
  }

  const user = await User.findById(req.user._id);

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  user.avatar = avatar;
  await user.save({ validateBeforeSave: false });

  return res.status(200).json(
    new ApiResponse(200, user, "Avatar updated successfully")
  );
});


// 🔐 Change Password
const changePassword = asyncHandler(async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  if (!oldPassword || !newPassword) {
    throw new ApiError(400, "All fields are required");
  }

  const user = await User.findById(req.user._id);

  const isMatch = await user.isPasswordCorrect(oldPassword);

  if (!isMatch) {
    throw new ApiError(400, "Old password is incorrect");
  }

  user.password = newPassword;
  await user.save();

  return res.status(200).json(
    new ApiResponse(200, {}, "Password changed successfully")
  );
});


// 📚 Get My Purchased Courses
const getMyCourses = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id })
    .populate("course");

  return res.status(200).json(
    new ApiResponse(200, orders, "My courses fetched successfully")
  );
});


// ❌ Delete Account
const deleteAccount = asyncHandler(async (req, res) => {
  const user = await User.findByIdAndDelete(req.user._id);

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  return res.status(200).json(
    new ApiResponse(200, {}, "Account deleted successfully")
  );
});


// 📊 (Optional) Get All Users - Admin Use
const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find().select("-password");

  return res.status(200).json(
    new ApiResponse(200, users, "All users fetched")
  );
});


export {
  getCurrentUser,
  updateProfile,
  updateAvatar,
  changePassword,
  getMyCourses,
  deleteAccount,
  getAllUsers
};