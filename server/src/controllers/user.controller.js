// controllers/user.controller.js

import User from "../models/User.models.js";

export const getProfile = async (req, res) => {
  const user = await User.findById(req.user.id);

  res.json({
    success: true,
    data: user,
  });
};

export const updateProfile = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.user.id, req.body, {
    new: true,
  });

  res.json({
    success: true,
    data: user,
    message: "Profile updated",
  });
};

export const updateAvatar = async (req, res) => {
  const user = await User.findById(req.user.id);

  user.avatar = req.body.avatar;
  await user.save();

  res.json({
    success: true,
    message: "Avatar updated",
  });
};