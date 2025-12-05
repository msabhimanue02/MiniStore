import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { CartQuantityControls } from "@/components/cart-quantity-controls";
import { formatCurrency } from "@/lib/format";
import { fetchProductById } from "@/lib/products";
import { products } from "@/data/products";

type ProductParams = {
  id: string;
};

export async function generateStaticParams() {
  return products.map(({ id }) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<ProductParams>;
}): Promise<Metadata> {
  const { id } = await params;
  if (!id) {
    return {
      title: "Product not found · MiniStore",
    };
  }
  try {
    const product = await fetchProductById(id);
    return {
      title: `${product.name} · MiniStore`,
      description: product.description,
      openGraph: {
        title: product.name,
        description: product.description,
        images: [product.image],
      },
    };
  } catch {
    return {
      title: "Product not found · MiniStore",
    };
  }
}

export default async function ProductDetail({
  params,
}: {
  params: Promise<ProductParams>;
}) {
  const { id } = await params;
  if (!id) {
    notFound();
  }
  let product;
  try {
    product = await fetchProductById(id);
  } catch {
    product = null;
  }

  if (!product) {
    notFound();
  }

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-4 py-10 sm:px-6 lg:px-8">
      <Link
        href="/"
        className="inline-flex w-fit items-center gap-2 text-sm font-medium text-zinc-500 transition hover:text-zinc-900"
      >
        ← Back to products
      </Link>

      <div className="grid gap-10 rounded-[32px] border border-white/60 bg-white/70 p-6 shadow-[0_40px_120px_rgba(15,23,42,0.09)] lg:grid-cols-[1.05fr_0.95fr]">
        <div className="overflow-hidden rounded-[28px] border border-white/70 bg-white shadow-inner">
          <Image
            src={product.image}
            alt={product.name}
            width={800}
            height={800}
            className="h-[460px] w-full object-cover"
            priority
          />
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-zinc-500">
              {product.category}
            </p>
            <h1 className="text-3xl font-semibold text-zinc-900">
              {product.name}
            </h1>
            <p className="text-base text-zinc-600">{product.description}</p>
          </div>

          <div className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm shadow-black/5">
            <div className="flex items-baseline justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">
                  Price
                </p>
                <p className="text-3xl font-semibold text-zinc-900">
                  {formatCurrency(product.price)}
                </p>
              </div>
              <CartQuantityControls product={product} />
            </div>
            <ul className="mt-6 space-y-3 text-sm text-zinc-500">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-zinc-900" />
                Ships nationwide with 48h dispatch.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-zinc-900" />
                7-day free returns on unused items.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-zinc-900" />
                Secure UPI / card / net-banking payments.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
