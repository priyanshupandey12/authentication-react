import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
import Navbar from "./pages/Navbar";
import { AuthProvider } from "./context/authContext";
import Videos from "./pages/videoPage";
import Products from "./pages/Products";
import Quotes from "./pages/quotes";
import Jokes from "./pages/jokes";
import Cats from "./pages/cats";
import Meals from "./pages/mealPage";
import RandomUsers from "./pages/randomuser"

export default function App() {
  return (

      <BrowserRouter>
          <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/products" element={<Products/>}/>
           <Route path="/quotes" element={<Quotes/>}/>
             <Route path="/jokes" element={<Jokes/>}/>
                <Route path="/cats" element={<Cats/>}/>
                  <Route path="/meals" element={<Meals/>}/>
                    <Route path="/random" element={<RandomUsers/>}/>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
          </AuthProvider>
      </BrowserRouter>
  
  );
}