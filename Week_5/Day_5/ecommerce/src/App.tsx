import { createBrowserRouter, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Products from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import ProductDetail from './pages/ProductDetail';

function Layout() {
  return (
    <div>
      <Navbar />
       <div className="container mx-auto px-4">
      <Outlet />
      </div>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'products', element: <Products /> },
      { path: 'cart', element: <Cart /> },
      { path: 'login', element: <Login /> },
      { path: 'products/:id', element: <ProductDetail /> },
    ],
  },
]);
