import Link from "next/link";
import { ArrowRight, Crown } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { SuccessFeeCalculator } from "@/components/SuccessFeeCalculator";
import {
  Breadcrumbs,
  CheckList,
  CtaBand,
  FaqList,
  PageHero,
  SectionHeading,
} from "@/components/ui";
import {
  entryPackages,
  excludedCosts,
  growth360,
  pricingFaqs,
  successFeeSteps,
  vipPackage,
} from "@/content/pricing";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata } from "@/lib/seo";
import { absoluteUrl, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Fiyatlandırma: E-Ticaret Ajans Paketleri ve Başarı Payı | RAENA",
  description:
    "Trendyol 5.900 TL, Meta 6.900 TL, Influencer 4.900 TL ve 360° Büyüme Paketi 12.900 TL (+KDV/ay). Yalnızca net büyümeden alınan şeffaf başarı payı modeli.",
  path: "/fiyatlandirma",
});

const allOffers = [
  ...entryPackages.map((p) => ({ name: p.name, price: p.priceValue })),
  { name: growth360.name, price: growth360.priceValue },
  { name: `VIP ${vipPackage.name}`, price: vipPackage.priceValue },
];

const offerCatalogJsonLd = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "RAENA Hizmet Paketleri",
  url: absoluteUrl("/fiyatlandirma"),
  itemListElement: allOffers.map((o) => ({
    "@type": "Offer",
    name: o.name,
    price: o.price,
    priceCurrency: "TRY",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: o.price,
      priceCurrency: "TRY",
      unitText: "ay",
      valueAddedTaxIncluded: false,
    },
    seller: { "@id": `${site.url}/#organization` },
  })),
};

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={[
          offerCatalogJsonLd,
          faqJsonLd(pricingFaqs),
          breadcrumbJsonLd([{ name: "Fiyatlandırma", path: "/fiyatlandirma" }]),
        ]}
      />
      <PageHero
        eyebrow="Fiyatlandırma"
        title="Erişilebilir sabit ücret. Ölçülebilir büyümeye ortaklık."
        lead="RAENA ucuz ajans değildir; ilk referans döneminde fiyat avantajı sunan bir performans ajansıdır. Kazancımızın bir bölümünü yalnızca sizin net büyümenize bağlarız."
      >
        <div className="mt-8">
          <Breadcrumbs items={[{ name: "Fiyatlandırma" }]} />
        </div>
      </PageHero>

      {/* 360 PAKET */}
      <section className="relative -mt-10 pb-10">
        <div className="container-x">
          <div className="relative grid overflow-hidden rounded-[2rem] border-2 border-violet bg-white shadow-[0_40px_80px_-50px_rgba(108,85,246,0.6)] lg:grid-cols-[1.3fr_1fr]">
            <span className="absolute top-6 right-6 rounded-full bg-mint px-3 py-1 text-xs font-bold text-navy">
              Önerilen
            </span>
            <div className="p-8 sm:p-12">
              <p className="eyebrow">Ana satış teklifi</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                {growth360.name}
              </h2>
              <p className="mt-3 text-muted">{growth360.description}</p>
              <div className="mt-8">
                <CheckList items={growth360.features} />
              </div>
            </div>
            <div className="flex flex-col justify-center bg-cloud p-8 sm:p-12">
              <p className="text-sm font-medium text-muted">Standart fiyat</p>
              <p className="mt-1 text-5xl font-extrabold tracking-tight text-navy">
                {growth360.price}
              </p>
              <p className="text-sm text-muted">{growth360.period}</p>
              <div className="mt-6 rounded-2xl bg-navy p-5 text-white">
                <p className="text-xs font-semibold tracking-[0.14em] text-mint uppercase">
                  {growth360.launchNote}
                </p>
                <p className="mt-1 text-3xl font-extrabold">
                  {growth360.launchPrice}{" "}
                  <span className="text-sm font-medium text-white/60">{growth360.period}</span>
                </p>
              </div>
              <Link href="/iletisim?paket=360" className="btn btn-primary mt-6 w-full">
                Başvuru yap <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* GİRİŞ PAKETLERİ */}
      <section className="py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Giriş paketleri"
            title="Tek kanalla başlamak isteyenler için."
            lead="Düşük riskli, kapsamı net tanımlanmış ve sürdürülebilir teklifler."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {entryPackages.map((p) => (
              <div key={p.id} className="card card-hover flex flex-col">
                <h3 className="text-sm font-bold tracking-[0.14em] text-violet uppercase">
                  {p.name}
                </h3>
                <p className="mt-4 text-4xl font-extrabold tracking-tight text-navy">{p.price}</p>
                <p className="text-sm text-muted">{p.period}</p>
                <p className="mt-4 text-[15px] leading-7 text-muted">{p.description}</p>
                <div className="mt-6 flex-1 border-t border-line pt-6">
                  <CheckList items={p.features} />
                </div>
                <div className="mt-8 flex gap-3">
                  <Link href={`/iletisim?paket=${p.id}`} className="btn btn-primary flex-1">
                    Teklif al
                  </Link>
                  <Link
                    href={p.href}
                    className="btn btn-outline"
                    aria-label={`${p.name} detayları`}
                  >
                    Detay
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 rounded-2xl bg-cloud px-6 py-4 text-sm text-muted">
            <strong className="text-ink">Not:</strong> {excludedCosts} Tüm fiyatlara KDV dahil
            değildir.
          </p>
        </div>
      </section>

      {/* VIP */}
      <section className="pb-20 sm:pb-24">
        <div className="container-x">
          <Link
            href="/vip"
            className="group relative flex flex-col gap-6 overflow-hidden rounded-[2rem] bg-navy p-8 text-white sm:p-12 lg:flex-row lg:items-center lg:justify-between"
          >
            <div className="pointer-events-none absolute -top-24 -right-10 h-72 w-72 rounded-full bg-violet" />
            <div className="relative max-w-2xl">
              <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.16em] text-mint uppercase">
                <Crown className="h-4 w-4" /> VIP · Sınırlı marka kabulü
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">{vipPackage.name}</h2>
              <p className="mt-3 text-white/70">
                {vipPackage.price} {vipPackage.period} · Net büyümenin %{vipPackage.successFee}
                &apos;si · Minimum {vipPackage.minMonths} ay · En fazla {vipPackage.maxBrands} aktif
                marka
              </p>
            </div>
            <span className="btn btn-mint relative shrink-0">
              Programı incele{" "}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </section>

      {/* BAŞARI PAYI */}
      <section className="bg-navy py-20 sm:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              dark
              eyebrow="Başarı payı"
              title="Adil ve tartışmasız ciro ortaklığı."
              lead="RAENA, markanın eski satışından değil; ölçülebilir net büyümeden pay alır."
            />
            <ol className="mt-10 space-y-4">
              {successFeeSteps.map((s, i) => (
                <li key={s.title} className="flex gap-5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-violet text-sm font-bold text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-semibold text-white">{s.title}</p>
                    <p className="mt-1 text-sm leading-6 text-white/60">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <p className="mb-4 text-sm font-semibold text-white">Başarı payı hesaplayıcı</p>
            <SuccessFeeCalculator />
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeading
            eyebrow="SSS"
            title="Fiyatlandırma hakkında sık sorulanlar"
            lead="Aklınıza takılan başka bir soru varsa bize yazın."
          />
          <FaqList faqs={pricingFaqs} />
        </div>
      </section>

      <CtaBand title="Hangi paketin size uygun olduğundan emin değil misiniz?" />
    </>
  );
}
