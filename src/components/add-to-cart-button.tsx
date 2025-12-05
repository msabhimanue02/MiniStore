"use client";

import type { Product } from "@/data/products";
import { useCart } from "@/context/cart-context";

type Props = {
  product: Product;
  label?: string;
  variant?: "default" | "compact";
};

const baseClasses =
  "inline-flex items-center justify-center rounded-full font-semibold text-white shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-zinc-800";

const variantClasses: Record<NonNullable<Props["variant"]>, string> = {
  default: "bg-black px-6 py-3 text-sm",
  compact: "bg-zinc-900 px-4 py-2 text-xs",
};

export const AddToCartButton = ({
  product,
  label = "Add to Cart",
  variant = "default",
}: Props) => {
  const { addItem } = useCart();

  return (
    <button
      type="button"
      onClick={() => addItem(product)}
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      {label}
    </button>
  );
};
