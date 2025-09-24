// src/app/contact/page.tsx
"use client";
import ContactForm from "../../components_app/ContactForm";

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold">Contact Us</h1>
      <p className="mt-2 text-gray-600">
        For orders use the cart + WhatsApp flow. For questions, message us
        below.
      </p>

      <div className="mt-6">
        {/* ContactForm is a client component (it must have "use client" at top) */}
        <ContactForm />
      </div>

      <div className="mt-8 text-sm text-gray-500">
        <p>
          WhatsApp ordering number:{" "}
          <strong>
            {process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "Not set"}
          </strong>
        </p>
      </div>
    </div>
  );
}
