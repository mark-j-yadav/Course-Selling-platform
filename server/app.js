import express from "express";
import cors from "cors";
import authRoutes from "../server/src/routes/auth.routes.js";
import userRoutes from "../server/src/routes/user.routes.js";
import courseRoutes from "../server/src/routes/course.routes.js";
import orderRoutes from "../server/src/routes/order.routes.js";
import reviewRoutes from "../server/src/routes/review.route.js";
import commentRoutes from "../server/src/routes/comment.routes.js";
import adminRoutes from "../server/src/routes/admin.routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
// API routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/admin", adminRoutes);

export  {app};