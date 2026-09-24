import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Chart,
  Loop,
  Shield,
  Store,
  Target,
  Users,
  X,
} from "@/components/Icons";
import { RevenueLoop } from "@/components/RevenueLoop";
import { CheckList, CtaBand, SectionHeading } from "@/components/ui";
import { formatDate, posts } from "@/content/blog";
import { growth360 } from "@/content/pricing";
import { services } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "RAENA | Trendyol, Meta ve Influencer Büyüme Ajansı",
  description:
    "Trendyol mağaza yönetimi, Meta reklamları ve influencer marketing'i tek büyüme sisteminde birleştiren e-ticaret performans ajansı. Ücretsiz marka analizi alın.",
  path: "/",
});

const funnel = [
  { label: "Görünürlük", w: "100%" },
  { label: "Ziyaret", w: "82%" },
  { label: "Favori", w: "64%" },
  { label: "Sepet", w: "47%" },
  { label: "Satış", w: "34%" },
];

const serviceIcons = [Store, Target, Users];

const pillars = [
  {
    icon: Loop,
    title: "Tek veri döngüsü",
    text: "Trendyol, Meta ve influencer çalışmaları ayrı ekiplerde değil, aynı performans masasında yönetilir.",
  },
  {
    icon: Chart,
    title: "Katkı kârı odağı",
    text: "Beğeni ve erişimden önce; reklam, influencer ve ajans maliyeti sonrası markaya kalan kârı izleriz.",
  },
  {
    icon: ArrowUpRight,
    title: "Büyümeye ortaklık",
    text: "Erişilebilir sabit ücret + yalnızca baz dönemin üzerindeki net büyümeden başarı payı.",
  },
  {
    icon: Shield,
    title: "Etik büyüme",
    text: "Bot, sahte ziyaret, yapay favori veya manipülatif sıralama yok. Başarı gerçek satışla raporlanır.",
  },
];

