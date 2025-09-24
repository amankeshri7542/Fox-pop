// src/app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

// App-level client provider and UI
import Providers from "@/components_app/Providers";
import Navbar from "@/components_app/Navbar";
import Footer from "@/components_app/Footer";
import WhatsAppFloat from "@/components_app/WhatsAppFloat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FoxPop Makhana",
  description: "YOUR EVERY PURCHASE IS FEEDING A SOUL",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Providers is a client component that wraps CartProvider */}
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            {/* Floating WhatsApp button */}
            <WhatsAppFloat />
          </div>
        </Providers>
      </body>
    </html>
  );
}
