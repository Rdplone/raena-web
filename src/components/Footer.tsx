import Link from "next/link";
import { services } from "@/content/services";
import { site } from "@/lib/site";
import { Logo } from "./Logo";
import { Instagram, Mail } from "./Icons";

const columns = [
  {
    title: "Hizmetler",
    links: [
      ...services.map((s) => ({ href: `/hizmetler/${s.slug}`, label: s.name })),
      { href: "/vip", label: "VIP Category Leadership" },
    ],
  },
  {
    title: "Kurumsal",
    links: [
      { href: "/hakkimizda", label: "Hakkımızda" },
      { href: "/nasil-calisiyoruz", label: "Nasıl Çalışıyoruz" },
      { href: "/fiyatlandirma", label: "Fiyatlandırma" },
      { href: "/iletisim", label: "İletişim" },
    ],
  },
  {
    title: "Kaynaklar",
    links: [
      { href: "/blog", label: "Blog" },
      { href: "/sss", label: "Sık Sorulan Sorular" },
      { href: "/kvkk", label: "KVKK Aydınlatma Metni" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-x grid gap-12 py-16 lg:grid-cols-[1.4fr_2fr]">
        <div>
          <Logo variant="dark" />
          <p className="mt-6 max-w-sm text-sm leading-7 text-white/60">
            Trendyol, Meta ve influencer marketing çalışmalarını tek bir ölçülebilir büyüme
            sisteminde birleştiren e-ticaret büyüme ve performans ajansı.
          </p>
          <p className="mt-6 text-sm font-semibold text-mint">{site.slogan}</p>
          <div className="mt-6 flex gap-3">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="RAENA Instagram"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/80 transition hover:border-mint hover:text-mint"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${site.email}`}
              aria-label="RAENA e-posta"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/80 transition hover:border-mint hover:text-mint"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold tracking-[0.16em] text-white/40 uppercase">
                {col.title}
              </p>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-white/75 transition-colors hover:text-mint"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-3 py-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. Tüm hakları saklıdır.
          </p>
          <p>Hacmi büyüt. Verimi artır. Markayı güçlendir.</p>
        </div>
      </div>
    </footer>
  );
}
