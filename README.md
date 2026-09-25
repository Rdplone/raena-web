# RAENA — Kurumsal Web Sitesi

RAENA E-Ticaret Büyüme Ajansı'nın tanıtım sitesi. Next.js (App Router), TypeScript ve Tailwind CSS v4 ile geliştirilmiştir; Vercel üzerinde yayınlanmak üzere yapılandırılmıştır.

## Teknolojiler

| Alan             | Araç                                                                               |
| ---------------- | ---------------------------------------------------------------------------------- |
| Framework        | Next.js 16 (App Router, Turbopack)                                                 |
| Dil              | TypeScript                                                                         |
| Stil             | Tailwind CSS v4 (marka renkleri `src/app/globals.css` içindeki `@theme` bloğunda)  |
| Kod kalitesi     | ESLint (next/core-web-vitals + typescript), Prettier + prettier-plugin-tailwindcss |
| Form             | Next.js Route Handler + Nodemailer (SMTP) + Zod doğrulama                          |
| Font             | Inter (self-hosted, `@fontsource-variable/inter`)                                  |
| Paket yöneticisi | pnpm                                                                               |

## Kurulum

```bash
pnpm install
cp .env.example .env.local   # SMTP bilgilerini doldurun
pnpm dev                     # http://localhost:3000
```

## Komutlar

| Komut                               | Açıklama                                           |
| ----------------------------------- | -------------------------------------------------- |
| `pnpm dev`                          | Geliştirme sunucusu                                |
| `pnpm build` / `pnpm start`         | Production derleme ve çalıştırma                   |
| `pnpm lint` / `pnpm lint:fix`       | ESLint kontrolü / otomatik düzeltme                |
| `pnpm typecheck`                    | Rota tiplerini üretir ve TypeScript kontrolü yapar |
| `pnpm format` / `pnpm format:check` | Prettier ile biçimlendirme                         |
| `pnpm check`                        | Lint + typecheck + format kontrolü (CI için)       |

## Sayfalar

| Yol                               | İçerik                                                                                             |
| --------------------------------- | -------------------------------------------------------------------------------------------------- |
| `/`                               | Ana sayfa                                                                                          |
| `/hizmetler`, `/hizmetler/[slug]` | Hizmet mimarisi ve Trendyol / Meta / Influencer detay sayfaları                                    |
| `/nasil-calisiyoruz`              | Revenue Loop, müşteri kabul modeli, ölçüm merkezi, kanıt sistemi                                   |
| `/fiyatlandirma`                  | Paketler, 360° paket, başarı payı hesaplayıcı, SSS                                                 |
| `/vip`                            | VIP Category Leadership Program                                                                    |
| `/hakkimizda`                     | Vizyon, misyon, konumlandırma, değerler                                                            |
| `/blog`, `/blog/[slug]`           | 10 adet SEO/AI odaklı rehber yazısı                                                                |
| `/sss`                            | Tüm sık sorulan sorular (FAQPage şeması)                                                           |
| `/iletisim`                       | Ücretsiz marka analizi formu (`?paket=vip\|360\|trendyol\|meta\|influencer` ile hizmet ön seçilir) |
| `/kvkk`                           | KVKK aydınlatma metni (şablon)                                                                     |

## İçerik yönetimi

Tüm metinler kod içinde tipli veri olarak tutulur; sayfaları değiştirmeden güncellenebilir:

- `src/lib/site.ts` — site adı, alan adı, e-posta, Instagram, menü
- `src/content/services.ts` — hizmetler, kapsam, metrikler, hizmet SSS'leri
- `src/content/pricing.ts` — paket fiyatları, özellikler, başarı payı, fiyat SSS'leri
- `src/content/blog/posts-*.ts` — blog yazıları (başlık, meta title/description, kısa cevap, gövde blokları, SSS)

Yeni blog yazısı eklemek için `posts-2.ts` dizisine yeni bir `Post` nesnesi eklemeniz yeterlidir; sitemap, blog listesi, `llms.txt` ve yapılandırılmış veri otomatik güncellenir.

## SEO ve yapay zekâ görünürlüğü

