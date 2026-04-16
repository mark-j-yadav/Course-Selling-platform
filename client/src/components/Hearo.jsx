const Hero = () => {
  return (
    <div className="text-center py-16">

      <h1 className="text-5xl font-bold leading-tight bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        Learn. Build. Earn.
      </h1>

      <p className="text-gray-400 mt-4 max-w-xl mx-auto">
        Premium coding courses with real-world projects.
      </p>

      <div className="mt-6">
        <button className="btn-glow px-6 py-3 text-lg">
          Explore Courses
        </button>
      </div>
    </div>
  );
};

export default Hero;