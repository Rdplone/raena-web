"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNav } from "@/lib/site";
import { Logo } from "./Logo";
import { Menu, X } from "./Icons";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "border-b border-white/10 bg-navy/90 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-[72px] items-center justify-between">
        <Logo variant="dark" />

        <nav aria-label="Ana menü" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                    isActive(item.href) ? "text-mint" : "text-white/75 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/iletisim" className="btn btn-mint hidden !px-5 !py-2.5 sm:inline-flex">
            Ücretsiz Analiz
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="h-[calc(100dvh-72px)] overflow-y-auto border-t border-white/10 bg-navy lg:hidden"
      >
        <nav aria-label="Mobil menü" className="container-x py-6">
          <ul className="flex flex-col">
            {[{ href: "/", label: "Ana Sayfa" }, ...mainNav, { href: "/sss", label: "SSS" }].map(
              (item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block border-b border-white/5 py-4 text-lg font-semibold ${
                      (item.href === "/" ? pathname === "/" : isActive(item.href))
                        ? "text-mint"
                        : "text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
          <Link
            href="/iletisim"
            onClick={() => setOpen(false)}
            className="btn btn-primary mt-8 w-full"
          >
            Ücretsiz Marka Analizi Al
          </Link>
        </nav>
      </div>
    </header>
  );
}
