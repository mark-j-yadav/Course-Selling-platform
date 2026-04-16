// pages/Profile.jsx

import { useEffect, useState } from "react";
import api from "../services/api";

const Profile = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    api.get("/users/me").then(res => {
      setUser(res.data.data);
    });
  }, []);

  return (
    <div className="glass p-6 rounded-2xl max-w-md mx-auto">

      <img src={user.avatar?.url || "https://i.pravatar.cc/100"}
        className="w-20 h-20 rounded-full mx-auto" />

      <h2 className="text-center mt-4 text-xl">{user.name}</h2>
      <p className="text-center text-gray-400">{user.email}</p>

    </div>
  );
};

export default Profile;