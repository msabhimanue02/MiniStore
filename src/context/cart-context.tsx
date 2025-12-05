"use client";

import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import type { Product } from "@/data/products";

export type CartItem = Product & { quantity: number };

export type CartContextValue = {
  items: CartItem[];
  count: number;
  subtotal: number;
  addItem: (product: Product) => void;
  incrementItem: (id: string) => void;
  decrementItem: (id: string) => void;
  clearCart: () => void;
  getItemQuantity: (id: string) => number;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

const incrementQuantity = (items: CartItem[], id: string) =>
  items.map((item) =>
    item.id === id ? { ...item, quantity: item.quantity + 1 } : item
  );

const decrementQuantity = (items: CartItem[], id: string) =>
  items
    .map((item) =>
      item.id === id ? { ...item, quantity: item.quantity - 1 } : item
    )
    .filter((item) => item.quantity > 0);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (product: Product) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return incrementQuantity(prev, product.id);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const incrementItem = (id: string) => {
    setItems((prev) => incrementQuantity(prev, id));
  };

  const decrementItem = (id: string) => {
    setItems((prev) => decrementQuantity(prev, id));
  };

  const clearCart = () => setItems([]);

  const count = useMemo(
    () => items.reduce((total, item) => total + item.quantity, 0),
    [items]
  );

  const subtotal = useMemo(
    () => items.reduce((total, item) => total + item.price * item.quantity, 0),
    [items]
  );

  const getItemQuantity = (id: string) =>
    items.find((item) => item.id === id)?.quantity ?? 0;

  return (
    <CartContext.Provider
      value={{
        items,
        count,
        subtotal,
        addItem,
        incrementItem,
        decrementItem,
        clearCart,
        getItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within CartProvider");
  }
  return ctx;
};
