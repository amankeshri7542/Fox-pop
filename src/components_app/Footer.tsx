// src/components_app/Footer.tsx
"use client";
export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-12">
      <div className="max-w-5xl mx-auto px-4 py-6 text-center text-sm text-gray-600">
        <div className="mb-2 font-medium">
          YOUR EVERY PURCHASE IS FEEDING A SOUL
        </div>
        <div>© {new Date().getFullYear()} FoxPop</div>
      </div>
    </footer>
  );
}
