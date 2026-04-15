// routes/admin.routes.js

import express from "express";
import {
  getAllUsers,
  deleteUser,
  makeAdmin,
} from "../controllers/admin.controller.js";

import { auth, isAdmin } from "../middleware/auth.middleware.js";

const router = express.Router();

// Users management
router.get("/users", auth, isAdmin, getAllUsers);
router.delete("/users/:id", auth, isAdmin, deleteUser);
router.put("/users/:id/role", auth, isAdmin, makeAdmin);

export default router;