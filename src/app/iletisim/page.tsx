import { Suspense } from "react";
import { ContactForm } from "@/components/ContactForm";
import { Instagram, Mail, MapPin, Phone } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs, PageHero } from "@/components/ui";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { absoluteUrl, fullAddress, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "İletişim: Ücretsiz Marka Analizi Talep Edin | RAENA",
  description:
    "Trendyol mağazanız, Meta reklamlarınız ve influencer çalışmalarınız için ücretsiz ön analiz talep edin. RAENA ekibi 2 iş günü içinde size dönüş yapar.",
  path: "/iletisim",
});

const steps = [
  ["Formu doldurun", "Markanızı ve hedeflerinizi kısaca anlatın."],
  ["Ön analiz", "Mağaza, ürün ve reklam görünümünüzü inceleriz."],
  ["Görüşme", "Bulguları ve size uygun büyüme planını paylaşırız."],
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            url: absoluteUrl("/iletisim"),
            name: "RAENA İletişim",
            mainEntity: { "@id": `${site.url}/#organization` },
          },
          breadcrumbJsonLd([{ name: "İletişim", path: "/iletisim" }]),
        ]}
      />
      <PageHero
        eyebrow="İletişim"
        title="Ücretsiz marka analizi alın."
        lead="Markaları reklama değil, büyümeye hazırlarız. Mağazanızı inceleyelim ve büyüme potansiyelinizi birlikte ölçelim."
      >
        <div className="mt-8">
          <Breadcrumbs items={[{ name: "İletişim" }]} />
        </div>
      </PageHero>

      <section className="py-16 sm:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <h2 className="text-2xl font-bold text-ink">Süreç nasıl işler?</h2>
            <ol className="mt-8 space-y-6">
              {steps.map(([t, d], i) => (
                <li key={t} className="flex gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-violet text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-ink">{t}</p>
                    <p className="mt-1 text-sm leading-6 text-muted">{d}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-12 space-y-3">
              <a
                href={site.phoneHref}
                className="flex items-center gap-4 rounded-2xl border border-line p-5 transition hover:border-violet"
              >
                <Phone className="h-6 w-6 text-violet" />
                <span>
                  <span className="block text-xs text-muted">Telefon / WhatsApp</span>
                  <span className="font-semibold text-ink">{site.phone}</span>
                </span>
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-4 rounded-2xl border border-line p-5 transition hover:border-violet"
              >
                <Mail className="h-6 w-6 text-violet" />
                <span>
                  <span className="block text-xs text-muted">E-posta</span>
                  <span className="font-semibold text-ink">{site.email}</span>
                </span>
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-line p-5 transition hover:border-violet"
              >
                <Instagram className="h-6 w-6 text-violet" />
                <span>
                  <span className="block text-xs text-muted">Instagram</span>
                  <span className="font-semibold text-ink">{site.instagramHandle}</span>
                </span>
              </a>
              <a
                href={site.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 rounded-2xl border border-line p-5 transition hover:border-violet"
              >
                <MapPin className="mt-0.5 h-6 w-6 shrink-0 text-violet" />
                <span>
                  <span className="block text-xs text-muted">Ofis</span>
                  <address className="font-semibold text-ink not-italic">{fullAddress}</address>
                </span>
              </a>
            </div>

            <p className="mt-8 rounded-2xl bg-cloud p-5 text-sm leading-6 text-muted">
              <strong className="text-ink">Şeffaflık notu:</strong> Kesin ciro veya sıralama
              garantisi vermiyoruz. Baz dönem, test planı ve ölçülebilir performans senaryosu
              sunuyoruz.
            </p>
          </div>
          <Suspense
            fallback={<div className="h-[640px] rounded-[2rem] border border-line bg-cloud" />}
          >
            <ContactForm />
          </Suspense>
        </div>
      </section>
    </>
  );
}
