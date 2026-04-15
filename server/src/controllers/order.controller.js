// controllers/order.controller.js

import * as orderService from "../services/order.service.js";

export const createOrder = async (req, res) => {
  try {
    const { courseId, price } = req.body;

    const order = await orderService.createOrder(
      req.user.id,
      courseId,
      price
    );

    res.status(201).json({
      success: true,
      data: order,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getUserOrders = async (req, res) => {
  const orders = await orderService.getUserOrders(req.user.id);

  res.json({
    success: true,
    data: orders,
  });
};

export const getAllOrders = async (req, res) => {
  const orders = await orderService.getAllOrders();

  res.json({
    success: true,
    data: orders,
  });
};