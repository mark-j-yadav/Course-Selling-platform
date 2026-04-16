// pages/Login.jsx

import { useState } from "react";
import api from "../services/api";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await api.post("/auth/login", form);
    localStorage.setItem("token", res.data.token);

    alert("Login Success");
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={handleLogin}
        className="glass p-8 rounded-2xl w-96">

        <h2 className="text-2xl font-bold mb-6 text-center">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-2 bg-transparent border rounded"
          onChange={(e)=>setForm({...form,email:e.target.value})}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 bg-transparent border rounded"
          onChange={(e)=>setForm({...form,password:e.target.value})}
        />

        <button className="btn-glow w-full">Login</button>
      </form>
    </div>
  );
};

export default Login;