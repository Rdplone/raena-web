import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { RevenueLoop } from "@/components/RevenueLoop";
import { Breadcrumbs, CheckList, CtaBand, PageHero, SectionHeading } from "@/components/ui";
import { entryPackages } from "@/content/pricing";
import { services } from "@/content/services";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Hizmetler: Trendyol, Meta Ads ve Influencer Marketing | RAENA",
  description:
    "Trendyol mağaza yönetimi, Meta performans reklamları ve influencer marketing hizmetlerini tek büyüme sisteminde sunan RAENA'nın hizmet mimarisini inceleyin.",
  path: "/hizmetler",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Hizmetler", path: "/hizmetler" }])} />
      <PageHero
        eyebrow="Hizmetler"
        title="Üç uzmanlık, tek büyüme sistemi."
        lead="Trendyol görünürlüğü, Meta reklam verimliliği ve influencer gücünü tek bir büyüme sisteminde birleştiren hizmet mimarisi."
      >
        <div className="mt-8">
          <Breadcrumbs items={[{ name: "Hizmetler" }]} />
        </div>
      </PageHero>

      <section className="py-20 sm:py-28">
        <div className="container-x space-y-6">
          {services.map((s, i) => {
            const pkg = entryPackages[i];
            return (
              <article
                key={s.slug}
                className="grid gap-10 rounded-[2rem] border border-line bg-white p-8 sm:p-12 lg:grid-cols-[1.2fr_1fr]"
              >
                <div>
                  <p className="eyebrow">
                    {String(i + 1).padStart(2, "0")} · <span lang="en">{s.engine}</span>
                  </p>
                  <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink">{s.name}</h2>
                  <p className="mt-4 leading-7 text-muted">{s.intro}</p>
                  <p className="mt-6 rounded-2xl bg-cloud p-5 text-[15px] leading-7 font-medium text-ink">
                    <span className="font-bold text-violet">Ana sonuç: </span>
                    {s.outcome}
                  </p>
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Link href={`/hizmetler/${s.slug}`} className="btn btn-primary">
                      Hizmet detayı <ArrowRight className="h-4 w-4" />
                    </Link>
                    <span className="text-sm text-muted">
                      Başlangıç: <strong className="text-ink">{pkg.price}</strong> {pkg.period}
                    </span>
                  </div>
                </div>
                <div className="rounded-3xl bg-cloud p-7">
                  <p className="text-sm font-semibold text-ink">Neler yapıyoruz?</p>
                  <div className="mt-5">
                    <CheckList items={s.capabilities.map((c) => c.title)} />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-navy py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading
            dark
            eyebrow="Entegrasyon"
            title="Kanallar birbirini nasıl besler?"
            lead="RAENA'nın en güçlü avantajı üç hizmeti ayrı ayrı değil, aynı veri döngüsünde yönetmesidir."
          />
          <div className="mt-14">
            <RevenueLoop dark />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
