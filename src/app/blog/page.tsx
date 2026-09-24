import Link from "next/link";
import { ArrowRight, Clock } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs, CtaBand, PageHero } from "@/components/ui";
import { formatDate, posts } from "@/content/blog";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { absoluteUrl, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Blog: Trendyol, Meta Ads ve Influencer Büyüme Rehberleri | RAENA",
  description:
    "Trendyol satış artırma, Meta CPAS, influencer marketing, katkı kârı ve ajans fiyatları üzerine RAENA ekibinin hazırladığı uygulamalı e-ticaret büyüme rehberleri.",
  path: "/blog",
});

export default function BlogIndexPage() {
  const [featured, ...rest] = posts;
  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "RAENA Blog",
            url: absoluteUrl("/blog"),
            inLanguage: "tr-TR",
            publisher: { "@id": `${site.url}/#organization` },
            blogPost: posts.map((p) => ({
              "@type": "BlogPosting",
              headline: p.title,
              url: absoluteUrl(`/blog/${p.slug}`),
              datePublished: p.publishedAt,
            })),
          },
          breadcrumbJsonLd([{ name: "Blog", path: "/blog" }]),
        ]}
      />
      <PageHero
        eyebrow="Blog"
        title="E-ticarette ölçülebilir büyüme rehberleri."
        lead="Trendyol, Meta reklamları, influencer marketing ve kârlılık ölçümü üzerine sahadan, uygulanabilir içerikler."
      >
        <div className="mt-8">
          <Breadcrumbs items={[{ name: "Blog" }]} />
        </div>
      </PageHero>

      <section className="py-16 sm:py-20">
        <div className="container-x">
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid overflow-hidden rounded-[2rem] border border-line bg-white transition hover:border-violet/40 lg:grid-cols-[1fr_1.2fr]"
          >
            <div className="relative flex min-h-56 items-end overflow-hidden bg-violet p-8">
              <div className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-violet-700" />
              <div className="pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-mint/80" />
              <span className="relative rounded-full bg-white px-3 py-1 text-xs font-bold text-violet">
                Son yazı · {featured.category}
              </span>
            </div>
            <div className="p-8 sm:p-10">
              <h2 className="text-2xl leading-snug font-bold text-ink group-hover:text-violet sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-4 leading-7 text-muted">{featured.excerpt}</p>
              <p className="mt-6 flex items-center gap-2 text-sm text-muted">
                <Clock className="h-4 w-4" /> {formatDate(featured.publishedAt)} ·{" "}
                {featured.readingMinutes} dk
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-violet">
                Yazıyı oku <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="card card-hover group flex flex-col"
              >
                <p className="text-xs font-semibold text-violet">{p.category}</p>
                <h2 className="mt-3 text-lg leading-snug font-bold text-ink group-hover:text-violet">
                  {p.title}
                </h2>
                <p className="mt-3 line-clamp-3 flex-1 text-sm leading-6 text-muted">{p.excerpt}</p>
                <p className="mt-6 text-xs text-muted">
                  {formatDate(p.publishedAt)} · {p.readingMinutes} dk okuma
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
