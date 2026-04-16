// pages/Dashboard.jsx

import { useEffect, useState } from "react";
import api from "../services/api";

const Dashboard = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    api.get("/courses").then(res => {
      setCourses(res.data.data);
    });
  }, []);

  return (
    <div>
      <h1 className="text-3xl mb-6">Admin Dashboard</h1>

      <div className="grid gap-4">
        {courses.map(c => (
          <div key={c._id}
            className="glass p-4 flex justify-between">

            <span>{c.title}</span>

            <button className="text-red-400">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;