import { useEffect, useState } from "react";
import api from "../services/api";
import CourseCard from "../components/CourseCard";

const Home = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    api.get("/courses")
      .then(res => setCourses(res.data.data));
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">Explore Courses</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {courses.map(c => (
          <CourseCard key={c._id} course={c} />
        ))}
      </div>
    </div>
  );
};

export default Home;