import { Link } from "react-router-dom";
import { useCart } from "../store/CartProvider";

function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
       
        <Link to="/" className="text-2xl font-extrabold text-blue-600 tracking-tight">
          Sasto
        </Link>

      
        <div className="flex items-center gap-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link to="/products" className="hover:text-blue-600 transition-colors">
            Products
          </Link>
          <Link
            to="/cart"
            className="relative hover:text-blue-600 transition-colors"
          >
            Cart
            {cart.length > 0 && (
              <span className="absolute -top-2.5 -right-4 bg-blue-600 text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </Link>
          <Link
            to="/login"
            className="bg-blue-600 text-white px-4 py-1.5 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;