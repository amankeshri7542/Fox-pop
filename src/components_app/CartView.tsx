// src/components_app/CartView.tsx
"use client";
import React from "react";
import { useCart } from "../context/CartContext";

export default function CartView() {
  const {
    cart,
    updateQty,
    removeFromCart,
    total,
    userDetails,
    setUserDetails,
    clearCart,
  } = useCart();

  return (
    <div className="space-y-4">
      {cart.length === 0 ? (
        <div className="p-6 text-center">
          <p>Your cart is empty.</p>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center sm:items-start justify-between border p-3 rounded gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-28 h-28 overflow-hidden rounded">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">{item.name}</div>
                    <div className="text-sm text-gray-500">
                      ₹{item.price} each
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => updateQty(item.id, item.quantity - 1)}
                    className="px-3 py-1 border rounded"
                    aria-label="decrease"
                  >
                    -
                  </button>

                  <div className="px-4 py-1 border rounded text-center w-12">
                    {item.quantity}
                  </div>

                  <button
                    onClick={() => updateQty(item.id, item.quantity + 1)}
                    className="px-3 py-1 border rounded"
                    aria-label="increase"
                  >
                    +
                  </button>

                  <div className="ml-4 font-semibold">
                    ₹{item.price * item.quantity}
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-sm text-red-500 ml-4"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border rounded space-y-3">
            <div className="flex items-center justify-between">
              <div className="text-lg font-bold">Total: ₹{total}</div>
              <div className="flex gap-2">
                <button
                  onClick={() => clearCart()}
                  className="px-3 py-1 border rounded"
                >
                  Clear
                </button>
                {/* Checkout (WhatsApp) */}
                <button
                  onClick={() => {
                    const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
                    if (!phone) {
                      alert("WhatsApp number not configured");
                      return;
                    }
                    // ensure minimal user details (if present store is used)
                    const ud = userDetails;
                    if (!ud.name || !ud.phone || !ud.address) {
                      alert(
                        "Please fill your name, phone and address in the form below before ordering."
                      );
                      return;
                    }
                    let msg = `Order from FoxPop\nName: ${ud.name}\nPhone: ${ud.phone}\nAddress: ${ud.address}\n\nItems:`;
                    cart.forEach((c) => {
                      msg += `\n- ${c.name} x${c.quantity} = ₹${
                        c.price * c.quantity
                      }`;
                    });
                    msg += `\n\nTotal: ₹${total}\n\nThanks!`;
                    window.open(
                      `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`,
                      "_blank"
                    );
                  }}
                  className="px-4 py-2 bg-[var(--fp-accent)] text-[#012426] rounded font-semibold"
                >
                  Order via WhatsApp
                </button>
              </div>
            </div>

            {/* user details form */}
            <div className="grid grid-cols-1 gap-2">
              <input
                value={userDetails.name}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, name: e.target.value })
                }
                placeholder="Full name"
                className="p-2 border rounded"
              />
              <input
                value={userDetails.phone}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, phone: e.target.value })
                }
                placeholder="Phone number"
                className="p-2 border rounded"
              />
              <textarea
                value={userDetails.address}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, address: e.target.value })
                }
                placeholder="Shipping address"
                className="p-2 border rounded"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
