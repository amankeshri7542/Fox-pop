// src/components_app/WhatsAppFloat.tsx
"use client";
import { FaWhatsapp } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

export default function WhatsAppFloat() {
  const router = useRouter();
  const { cart, userDetails, total } = useCart();

  const goWhatsApp = () => {
    const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
    if (!phone) {
      alert(
        "WhatsApp number not set. Add NEXT_PUBLIC_WHATSAPP_NUMBER to .env.local or Vercel envs"
      );
      return;
    }

    if (!cart.length) {
      router.push("/products");
      return;
    }

    if (!userDetails.name || !userDetails.phone || !userDetails.address) {
      router.push("/cart");
      return;
    }

    let msg = `Order from FoxPop\nName: ${userDetails.name}\nPhone: ${userDetails.phone}\nAddress: ${userDetails.address}\n\nItems:`;
    cart.forEach((c) => {
      msg += `\n- ${c.name} x${c.quantity} = ₹${c.price * c.quantity}`;
    });
    msg += `\n\nTotal: ₹${total}\n\nThanks!`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={goWhatsApp}
      className="fixed bottom-5 right-5 z-50 bg-emerald-500 hover:bg-emerald-600 transition p-3 rounded-full shadow-lg text-white"
      aria-label="Order on WhatsApp"
    >
      <FaWhatsapp size={22} />
    </button>
  );
}
