import { useState } from "react";
import { registerUser } from "../services/auth.api";

export default function Register() {
  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
    role: "ADMIN",
  });

  const [msg, setMsg] = useState("");

  const handleRegister = async () => {
    const res = await registerUser(form);
    setMsg(res.message);
  };

  return (
    <div className="p-6">
      <input placeholder="Email" onChange={(e)=>setForm({...form,email:e.target.value})}/>
      <input placeholder="Username" onChange={(e)=>setForm({...form,username:e.target.value})}/>
      <input type="password" placeholder="Password" onChange={(e)=>setForm({...form,password:e.target.value})}/>

      <button onClick={handleRegister}>Register</button>
      {msg && <p>{msg}</p>}
    </div>
  );
}