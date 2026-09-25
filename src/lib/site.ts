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
  email: "raenaplus@gmail.com",
  phone: "+90 538 691 29 67",
  phoneHref: "tel:+905386912967",
  whatsappHref: "https://wa.me/905386912967",
  instagram: "https://www.instagram.com/raena.agency/",
  instagramHandle: "@raena.agency",
  address: {
    building: "Bilim Tower",
    street: "Yukarı Dudullu Mah. Bayrak Cad. No:30, Kat 14, Daire 108",
    postalCode: "34775",
    district: "Ümraniye",
    city: "İstanbul",
    country: "TR",
  },
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Bilim+Tower+Bayrak+Cad.+No%3A30+Yukar%C4%B1+Dudullu+%C3%9Cmraniye+%C4%B0stanbul",
  city: "İstanbul",
  country: "TR",
} as const;

/** Tek satırlık açık adres */
export const fullAddress = `${site.address.building}, ${site.address.street}, ${site.address.postalCode} ${site.address.district}/${site.address.city}`;

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
