import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Products from "./pages/Product"
import Cart from "./pages/Cart"
import Login from "./pages/Login"


function App() {
  return (
    
    <div>
      <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
             <Route path="/products" element={<Products />} />
             <Route path="/cart" element={<Cart />} />
             <Route path="/login" element={<Login />} />
          </Routes>
    </div>
  )
}

export default App