- Her sayfada benzersiz `title`, `description`, canonical URL ve Open Graph/Twitter etiketleri (`src/lib/seo.ts > pageMetadata`)
- JSON-LD: `ProfessionalService` + `WebSite` (tüm sayfalar), `Service`, `OfferCatalog`, `FAQPage`, `BlogPosting`, `BreadcrumbList`
- `/sitemap.xml`, `/robots.txt` (GPTBot, ClaudeBot, PerplexityBot, Google-Extended vb. için açık izin)
- `/llms.txt` ve `/llms-full.txt` — yapay zekâ asistanları için site özeti ve tam metin ([llmstxt.org](https://llmstxt.org))
- Blog yazılarında alıntılanabilir "Kısa cevap" bölümü, içindekiler ve soru-cevap blokları
- Dinamik Open Graph görseli (`src/app/opengraph-image.tsx`)

## İletişim formu ve Vercel SMTP ayarları

Form `POST /api/contact` rotasına gönderilir. Rota Node.js runtime'ında çalışır (Nodemailer TCP soketi kullandığı için Edge desteklenmez), veriyi Zod ile doğrular, bal küpü (honeypot) alanı, minimum doldurma süresi ve IP başına basit hız sınırı ile bot koruması uygular.

Vercel'de **Project → Settings → Environment Variables** altına şu değişkenleri ekleyin (Production ve Preview için):

| Değişken                 | Örnek                                    | Açıklama                                                  |
| ------------------------ | ---------------------------------------- | --------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`   | `https://raena.agency`                   | Canonical, sitemap ve OG için canlı adres                 |
| `SMTP_HOST`              | `smtp.gmail.com`                         | SMTP sunucusu                                             |
| `SMTP_PORT`              | `465`                                    | 465 (SSL) veya 587 (STARTTLS)                             |
| `SMTP_SECURE`            | `true`                                   | 465 için `true`, 587 için `false`                         |
| `SMTP_USER`              | `raenaplus@gmail.com`                    | SMTP kullanıcı adı                                        |
| `SMTP_PASS`              | `xxxxxxxxxxxxxxxx`                       | SMTP şifresi / uygulama şifresi                           |
| `CONTACT_FROM_EMAIL`     | `RAENA Web Sitesi <raenaplus@gmail.com>` | Gönderen (çoğu sağlayıcıda SMTP_USER ile aynı olmalı)     |
| `CONTACT_TO_EMAIL`       | `raenaplus@gmail.com`                    | Başvuruların iletileceği adres(ler), virgülle ayrılabilir |
| `CONTACT_SEND_AUTOREPLY` | `true`                                   | Form dolduran kişiye otomatik teşekkür e-postası          |

Notlar:

- Form Gmail (`raenaplus@gmail.com`) üzerinden gönderilir. `SMTP_PASS` normal Gmail şifresi değildir: Google Hesabı → Güvenlik → **2 Adımlı Doğrulama**yı açın, ardından [Uygulama şifreleri](https://myaccount.google.com/apppasswords) sayfasından "RAENA Web" adıyla bir şifre oluşturun ve 16 haneyi boşluksuz girin.
- Gmail gönderim limiti günlük yaklaşık 500 e-postadır; form trafiği için yeterlidir.
- Değişkenleri ekledikten sonra projeyi yeniden deploy edin.
- Teslim edilebilirlik için alan adınızda SPF, DKIM ve DMARC kayıtlarının tanımlı olduğundan emin olun.
- Yoğun spam gelirse bellek içi hız sınırı yerine Vercel KV / Upstash tabanlı bir sınırlayıcı veya Cloudflare Turnstile eklenebilir.

## GitHub

Depo; `.gitattributes` (LF satır sonları), `.editorconfig`, `.nvmrc` (Node 22), VS Code önerilen ayarları, GitHub Actions CI ve Dependabot ile hazırdır.

- **CI** (`.github/workflows/ci.yml`): `main` dalına her push'ta ve her pull request'te lint, typecheck, Prettier kontrolü ve build çalışır.
- **Dependabot** (`.github/dependabot.yml`): Bağımlılık ve Action güncellemeleri için aylık PR açar.
- `.env*` dosyaları `.gitignore` ile dışarıda tutulur; yalnızca `.env.example` depoya girer. SMTP şifreleri asla commit edilmemelidir.

## Vercel'e yayınlama

1. Projeyi bir GitHub deposuna gönderin.
2. Vercel'de **Add New → Project** ile depoyu içe aktarın. Framework otomatik olarak Next.js, paket yöneticisi `pnpm-lock.yaml` sayesinde pnpm olarak algılanır.
3. Yukarıdaki ortam değişkenlerini ekleyip **Deploy** edin.
4. Alan adını bağladıktan sonra `NEXT_PUBLIC_SITE_URL` değerini güncelleyin ve Google Search Console'a `/sitemap.xml` adresini gönderin.

## Yayından önce kontrol listesi

- [ ] `src/lib/site.ts` içindeki e-posta, alan adı ve Instagram bilgilerini doğrulayın
- [ ] KVKK metnine şirket unvanı, adres ve MERSİS bilgilerini ekleyip hukuk danışmanına onaylatın
- [ ] Fiyatların ve "ilk 5 markaya özel" lansman teklifinin güncel olduğunu kontrol edin
- [ ] SMTP değişkenlerini Vercel'e ekleyip formu canlıda test edin
