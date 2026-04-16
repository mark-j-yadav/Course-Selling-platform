import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <div className="bg-gray-900 p-4 rounded-xl hover:scale-105 transition">

      <img src={course.thumbnail?.url}
        className="h-40 w-full object-cover rounded-lg" />

      <h2 className="mt-3 text-lg font-semibold">
        {course.title}
      </h2>

      <p className="text-gray-400 text-sm">
        ₹{course.price}
      </p>

      <Link to={`/course/${course._id}`}>
        <button className="mt-3 w-full bg-blue-500 py-2 rounded">
          View
        </button>
      </Link>

    </div>
  );
};

export default CourseCard;