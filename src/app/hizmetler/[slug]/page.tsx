import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import {
  Breadcrumbs,
  CheckList,
  CtaBand,
  FaqList,
  PageHero,
  SectionHeading,
} from "@/components/ui";
import { entryPackages } from "@/content/pricing";
import { getService, services } from "@/content/services";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata } from "@/lib/seo";
import { absoluteUrl, site } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps<"/hizmetler/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return pageMetadata({
    title: s.metaTitle,
    description: s.metaDescription,
    path: `/hizmetler/${s.slug}`,
  });
}

const packageBySlug: Record<string, string> = {
  "trendyol-buyume": "trendyol",
  "meta-performans": "meta",
  "influencer-marketing": "influencer",
};

export default async function ServiceDetailPage({ params }: PageProps<"/hizmetler/[slug]">) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();
  const pkg = entryPackages.find((p) => p.id === packageBySlug[s.slug])!;
  const others = services.filter((o) => o.slug !== s.slug);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    alternateName: s.engine,
    description: s.metaDescription,
    serviceType: s.metaTitle.split("|")[0].trim(),
    url: absoluteUrl(`/hizmetler/${s.slug}`),
    areaServed: { "@type": "Country", name: "Türkiye" },
    provider: { "@id": `${site.url}/#organization` },
    offers: {
      "@type": "Offer",
      price: pkg.priceValue,
      priceCurrency: "TRY",
      description: `${pkg.name} paketi — ${pkg.period}`,
      url: absoluteUrl("/fiyatlandirma"),
    },
  };

  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd,
          faqJsonLd(s.faqs),
          breadcrumbJsonLd([
            { name: "Hizmetler", path: "/hizmetler" },
            { name: s.name, path: `/hizmetler/${s.slug}` },
          ]),
        ]}
      />
      <PageHero eyebrow={s.engine} eyebrowLang="en" title={s.outcome} lead={s.intro}>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link href="/iletisim" className="btn btn-primary">
            Ücretsiz analiz al <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/fiyatlandirma" className="btn btn-ghost">
            {pkg.price} {pkg.period}
          </Link>
        </div>
        <div className="mt-10">
          <Breadcrumbs items={[{ name: "Hizmetler", path: "/hizmetler" }, { name: s.name }]} />
        </div>
      </PageHero>

      <section className="py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading eyebrow="Kapsam" title={`${s.name} ile neler yapıyoruz?`} />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {s.capabilities.map((c, i) => (
              <div key={c.title} className="card card-hover">
                <span className="text-sm font-bold text-violet">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-bold text-ink">{c.title}</h3>
                <p className="mt-2 text-[15px] leading-7 text-muted">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cloud py-20 sm:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Süreç" title="Adım adım nasıl ilerliyoruz?" />
            <ol className="mt-10 space-y-4">
              {s.process.map((step, i) => (
                <li key={step} className="flex items-center gap-5 rounded-2xl bg-white p-5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-violet text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="font-medium text-ink">{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <SectionHeading eyebrow="Ölçüm" title="İzlediğimiz metrikler" />
            <dl className="mt-10 grid grid-cols-2 gap-4">
              {s.metrics.map((m) => (
                <div key={m.label} className="rounded-2xl border border-line bg-white p-5">
                  <dt className="text-xl font-extrabold text-navy">{m.label}</dt>
                  <dd className="mt-1 text-sm text-muted">{m.text}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 rounded-2xl bg-navy p-6 text-white">
              <p className="text-xs font-semibold tracking-[0.16em] text-mint uppercase">
                {s.principle.title}
              </p>
              <p className="mt-2 leading-7 text-white/85">{s.principle.text}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div className="card h-fit border-violet/30 bg-violet-50/60">
            <p className="eyebrow">Giriş paketi</p>
            <h2 className="mt-3 text-2xl font-bold text-ink">{pkg.name}</h2>
            <p className="mt-4 text-4xl font-extrabold text-navy">
              {pkg.price} <span className="text-base font-medium text-muted">{pkg.period}</span>
            </p>
            <div className="mt-6">
              <CheckList items={pkg.features} />
            </div>
            <Link href={`/iletisim?paket=${pkg.id}`} className="btn btn-primary mt-8 w-full">
              Teklif al
            </Link>
            <p className="mt-4 text-xs leading-5 text-muted">
              Tüm kanalları birlikte isterseniz{" "}
              <Link href="/fiyatlandirma" className="font-semibold text-violet underline">
                360° Büyüme Paketi
              </Link>
              &apos;ni inceleyin.
            </p>
          </div>
          <div>
            <SectionHeading eyebrow="SSS" title="Sık sorulan sorular" />
            <div className="mt-8">
              <FaqList faqs={s.faqs} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cloud py-16">
        <div className="container-x">
          <p className="text-sm font-semibold text-muted">Diğer hizmetler</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/hizmetler/${o.slug}`}
                className="group flex items-center justify-between rounded-2xl border border-line bg-white p-6 transition hover:border-violet"
              >
                <span>
                  <span className="block text-xs text-muted">{o.engine}</span>
                  <span className="text-lg font-bold text-ink">{o.name}</span>
                </span>
                <ArrowRight className="h-5 w-5 text-violet transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
