// pages/Signup.jsx

import { useState } from "react";
import api from "../services/api";

const Signup = () => {
  const [form, setForm] = useState({
    name: "", email: "", password: ""
  });

  const handleSignup = async (e) => {
    e.preventDefault();
    await api.post("/auth/signup", form);
    alert("Signup Success");
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={handleSignup}
        className="glass p-8 rounded-2xl w-96">

        <h2 className="text-2xl font-bold mb-6 text-center">
          Signup
        </h2>

        <input placeholder="Name"
          className="input"
          onChange={(e)=>setForm({...form,name:e.target.value})}
        />

        <input placeholder="Email"
          className="input"
          onChange={(e)=>setForm({...form,email:e.target.value})}
        />

        <input type="password" placeholder="Password"
          className="input"
          onChange={(e)=>setForm({...form,password:e.target.value})}
        />

        <button className="btn-glow w-full mt-4">Signup</button>
      </form>
    </div>
  );
};

export default Signup;