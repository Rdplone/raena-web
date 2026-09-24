import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { RichText } from "@/components/RichText";
import { Breadcrumbs, CtaBand, FaqList } from "@/components/ui";
import { type Block, formatDate, getPost, getRelatedPosts, posts } from "@/content/blog";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata } from "@/lib/seo";
import { absoluteUrl, site } from "@/lib/site";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt ?? post.publishedAt,
    keywords: post.keywords,
  });
}

function slugify(text: string) {
  return text
    .toLocaleLowerCase("tr-TR")
    .replace(/ı/g, "i")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "h2":
      return <h2 id={slugify(block.text)}>{block.text}</h2>;
    case "h3":
      return <h3>{block.text}</h3>;
    case "p":
      return (
        <p>
          <RichText text={block.text} />
        </p>
      );
    case "ul":
      return (
        <ul>
          {block.items.map((i) => (
            <li key={i}>
              <RichText text={i} />
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol>
          {block.items.map((i) => (
            <li key={i}>
              <RichText text={i} />
            </li>
          ))}
        </ol>
      );
    case "callout":
      return (
        <aside className="my-8 rounded-2xl border-l-4 border-mint bg-navy p-6 text-white">
          {block.title && (
            <p className="text-xs font-semibold tracking-[0.16em] text-mint uppercase">
              {block.title}
            </p>
          )}
          <p className="!my-2 text-[16px] leading-7 text-white/90">{block.text}</p>
        </aside>
      );
    case "table":
      return (
        <figure className="my-8 overflow-x-auto rounded-2xl border border-line">
          <table className="w-full min-w-[520px] text-left text-[15px] leading-6">
            <thead className="bg-cloud">
              <tr>
                {block.head.map((h) => (
                  <th key={h} className="px-5 py-3 font-semibold text-ink">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {block.rows.map((r) => (
                <tr key={r.join("|")}>
                  {r.map((c, i) => (
                    <td key={i} className={`px-5 py-3 ${i === 0 ? "font-semibold text-ink" : ""}`}>
                      {c}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {block.caption && (
            <figcaption className="border-t border-line px-5 py-3 text-sm text-muted">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
  }
}

export default async function BlogPostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post);
  const toc = post.body.filter((b): b is Extract<Block, { type: "h2" }> => b.type === "h2");
  const url = absoluteUrl(`/blog/${post.slug}`);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    abstract: post.tldr,
    keywords: post.keywords.join(", "),
    articleSection: post.category,
    inLanguage: "tr-TR",
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    image: absoluteUrl("/opengraph-image"),
    author: { "@type": "Organization", name: `${site.name} Ekibi`, url: site.url },
    publisher: { "@id": `${site.url}/#organization` },
  };

  return (
    <>
      <JsonLd
        data={[
          articleJsonLd,
          faqJsonLd(post.faqs),
          breadcrumbJsonLd([
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />
      <header className="relative overflow-hidden bg-navy pt-36 pb-16 text-white sm:pt-44">
        <div className="pointer-events-none absolute -top-64 -right-56 h-[360px] w-[360px] rounded-full bg-violet sm:-top-40 sm:-right-40 sm:h-[420px] sm:w-[420px]" />
        <div className="container-x relative max-w-4xl">
          <Breadcrumbs items={[{ name: "Blog", path: "/blog" }, { name: post.category }]} />
          <p className="eyebrow !text-mint">{post.category}</p>
          <h1 className="mt-4 text-3xl leading-tight font-bold tracking-tight text-balance sm:text-5xl sm:leading-[1.12]">
            {post.title}
          </h1>
          <p className="mt-6 text-sm text-white/60">
            {site.name} Ekibi ·{" "}
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time> ·{" "}
            {post.readingMinutes} dk okuma
          </p>
        </div>
      </header>

      <div className="container-x grid max-w-6xl gap-12 py-14 lg:grid-cols-[1fr_260px]">
        <article className="min-w-0">
          <section
            aria-label="Kısa cevap"
            className="rounded-3xl border border-violet/25 bg-violet-50 p-6 sm:p-7"
          >
            <p className="text-xs font-bold tracking-[0.16em] text-violet uppercase">Kısa cevap</p>
            <p className="mt-3 text-[16px] leading-7 text-ink">{post.tldr}</p>
          </section>

          <div className="prose-raena mt-8">
            {post.body.map((b, i) => (
              <BlockView key={i} block={b} />
            ))}
          </div>

          {post.faqs.length > 0 && (
            <section className="mt-14">
              <h2 className="mb-6 text-2xl font-bold text-ink">Sık sorulan sorular</h2>
              <FaqList faqs={post.faqs} />
            </section>
          )}
        </article>

        <aside className="hidden lg:block">
          <div className="sticky top-28 space-y-6">
            {toc.length > 0 && (
              <nav aria-label="İçindekiler" className="rounded-3xl bg-cloud p-6">
                <p className="text-xs font-bold tracking-[0.16em] text-muted uppercase">
                  İçindekiler
                </p>
                <ol className="mt-4 space-y-3 text-sm">
                  {toc.map((h) => (
                    <li key={h.text}>
                      <a href={`#${slugify(h.text)}`} className="text-ink/80 hover:text-violet">
                        {h.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            )}
            <div className="rounded-3xl bg-navy p-6 text-white">
              <p className="font-bold">Markanıza özel analiz</p>
              <p className="mt-2 text-sm leading-6 text-white/70">
                Bu adımların mağazanızda nasıl uygulanacağını ücretsiz ön analizle gösterelim.
              </p>
              <Link href="/iletisim" className="btn btn-mint mt-5 w-full !py-2.5">
                Analiz talep et
              </Link>
            </div>
          </div>
        </aside>
      </div>

      {related.length > 0 && (
        <section className="bg-cloud py-16">
          <div className="container-x">
            <p className="text-sm font-semibold text-muted">İlgili yazılar</p>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group flex items-center justify-between gap-6 rounded-2xl border border-line bg-white p-6 transition hover:border-violet"
                >
                  <span>
                    <span className="block text-xs text-violet">{r.category}</span>
                    <span className="mt-1 block font-bold text-ink">{r.title}</span>
                  </span>
                  <ArrowRight className="h-5 w-5 shrink-0 text-violet transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}
