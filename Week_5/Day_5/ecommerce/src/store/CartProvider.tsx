import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from 'react';
import type { CartItem } from '../types/cart';

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  function addToCart(item: CartItem) {
    setCart((prevCart) => [...prevCart, item]);
  }

  function removeFromCart(id: number) {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== id));
  }

  function updateQuantity(id: number, quantity: number) {
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used inside a CartProvider');
  }
  return context;
}
