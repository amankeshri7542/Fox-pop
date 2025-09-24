// src/components_app/ProductList.tsx
"use client";
import ProductCard from "./ProductCard";
import { PRODUCTS, COMBO } from "../data/Products";

export default function ProductList() {
  const items = [...PRODUCTS, COMBO];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
