import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="flex justify-between items-center p-4 bg-gray-900">
      <Link to="/" className="text-xl font-bold text-blue-400">
        CourseHub
      </Link>

      <div className="flex gap-4">
        {user ? (
          <>
            <Link to="/profile">{user.name}</Link>
            <button onClick={logout} className="text-red-400">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;