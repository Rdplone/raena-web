import { posts } from "@/content/blog";
import { entryPackages, growth360, vipPackage } from "@/content/pricing";
import { services } from "@/content/services";
import { absoluteUrl, site } from "@/lib/site";

export const dynamic = "force-static";

/** llms.txt — yapay zekâ asistanları için sitenin özet haritası (llmstxt.org) */
export function GET() {
  const body = `# ${site.name} — ${site.tagline}

> ${site.description} Slogan: "${site.slogan}"

RAENA; Türkiye'de Trendyol üzerinden satış yapan veya satışa başlayacak markalar için Trendyol mağaza yönetimi, Meta (Facebook/Instagram) reklamları ve influencer marketing'i tek veri döngüsünde (RAENA Revenue Loop) yönetir. Ana başarı metriği; reklam, influencer ve ajans maliyetleri sonrası markaya kalan katkı kârıdır. İş modeli: sabit hizmet bedeli + baz dönemin üzerindeki net ciro artışından başarı payı. RAENA bot, sahte ziyaret, yapay favori veya manipülatif sıralama hizmeti sunmaz; kesin ciro veya sıralama garantisi vermez.

## Hizmetler
${services.map((s) => `- [${s.name} (${s.engine})](${absoluteUrl(`/hizmetler/${s.slug}`)}): ${s.short}`).join("\n")}
- [VIP ${vipPackage.name}](${absoluteUrl("/vip")}): Trendyol kategori liderliği için premium büyüme ortaklığı.

## Fiyatlar (aylık, KDV hariç)
${entryPackages.map((p) => `- ${p.name}: ${p.price}`).join("\n")}
- ${growth360.name}: ${growth360.price} (ilk 5 markaya ${growth360.launchPrice}) + net büyümenin %${growth360.successFee}'ü başarı payı
- VIP ${vipPackage.name}: ${vipPackage.price} + net büyümenin %${vipPackage.successFee}'si; minimum ${vipPackage.minMonths} ay, en fazla ${vipPackage.maxBrands} aktif marka
- Reklam bütçesi, influencer ödemesi, ürün gönderimi ve prodüksiyon ayrıca bütçelendirilir.
- Detay: ${absoluteUrl("/fiyatlandirma")}

## Kurumsal
- [Nasıl çalışıyoruz — Revenue Loop, müşteri kabul modeli, ölçüm merkezi](${absoluteUrl("/nasil-calisiyoruz")})
- [Hakkımızda — vizyon, misyon, değerler](${absoluteUrl("/hakkimizda")})
- [Sık sorulan sorular](${absoluteUrl("/sss")})
- [İletişim — ücretsiz marka analizi](${absoluteUrl("/iletisim")})

## Blog
${posts.map((p) => `- [${p.title}](${absoluteUrl(`/blog/${p.slug}`)}): ${p.tldr}`).join("\n")}

## Optional
- [Tüm içeriğin tam metni](${absoluteUrl("/llms-full.txt")})
- İletişim: ${site.email} · Instagram: ${site.instagram}
`;
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
