import Link from "next/link";
import { ArrowRight, Bolt, Chart, Crown, Eye, Flask, Target, Users } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs, CheckList, CtaBand, PageHero, SectionHeading } from "@/components/ui";
import { vipPackage } from "@/content/pricing";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { absoluteUrl, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "VIP Category Leadership Program: Trendyol Kategori Liderliği | RAENA",
  description:
    "Trendyol'da kategori görünürlüğü, yüksek niyetli trafik ve favori-sepet hunisini birlikte yöneten premium büyüme ortaklığı. En fazla 5 aktif VIP marka.",
  path: "/vip",
});

const modules = [
  {
    icon: Crown,
    title: "Hero SKU Programı",
    text: "En yüksek potansiyelli 10 ana ürün için ayrı büyüme planı, teklif ve reklam mimarisi.",
  },
  {
    icon: Target,
    title: "75 Ürün Optimizasyonu",
    text: "Başlık, açıklama, kategori, görsel sırası, fiyat, kupon ve içerik skorunun geliştirilmesi.",
  },
  {
    icon: Eye,
    title: "Arama Görünürlüğü",
    text: "Hedef kelime kümeleri, sıra takibi ve ürün-kategori uygunluğuna göre görünürlük çalışması.",
  },
  {
    icon: Bolt,
    title: "Yüksek Niyetli Trafik",
    text: "Satın alma ihtimali güçlü kullanıcıların ürün sayfasına yönlendirilmesine odaklanan kampanyalar.",
  },
  {
    icon: Chart,
    title: "Favori ve Sepet Hunisi",
    text: "Ürün ziyareti → favori niyeti → sepete ekleme → satın alma geçişlerinin ayrı ayrı ölçülmesi.",
  },
  {
    icon: Flask,
    title: "Reklam Hakimiyeti",
    text: "Ürün reklamı, kampanya bütçesi, teklif seviyesi ve gün bazlı verimlilik optimizasyonu.",
  },
];

const commandCenter = [
  ["Görünürlük", "Hedef aramalarda daha güçlü konum", "Gösterim, arama sırası, reklam görünürlüğü"],
  ["Ziyaret", "Nitelikli ürün trafiği", "Ürün ziyareti, tıklama oranı, ziyaret maliyeti"],
  ["Favori", "İlgi ve yeniden dönüş sinyali", "Favorileme oranı, favoriden satışa geçiş"],
  ["Sepet", "Satın alma niyetini güçlendirme", "Sepete ekleme oranı, sepetten satışa geçiş"],
  ["Satış", "Kârlı ölçekleme", "Dönüşüm, ROAS, net satış, iade, katkı kârı"],
];

const premium = [
  {
    title: "Meta Scale Lab",
    items: [
      "Haftalık kreatif test sprinti",
      "UGC ve Partnership Ads",
      "Prospecting ve retargeting",
      "CPAS uygunluk ve kurulum koordinasyonu",
      "Günlük bütçe kontrolü",
      "CPC, CPA, ROAS ve katkı kârı takibi",
    ],
  },
  {
    title: "Creator Black Network",
    items: [
      "Kategori bazlı seçkin creator listesi",
      "Aylık 50 creator iletişimi",
      "10 iş birliği koordinasyonu",
      "İçerik ve kullanım hakkı süreci",
      "Kod, link ve satış takibi",
      "Kazanan içeriğin reklamda ölçeklenmesi",
    ],
  },
  {
    title: "Revenue Intelligence",
    items: [
      "Trendyol + Meta ortak pano",
      "Ürün bazlı yatırım kararı",
      "Stok ve kampanya senaryosu",
      "Haftalık yönetici özeti",
      "Aylık büyüme konseyi",
      "Kârsız ürün ve kampanyaya hızlı müdahale",
    ],
  },
];

