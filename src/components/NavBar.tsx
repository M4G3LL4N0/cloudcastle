"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/network", label: "Network" },
  { href: "/operators", label: "Operators" },
  { href: "/launch", label: "Launch" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#040816]/70 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-6 py-4 md:px-10">
        <Link href="/" className="group flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FFD1B6] via-[#FF9A68] to-[#9C6BFF] text-sm font-bold text-[#07111F] shadow-[0_0_35px_rgba(255,149,112,0.28)] transition group-hover:scale-[1.02]">
            CC
          </div>
          <div className="min-w-0">
            <div className="text-sm font-semibold tracking-[0.28em] text-white/90">CLOUDCASTLE</div>
            <div className="text-xs text-white/42">premium automated retail infrastructure</div>
          </div>
        </Link>

        <nav className="hidden gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-white/65 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/launch"
            className="hidden rounded-full bg-gradient-to-r from-[#FF8B60] via-[#F48D72] to-[#A66BFF] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(255,138,97,0.24)] transition hover:scale-[1.02] sm:inline-flex"
            onClick={() => setOpen(false)}
          >
            Start Pilot
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 text-white md:hidden"
            aria-expanded={open}
            aria-controls="cloudcastle-mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden>{open ? "×" : "☰"}</span>
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="cloudcastle-mobile-nav"
          className="border-t border-white/10 px-6 py-3 md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2.5 text-sm text-white/75 hover:bg-white/10 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/launch"
              className="mt-2 inline-flex justify-center rounded-full bg-gradient-to-r from-[#FF8B60] via-[#F48D72] to-[#A66BFF] px-5 py-2.5 text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Start Pilot
            </Link>
            <p className="px-3 pt-2 text-[11px] leading-relaxed text-white/45">
              Retail automation pilots use demo ops data — not live store revenue or fulfillment guarantees.
            </p>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
