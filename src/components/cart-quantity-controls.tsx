"use client";

import type { Product } from "@/data/products";
import { useCart } from "@/context/cart-context";
import { AddToCartButton } from "./add-to-cart-button";

type Props = {
  product: Product;
};

export const CartQuantityControls = ({ product }: Props) => {
  const { getItemQuantity, incrementItem, decrementItem } = useCart();
  const quantity = getItemQuantity(product.id);

  if (quantity === 0) {
    return <AddToCartButton product={product} />;
  }

  return (
    <div className="flex items-center gap-3 rounded-full border border-zinc-200 bg-white px-4 py-2">
      <button
        type="button"
        onClick={() => decrementItem(product.id)}
        className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 text-lg text-zinc-900"
        aria-label="Decrease quantity"
      >
        −
      </button>
      <span className="min-w-[2ch] text-center text-base font-semibold text-zinc-900">
        {quantity}
      </span>
      <button
        type="button"
        onClick={() => incrementItem(product.id)}
        className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 text-lg text-zinc-900"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
};
