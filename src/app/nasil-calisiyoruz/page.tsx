import { JsonLd } from "@/components/JsonLd";
import { RevenueLoop } from "@/components/RevenueLoop";
import { Breadcrumbs, CtaBand, PageHero, SectionHeading } from "@/components/ui";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Nasıl Çalışıyoruz: RAENA Revenue Loop Modeli | RAENA",
  description:
    "Analizden ölçeklemeye RAENA Revenue Loop: müşteri kabul modeli, ölçüm ve kârlılık merkezi, raporlama ritmi ve kanıt sistemiyle şeffaf büyüme süreci.",
  path: "/nasil-calisiyoruz",
});

const loopDetail = [
  ["Analiz", "Mağaza, ürün, rakip, marj, stok, yorum ve mevcut reklam verileri incelenir."],
  ["Dönüşüm", "Ürün sayfası, fiyat, kampanya ve Trendyol reklamları satışa hazır hâle getirilir."],
  ["İçerik", "Influencer ve UGC içerikleri ürünün gerçek kullanım senaryolarını anlatır."],
  ["Talep", "Kazanan içerikler Meta reklamlarında test edilir ve ölçeklenir."],
  ["Ölçüm", "Satış, iade, edinme maliyeti, ROAS ve katkı kârı birlikte analiz edilir."],
  ["Yenileme", "Kazanan ürün, içerik ve hedef kitlelere daha fazla bütçe aktarılır."],
];

const criteria = [
  ["Brüt marj", "Ürün ve kategori bazlı gerçek marj", "Reklam ve başarı payını taşıyabilmeli"],
  ["Stok", "En az 30-45 günlük satış kapasitesi", "Stok kırılması büyümeyi durdurur"],
  ["Operasyon", "Kargo, fatura, müşteri desteği", "İptal ve düşük puan riskini azaltır"],
  ["Ürün", "Talep, rekabet, fark ve içerik potansiyeli", "Reklamın ölçeklenebilirliğini belirler"],
  ["Bütçe", "Meta, Trendyol ve influencer için ayrı bütçe", "Yeterli test verisi oluşturur"],
  ["Veri erişimi", "Panel, maliyet ve satış verileri", "Şeffaf başarı payı hesabı sağlar"],
];

const metrics = [
  ["Net tamamlanan ciro", "İptal ve iade sonrası gerçek satış hacmi"],
  ["Katkı kârı", "Markanın gerçekten para kazanıp kazanmadığı"],
  ["MER", "Tüm pazarlama harcamasının toplam satışa etkisi"],
  ["ROAS", "Kanal veya kampanya bazında reklam verimliliği"],
  ["CAC", "Yeni müşteri edinmenin toplam maliyeti"],
  ["İade / iptal", "Şişirilmiş ciro ve operasyon problemleri"],
  ["Stokta kalma günü", "Reklamın stok kırılmasına yol açmaması"],
  ["Kreatif hit rate", "Performans eşiğini geçen içerik oranı"],
];

const proof = [
  ["Baz dönem", "Son 30/90 günlük ciro, ziyaret, favori, dönüşüm, reklam ve iade."],
  ["Kampanya kaydı", "Tarih, bütçe, ürün, kreatif, hedef kitle ve kullanılan creator."],
  ["Sonuç", "Net satış, ROAS, CPC, CTR, ziyaret, favori ve katkı kârı."],
  ["Karşılaştırma", "Önce-sonra tablosu, kullanılan bütçe ve dış etkenlerin açıklaması."],
  ["Vaka çalışması", "Sorun → Strateji → Uygulama → Sonuç → Sonraki aksiyon."],
];

