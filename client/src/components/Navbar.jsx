import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sticky top-4 z-50 flex justify-center">
      <nav className="glass w-[90%] max-w-6xl px-6 py-3 flex justify-between items-center rounded-2xl">
        
        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          CodeCourse
        </h1>

        <div className="flex items-center gap-6">
          <Link className="hover:text-blue-400 transition" to="/">Home</Link>
          <Link className="hover:text-purple-400 transition" to="/login">Login</Link>

          <img
            src="https://i.pravatar.cc/40"
            className="w-10 h-10 rounded-full border-2 border-purple-500 hover:scale-110 transition cursor-pointer"
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;