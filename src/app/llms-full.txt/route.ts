import { blocksToMarkdown, posts } from "@/content/blog";
import { entryPackages, growth360, pricingFaqs, vipPackage } from "@/content/pricing";
import { services } from "@/content/services";
import { absoluteUrl, site } from "@/lib/site";

export const dynamic = "force-static";

/** llms-full.txt — hizmet, fiyat ve blog içeriğinin tam metni */
export function GET() {
  const sections = [
    `# ${site.name} — ${site.tagline}\n\n> ${site.description}\n\nSlogan: ${site.slogan}\nWeb: ${site.url}\nE-posta: ${site.email}`,
    `## Hizmetler\n\n${services
      .map(
        (s) =>
          `### ${s.name} (${s.engine})\nURL: ${absoluteUrl(`/hizmetler/${s.slug}`)}\n\n${s.intro}\n\nAna sonuç: ${s.outcome}\n\n${s.capabilities
            .map((c) => `- **${c.title}:** ${c.text}`)
            .join("\n")}\n\n${s.faqs.map((f) => `**S: ${f.q}**\nC: ${f.a}`).join("\n\n")}`,
      )
      .join("\n\n")}`,
    `## Fiyatlandırma (aylık, KDV hariç)\n\n${entryPackages
      .map((p) => `### ${p.name} — ${p.price}\n${p.features.map((f) => `- ${f}`).join("\n")}`)
      .join(
        "\n\n",
      )}\n\n### ${growth360.name} — ${growth360.price} (ilk 5 markaya ${growth360.launchPrice})\n${growth360.features
      .map((f) => `- ${f}`)
      .join("\n")}\n\n### VIP ${vipPackage.name} — ${vipPackage.price}\n${vipPackage.features
      .map((f) => `- ${f}`)
      .join("\n")}\n\n${pricingFaqs.map((f) => `**S: ${f.q}**\nC: ${f.a}`).join("\n\n")}`,
    `## Blog yazıları\n\n${posts
      .map(
        (p) =>
          `### ${p.title}\nURL: ${absoluteUrl(`/blog/${p.slug}`)}\nYayın: ${p.publishedAt}\n\n**Kısa cevap:** ${p.tldr}\n\n${blocksToMarkdown(p.body)}\n\n${p.faqs
            .map((f) => `**S: ${f.q}**\nC: ${f.a}`)
            .join("\n\n")}`,
      )
      .join("\n\n---\n\n")}`,
  ];
  return new Response(sections.join("\n\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
