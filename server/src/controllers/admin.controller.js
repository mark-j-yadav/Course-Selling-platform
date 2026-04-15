// controllers/admin.controller.js

import User from "../models/User.models.js";

export const getAllUsers = async (req, res) => {
  const users = await User.find();

  res.json({
    success: true,
    data: users,
  });
};

export const deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);

  res.json({
    success: true,
    message: "User deleted",
  });
};

export const makeAdmin = async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    { role: "admin" },
    { new: true }
  );

  res.json({
    success: true,
    data: user,
    message: "User promoted to admin",
  });
};