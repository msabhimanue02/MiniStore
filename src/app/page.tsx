import Link from "next/link";
import Image from "next/image";
import { ProductGrid } from "@/components/product-grid";
import { fetchProducts } from "@/lib/products";

export default async function Home() {
  const products = await fetchProducts();

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-10 sm:px-6 lg:px-8">
      <section className="relative overflow-hidden rounded-[32px] border border-white/60 bg-gradient-to-br from-[#fef7f5] via-white to-[#f0f6ff] shadow-[0_45px_140px_rgba(15,23,42,0.15)]">
        <div className="pointer-events-none absolute -left-10 top-10 h-60 w-60 rounded-full bg-rose-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-10 bottom-0 h-64 w-64 rounded-full bg-indigo-200/40 blur-3xl" />
        <div className="relative grid gap-10 px-8 py-16 sm:px-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-rose-100 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-rose-500">
              <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
              MiniStore 
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
                Discover Everyday Essentials, Designed for You
              </h1>
              <p className="text-base text-slate-600">
                Curated products for work, home, and life. Thoughtfully selected to bring comfort,
                style, and function into your routine. Quality items delivered fast, backed by our
                trusted care support.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#catalog"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Explore catalog
              </Link>
              <Link
                href="/cart"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-900"
              >
                View cart
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: "Dispatch", value: "48h priority" },
                { label: "Care plan", value: "7-day return" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/70 bg-white/70 px-5 py-4 shadow-sm"
                >
                  <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
                    {stat.label}
                  </p>
                  <p className="text-lg font-semibold text-slate-900">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-white/70 bg-white/70 shadow-[0_25px_70px_rgba(15,23,42,0.12)]">
            <Image
              src="/m.png"
              alt="MiniStore showcase"
              width={800}
              height={700}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="catalog">
        <ProductGrid products={products} />
      </section>
    </div>
  );
}
