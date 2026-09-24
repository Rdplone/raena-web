import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs, CtaBand, FaqList, PageHero, SectionHeading } from "@/components/ui";
import { pricingFaqs } from "@/content/pricing";
import { services } from "@/content/services";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Sık Sorulan Sorular: E-Ticaret Büyüme Ajansı | RAENA",
  description:
    "RAENA hizmetleri, paket fiyatları, başarı payı hesabı, sözleşme süresi, Trendyol, Meta CPAS ve influencer marketing hakkında sık sorulan sorular ve cevapları.",
  path: "/sss",
});

const generalFaqs = [
  {
    q: "RAENA nedir?",
    a: "RAENA, Türkiye'deki e-ticaret markaları için Trendyol mağaza yönetimi, Meta reklamları ve influencer marketing kanallarını tek bir satış ve kârlılık sistemi içinde yöneten e-ticaret büyüme ve performans ajansıdır.",
  },
  {
    q: "RAENA'yı klasik bir reklam ajansından ayıran ne?",
    a: "Klasik ajanslar kanalları ayrı ayrı yönetir ve erişim, tıklama gibi metrikleri raporlar. RAENA üç kanalı aynı veri döngüsünde (Revenue Loop) yönetir ve başarıyı reklam, influencer ve ajans maliyetleri sonrası katkı kârıyla ölçer.",
  },
  {
    q: "Hangi markalarla çalışıyorsunuz?",
    a: "Türkiye'de Trendyol üzerinden satış yapan veya satışa başlayacak; stok, marj ve operasyon kapasitesi bulunan markalarla çalışıyoruz. Marj, stok, operasyon, ürün, bütçe ve veri erişimi değerlendirilerek 75+ puan doğrudan kabul, 55-74 puan 90 günlük pilot, 55 altı önce hazırlık danışmanlığı uygulanır.",
  },
  {
    q: "Ücretsiz marka analizi neleri kapsar?",
    a: "Mağazanızın kategori, rakip, fiyat, puan-yorum ve reklam görünümüne dair ön değerlendirme yapar; büyüme fırsatlarını ve size uygun paketi paylaşırız. İletişim formu üzerinden talep edebilirsiniz.",
  },
  {
    q: "Ne sıklıkla raporlama yapıyorsunuz?",
    a: "Günlük anomali kontrolü, haftalık aksiyon toplantısı ve aylık yönetim raporu. VIP markalarda ayrıca markaya özel dashboard, haftalık yönetici özeti ve aylık büyüme konseyi bulunur.",
  },
];

const serviceFaqs = services.flatMap((s) => s.faqs);

export default function FaqPage() {
  const all = [...generalFaqs, ...serviceFaqs, ...pricingFaqs];
  return (
    <>
      <JsonLd data={[faqJsonLd(all), breadcrumbJsonLd([{ name: "SSS", path: "/sss" }])]} />
      <PageHero
        eyebrow="Sık sorulan sorular"
        title="Merak ettikleriniz, net cevaplarla."
        lead="Hizmetlerimiz, fiyatlandırma modelimiz ve çalışma şeklimiz hakkında en çok sorulan sorular."
      >
        <div className="mt-8">
          <Breadcrumbs items={[{ name: "SSS" }]} />
        </div>
      </PageHero>
      <section className="py-20 sm:py-24">
        <div className="container-x space-y-16">
          {[
            { t: "Genel", f: generalFaqs },
            { t: "Hizmetler", f: serviceFaqs },
            { t: "Fiyatlandırma ve sözleşme", f: pricingFaqs },
          ].map((g) => (
            <div key={g.t} className="grid gap-8 lg:grid-cols-[1fr_2.2fr]">
              <SectionHeading eyebrow="Kategori" title={g.t} />
              <FaqList faqs={g.f} />
            </div>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
