import express from "express";

import authRoutes from "./src/routes/auth.routes.js"
import userRoutes from "./src/routes/user.routes.js";
import courseRoutes from "./src/routes/course.routes.js";
import orderRoutes from "./src/routes/order.routes.js";
import reviewRoutes from "./src/routes/review.route.js";
import commentRoutes from "./src/routes/comment.routes.js";
import adminRoutes from "./src/routes/admin.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/admin", adminRoutes);

export  {app};