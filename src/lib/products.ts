import type { Product } from "@/data/products";
import { products } from "@/data/products";

export const fetchProducts = async (): Promise<Product[]> => {
  return products;
};

export const fetchProductById = async (id: string): Promise<Product> => {
  const product = products.find((item) => item.id === id);

  if (!product) {
    throw new Error("Failed to load product");
  }

  return product;
};
