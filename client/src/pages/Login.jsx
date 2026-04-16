import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({});
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(form);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-20 bg-gray-900 p-6 rounded">

      <input placeholder="Email"
        onChange={e=>setForm({...form,email:e.target.value})}
        className="w-full mb-4 p-2 bg-gray-800" />

      <input type="password" placeholder="Password"
        onChange={e=>setForm({...form,password:e.target.value})}
        className="w-full mb-4 p-2 bg-gray-800" />

      <button className="w-full bg-blue-500 py-2 rounded">
        Login
      </button>

    </form>
  );
};

export default Login;