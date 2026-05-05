import { useState } from "react";
import { loginUser } from "../services/auth.api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleLogin = async () => {
    const res = await loginUser(form);

    if (res.success) {
      setUser(res.data);
      navigate("/dashboard");
    } else {
      setMsg(res.message);
    }
  };

  return (
    <div className="p-6">
      <input
        placeholder="Username"
        onChange={(e) => setForm({ ...form, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <button onClick={handleLogin}>Login</button>
      {msg && <p>{msg}</p>}
    </div>
  );
}