import { createRoot } from 'react-dom/client'
import { CartProvider } from "./store/CartProvider";
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
    <CartProvider>
    <BrowserRouter>
    <App />
   </BrowserRouter>,
   </CartProvider>
)
