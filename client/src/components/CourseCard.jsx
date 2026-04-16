 const CourseCard = ({ course }) => {
  return (
    <div className="glass rounded-2xl overflow-hidden group hover:scale-[1.03] transition duration-300">

      <div className="relative">
        <img
          src={course?.thumbnail?.url || "https://via.placeholder.com/300"}
          className="h-44 w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"></div>
      </div>

      <div className="p-4">
        <h2 className="text-lg font-semibold group-hover:text-blue-400 transition">
          {course?.title || "Untitled"}
        </h2>

        <p className="text-gray-400 text-sm mt-1">
          {course?.description?.slice(0, 60) || "No description"}...
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-blue-400 font-bold">
            ₹{course?.price || 0}
          </span>

          <button className="btn-glow">
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;