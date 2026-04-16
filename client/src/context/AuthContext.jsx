// context/AuthContext.jsx

import { createContext, useEffect, useState } from "react";
import api from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔄 Load Logged-in User
  const loadUser = async () => {
    try {
      const res = await api.get("/users/me");
      setUser(res.data.data);
    } catch (err) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  // ✅ IMPORTANT: run only if token exists
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      loadUser();
    } else {
      setLoading(false);
    }
  }, []);

  // 🔐 Login
  const login = async (formData) => {
    try {
      const res = await api.post("/auth/login", formData);

      localStorage.setItem("token", res.data.token);

      await loadUser(); // sync user

      return { success: true };
    } catch (err) {
      return {
        success: false,
        message: err?.response?.data?.message || "Login failed",
      };
    }
  };

  // 📝 Signup
  const signup = async (formData) => {
    try {
      await api.post("/auth/signup", formData);
      return { success: true };
    } catch (err) {
      return {
        success: false,
        message: err?.response?.data?.message || "Signup failed",
      };
    }
  };

  // 🚪 Logout
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};