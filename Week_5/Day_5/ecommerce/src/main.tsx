import { createRoot } from 'react-dom/client';
import { CartProvider } from './CartContext';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './App';

createRoot(document.getElementById('root')!).render(
  <CartProvider>
    <RouterProvider router={router} /> 
  </CartProvider>
);
