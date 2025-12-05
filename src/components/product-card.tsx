import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";
import { formatCurrency } from "@/lib/format";

export const ProductCard = ({ product }: { product: Product }) => (
  <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/70 bg-white/70 p-4 shadow-[0_30px_80px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_40px_100px_rgba(15,23,42,0.15)]">
    <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-rose-50 via-white to-slate-50 opacity-0 transition group-hover:opacity-100" />
    <div className="relative overflow-hidden rounded-2xl bg-zinc-50">
      <Image
        src={product.image}
        alt={product.name}
        width={400}
        height={400}
        className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="absolute left-4 top-4 rounded-full border border-white/60 bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-zinc-600">
        {product.category}
      </div>
    </div>

    <div className="mt-5 flex flex-1 flex-col">
      <h3 className="text-lg font-semibold text-zinc-900">{product.name}</h3>
      <div className="mt-4 flex items-center justify-between rounded-full border border-zinc-100 bg-white px-4 py-2">
        <p className="text-base font-semibold text-zinc-900">
          {formatCurrency(product.price)}
        </p>
        <Link
          href={`/products/${product.id}`}
          className="inline-flex items-center gap-2 rounded-full border border-zinc-900 px-4 py-2 text-sm font-medium text-zinc-900 transition hover:bg-zinc-900 hover:text-white"
        >
          View Details
          <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  </div>
);
