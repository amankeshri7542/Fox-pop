// src/app/cart/page.tsx
"use client";
import dynamic from "next/dynamic";

const CartView = dynamic(() => import("@/components_app/CartView"), {
  ssr: false,
});

export default function CartPage() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <CartView />
    </div>
  );
}
