import { Link } from "react-router-dom";
import {useAuth  } from "../context/authContext";

export default function Navbar() {
  const { user } = useAuth();

  return (
    <div className="p-4 bg-gray-800 text-white flex justify-between">
      <h1>Auth App</h1>
      <div className="flex gap-4">
        {!user ? (
          <>
            <Link to="/">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <Link to="/dashboard">Dashboard</Link>
        )}
      </div>
    </div>
  );
}