export default function HowWeWorkPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([{ name: "Nasıl Çalışıyoruz", path: "/nasil-calisiyoruz" }])}
      />
      <PageHero
        eyebrow="Nasıl çalışıyoruz"
        title="Mağazayı hazırla. Talep üret. Test et. Ölç. Ölçekle."
        lead="RAENA Revenue Loop, her kanalın bir sonrakini beslediği kapalı bir büyüme döngüsüdür. Her kampanya, bir sonraki kararı daha isabetli kılan veri üretir."
      >
        <div className="mt-8">
          <Breadcrumbs items={[{ name: "Nasıl Çalışıyoruz" }]} />
        </div>
      </PageHero>

      <section className="py-20 sm:py-28">
        <div className="container-x">
          <RevenueLoop />
          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {loopDetail.map(([t, d], i) => (
              <div key={t} className="rounded-3xl bg-cloud p-7">
                <p className="text-sm font-bold text-violet">
                  {i + 1}. {t}
                </p>
                <p className="mt-3 text-[15px] leading-7 text-ink">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading
            dark
            eyebrow="Müşteri kabul modeli"
            title="Her markayı kabul etmiyoruz."
            lead="Güvenimiz, doğru müşteriyi seçebilme disiplininden gelir. Stok, marj veya operasyon yetersizse reklam büyütülmez; önce ticari temel düzeltilir."
          />
          <div className="mt-12 overflow-x-auto rounded-3xl border border-white/10">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-white/5 text-white">
                <tr>
                  <th className="px-6 py-4 font-semibold">Kriter</th>
                  <th className="px-6 py-4 font-semibold">Kontrol</th>
                  <th className="px-6 py-4 font-semibold">Karar etkisi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {criteria.map(([a, b, c]) => (
                  <tr key={a}>
                    <td className="px-6 py-4 font-semibold text-mint">{a}</td>
                    <td className="px-6 py-4 text-white/85">{b}</td>
                    <td className="px-6 py-4 text-white/60">{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              ["75+", "Doğrudan kabul", "bg-mint text-navy"],
              ["55-74", "90 günlük pilot", "bg-violet text-white"],
              ["<55", "Önce hazırlık danışmanlığı", "bg-white/10 text-white"],
            ].map(([score, label, cls]) => (
              <div key={score} className={`rounded-3xl p-7 ${cls}`}>
                <p className="text-4xl font-extrabold">{score}</p>
                <p className="mt-2 font-semibold">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <SectionHeading
              eyebrow="Ölçüm ve kârlılık merkezi"
              title="Markanıza sunduğumuz tek gerçeklik tablosu."
              lead="Ana başarı metriği: reklam, influencer ve ajans maliyetleri çıktıktan sonra markaya kalan katkı kârı."
            />
            <div className="mt-8 rounded-3xl bg-navy p-7 text-white">
              <p className="text-xs font-semibold tracking-[0.16em] text-mint uppercase">
                Raporlama ritmi
              </p>
              <ul className="mt-4 space-y-2 text-white/85">
                <li>• Günlük anomali kontrolü</li>
                <li>• Haftalık aksiyon toplantısı</li>
                <li>• Aylık yönetim raporu</li>
              </ul>
              <p className="mt-4 text-sm text-white/60">
                Rapor yalnızca ne olduğunu değil, bir sonraki ay ne yapılacağını da gösterir.
              </p>
            </div>
          </div>
          <dl className="grid gap-4 sm:grid-cols-2">
            {metrics.map(([m, d]) => (
              <div key={m} className="rounded-2xl border border-line p-5">
                <dt className="font-bold text-ink">{m}</dt>
                <dd className="mt-1 text-sm leading-6 text-muted">{d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-cloud py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Kanıt sistemi"
            title="Her iddia belgeye dönüşür."
            lead="Sunduğumuz her sonuç ekran görüntüsü, bütçe ve net sonuçla desteklenir."
          />
          <ol className="mt-12 grid gap-4 md:grid-cols-5">
            {proof.map(([t, d], i) => (
              <li key={t} className="rounded-3xl bg-white p-6">
                <span className="text-3xl font-extrabold text-violet/30">{i + 1}</span>
                <p className="mt-3 font-bold text-ink">{t}</p>
                <p className="mt-2 text-sm leading-6 text-muted">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
