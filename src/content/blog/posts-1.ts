import type { Post } from "./types";

export const postsPart1: Post[] = [
  {
    slug: "trendyol-satis-artirma-rehberi",
    title: "Trendyol'da Satış Artırma Rehberi: Görünürlükten Dönüşüme 6 Adım",
    metaTitle: "Trendyol'da Satış Artırma: 6 Adımlı Büyüme Rehberi",
    metaDescription:
      "Trendyol'da satışlarınızı artırmak için mağaza analizi, ürün sayfası optimizasyonu, kampanya, reklam, itibar ve stok yönetimini adım adım anlatan rehber.",
    excerpt:
      "Trendyol'da büyümek daha fazla reklam bütçesiyle değil, doğru sırayla atılan adımlarla başlar. Analizden ölçeklemeye altı adımlık sistem.",
    tldr: "Trendyol'da satış artırmak için sıralama önemlidir: önce mağaza ve kategori analizi, ardından ürün sayfası (başlık, açıklama, görsel) optimizasyonu, fiyat-kupon-kampanya planı, ürün reklamları, puan-yorum yönetimi ve stok-iade takibi yapılır. Reklam kötü bir ürün sayfasını kurtarmaz; önce dönüşüm altyapısı, sonra trafik büyütülür.",
    category: "Trendyol",
    keywords: [
      "trendyol satış artırma",
      "trendyol mağaza yönetimi",
      "trendyol ürün optimizasyonu",
      "trendyol reklam",
    ],
    publishedAt: "2026-09-01",
    readingMinutes: 7,
    body: [
      {
        type: "p",
        text: "Trendyol'da satış yapan markaların en sık yaptığı hata, satışlar durağanlaştığında ilk olarak reklam bütçesini artırmaktır. Oysa trafik, zayıf bir ürün sayfasına yönlendirildiğinde bütçe büyür ama satış aynı hızla büyümez. RAENA olarak Trendyol büyümesini **görünürlük → ziyaret → favori → sepet → satış** hunisi üzerinden, doğru sırayla ele alıyoruz.",
      },
      { type: "h2", text: "1. Mağaza ve kategori analizi" },
      {
        type: "p",
        text: "Her büyüme planı mevcut durumun net fotoğrafıyla başlar. Kategori dinamikleri, rakip fiyatları, puan ve yorum dağılımı, aktif kampanyalar ve geçmiş reklam verisi tek tabloda incelenir. Bu analiz, hangi ürünlere öncelik verileceğini belirler.",
      },
      {
        type: "ul",
        items: [
          "Kategori içinde hangi fiyat bandı daha çok satıyor?",
          "Rakiplerin ana görselleri ve başlıkları hangi faydayı öne çıkarıyor?",
          "Mağazanın puanı, yorum kalitesi ve soru-cevap performansı nasıl?",
          "Hangi ürünler reklam almadan da dönüşüm üretiyor?",
        ],
      },
      { type: "h2", text: "2. Ürün sayfası optimizasyonu" },
      {
        type: "p",
        text: "Başlık, açıklama, ana görsel ve görsel sıralaması bir ürünün hem aramada bulunmasını hem de ziyaretçinin satın almaya ikna olmasını belirler. Başlıkta kullanıcının aradığı kelimeler, ilk görselde ürünün temel faydası, sonraki görsellerde kullanım senaryosu ve sosyal kanıt yer almalıdır.",
      },
      {
        type: "callout",
        title: "Temel prensip",
        text: "Trendyol reklamı kötü ürün sayfasını kurtarmaz. Önce dönüşüm altyapısı, sonra trafik ve bütçe büyütülür.",
      },
      { type: "h2", text: "3. Fiyat, kupon ve kampanya stratejisi" },
      {
        type: "p",
        text: "Kupon ve kampanyalar kısa vadede ciroyu artırabilir; ancak kârsız indirimlerle şişirilmiş brüt ciro sürdürülebilir değildir. Fiyat, kupon, sepet avantajı ve ürün gruplama kararları ürün bazlı marj hesaplanarak verilmelidir.",
      },
      { type: "h2", text: "4. Trendyol ürün reklamları ve bütçe yönetimi" },
      {
        type: "p",
        text: "Dönüşüm altyapısı hazır olan ürünler için sponsorlu ürün reklamları devreye alınır. Bütçe, tüm mağazaya eşit dağıtılmak yerine ürün bazlı verimliliğe göre yönlendirilir. Gün bazlı performans ve teklif seviyesi düzenli olarak optimize edilir.",
      },
      { type: "h2", text: "5. İtibar: puan, yorum ve soru-cevap" },
      {
        type: "p",
        text: "Puan ve yorumlar, özellikle rakip ürünlerin yan yana listelendiği kategorilerde satın alma kararını doğrudan etkiler. Soruların hızlı ve net yanıtlanması, olumsuz yorumlardaki tekrar eden sorunların ürün veya operasyon tarafında çözülmesi dönüşüm oranını yükseltir.",
      },
      { type: "h2", text: "6. Operasyon: stok, kargo ve iade takibi" },
      {
        type: "p",
        text: "Reklamla büyüyen bir ürünün stoğu tükendiğinde hem satış hem de kazanılmış ivme kaybedilir. Tahmini stokta kalma günü, kargo performansı, iptal ve iade oranı reklam kararlarıyla birlikte izlenmelidir.",
      },
      {
        type: "table",
        caption: "Haftalık Trendyol toplantısında izlenmesi gereken metrikler",
        head: ["Metrik", "Ne anlatır?"],
        rows: [
          ["CVR", "Ürün dönüşüm oranı"],
          ["ROAS", "Reklam getirisi"],
          ["TACOS", "Reklam harcamasının toplam ciroya oranı"],
          ["İade oranı", "Ürün bazlı iade ve memnuniyet sinyali"],
          ["Stok günü", "Tahmini stokta kalma süresi"],
          ["Katkı kârı", "Sipariş başına gerçekten kalan kâr"],
        ],
      },
      { type: "h2", text: "Sonuç" },
      {
        type: "p",
        text: "Trendyol'da sürdürülebilir büyüme; gösterim sayısını değil, nitelikli ziyareti ve satışa dönüşen görünürlüğü büyütmekle mümkündür. Bu altı adım bir kez yapılıp bırakılan bir kontrol listesi değil, her hafta veriyle güncellenen bir döngüdür.",
      },
    ],
    faqs: [
      {
        q: "Trendyol'da satışları artırmak için ilk ne yapılmalı?",
        a: "İlk adım mağaza ve kategori analizidir. Ardından öncelikli ürünlerin başlık, açıklama ve görselleri optimize edilir; reklam bütçesi ancak dönüşüm altyapısı hazır olduğunda artırılır.",
      },
      {
        q: "Trendyol reklamları tek başına satış getirir mi?",
        a: "Reklam trafiği artırır, ancak ürün sayfası, fiyat ve yorumlar zayıfsa bu trafik satışa dönüşmez. Reklam, güçlü bir ürün sayfasının etkisini büyütür.",
      },
    ],
    related: ["trendyol-reklama-hazirlik-kontrol-listesi", "katki-kari-roas-mer-tacos"],
  },
  {
    slug: "meta-cpas-trendyol-reklamlari",
    title: "Meta CPAS Nedir? Instagram Reklamlarıyla Trendyol Satışlarını Büyütmek",
    metaTitle: "Meta CPAS Nedir? Trendyol İçin Instagram Reklamları",
    metaDescription:
      "Meta CPAS ile Trendyol ürün ziyaretçilerine ve sepete ekleyenlere yeniden hedefleme yapın. CPAS'ın nasıl çalıştığını ve ne zaman ölçekleneceğini öğrenin.",
    excerpt:
      "Instagram ve Facebook'tan gelen talebi Trendyol satışına bağlamanın en güçlü yollarından biri CPAS. Nasıl çalışır, nelere dikkat edilmeli?",
    tldr: "Meta CPAS (Collaborative Performance Advertising Solution), Meta reklamlarını Trendyol gibi pazaryerlerinin ürün kataloğu ve satış sinyalleriyle ilişkilendiren iş birliği reklam çözümüdür. Markaların Trendyol'daki ürün ziyaretçilerine ve sepete ekleyenlere Instagram ve Facebook'ta yeniden ulaşmasını ve reklamın pazaryeri satışına etkisini ölçmesini sağlar.",
    category: "Meta Ads",
    keywords: ["meta cpas", "cpas trendyol", "instagram reklamı trendyol", "retargeting"],
    publishedAt: "2026-09-04",
    readingMinutes: 6,
    body: [
      {
        type: "p",
        text: "Pek çok marka Instagram'da reklam verir, ancak satış Trendyol'da gerçekleşir. Bu iki kanal arasındaki bağ kurulmadığında reklamın gerçek etkisi ölçülemez ve bütçe kararları tahmine dayanır. **CPAS**, bu kopukluğu azaltan en önemli araçlardan biridir.",
      },
      { type: "h2", text: "CPAS nasıl çalışır?" },
      {
        type: "p",
        text: "CPAS ile markanın Trendyol'daki ürün kataloğu Meta reklam hesabıyla ilişkilendirilir. Böylece Trendyol'da ürününüzü görüntüleyen veya sepete ekleyen kullanıcılara Instagram ve Facebook'ta dinamik reklamlarla yeniden ulaşabilir, reklamın pazaryeri tarafındaki satış sonuçlarını raporlayabilirsiniz.",
      },
      {
        type: "ul",
        items: [
          "Trendyol ürün ziyaretçileri için yeniden hedefleme",
          "Sepete ekleyip satın almayan kullanıcıların geri kazanılması",
          "Katalog bazlı dinamik ürün reklamları",
          "Reklam harcamasının pazaryeri satışına etkisinin ölçülmesi",
        ],
      },
      { type: "h2", text: "CPAS tek başına yeterli mi?" },
      {
        type: "p",
        text: "Hayır. CPAS, mevcut talebi tamamlamada çok güçlüdür; ancak yeni talep üretmek için markayı tanımayan kitlelere ulaşan kampanyalar ve güçlü kreatifler gerekir. Bu yüzden Meta kampanyalarını üç katmanda kurguluyoruz:",
      },
      {
        type: "table",
        head: ["Katman", "Amaç", "Kullanılan içerik"],
        rows: [
          [
            "Yeni müşteri",
            "Markayı tanımayan kitlelerden satış üretmek",
            "Problem, çözüm, ürün faydası ve güçlü hook",
          ],
          [
            "Yeniden pazarlama",
            "Ürünle etkileşim kuran kullanıcıyı tamamlamak",
            "Yorum, sosyal kanıt, teklif ve sık sorulan sorular",
          ],
          [
            "Creator güveni",
            "Influencer otoritesini satışa dönüştürmek",
            "UGC, deneyim, karşılaştırma ve kullanım videosu",
          ],
        ],
      },
      { type: "h2", text: "CPAS kampanyalarında dikkat edilmesi gerekenler" },
      {
        type: "ol",
        items: [
          "Ürün sayfası dönüşüme hazır olmadan retargeting bütçesi büyütülmemeli.",
          "Katalogdaki stok ve fiyat bilgisi güncel tutulmalı; stoğu biten ürüne reklam harcanmamalı.",
          "ROAS tek başına değil, iade oranı ve katkı kârıyla birlikte değerlendirilmeli.",
          "Kazanan kreatifler, CPAS kampanyalarında da test edilerek ölçeklenmeli.",
        ],
      },
      {
        type: "callout",
        title: "Ölçekleme kuralı",
        text: "Bütçe hissiyatla değil; yeterli veri, sürdürülebilir edinme maliyeti, stok ve ürün kârlılığı birlikte uygun olduğunda artırılır.",
      },
      { type: "h2", text: "Sonuç" },
      {
        type: "p",
        text: "CPAS, Meta ile Trendyol arasındaki köprüdür. Asıl fark ise bu köprünün üzerinden hangi kreatiflerle, hangi ürünlere ve hangi bütçe disipliniyle trafik taşındığında ortaya çıkar. Güncel kurulum koşulları için Meta ve Trendyol Pazarlama Çözümleri'nin resmî kaynakları takip edilmelidir.",
      },
    ],
    faqs: [
      {
        q: "CPAS'ın açılımı nedir?",
        a: "CPAS, Collaborative Performance Advertising Solution ifadesinin kısaltmasıdır; Meta'nın markalar ve perakendeciler/pazaryerleri için sunduğu iş birliği reklam çözümüdür.",
      },
      {
        q: "CPAS ile hangi kullanıcılara reklam gösterilebilir?",
        a: "Trendyol'da ürünlerinizi görüntüleyen veya sepete ekleyen kullanıcılara Instagram ve Facebook'ta dinamik ürün reklamlarıyla yeniden ulaşılabilir.",
      },
    ],
    related: ["meta-reklam-kreatif-test-rehberi", "raena-revenue-loop"],
  },
  {
    slug: "influencer-marketing-olculebilir-satis",
    title:
      "Influencer Marketing'i Ölçülebilir Satışa Dönüştürmek: Seçim Kriterleri ve Kullanım Hakları",
    metaTitle: "Influencer Marketing'de Ölçülebilir Satış Rehberi",
    metaDescription:
      "Influencer seçiminde takipçi sayısı yerine hangi kriterlere bakılmalı? Kullanım hakları, Partnership Ads ve satış takibiyle influencer bütçenizi verimli kullanın.",
    excerpt:
      "Paylaşım satın almak yerine ölçülebilir içerik varlığı üretmek: doğru creator seçimi, sözleşmede olması gereken haklar ve reklamda ölçekleme.",
    tldr: "Ölçülebilir bir influencer kampanyası üç değer üretir: doğrudan satış, güven ve tekrar kullanılabilir reklam içeriği. Creator seçiminde takipçi sayısı yerine kategori uyumu, gerçek etkileşim, geçmiş satış performansı ve sahte takipçi kontrolü esas alınmalı; sözleşmede organik ve reklam kullanımı, kurgu hakkı, münhasırlık ve ham dosya teslimi yazılı olarak tanımlanmalıdır.",
    category: "Influencer",
    keywords: [
      "influencer marketing",
      "influencer seçimi",
      "ugc içerik",
      "partnership ads",
      "influencer kullanım hakkı",
    ],
    publishedAt: "2026-09-08",
    readingMinutes: 7,
    body: [
      {
        type: "p",
        text: "Birçok marka için influencer iş birliği, paylaşım yapıldığı gün hareketlenen ve ertesi gün sönen bir görünürlük anlamına gelir. Oysa doğru kurgulanan bir kampanya **doğrudan satış, güven ve tekrar kullanılabilir reklam içeriği** olmak üzere üç ayrı değer üretir.",
      },
      { type: "h2", text: "Influencer seçiminde 6 kriter" },
      {
        type: "ol",
        items: [
          "**Hedef kitle ve kategori uyumu:** Takipçi kitlesi ürününüzün alıcısı mı?",
          "**Gerçek etkileşim ve yorum kalitesi:** Yorumlar içerikle mi ilgili, yoksa kalıp mesajlar mı?",
          "**Geçmiş ziyaret ve satış performansı:** Daha önceki iş birlikleri ölçülebilir sonuç üretmiş mi?",
          "**Kamera önü anlatım becerisi:** Ürünü doğal ve ikna edici şekilde gösterebiliyor mu?",
          "**Sahte takipçi ve marka güvenliği kontrolü:** Hesap geçmişi markanız için risk taşıyor mu?",
          "**Takip edilebilirlik:** İndirim kodu veya takip edilebilir bağlantı kullanılabiliyor mu?",
        ],
      },
      { type: "h2", text: "Sözleşmede mutlaka olması gereken kullanım hakları" },
      {
        type: "table",
        head: ["Hak", "Kapsam"],
        rows: [
          ["Organik kullanım", "Marka ve ajans hesaplarında yeniden paylaşım"],
          ["Reklam kullanımı", "Meta reklamlarında belirli süreyle kullanım"],
          ["Kurgu hakkı", "İçeriği kısaltma, altyazı ve farklı başlangıçlarla test etme"],
          ["Münhasırlık", "Belirlenen süre boyunca doğrudan rakiplerle çalışmama"],
          ["Ham dosya", "Filigransız ve müziksiz ana video dosyalarının teslimi"],
          ["Partnership Ads izni", "İçeriğin creator hesabı üzerinden reklam olarak yayınlanması"],
        ],
      },
      {
        type: "callout",
        title: "Neden önemli?",
        text: "Kazanan influencer videosu Meta reklamına çevrildiğinde, tek günlük görünürlük uzun süre çalışan bir satış varlığına dönüşür. Bu ancak haklar önceden yazılı olarak belirlendiyse mümkündür.",
      },
      { type: "h2", text: "Creator döngüsü: içerikten yeni veriye" },
      {
        type: "p",
        text: "RAENA Creator Performance Network'te süreç doğrusal değil, döngüseldir: kazanan creator içeriği marka hesabında organik olarak kullanılır, ardından Meta Partnership Ads ile reklama dönüştürülür. Reklamdan gelen yeni satış verisi, bir sonraki creator seçimini besler.",
      },
      {
        type: "ol",
        items: [
          "Kazanan creator içeriği",
          "Marka hesabında organik kullanım",
          "Meta Partnership Ads",
          "Yeni satış verisi",
          "Yeni creator seçimi",
        ],
      },
      { type: "h2", text: "Neyi ölçmeliyiz?" },
      {
        type: "p",
        text: "Erişim ve beğeni, bir iş birliğinin başarısını tek başına göstermez. Her iş birliği için ziyaret, favori, satış ve toplam maliyet raporlanmalı; iş birliği başına edinme maliyeti hesaplanmalıdır.",
      },
    ],
    faqs: [
      {
        q: "Influencer seçerken en önemli kriter nedir?",
        a: "Tek bir kriter yoktur; kategori ve hedef kitle uyumu, gerçek etkileşim kalitesi ve geçmiş satış performansı birlikte değerlendirilmelidir. Takipçi sayısı tek başına yanıltıcıdır.",
      },
      {
        q: "Partnership Ads nedir?",
        a: "Partnership Ads, markanın bir creator'ın içeriğini creator hesabı üzerinden reklam olarak yayınlamasını sağlayan Meta reklam formatıdır. Creator'ın güvenilirliğini reklam hedeflemesiyle birleştirir.",
      },
    ],
    related: ["meta-reklam-kreatif-test-rehberi", "raena-revenue-loop"],
  },
  {
    slug: "katki-kari-roas-mer-tacos",
    title: "ROAS Yetmez: E-Ticarette Katkı Kârı, MER ve TACOS Nasıl Okunur?",
    metaTitle: "Katkı Kârı, ROAS, MER ve TACOS: E-Ticaret Metrikleri",
    metaDescription:
      "Yüksek ROAS her zaman kâr demek değildir. Katkı kârı, MER, TACOS, CAC ve iade oranını birlikte okuyarak e-ticaret büyümenizi doğru ölçün.",
    excerpt:
      "Reklam panelindeki ROAS yükselirken markanın kasasında neden para kalmıyor? Tek gerçeklik tablosunu oluşturan sekiz metrik.",
    tldr: "ROAS yalnızca kanal veya kampanya bazında reklam verimliliğini gösterir. Bir e-ticaret markasının gerçekten kazanıp kazanmadığını anlamak için reklam, influencer ve ajans maliyetleri düşüldükten sonra kalan katkı kârı ana başarı metriği olmalıdır. Buna MER (toplam pazarlama verimliliği), TACOS (reklamın toplam ciroya oranı), CAC, iade/iptal oranı, stokta kalma günü ve kreatif hit rate eşlik etmelidir.",
    category: "Ölçüm",
    keywords: ["katkı kârı", "roas nedir", "mer nedir", "tacos nedir", "e-ticaret metrikleri"],
    publishedAt: "2026-09-11",
    readingMinutes: 6,
    body: [
      {
        type: "p",
        text: "Reklam paneli 6 ROAS gösteriyor, ciro büyüyor; ama ay sonunda kâr beklenen yerde değil. Bu tablo, e-ticarette en sık karşılaştığımız durumlardan biri. Sebep basit: **ROAS kanal verimliliğini ölçer, işletmenin kârlılığını değil.**",
      },
      { type: "h2", text: "Kuzey yıldızı: katkı kârı" },
      {
        type: "callout",
        title: "Ana başarı metriği",
        text: "Reklam, influencer ve ajans maliyetleri çıktıktan sonra markaya kalan katkı kârı.",
      },
      {
        type: "p",
        text: "Katkı kârı; net satıştan ürün maliyeti, kargo, pazaryeri komisyonu, reklam ve diğer değişken pazarlama giderleri düşüldükten sonra kalan tutardır. Satış büyürken markanın gerçekten para kazanıp kazanmadığını gösterir.",
      },
      { type: "h2", text: "Tek gerçeklik tablosundaki 8 metrik" },
      {
        type: "table",
        head: ["Metrik", "Neden izlenir?"],
        rows: [
          ["Net tamamlanan ciro", "İptal ve iade sonrası gerçek satış hacmini gösterir."],
          ["Katkı kârı", "Satış büyürken markanın gerçekten para kazanıp kazanmadığını gösterir."],
          ["MER", "Tüm pazarlama harcamasının toplam satışa etkisini ölçer."],
          ["ROAS", "Kanal veya kampanya bazında reklam verimliliğini gösterir."],
          ["CAC", "Yeni müşteri edinmenin toplam maliyetini hesaplar."],
          ["İade / iptal", "Şişirilmiş ciroyu ve operasyon problemlerini ortaya çıkarır."],
          ["Stokta kalma günü", "Reklamın stok kırılmasına yol açmasını engeller."],
          [
            "Kreatif hit rate",
            "Üretilen içeriklerin kaçının performans eşiğini geçtiğini gösterir.",
          ],
        ],
      },
      { type: "h2", text: "ROAS, MER ve TACOS arasındaki fark" },
      {
        type: "ul",
        items: [
          "**ROAS** = Kampanyaya atfedilen satış ÷ o kampanyanın reklam harcaması. Kanal içi karar için kullanılır.",
          "**MER** = Toplam ciro ÷ toplam pazarlama harcaması. Tüm kanalların birlikte etkisini gösterir; atıf tartışmalarından etkilenmez.",
          "**TACOS** = Reklam harcaması ÷ toplam ciro (organik dahil). Reklamın organik satışı büyütüp büyütmediğini anlamaya yardımcı olur.",
        ],
      },
      { type: "h2", text: "Net ciroyu doğru tanımlamak" },
      {
        type: "p",
        text: "Tüm hesaplamaların temeli net cirodur: **KDV hariç tamamlanan satışlar − iptaller − iadeler − geri ödemeler.** Brüt ciro üzerinden yapılan analiz, özellikle iade oranı yüksek kategorilerde yanıltıcı sonuç verir.",
      },
      { type: "h2", text: "Raporlama ritmi" },
      {
        type: "p",
        text: "Günlük anomali kontrolü, haftalık aksiyon toplantısı ve aylık yönetim raporu. İyi bir rapor yalnızca ne olduğunu değil, bir sonraki ay ne yapılacağını da gösterir.",
      },
    ],
    faqs: [
      {
        q: "Katkı kârı nedir?",
        a: "Katkı kârı, net satıştan ürün maliyeti, kargo, komisyon, reklam ve diğer değişken pazarlama giderleri düşüldükten sonra kalan tutardır; büyümenin gerçekten kârlı olup olmadığını gösterir.",
      },
      {
        q: "MER ile ROAS arasındaki fark nedir?",
        a: "ROAS tek bir kanal veya kampanyanın reklam verimliliğini ölçer. MER ise toplam ciroyu toplam pazarlama harcamasına böler ve tüm kanalların birlikte etkisini gösterir.",
      },
      {
        q: "TACOS nasıl hesaplanır?",
        a: "TACOS, toplam reklam harcamasının organik satışlar dahil toplam ciroya oranıdır. Düşen TACOS, reklamın organik satışları da büyüttüğüne işaret edebilir.",
      },
    ],
    related: ["basari-payi-ucret-modeli", "trendyol-satis-artirma-rehberi"],
  },
  {
    slug: "basari-payi-ucret-modeli",
    title: "Performans Ajansı Ücret Modelleri: Sabit Ücret + Başarı Payı Nasıl Hesaplanır?",
    metaTitle: "Ajans Başarı Payı Nasıl Hesaplanır? Hibrit Ücret Modeli",
    metaDescription:
      "Sabit ücret + başarı payı modeli nasıl çalışır? Baz dönem, net ciro ve net büyüme tanımlarıyla adil bir ciro ortaklığının örnek hesabını inceleyin.",
    excerpt:
      "Ajansın mevcut cirodan pay alması adil mi? Baz dönem, net büyüme ve örnek hesaplamayla hibrit ücret modelinin mantığı.",
    tldr: "Adil bir başarı payı modelinde ajans markanın toplam cirosundan değil, yalnızca ölçülebilir net büyümeden pay alır. Baz dönem, son 60-90 günün iade ve iptal sonrası aylık net ciro ortalamasıdır; yeni dönem net cirosundan baz dönem çıkarılarak net büyüme bulunur. Örnek: 500.000 TL baz, 700.000 TL yeni ciro → 200.000 TL büyüme × %3 = 6.000 TL başarı payı.",
    category: "Strateji",
    keywords: [
      "ajans başarı payı",
      "performans ajansı ücret",
      "ciro ortaklığı",
      "e-ticaret ajansı fiyat modeli",
    ],
    publishedAt: "2026-09-15",
    readingMinutes: 5,
    body: [
      {
        type: "p",
        text: "Ajans ücretlendirmesinde iki uç model yaygındır: sonuçtan bağımsız sabit ücret ve toplam cirodan yüzde. İlki ajansın motivasyonunu sonuca bağlamaz; ikincisi ise ajansın üretmediği geçmiş satışlardan da pay almasına yol açar. **Hibrit model** bu iki sorunu birlikte çözer.",
      },
      { type: "h2", text: "Hibrit model: sabit hizmet bedeli + başarı payı" },
      {
        type: "p",
        text: "Sabit hizmet bedeli; strateji, operasyon, reklam ve influencer koordinasyonu ile raporlamanın maliyetini karşılar. Başarı payı ise yalnızca ajansın yönetimi sonrasında oluşan ölçülebilir net büyümeye bağlanır.",
      },
      { type: "h2", text: "Adım adım hesaplama" },
      {
        type: "ol",
        items: [
          "**Baz dönem:** Son 60-90 günün iade ve iptal sonrası aylık net ciro ortalaması.",
          "**Yeni dönem:** Ajans yönetimindeki ayın gerçekleşen ve tahsil edilen net satışı.",
          "**Net büyüme:** Yeni dönem net cirosu eksi baz dönem; sezon etkisi ayrıca not edilir.",
          "**Başarı payı:** Net büyümenin belirlenen yüzdesi (RAENA standart pakette %3, VIP pakette %2).",
        ],
      },
      {
        type: "table",
        caption: "Örnek başarı payı hesabı (%3)",
        head: ["Kalem", "Tutar"],
        rows: [
          ["Baz net ciro", "500.000 TL"],
          ["Yeni dönem net ciro", "700.000 TL"],
          ["Net büyüme", "200.000 TL"],
          ["Başarı payı (%3)", "6.000 TL"],
        ],
      },
      { type: "h2", text: "Tartışmasız bir ortaklık için sözleşme kuralları" },
      {
        type: "ul",
        items: [
          "Net ciro: KDV hariç tamamlanan satışlar − iptaller − iadeler − geri ödemeler.",
          "Başarı payı yalnızca ajansın yönettiği mağaza ve ürünlerde hesaplanır.",
          "Bayram, sezon, büyük Trendyol kampanyaları ve stok kırılması gibi etkiler ayrıca değerlendirilir.",
          "İade sonuçlarının oturması için başarı payı takip eden ayda kesinleştirilir.",
          "Marka satış, maliyet ve reklam verilerine şeffaf erişim sağlar.",
          "Meta, Trendyol ve influencer bütçeleri ajans bedelinden ayrıdır.",
        ],
      },
      {
        type: "callout",
        title: "Yeni açılan mağazalar",
        text: "Geçmiş verisi olmayan mağazalarda ilk 90 gün sabit hizmet bedeli ve tamamlanan net ciro üzerinden %2-%3 oranı uygulanır; veri oluştuktan sonra baz ciro ve artış modeline geçilir.",
      },
      {
        type: "p",
        text: "Not: Nihai sözleşme, vergi ve reklam mevzuatı bakımından yetkili bir avukat ve mali müşavir tarafından kontrol edilmelidir.",
      },
    ],
    faqs: [
      {
        q: "Başarı payı toplam cirodan mı alınır?",
        a: "RAENA modelinde hayır. Başarı payı yalnızca baz dönemin üzerindeki net ciro artışından hesaplanır; ajansın üretmediği geçmiş satışlardan pay alınmaz.",
      },
      {
        q: "Baz dönem nasıl belirlenir?",
        a: "Baz dönem, son 60-90 günün (karşılaştırılabilir üç ay) iade ve iptal sonrası aylık net ciro ortalamasıdır.",
      },
    ],
    related: ["katki-kari-roas-mer-tacos", "e-ticaret-ajans-fiyatlari-2026"],
  },
];
