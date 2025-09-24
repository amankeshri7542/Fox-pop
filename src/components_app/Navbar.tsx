// src/components_app/Navbar.tsx
"use client";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { cart } = useCart();
  // total quantity (we will NOT display as cart-badge anymore per your request)
  const totalQty = cart.reduce((s, it) => s + (it.quantity || 0), 0);

  const closeAndNavigate = () => setOpen(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-40 border-b">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="font-extrabold text-xl flex items-center gap-2"
            onClick={() => setOpen(false)}
          >
            <img
              src="/logo_foxpop.jpg"
              alt="logo"
              className="w-8 h-8 object-contain"
            />
            FoxPop
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/#products" className="hover:text-[var(--fp-accent)]">
            Products
          </Link>
          <Link href="/#about" className="hover:text-[var(--fp-accent)]">
            About
          </Link>
          <Link href="/#contact" className="hover:text-[var(--fp-accent)]">
            Contact
          </Link>

          {/* Cart button: no separate counter badge */}
          <Link href="/cart" className="inline-flex items-center">
            <span className="bg-[var(--fp-emerald)] text-white px-3 py-1 rounded">
              Cart
            </span>
          </Link>
        </nav>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-2">
          <Link
            href="/cart"
            className="relative"
            onClick={() => setOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                d="M3 3h2l.4 2M7 13h10l4-8H5.4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="p-2 rounded border"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                d="M4 6h16M4 12h16M4 18h16"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu (closes on link click) */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="max-w-5xl mx-auto px-4 py-3 flex flex-col gap-2">
            <Link href="/#products" onClick={closeAndNavigate} className="py-2">
              Products
            </Link>
            <Link href="/#about" onClick={closeAndNavigate} className="py-2">
              About
            </Link>
            <Link href="/#contact" onClick={closeAndNavigate} className="py-2">
              Contact
            </Link>
            <Link
              href="/cart"
              onClick={closeAndNavigate}
              className="py-2 font-semibold"
            >
              Your Cart ({totalQty})
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
