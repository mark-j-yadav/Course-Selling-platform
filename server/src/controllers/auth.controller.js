// controllers/auth.controller.js

import * as authService from "../services/auth.service.js";

export const signup = async (req, res) => {
  try {
    const user = await authService.signup(req.body);

    res.status(201).json({
      success: true,
      data: user,
      message: "Signup successful",
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const data = await authService.login(req.body);

    res.status(200).json({
      success: true,
      ...data,
      message: "Login successful",
    });
  } catch (err) {
    res.status(401).json({ success: false, message: err.message });
  }
};

export const logout = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Logout successful",
  });
};