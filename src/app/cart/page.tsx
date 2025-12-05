"use client";

import Link from "next/link";
import Image from "next/image";

import { useCart } from "@/context/cart-context";
import { formatCurrency } from "@/lib/format";
import { CartQuantityControls } from "@/components/cart-quantity-controls";

export default function CartPage() {
  const { items, subtotal, clearCart } = useCart();

  const hasItems = items.length > 0;

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-zinc-500">
            Cart
          </p>
          <h1 className="text-3xl font-semibold text-zinc-900">Your bag</h1>
          <p className="text-sm text-zinc-500">
            {hasItems
              ? "Review your selections, adjust quantities, or continue shopping."
              : "Your bag is empty. Add products from the home page to get started."}
          </p>
        </div>
        {hasItems && (
          <button
            type="button"
            onClick={clearCart}
            className="text-sm font-semibold text-zinc-500 underline-offset-4 hover:text-zinc-900 hover:underline"
          >
            Clear cart
          </button>
        )}
      </div>

      {!hasItems ? (
        <div className="rounded-3xl border border-dashed border-zinc-200 bg-white p-10 text-center">
          <p className="text-base text-zinc-600">
            Nothing to review yet. Explore the collection and add items to your cart.
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex items-center justify-center rounded-full border border-zinc-200 px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:border-zinc-900 hover:bg-zinc-900 hover:text-white"
          >
            Continue shopping
          </Link>
        </div>
      ) : (
        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 rounded-3xl border border-zinc-100 bg-white p-4 shadow-sm"
              >
                <div className="relative h-28 w-28 flex-shrink-0 overflow-hidden rounded-2xl bg-zinc-50">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={160}
                    height={160}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                      {item.category}
                    </p>
                    <h2 className="text-lg font-semibold text-zinc-900">{item.name}</h2>
                    <p className="text-sm text-zinc-500">{item.description}</p>
                  </div>
                  <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <CartQuantityControls product={item} />
                    <p className="text-base font-semibold text-zinc-900">
                      {formatCurrency(item.price * item.quantity)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <aside className="rounded-3xl border border-zinc-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-zinc-900">Order summary</h3>
            <div className="mt-4 space-y-3 text-sm text-zinc-500">
              <div className="flex items-center justify-between">
                <span>Subtotal</span>
                <span className="text-base font-semibold text-zinc-900">
                  {formatCurrency(subtotal)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
            </div>
            <button
              type="button"
              className="mt-6 w-full rounded-full bg-black px-5 py-3 text-sm font-semibold text-white shadow shadow-black/20 hover:-translate-y-0.5 hover:bg-zinc-800"
            >
              Checkout (mock)
            </button>
            <Link
              href="/"
              className="mt-4 block text-center text-sm font-semibold text-zinc-500 hover:text-zinc-900"
            >
              Continue shopping
            </Link>
          </aside>
        </div>
      )}
    </div>
  );
}
