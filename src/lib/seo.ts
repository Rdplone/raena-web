import type { Metadata } from "next";
import { absoluteUrl, site } from "./site";

type PageMetaInput = {
  /** Sayfanın meta title değeri (şablon eklenmeden tam başlık) */
  title: string;
  /** Sayfanın meta description değeri (ideal: 140-160 karakter) */
  description: string;
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  keywords?: string[];
};

/** Her sayfa için benzersiz title, description, canonical ve Open Graph üretir. */
export function pageMetadata({
  title,
  description,
  path,
  type = "website",
  publishedTime,
  modifiedTime,
  keywords,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  return {
    title: { absolute: title },
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: site.locale,
      type,
      ...(type === "article"
        ? { publishedTime, modifiedTime, authors: [`${site.name} Ekibi`] }
        : {}),
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

/** JSON-LD yapılandırılmış veri için yardımcılar */
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${site.url}/#organization`,
  name: site.name,
  alternateName: site.legalName,
  slogan: site.slogan,
  description: site.description,
  url: site.url,
  logo: absoluteUrl("/icon-256.png"),
  image: absoluteUrl("/logo-light.png"),
  email: site.email,
  telephone: site.phone.replace(/\s/g, ""),
  areaServed: { "@type": "Country", name: "Türkiye" },
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.address.building}, ${site.address.street}`,
    postalCode: site.address.postalCode,
    addressLocality: site.address.district,
    addressRegion: site.address.city,
    addressCountry: site.address.country,
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: site.phone.replace(/\s/g, ""),
    email: site.email,
    availableLanguage: ["Turkish"],
    areaServed: "TR",
  },
  sameAs: [site.instagram],
  knowsAbout: [
    "Trendyol mağaza yönetimi",
    "Trendyol ürün reklamları",
    "Meta reklam yönetimi",
    "Meta CPAS",
    "Influencer marketing",
    "UGC içerik üretimi",
    "E-ticaret performans pazarlaması",
    "Katkı kârı analizi",
  ],
  priceRange: "4.900 TL - 39.900 TL / ay + KDV",
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: site.url,
  name: site.name,
  inLanguage: "tr-TR",
  publisher: { "@id": `${site.url}/#organization` },
};

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Ana Sayfa", path: "/" }, ...items].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
