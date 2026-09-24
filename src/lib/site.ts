/**
 * Sitenin tek merkezden yönetilen temel bilgileri.
 * İletişim bilgilerini ve sosyal medya adreslerini buradan güncelleyin.
 */
export const site = {
  name: "RAENA",
  legalName: "RAENA E-Ticaret Büyüme Ajansı",
  tagline: "E-Ticaret Büyüme Ajansı",
  slogan: "Görünürlüğü satışa, satışı büyümeye dönüştürür.",
  shortPromise: "Hacmi büyüt. Verimi artır. Markayı güçlendir.",
  description:
    "RAENA; Trendyol mağaza yönetimi, Meta reklamları ve influencer marketing çalışmalarını tek bir ölçülebilir büyüme sisteminde birleştiren e-ticaret büyüme ve performans ajansıdır.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://raena.agency").replace(/\/$/, ""),
  locale: "tr_TR",
  email: "info@raena.agency",
  instagram: "https://www.instagram.com/raena.agency/",
  instagramHandle: "@raena.agency",
  city: "İstanbul",
  country: "TR",
} as const;

export const mainNav = [
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/nasil-calisiyoruz", label: "Nasıl Çalışıyoruz" },
  { href: "/fiyatlandirma", label: "Fiyatlandırma" },
  { href: "/vip", label: "VIP Program" },
  { href: "/blog", label: "Blog" },
  { href: "/hakkimizda", label: "Hakkımızda" },
] as const;

export function absoluteUrl(path = "/") {
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}
