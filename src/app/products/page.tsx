// src/app/products/page.tsx
"use client";
import Link from "next/link";
// Import the client ProductList directly (server components can import client components)
import ProductList from "../../components_app/ProductList";

export default function ProductsPage() {
  return (
    <div className="max-w-5xl mx-auto p-4">
      <header className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Products</h1>
        <Link
          href="/cart"
          className="text-sm bg-emerald-500 text-white px-3 py-1 rounded"
        >
          Open Cart
        </Link>
      </header>

      <section>
        {/* ProductList is a client component (has "use client"), but we import it directly here from a server page */}
        <ProductList />
      </section>

      <section className="mt-8 text-sm text-gray-600">
        <p>
          Each product is ₹129. We also have a combo pack (all four flavors)
          shown in the list.
        </p>
      </section>
    </div>
  );
}
