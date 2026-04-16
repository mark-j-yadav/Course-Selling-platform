import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import useAuth from "../hooks/useAuth";
import Loader from "../components/Loader";

const MainLayout = () => {
  const { loading } = useAuth();

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;