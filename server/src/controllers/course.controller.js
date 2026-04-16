// controllers/course.controller.js

import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import  Course  from "../models/Course.model.js";

// ➕ Create Course (Admin)
const createCourse = asyncHandler(async (req, res) => {
  const { title, description, price } = req.body;

  if (!title || !description || !price) {
    throw new ApiError(400, "All fields are required");
  }

  const course = await Course.create({
    title,
    description,
    price,
    instructor: req.user._id,
  });

  return res.status(201).json(
    new ApiResponse(201, course, "Course created successfully")
  );
});


// 📚 Get All Courses
const getAllCourses = asyncHandler(async (req, res) => {
  const courses = await Course.find();

  return res.status(200).json(
    new ApiResponse(200, courses, "Courses fetched successfully")
  );
});


// 🔍 Get Single Course
const getCourseById = asyncHandler(async (req, res) => {
  const course = await Course.findById(req.params.id);

  if (!course) {
    throw new ApiError(404, "Course not found");
  }

  return res.status(200).json(
    new ApiResponse(200, course, "Course fetched successfully")
  );
});


// ❌ Delete Course (Admin)
const deleteCourse = asyncHandler(async (req, res) => {
  const course = await Course.findByIdAndDelete(req.params.id);

  if (!course) {
    throw new ApiError(404, "Course not found");
  }

  return res.status(200).json(
    new ApiResponse(200, {}, "Course deleted successfully")
  );
});

export {
  createCourse,
  getAllCourses,
  getCourseById,
  deleteCourse
};