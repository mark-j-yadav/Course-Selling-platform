// controllers/course.controller.js

import * as courseService from "../services/course.service.js";

export const createCourse = async (req, res) => {
  try {
    const course = await courseService.createCourse(req.body, req.user);

    res.status(201).json({
      success: true,
      data: course,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getCourses = async (req, res) => {
  const courses = await courseService.getCourses();

  res.json({
    success: true,
    data: courses,
  });
};

export const getCourseById = async (req, res) => {
  const course = await courseService.getCourseById(req.params.id);

  res.json({
    success: true,
    data: course,
  });
};

export const updateCourse = async (req, res) => {
  const course = await courseService.updateCourse(
    req.params.id,
    req.body
  );

  res.json({
    success: true,
    data: course,
    message: "Course updated",
  });
};

export const deleteCourse = async (req, res) => {
  await courseService.deleteCourse(req.params.id);

  res.json({
    success: true,
    message: "Course deleted",
  });
};