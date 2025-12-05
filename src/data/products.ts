export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
};

export const products: Product[] = [
  {
    id: "voyager-pack",
    name: "FloMotif Office Backpack",
    description:
      "Proudly Indian dual-compartment office backpack crafted from handicraft fabric and vegan leather with padded laptop sleeve, trolley passthrough, and mesh bottle pockets.",
    price: 1539,
    image: "/backpack.webp",
    category: "Gear",
  },
  {
    id: "aurora-earbuds",
    name: "Powerbeats Pro 2",
    description:
      "Jet Black wireless workout earbuds with secure-fit earhooks, H2 chip, ANC + Transparency, heart-rate monitoring, and up to 45 hrs battery via Qi case.",
    price: 5000,
    image: "/earbuds.webp",
    category: "Audio",
  },
  {
    id: "aura-lamp",
    name: "Aura Halo Lamp",
    description:
      "Retro swing-arm table lamp with adjustable aluminum shade, glossy black-gold finish, and LED-friendly design for bedside or study desks.",
    price: 3599,
    image: "/lamp.jpg",
    category: "Lighting",
  },
  {
    id: "iphone-16",
    name: "iPhone 16 · 128 GB",
    description:
      "Teal 5G phone with Apple A18 chip, Camera Control shortcuts, 48 MP Fusion system, macro ultra-wide, and battery boost tuned for AirPods.",
    price: 66900,
    image: "/iphone.webp",
    category: "Tech",
  },
  {
    id: "linen-shirt",
    name: "Lumen Linen Shirt",
    description:
      "Classic cotton-satin shirt with natural sheen, breathable lightweight build, and a regular fit that elevates first impressions.",
    price: 1590,
    image: "/shirt.jpg",
    category: "Apparel",
  },
  {
    id: "scout-rider",
    name: "Scout Rider Jeep",
    description:
      "4x4 powered ride-on jeep with dual 12V motors per wheel, twin seats, LED headlamps, horn, and AUX/USB audio hub. Supports kids 1–10 yrs up to 75 kg.",
    price: 27499,
    image: "/cartoy.jpeg",
    category: "Kids",
  },
];

export const getProductById = (id: string) =>
  products.find((product) => product.id === id);
