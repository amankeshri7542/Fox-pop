// src/app/about/page.tsx
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">About FoxPop</h1>

      <div className="grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h2 className="text-2xl font-semibold">Why Makhana is good</h2>
          <p className="mt-2 text-gray-700">
            Makhana (fox nut) is naturally low in fat, gluten-free, and rich in
            calcium and protein. It’s a wholesome alternative to fried snacks,
            and perfect for kids and adults who want a crunchy, nutritious bite.
          </p>

          <h3 className="mt-4 text-xl font-semibold">Why choose FoxPop</h3>
          <ul className="list-disc ml-5 mt-2 text-gray-700">
            <li>Small-batch roasting for consistent crunch</li>
            <li>Minimal, clean ingredients — no unnecessary additives</li>
            <li>Every purchase contributes to feeding rescued animals</li>
            <li>Hand-packed with care</li>
          </ul>
        </div>

        <div>
          <img
            src="/girl_image.png"
            alt="feeding animals"
            className="w-full h-80 object-cover rounded-lg shadow"
          />
        </div>
      </div>
    </div>
  );
}
