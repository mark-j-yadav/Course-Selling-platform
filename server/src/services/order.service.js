import Order from "../models/Order.model.js";
import User from "../models/User.models.js";

export const createOrder = async (userId, courseId, price) => {
  const order = await Order.create({
    user: userId,
    course: courseId,
    pricePaid: price,
    isPaid: true,
    paidAt: new Date(),
  });

  await User.findByIdAndUpdate(userId, {
    $push: { purchasedCourses: courseId },
  });

  return order;
};