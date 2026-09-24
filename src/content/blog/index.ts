import { postsPart1 } from "./posts-1";
import { postsPart2 } from "./posts-2";
import type { Block, Post } from "./types";

export type { Block, Post };

export const posts: Post[] = [...postsPart1, ...postsPart2].sort((a, b) =>
  b.publishedAt.localeCompare(a.publishedAt),
);

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function getRelatedPosts(post: Post, limit = 2) {
  const explicit = (post.related ?? [])
    .map((slug) => getPost(slug))
    .filter((p): p is Post => Boolean(p));
  const fallback = posts.filter(
    (p) => p.slug !== post.slug && p.category === post.category && !explicit.includes(p),
  );
  return [...explicit, ...fallback].slice(0, limit);
}

export function formatDate(iso: string) {
  return new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(iso));
}

/** Blok içeriğini düz metne çevirir (llms-full.txt ve arama motorları için). */
export function blocksToMarkdown(blocks: Block[]) {
  return blocks
    .map((b) => {
      switch (b.type) {
        case "h2":
          return `## ${b.text}`;
        case "h3":
          return `### ${b.text}`;
        case "p":
          return b.text;
        case "ul":
          return b.items.map((i) => `- ${i}`).join("\n");
        case "ol":
          return b.items.map((i, n) => `${n + 1}. ${i}`).join("\n");
        case "callout":
          return `> **${b.title ?? "Not"}:** ${b.text}`;
        case "table":
          return [
            b.caption ? `*${b.caption}*` : "",
            `| ${b.head.join(" | ")} |`,
            `| ${b.head.map(() => "---").join(" | ")} |`,
            ...b.rows.map((r) => `| ${r.join(" | ")} |`),
          ]
            .filter(Boolean)
            .join("\n");
      }
    })
    .join("\n\n");
}
