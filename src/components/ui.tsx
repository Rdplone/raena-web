import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, Check, Plus } from "./Icons";
import { RichText } from "./RichText";

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  dark = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  dark?: boolean;
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className={`eyebrow ${dark ? "!text-mint" : ""}`}>{eyebrow}</p>}
      <h2
        className={`mt-3 text-3xl font-bold tracking-tight text-balance sm:text-[40px] sm:leading-[1.15] ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={`mt-4 text-base leading-7 sm:text-lg ${dark ? "text-white/65" : "text-muted"}`}
        >
          {lead}
        </p>
      )}
    </div>
  );
}

/** İç sayfalar için koyu zeminli başlık alanı */
export function PageHero({
  eyebrow,
  eyebrowLang,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  eyebrowLang?: string;
  title: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-navy pt-36 pb-20 text-white sm:pt-44 sm:pb-24">
      <div className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div className="pointer-events-none absolute -top-64 -right-56 h-[360px] w-[360px] rounded-full bg-violet/70 blur-[2px] sm:-top-40 sm:-right-40 sm:h-[420px] sm:w-[420px]" />
      <div className="pointer-events-none absolute -right-20 -bottom-48 h-[300px] w-[300px] rounded-full bg-violet-700/80" />
      <div className="container-x relative">
        <p lang={eyebrowLang} className="eyebrow !text-mint">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-balance sm:text-5xl sm:leading-[1.1]">
          {title}
        </h1>
        {lead && <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">{lead}</p>}
        {children}
      </div>
    </section>
  );
}

export function CheckList({ items, dark = false }: { items: string[]; dark?: boolean }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[15px] leading-6">
          <span
            className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${
              dark ? "bg-mint/15 text-mint" : "bg-violet-100 text-violet"
            }`}
          >
            <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
          </span>
          <span className={dark ? "text-white/80" : "text-[#2c3150]"}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function FaqList({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-line rounded-3xl border border-line bg-white">
      {faqs.map((f) => (
        <details
          key={f.q}
          className="group px-6 py-5 sm:px-8 [&_summary::-webkit-details-marker]:hidden"
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-left text-base font-semibold text-ink sm:text-lg">
            <span>{f.q}</span>
            <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-cloud text-violet transition-transform duration-300 group-open:rotate-45">
              <Plus className="h-4 w-4" />
            </span>
          </summary>
          <p className="mt-3 pr-10 text-[15px] leading-7 text-muted">
            <RichText text={f.a} />
          </p>
        </details>
      ))}
    </div>
  );
}

export function CtaBand({
  title = "Markanız için büyüme potansiyelini birlikte ölçelim.",
  text = "Mağazanızı, ürünlerinizi ve reklam verilerinizi inceleyip size özel ücretsiz bir ön analiz hazırlayalım.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="container-x py-20 sm:py-24">
      <div className="relative overflow-hidden rounded-[2rem] bg-violet px-8 py-14 text-white sm:px-14 sm:py-16">
        <div className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-violet-700" />
        <div className="pointer-events-none absolute -bottom-32 left-1/3 h-64 w-64 rounded-full bg-white/10" />
        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.18em] text-mint uppercase">
              Ücretsiz marka analizi
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-white/80">{text}</p>
          </div>
          <Link href="/iletisim" className="btn btn-mint shrink-0 !px-7 !py-4 text-base">
            Analiz Talep Et <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Breadcrumbs({ items }: { items: { name: string; path?: string }[] }) {
  return (
    <nav aria-label="Sayfa yolu" className="mb-6 text-sm text-white/55">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className="hover:text-white">
            Ana Sayfa
          </Link>
        </li>
        {items.map((it) => (
          <li key={it.name} className="flex items-center gap-2">
            <span aria-hidden>/</span>
            {it.path ? (
              <Link href={it.path} className="hover:text-white">
                {it.name}
              </Link>
            ) : (
              <span className="text-white/80">{it.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