const notSold = [
  "Sadece paylaşım sayısı veya takipçi büyümesi",
  "Kârsız indirimlerle şişirilmiş brüt ciro",
  "Ölçülemeyen influencer görünürlüğü",
  "Ürün ve operasyon sorunlarını görmezden gelen reklam yönetimi",
  "Gerçekçi veri olmadan kesin ciro garantisi",
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy pt-32 pb-24 text-white sm:pt-40 lg:pb-32">
        <div className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_30%_20%,black_20%,transparent_70%)]" />
        <div className="pointer-events-none absolute -top-80 -right-64 h-[420px] w-[420px] rounded-full bg-violet sm:-top-48 sm:-right-40 sm:h-[560px] sm:w-[560px]" />
        <div className="pointer-events-none absolute -right-24 -bottom-72 h-[420px] w-[420px] rounded-full bg-violet-700" />

        <div className="container-x relative grid items-center gap-16 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-white/80">
              <span className="h-2 w-2 rounded-full bg-mint" />
              E-Ticaret Büyüme ve Performans Ajansı
            </p>
            <h1 className="mt-6 text-[42px] leading-[1.05] font-extrabold tracking-tight text-balance sm:text-6xl lg:text-[68px]">
              Görünürlüğü satışa, satışı <span className="text-mint">büyümeye</span> dönüştürür.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/70">
              Trendyol mağaza yönetimi, Meta reklamları ve influencer marketing&apos;i tek bir
              ölçülebilir büyüme sisteminde birleştiriyoruz. Reklam vermiyoruz; markaları daha
              verimli şekilde ölçeklendiriyoruz.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="/iletisim" className="btn btn-primary !px-7 !py-4 text-base">
                Ücretsiz Marka Analizi <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/nasil-calisiyoruz" className="btn btn-ghost !px-7 !py-4 text-base">
                Nasıl çalışıyoruz?
              </Link>
            </div>
            <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/60">
              {["Trendyol", "Meta Ads", "Influencer & UGC"].map((c) => (
                <li key={c} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-mint" /> {c}
                </li>
              ))}
            </ul>
          </div>

          {/* Huni kartı: ölçülen yolculuğu anlatan illüstrasyon */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="animate-float rounded-[2rem] border border-white/10 bg-navy-800/80 p-7 shadow-2xl shadow-black/40 backdrop-blur">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-white">Trendyol Command Center</p>
                <span className="rounded-full bg-mint/15 px-3 py-1 text-xs font-semibold text-mint">
                  Haftalık
                </span>
              </div>
              <p className="mt-1 text-xs text-white/50">Ziyaretten kategori liderliğine</p>
              <div className="mt-7 space-y-4">
                {funnel.map((f, i) => (
                  <div key={f.label}>
                    <div className="mb-1.5 flex justify-between text-xs text-white/60">
                      <span>{f.label}</span>
                    </div>
                    <div className="h-3 rounded-full bg-white/5">
                      <div
                        className={`h-3 rounded-full ${i === funnel.length - 1 ? "bg-mint" : "bg-violet"}`}
                        style={{ width: f.w, opacity: 1 - i * 0.08 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 grid grid-cols-3 gap-3 border-t border-white/10 pt-6 text-center">
                {["ROAS", "TACOS", "Katkı kârı"].map((m) => (
                  <div key={m} className="rounded-2xl bg-white/5 px-2 py-3">
                    <p className="text-[11px] font-semibold tracking-wide text-white/50 uppercase">
                      {m}
                    </p>
                    <p className="mt-1 text-xs font-semibold text-mint">izleniyor</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-6 -left-4 hidden rounded-2xl bg-mint px-5 py-4 text-navy shadow-xl sm:block">
              <p className="text-xs font-semibold tracking-wide uppercase opacity-70">
                Kuzey yıldızı
              </p>
              <p className="text-sm font-bold">Pazarlama sonrası katkı kârı</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM / ÇÖZÜM / SONUÇ */}
      <section className="bg-cloud py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="RAENA neden var?"
            title="Trafik oluşuyor. Peki satış, stok ve kâr aynı yerde ölçülüyor mu?"
          />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              {
                k: "Problem",
                t: "Markalar Trendyol, Meta ve influencer çalışmalarını çoğunlukla birbirinden kopuk yürütüyor. Trafik oluşuyor fakat dönüşüm, stok, kâr ve gerçek satış etkisi aynı merkezde ölçülmüyor.",
              },
              {
                k: "Çözüm",
                t: "RAENA üç kanalı tek büyüme döngüsünde birleştirir. Mağazayı satışa hazırlar, talep üretir, kazanan içerikleri reklama dönüştürür ve bütçeyi gerçek performansa göre yönlendirir.",
              },
              {
                k: "Sonuç",
                t: "Daha fazla gösterim değil; daha verimli reklam, daha yüksek satış hacmi, daha güçlü marka algısı ve sürdürülebilir katkı kârı.",
              },
            ].map((c, i) => (
              <div
                key={c.k}
                className={`rounded-3xl p-8 ${i === 2 ? "bg-navy text-white" : "border border-line bg-white"}`}
              >
                <p
                  className={`text-sm font-bold tracking-wide uppercase ${i === 2 ? "text-mint" : "text-violet"}`}
                >
                  {String(i + 1).padStart(2, "0")} / {c.k}
                </p>
                <p className={`mt-5 leading-7 ${i === 2 ? "text-white/80" : "text-muted"}`}>
                  {c.t}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HİZMETLER */}
      <section className="py-20 sm:py-28">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Hizmet mimarisi"
              title="Üç uzmanlık, tek büyüme sistemi."
              lead="Farkımız hizmet sayısından değil, kanalların birlikte çalışmasından doğar."
            />
            <Link href="/hizmetler" className="btn btn-outline shrink-0">
              Tüm hizmetler <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {services.map((s, i) => {
              const Icon = serviceIcons[i];
              return (
                <Link
                  key={s.slug}
                  href={`/hizmetler/${s.slug}`}
                  className="card card-hover group flex flex-col"
                >
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-violet-50 text-violet transition-colors group-hover:bg-violet group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </span>
                  <p
                    lang="en"
                    className="mt-7 text-xs font-semibold tracking-[0.14em] text-muted uppercase"
                  >
                    {s.engine}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-ink">{s.name}</h3>
                  <p className="mt-4 flex-1 text-[15px] leading-7 text-muted">{s.short}</p>
                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-violet">
                    Detayları incele
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* REVENUE LOOP */}
      <section className="relative overflow-hidden bg-navy py-20 sm:py-28">
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-violet/30 blur-3xl" />
        <div className="container-x relative">
          <SectionHeading
            dark
            eyebrow="RAENA Revenue Loop"
            title="Her kanal bir sonrakini besler."
            lead="Her kampanya yeni veri üretir. Bu veri ürün seçimini, creator havuzunu, kreatif açısını ve bütçe dağılımını geliştirir."
          />
          <div className="mt-14">
            <RevenueLoop dark />
          </div>
          <Link
            href="/nasil-calisiyoruz"
            className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-mint hover:underline"
          >
            Çalışma modelimizi detaylı inceleyin <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* NEDEN RAENA */}
      <section className="py-20 sm:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Neden RAENA?"
              title="Daha fazla bütçe değil, daha doğru strateji ve daha güçlü kreatif."
              lead="Sadece hizmet vermiyoruz; ölçülebilir büyümeye ortak oluyoruz."
            />
            <Link href="/hakkimizda" className="btn btn-outline mt-8">
              Bizi tanıyın <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {pillars.map(({ icon: Icon, title, text }) => (
              <div key={title} className="card">
                <Icon className="h-7 w-7 text-violet" />
                <h3 className="mt-5 text-lg font-bold text-ink">{title}</h3>
                <p className="mt-2 text-[15px] leading-7 text-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FİYAT TEASER */}
      <section className="bg-cloud py-20 sm:py-28">
        <div className="container-x">
          <div className="grid overflow-hidden rounded-[2rem] bg-white shadow-[0_40px_80px_-50px_rgba(17,21,43,0.45)] lg:grid-cols-[1.1fr_1fr]">
            <div className="p-8 sm:p-12">
              <p className="eyebrow">Ana paket</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                {growth360.name}
              </h2>
              <p className="mt-4 text-muted">{growth360.description}</p>
              <div className="mt-8">
                <CheckList items={growth360.features} />
              </div>
            </div>
            <div className="relative flex flex-col justify-center overflow-hidden bg-navy p-8 text-white sm:p-12">
              <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-violet" />
              <div className="relative">
                <p className="text-sm text-white/60">Standart fiyat</p>
                <p className="mt-2 text-5xl font-extrabold tracking-tight">
                  {growth360.price}
                  <span className="ml-2 text-base font-medium text-white/60">
                    {growth360.period}
                  </span>
                </p>
                <p className="mt-5 inline-flex rounded-full bg-mint px-4 py-1.5 text-sm font-bold text-navy">
                  {growth360.launchNote}: {growth360.launchPrice}
                </p>
                <p className="mt-6 text-sm leading-6 text-white/60">
                  + Baz dönemin üzerindeki net ciro artışından %{growth360.successFee} başarı payı.
                  Reklam ve influencer bütçeleri ayrıca bütçelendirilir.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href="/fiyatlandirma" className="btn btn-primary">
                    Tüm paketler <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/vip" className="btn btn-ghost">
                    VIP Program
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SATMADIKLARIMIZ */}
      <section className="py-20 sm:py-28">
        <div className="container-x grid items-start gap-12 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Güçlü konuş, yanlış söz verme"
            title="Ne sattığımız kadar, neyi satmadığımız da önemli."
            lead="İddialı ama kanıtlanabilir bir iletişim standardımız var. Kısa vadeli bir metrik için markanızın hesabını ve itibarını riske atmayız."
          />
          <ul className="space-y-3">
            {notSold.map((n) => (
              <li
                key={n}
                className="flex items-center gap-4 rounded-2xl border border-line bg-white px-5 py-4 text-[15px] text-ink"
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#fdecef] text-[#d6405f]">
                  <X className="h-4 w-4" strokeWidth={2.4} />
                </span>
                {n}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* BLOG */}
      <section className="bg-cloud py-20 sm:py-28">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Büyüme rehberleri"
              title="E-ticarette ölçülebilir büyüme üzerine."
            />
            <Link href="/blog" className="btn btn-outline shrink-0">
              Tüm yazılar <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {posts.slice(0, 3).map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="card card-hover group flex flex-col"
              >
                <p className="text-xs font-semibold text-violet">{p.category}</p>
                <h3 className="mt-3 text-lg leading-snug font-bold text-ink group-hover:text-violet">
                  {p.title}
                </h3>
                <p className="mt-3 line-clamp-3 flex-1 text-sm leading-6 text-muted">{p.excerpt}</p>
                <p className="mt-6 text-xs text-muted">
                  {formatDate(p.publishedAt)} · {p.readingMinutes} dk okuma
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