export default function VipPage() {
  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: `RAENA VIP ${vipPackage.name}`,
            description:
              "Trendyol kategori görünürlüğü, yüksek niyetli trafik, favori-sepet davranışı ve satış ivmesini birlikte yöneten premium büyüme ortaklığı.",
            url: absoluteUrl("/vip"),
            provider: { "@id": `${site.url}/#organization` },
            areaServed: { "@type": "Country", name: "Türkiye" },
            offers: {
              "@type": "Offer",
              price: vipPackage.priceValue,
              priceCurrency: "TRY",
              description: `${vipPackage.price} ${vipPackage.period}, minimum ${vipPackage.minMonths} ay`,
            },
          },
          breadcrumbJsonLd([{ name: "VIP Program", path: "/vip" }]),
        ]}
      />
      <PageHero
        eyebrow="VIP · Sınırlı marka kabulü"
        title={vipPackage.name}
        lead="Trendyol'da kategori görünürlüğünü, yüksek niyetli trafiği, favori-sepet davranışını ve satış ivmesini birlikte yöneten premium büyüme ortaklığı."
      >
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link href="/iletisim?paket=vip" className="btn btn-mint">
            VIP başvurusu yap <ArrowRight className="h-4 w-4" />
          </Link>
          <span className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/75">
            {vipPackage.price} {vipPackage.period} · Min. {vipPackage.minMonths} ay · En fazla{" "}
            {vipPackage.maxBrands} aktif marka
          </span>
        </div>
        <div className="mt-10">
          <Breadcrumbs items={[{ name: "VIP Program" }]} />
        </div>
      </PageHero>

      <section className="py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Trendyol Kategori Liderliği Sistemi"
            title="Birinci sıra vaadi değil; liderlik ihtimalini büyüten yoğun operasyon."
            lead="Hedef kelimelerde ve kategori içinde liderlik ihtimalini büyüten altı modül."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map(({ icon: Icon, title, text }) => (
              <div key={title} className="card card-hover">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-violet text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink">{title}</h3>
                <p className="mt-2 text-[15px] leading-7 text-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cloud py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Trendyol Command Center"
            title="Ziyaretten kategori liderliğine."
            lead="Her metrik bir sonraki aksiyona bağlanır; boş trafik değil, satışa yaklaşan kullanıcı davranışı yönetilir."
          />
          <div className="mt-12 overflow-x-auto rounded-3xl border border-line bg-white">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="px-6 py-4 font-semibold">Aşama</th>
                  <th className="px-6 py-4 font-semibold">VIP hedefi</th>
                  <th className="px-6 py-4 font-semibold">Yönetilen göstergeler</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {commandCenter.map(([stage, goal, kpi], i) => (
                  <tr key={stage}>
                    <td className="px-6 py-4 font-bold text-ink">
                      <span
                        className={`mr-3 inline-block h-2.5 w-2.5 rounded-full ${i === 4 ? "bg-mint" : "bg-violet"}`}
                      />
                      {stage}
                    </td>
                    <td className="px-6 py-4 text-ink">{goal}</td>
                    <td className="px-6 py-4 text-muted">{kpi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-[15px] leading-7 text-muted">
            Ürününüzü yapay etkileşimle değil; görünürlük, gerçek ilgi, sepet niyeti ve dönüşüm
            verisiyle kategori liderliğine taşımayı hedefliyoruz.
          </p>
        </div>
      </section>

      <section className="bg-navy py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading
            dark
            eyebrow="Premium talep üretimi"
            title="Meta ve creator gücü Trendyol'a bağlanır."
            lead="Dış trafik, kreatif üretimi ve influencer yatırımı aynı performans masasında yönetilir."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {premium.map((p, i) => (
              <div key={p.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
                <Users className={`h-7 w-7 ${i === 1 ? "text-mint" : "text-violet"}`} />
                <h3 className="mt-5 text-xl font-bold text-white">{p.title}</h3>
                <div className="mt-6">
                  <CheckList items={p.items} dark />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="VIP üyelik"
              title="Yüksek temaslı büyüme ortaklığı."
              lead="Premium fiyat; daha fazla iş kaleminden değil, daha yoğun yönetim, hız, veri ve öncelikten doğar."
            />
            <div className="mt-8">
              <CheckList items={vipPackage.features} />
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[2rem] bg-violet p-10 text-white">
            <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-violet-700" />
            <div className="relative">
              <p className="text-sm text-white/75">VIP aylık yönetim</p>
              <p className="mt-2 text-6xl font-extrabold tracking-tight">{vipPackage.price}</p>
              <p className="text-white/75">{vipPackage.period}</p>
              <ul className="mt-8 space-y-3 border-t border-white/20 pt-6 text-sm">
                <li>Net büyümenin %{vipPackage.successFee}&apos;si başarı payı</li>
                <li>Minimum {vipPackage.minMonths} ay</li>
                <li>En fazla {vipPackage.maxBrands} aktif marka</li>
                <li>Reklam ve influencer bütçesi hariç</li>
              </ul>
              <Link href="/iletisim?paket=vip" className="btn btn-mint mt-8 w-full">
                Kontenjan için başvur
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="VIP kontenjanı sınırlıdır."
        text="Kategori liderliği hedefiniz için markanızın uygunluğunu ücretsiz ön analizle değerlendirelim."
      />
    </>
  );
}
