"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/cart-context";

const navLinks = [{ href: "/", label: "Home" }];

const CartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-5 w-5"
    aria-hidden
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 3h1.386c.51 0 .955.343 1.087.836l.383 1.438m0 0 1.35 5.062m-.465-1.744h12.53c.969 0 1.688.922 1.438 1.86l-.562 2.1a1.5 1.5 0 0 1-1.438 1.14H8.902"
    />
    <path d="M8.25 20.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.25 0a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
  </svg>
);

export const Navbar = () => {
  const pathname = usePathname();
  const { count } = useCart();

  return (
    <header className="border-b border-zinc-100 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-lg font-semibold">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-md shadow-slate-900/20">
            MS
          </span>
          <div className="hidden flex-col leading-none sm:flex">
            <span className="text-sm uppercase tracking-[0.4em] text-slate-400">
              MiniStore
            </span>
            <span className="text-base font-semibold text-slate-900">
              Everyday Essentials
            </span>
          </div>
        </Link>

        <nav className="flex items-center gap-6 text-sm font-medium text-zinc-500">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition hover:text-zinc-900 ${
                pathname === link.href ? "text-zinc-900" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/cart"
            className="flex items-center gap-2 rounded-full border border-zinc-200 px-4 py-2 text-zinc-900"
          >
            <CartIcon />
            <span className="text-sm font-semibold">Cart</span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-xs font-semibold text-white">
              {count}
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
};
