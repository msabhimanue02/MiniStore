import type { Product } from "@/data/products";

const getBaseUrl = () => {
  if (typeof window !== "undefined") {
    return "";
  }

  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return "http://localhost:3000";
};

export const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch(`${getBaseUrl()}/api/products`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to load products");
  }

  return res.json();
};

export const fetchProductById = async (id: string): Promise<Product> => {
  const res = await fetch(`${getBaseUrl()}/api/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to load product");
  }

  return res.json();
};
