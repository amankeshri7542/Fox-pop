// src/data/Products.ts
export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export const PRODUCTS: Product[] = [
  {
    id: "pudina",
    name: "Pudina Blast",
    price: 129,
    image: "/pudina_blast.png",
  },
  {
    id: "orange",
    name: "Tangy Orange",
    price: 129,
    image: "/tangy_orange.png",
  },
  { id: "lemon", name: "Zesty Lemon", price: 129, image: "/zesty_lemon.png" },
  {
    id: "pepper",
    name: "Black Pepper",
    price: 129,
    image: "/black_pepper.png",
  },
];

export const COMBO: Product = {
  id: "combo",
  name: "Combo Pack (All 4 flavors)",
  price: PRODUCTS.reduce((s, p) => s + p.price, 0),
  image: "/combo_box.png",
};
