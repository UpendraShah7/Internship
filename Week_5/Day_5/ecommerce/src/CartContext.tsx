import { createContext, useContext, useState, type ReactNode } from 'react';
import type { CartItem } from './data';

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | null>(null); // Create Context

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  function addToCart(item: CartItem) {
    setCart((prevCart) => {
      const existing = prevCart.find((cartItem) => cartItem.id === item.id);

      if (existing) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + (item.quantity || 1),
              }
            : cartItem
        );
      }

      return [...prevCart, { ...item, quantity: item.quantity || 1 }];
    });
  }

  function removeFromCart(id: number) {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== id));
  }

  function updateQuantity(id: number, quantity: number) {
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  }

  function clearCart() {
    setCart([]);
  }

  return (
    // Context Provider
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}
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
