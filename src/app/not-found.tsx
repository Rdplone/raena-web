import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sayfa bulunamadı",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-navy pt-24 text-white">
      <div className="pointer-events-none absolute -top-40 -right-40 h-[420px] w-[420px] rounded-full bg-violet" />
      <div className="container-x relative">
        <p className="text-8xl font-extrabold text-mint">404</p>
        <h1 className="mt-4 text-4xl font-bold">Aradığınız sayfa bulunamadı.</h1>
        <p className="mt-4 max-w-md text-white/70">
          Sayfa taşınmış veya kaldırılmış olabilir. Ana sayfadan devam edebilirsiniz.
        </p>
        <div className="mt-8 flex gap-3">
          <Link href="/" className="btn btn-primary">
            Ana sayfa
          </Link>
          <Link href="/blog" className="btn btn-ghost">
            Blog
          </Link>
        </div>
      </div>
    </section>
  );
}
