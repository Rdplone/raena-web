import type { MetadataRoute } from "next";
import { posts } from "@/content/blog";
import { services } from "@/content/services";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages: [string, number, MetadataRoute.Sitemap[number]["changeFrequency"]][] = [
    ["/", 1, "weekly"],
    ["/hizmetler", 0.9, "monthly"],
    ["/fiyatlandirma", 0.9, "monthly"],
    ["/vip", 0.8, "monthly"],
    ["/nasil-calisiyoruz", 0.8, "monthly"],
    ["/hakkimizda", 0.6, "yearly"],
    ["/blog", 0.8, "weekly"],
    ["/sss", 0.7, "monthly"],
    ["/iletisim", 0.7, "yearly"],
    ["/kvkk", 0.2, "yearly"],
  ];
  return [
    ...staticPages.map(([path, priority, changeFrequency]) => ({
      url: absoluteUrl(path),
      lastModified: now,
      changeFrequency,
      priority,
    })),
    ...services.map((s) => ({
      url: absoluteUrl(`/hizmetler/${s.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...posts.map((p) => ({
      url: absoluteUrl(`/blog/${p.slug}`),
      lastModified: new Date(p.updatedAt ?? p.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
