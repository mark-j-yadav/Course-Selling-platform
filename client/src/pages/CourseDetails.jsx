// pages/CourseDetails.jsx

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState({});

  useEffect(() => {
    api.get(`/courses/${id}`).then(res => {
      setCourse(res.data.data);
    });
  }, []);

  return (
    <div className="grid md:grid-cols-2 gap-10">

      <img
  src={course?.thumbnail?.url || "https://via.placeholder.com/400"}
  className="rounded-2xl"
/>

      <div>
        <h1 className="text-3xl font-bold">{course.title}</h1>

        <p className="text-gray-400 mt-4">
          {course.description}
        </p>

        <button className="btn-glow mt-6">
          Buy ₹{course.price}
        </button>
      </div>
    </div>
  );
};

export default CourseDetails;