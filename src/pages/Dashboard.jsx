import { logoutUser } from "../services/auth.api";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logoutUser();
    setUser(null);
    navigate("/");
  };

  return (
    <div className="p-6">
      <h2>Dashboard</h2>

      {user && (
        <div>
          <p>Email: {user.user.email}</p>
          <p>Username: {user.user.username}</p>
          <p>Role: {user.user.role}</p>
        </div>
      )}
      
        <div className="flex gap-2 flex-wrap">
  <button onClick={()=>navigate("/videos")}>Videos</button>
  <button onClick={()=>navigate("/products")}>Products</button>
  <button onClick={()=>navigate("/quotes")}>Quotes</button>
  <button onClick={()=>navigate("/jokes")}>Jokes</button>
  <button onClick={()=>navigate("/cats")}>Cats</button>
  <button onClick={()=>navigate("/meals")}>Meals</button>
  <button onClick={()=>navigate("/users")}>Users</button>
</div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}