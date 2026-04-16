// pages/Home.jsx

import { useEffect, useState } from "react";
import CourseCard from "../components/CourseCard";
import Loader from "../components/Loader";
import api from "../services/api";

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/courses")
      .then(res => setCourses(res.data.data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Explore Courses</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {courses.map(course => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Home;