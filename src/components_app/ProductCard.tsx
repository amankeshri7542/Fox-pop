// src/components_app/ProductCard.tsx
"use client";
import React from "react";
import type { Product } from "../data/Products";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }: { product: Product }) {
  const { cart, addToCart, updateQty, removeFromCart } = useCart();
  const existing = cart.find((c) => c.id === product.id);
  const qty = existing?.quantity ?? 0;

  const increment = () => addToCart(product);
  const decrement = () => {
    if (!existing) return;
    if (existing.quantity - 1 <= 0) removeFromCart(product.id);
    else updateQty(product.id, existing.quantity - 1);
  };

  return (
    <div className="relative bg-white rounded-xl shadow p-4 flex flex-col">
      <div className="w-full h-64 overflow-hidden rounded-md">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="mt-3 font-semibold text-lg">{product.name}</h3>
      <div className="text-gray-600 mt-1">₹{product.price}</div>

      {/* show counter when added, otherwise show add button */}
      <div className="mt-3">
        {qty > 0 ? (
          <div className="inline-flex items-center gap-3 border rounded px-2 py-1">
            <button
              onClick={decrement}
              className="px-2 py-1 rounded bg-gray-100"
            >
              -
            </button>
            <div className="px-3 font-semibold">{qty}</div>
            <button
              onClick={increment}
              className="px-2 py-1 rounded bg-gray-100"
            >
              +
            </button>
          </div>
        ) : (
          <button
            onClick={increment}
            className="bg-[var(--fp-emerald)] hover:brightness-95 text-white px-4 py-2 rounded"
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
}
