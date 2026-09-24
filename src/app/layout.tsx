import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter/wght.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "RAENA | E-Ticaret Büyüme ve Performans Ajansı",
    template: "%s | RAENA",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: `${site.name} Ekibi`, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "marketing",
  formatDetection: { telephone: false, email: false, address: false },
  openGraph: { siteName: site.name, locale: site.locale, type: "website" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: {
    types: { "text/plain": [{ url: "/llms.txt", title: "LLMs.txt" }] },
  },
};

export const viewport: Viewport = {
  themeColor: "#11152B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr">
      <body className="flex min-h-dvh flex-col">
        <a
          href="#icerik"
          className="sr-only z-[60] rounded-full bg-mint px-4 py-2 font-semibold text-navy focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          İçeriğe geç
        </a>
        <JsonLd data={[organizationJsonLd, websiteJsonLd]} />
        <Header />
        <main id="icerik" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
