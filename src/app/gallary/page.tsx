// src/app/gallery/page.tsx
"use client";
import Image from "next/image";

const images = [
  "/Pudina_blast.jpg",
  "/Logo_foxpop.jpg",
  "/combo.jpg",
  "/orange.jpg",
  "/lemon.jpg",
  "/pepper.jpg",
];

export default function GalleryPage() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Gallery</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <div key={i} className="rounded overflow-hidden bg-gray-100">
            {/* Using <img> is fine for static /public items; next/image works too */}
            <img
              src={src}
              alt={`gallery-${i}`}
              className="w-full h-40 object-cover"
            />
          </div>
        ))}
      </div>

      <div className="mt-6 text-sm text-gray-600">
        <p>Follow us on social (placeholders): Instagram / Facebook</p>
      </div>
    </div>
  );
}
