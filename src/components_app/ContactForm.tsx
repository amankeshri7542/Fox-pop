// src/components_app/ContactForm.tsx
"use client";
import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");

  const goWhatsApp = () => {
    const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
    if (!phoneNumber) {
      alert("WhatsApp number not configured (NEXT_PUBLIC_WHATSAPP_NUMBER).");
      return;
    }
    if (!name || !phone || !msg) {
      alert("Please fill name, phone and message.");
      return;
    }
    const text = `Contact from website\nName: ${name}\nPhone: ${phone}\nMessage: ${msg}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="max-w-xl">
      <div className="grid gap-3">
        <input
          className="p-2 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
        />
        <input
          className="p-2 border rounded"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone number"
        />
        <textarea
          className="p-2 border rounded"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          rows={5}
          placeholder="Message"
        />
        <div className="flex gap-2">
          <button
            onClick={goWhatsApp}
            className="bg-emerald-500 text-white px-4 py-2 rounded"
          >
            Message on WhatsApp
          </button>
          <button
            onClick={() => {
              setName("");
              setPhone("");
              setMsg("");
            }}
            className="px-4 py-2 border rounded"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
