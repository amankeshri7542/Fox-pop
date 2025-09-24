// src/context/CartContext.tsx
"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import type { Product } from "@/data/Products";

export type CartItem = Product & { quantity: number };
export type UserDetails = { name: string; phone: string; address: string };

type CartContextType = {
  cart: CartItem[];
  addToCart: (p: Product) => void;
  removeFromCart: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clearCart: () => void;
  total: number;
  userDetails: UserDetails;
  setUserDetails: (d: UserDetails) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [userDetails, setUserDetailsState] = useState<UserDetails>({
    name: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    try {
      const saved = localStorage.getItem("foxpop_cart");
      if (saved) setCart(JSON.parse(saved));
      const ud = localStorage.getItem("foxpop_user");
      if (ud) setUserDetailsState(JSON.parse(ud));
    } catch (e) {
      console.warn("Failed to read localStorage", e);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("foxpop_cart", JSON.stringify(cart));
    } catch {}
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem("foxpop_user", JSON.stringify(userDetails));
    } catch {}
  }, [userDetails]);

  const addToCart = (p: Product) => {
    setCart((curr) => {
      const idx = curr.findIndex((i) => i.id === p.id);
      if (idx >= 0) {
        const copy = [...curr];
        copy[idx].quantity += 1;
        return copy;
      }
      return [...curr, { ...p, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) =>
    setCart((c) => c.filter((i) => i.id !== id));

  const updateQty = (id: string, qty: number) => {
    if (qty <= 0) {
      removeFromCart(id);
      return;
    }
    setCart((c) => c.map((i) => (i.id === id ? { ...i, quantity: qty } : i)));
  };

  const clearCart = () => setCart([]);

  const total = cart.reduce((s, it) => s + it.price * it.quantity, 0);

  const setUserDetails = (d: UserDetails) => setUserDetailsState(d);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQty,
        clearCart,
        total,
        userDetails,
        setUserDetails,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
