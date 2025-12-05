import type { Product } from "@/data/products";
import { ProductCard } from "./product-card";

export const ProductGrid = ({ products }: { products: Product[] }) => (
  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);
