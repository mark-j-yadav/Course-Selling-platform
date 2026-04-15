import Course from "../models/Course.model.js";

export const createCourse = async (data, user) => {
  return await Course.create({
    ...data,
    instructor: user.id,
  });
};

export const getCourses = async () => {
  return await Course.find().populate("instructor", "name");
};