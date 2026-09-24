import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs, CtaBand, PageHero, SectionHeading } from "@/components/ui";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { absoluteUrl, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Hakkımızda: Vizyon, Misyon ve Değerlerimiz | RAENA",
  description:
    "RAENA; Trendyol, Meta ve influencer kanallarında ölçülebilir, kârlı ve sürdürülebilir büyüme için kurulan e-ticaret performans ajansıdır. Vizyon ve değerlerimiz.",
  path: "/hakkimizda",
});

const values = [
  ["Sahiplenme", "Markanın bütçesine ve sonucuna kendi işimiz gibi yaklaşırız."],
  ["Şeffaflık", "İyi sonucu da kötü sonucu da veriyle açıkça gösteririz."],
  ["Verim", "Gösteriş metriklerinden önce kâr ve sürdürülebilir büyümeyi izleriz."],
  ["Test kültürü", "Varsayımı küçük testlerle doğrular, kazananı disiplinle ölçekleriz."],
  ["Hız", "Pazar, kreatif ve stok değişimlerine gecikmeden aksiyon alırız."],
];

const voice = [
  ["Kendinden emin", "İddialı ama kanıtsız büyük sözlerden uzak."],
  ["Sonuç odaklı", "Beğeni ve erişimden önce satış, kâr ve verim."],
  ["Anlaşılır", "Karmaşık pazarlama terimlerini sade iş diline çeviririz."],
  ["Ortaklık hissi", "Müşteriye hizmet alan değil, birlikte büyüyen iş ortağı gibi yaklaşırız."],
];

const positioning = [
  ["Kategori", "E-ticaret büyüme ve performans ajansı"],
  ["Hedef müşteri", "Türkiye'de Trendyol üzerinden satış yapan veya satışa başlayacak markalar"],
  ["Ana uzmanlık", "Trendyol + Meta + influencer marketing entegrasyonu"],
  ["Ana sonuç", "Daha verimli reklam yatırımı ve kârlı satış hacmi büyümesi"],
  ["İş modeli", "Sabit hizmet bedeli + ölçülebilir performans ortaklığı"],
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            url: absoluteUrl("/hakkimizda"),
            name: "RAENA Hakkında",
            about: { "@id": `${site.url}/#organization` },
          },
          breadcrumbJsonLd([{ name: "Hakkımızda", path: "/hakkimizda" }]),
        ]}
      />
      <PageHero
        eyebrow="Hakkımızda"
        title="Hacmi büyüt. Verimi artır. Markayı güçlendir."
        lead="RAENA, Trendyol, Meta ve influencer marketing çalışmalarını birbirinden kopuk hizmetler olmaktan çıkarır; tek bir büyüme sistemine dönüştürür."
      >
        <div className="mt-8">
          <Breadcrumbs items={[{ name: "Hakkımızda" }]} />
        </div>
      </PageHero>

      <section className="py-20 sm:py-28">
        <div className="container-x grid gap-5 md:grid-cols-2">
          <div className="rounded-[2rem] bg-navy p-10 text-white">
            <p className="text-xs font-semibold tracking-[0.18em] text-mint uppercase">Vizyon</p>
            <p className="mt-5 text-xl leading-9 font-medium">
              Türkiye&apos;de e-ticaret markalarının Trendyol, Meta ve influencer marketing
              kanallarında ölçülebilir, kârlı ve sürdürülebilir hacim büyümesi denildiğinde ilk akla
              gelen performans ortağı olmak.
            </p>
          </div>
          <div className="rounded-[2rem] bg-violet p-10 text-white">
            <p className="text-xs font-semibold tracking-[0.18em] text-mint uppercase">Misyon</p>
            <p className="mt-5 text-xl leading-9 font-medium">
              Markaların Trendyol mağaza yönetimi, Meta reklamları ve influencer marketing
              süreçlerini veri odaklı tek bir sistemde birleştirerek reklam yatırımlarını daha
              verimli hâle getirmek; satış hacmini ve marka değerini birlikte büyütmek.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cloud py-20 sm:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <SectionHeading eyebrow="Konumlandırma" title="Pazardaki yerimiz." />
            <blockquote className="mt-8 border-l-4 border-mint pl-6 text-lg leading-8 font-medium text-ink">
              RAENA, Trendyol&apos;da satış yapan markaların mağaza yönetimini, Meta reklamlarını ve
              influencer içeriklerini tek bir performans sisteminde birleştirerek reklam
              verimliliğini ve satış hacmini büyüten iş ortağıdır.
            </blockquote>
            <p className="mt-8 rounded-2xl bg-white p-6 text-[15px] leading-7 text-muted">
              <strong className="text-ink">Sözümüz:</strong> Reklam bütçenizi yönetmek için değil,
              markanızın satış sistemine ve büyümesine ortak olmak için çalışıyoruz.
            </p>
          </div>
          <dl className="divide-y divide-line rounded-3xl border border-line bg-white">
            {positioning.map(([k, v]) => (
              <div key={k} className="grid gap-1 p-6 sm:grid-cols-[160px_1fr] sm:gap-6">
                <dt className="text-xs font-semibold tracking-[0.14em] text-violet uppercase">
                  {k}
                </dt>
                <dd className="font-medium text-ink">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Temel değerler"
            title="RAENA nasıl çalışır?"
            lead="Ekip kararlarımızı ve müşteri deneyimini yöneten beş davranış ilkesi."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {values.map(([t, d], i) => (
              <div key={t} className="card card-hover">
                <p className="text-sm font-bold text-violet">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 text-lg font-bold text-ink">{t}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading
            dark
            eyebrow="İletişim dilimiz"
            title="Net konuşur, veriyle kanıtlarız."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {voice.map(([t, d]) => (
              <div key={t} className="rounded-3xl border border-white/10 p-7">
                <h3 className="text-lg font-bold text-mint">{t}</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
