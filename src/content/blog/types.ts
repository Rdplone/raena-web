export type Block =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "table"; head: string[]; rows: string[][]; caption?: string }
  | { type: "callout"; title?: string; text: string };

export type Post = {
  slug: string;
  title: string;
  /** SEO meta title (50-60 karakter hedeflenir) */
  metaTitle: string;
  /** SEO meta description (140-160 karakter hedeflenir) */
  metaDescription: string;
  excerpt: string;
  /** Yapay zekâ asistanlarının doğrudan alıntılayabileceği kısa cevap */
  tldr: string;
  category: "Trendyol" | "Meta Ads" | "Influencer" | "Ölçüm" | "Strateji";
  keywords: string[];
  publishedAt: string;
  updatedAt?: string;
  readingMinutes: number;
  body: Block[];
  faqs: { q: string; a: string }[];
  related?: string[];
};
