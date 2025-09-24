// src/app/page.tsx
import ProductList from "../components_app/ProductList";
import AnimatedSection from "../components_app/AnimatedSection";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      <AnimatedSection id="home">
        <section className="py-16 bg-[var(--fp-primary)]">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-extrabold">
                FoxPop Makhana
              </h1>
              <p className="text-[var(--fp-accent)] font-semibold">
                YOUR EVERY PURCHASE IS FEEDING A SOUL
              </p>
              <p className="text-gray-800 max-w-lg">
                Healthy, crunchy, and rich in calcium — makhana supports bone
                health and is a guilt-free snack. FoxPop roasts premium makhana
                and seasons them into four delicious flavors.
              </p>

              <div className="flex gap-3 mt-4">
                <a
                  href="#products"
                  className="inline-block bg-[var(--fp-accent)] text-[#012426] px-6 py-3 rounded-lg shadow"
                >
                  Shop Flavors
                </a>
                <a
                  href="#about"
                  className="inline-block px-6 py-3 rounded-lg border"
                >
                  Our Story
                </a>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="hero-card rounded-2xl p-4 shadow-lg w-full max-w-sm">
                <img
                  src="/combo_box.png"
                  alt="Combo"
                  className="w-full h-72 object-cover rounded-lg"
                />
                <div className="mt-4">
                  <div className="font-semibold text-lg">Combo Pack</div>
                  <div className="text-sm text-gray-600">
                    All 4 flavors in one box.
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="text-xl font-bold">₹516</div>
                    <a
                      href="#products"
                      className="text-sm px-3 py-1 border rounded"
                    >
                      View
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection id="products">
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold">Flavors</h2>
              <Link
                href="/products"
                className="text-sm text-[var(--fp-accent)]"
              >
                View standalone products page →
              </Link>
            </div>

            <ProductList />
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection id="about">
        <section className="py-12 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold">Why Makhana?</h3>
              <p className="mt-3 text-gray-700">
                Makhana is low in fat, gluten-free, and rich in calcium — great
                for bones and light snacking. It’s a smart, healthy snack for
                the whole family.
              </p>

              <h4 className="mt-6 text-lg font-semibold">Why choose FoxPop?</h4>
              <ul className="list-disc ml-5 text-gray-700 mt-2">
                <li>Carefully roasted for best crunch and flavor</li>
                <li>Natural minimal seasoning, no nasties</li>
                <li>Portions support rescued animals — snack with purpose</li>
              </ul>
            </div>

            <div>
              <img
                src="/girl_image.png"
                alt="feeding animals"
                className="w-full h-72 object-cover rounded-lg shadow"
              />
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection id="contact">
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h3 className="text-2xl font-semibold mb-3">Contact</h3>
            <p className="text-gray-600 mb-6">
              Questions? Use the WhatsApp flow or open the contact page for more
              options.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[var(--fp-accent)] text-[#012426] px-4 py-2 rounded"
            >
              Open contact page
            </Link>
          </div>
        </section>
      </AnimatedSection>

      <footer className="border-t mt-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-8 text-center text-sm text-gray-600">
          <div className="mb-2 font-medium">
            YOUR EVERY PURCHASE IS FEEDING A SOUL
          </div>
          <div>© {new Date().getFullYear()} FoxPop</div>
        </div>
      </footer>
    </div>
  );
}
