export type Service = {
  slug: string;
  name: string;
  engine: string;
  short: string;
  outcome: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  capabilities: { title: string; text: string }[];
  process: string[];
  metrics: { label: string; text: string }[];
  principle: { title: string; text: string };
  faqs: { q: string; a: string }[];
  accent: "violet" | "mint" | "navy";
};

export const services: Service[] = [
  {
    slug: "trendyol-buyume",
    name: "Trendyol Growth",
    engine: "Trendyol Visibility Engine",
    short:
      "Mağaza analizi, ürün ve görsel optimizasyonu, fiyat-kampanya stratejisi, Trendyol reklamları, stok, yorum, dönüşüm ve kârlılık takibi.",
    outcome:
      "Daha fazla gösterim değil; daha nitelikli ziyaret, güçlü ürün sayfası ve satışa dönüşen görünürlük.",
    metaTitle: "Trendyol Mağaza Yönetimi ve Reklam Ajansı | RAENA",
    metaDescription:
      "Trendyol mağaza yönetimi, ürün sayfası optimizasyonu, kupon-kampanya stratejisi ve ürün reklamları. RAENA ile görünürlüğü satışa dönüştürün.",
    intro:
      "Ürünlerinizin görünürlüğünü, ziyaretini, favorilenmesini ve satış potansiyelini büyüten sistemler kuruyoruz. Trendyol reklamı kötü bir ürün sayfasını kurtarmaz; bu yüzden önce dönüşüm altyapısını güçlendirir, ardından trafiği ve bütçeyi büyütürüz.",
    capabilities: [
      {
        title: "Mağaza ve kategori analizi",
        text: "Kategori, rakip, fiyat, puan, yorum, kampanya ve reklam verilerini tek tabloda inceleriz.",
      },
      {
        title: "Ürün içerik optimizasyonu",
        text: "Başlık, açıklama, ana görsel, görsel sıralaması ve dönüşüm unsurlarını satışa göre düzenleriz.",
      },
      {
        title: "Fiyat, kupon ve kampanya planı",
        text: "Fiyat, kupon, sepet avantajı ve ürün gruplamayı kârlılığı koruyarak kurgularız.",
      },
      {
        title: "Trendyol ürün reklamları",
        text: "Sponsorlu ürünler, bütçe dağılımı ve ürün bazlı verimlilik yönetimi.",
      },
      {
        title: "İtibar yönetimi",
        text: "Puan, yorum kalitesi, soru-cevap ve müşteri deneyimi takibi.",
      },
      {
        title: "Operasyon ve stok takibi",
        text: "Stok hızı, kargo performansı, iptal, iade ve ürün bulunurluğunu reklam kararlarına bağlarız.",
      },
    ],
    process: [
      "Mağaza, ürün, rakip, marj ve stok verilerinin analizi",
      "Öncelikli ürünlerin sayfa ve teklif optimizasyonu",
      "Ürün reklamı ve kampanya kurgusunun devreye alınması",
      "Ziyaret, favori, sepet ve satış hunisinin haftalık takibi",
      "Kazanan ürünlere bütçe aktarımı ve ölçekleme",
    ],
    metrics: [
      { label: "CVR", text: "Ürün dönüşüm oranı" },
      { label: "ROAS", text: "Reklam getirisi" },
      { label: "TACOS", text: "Reklamın toplam ciroya oranı" },
      { label: "İade", text: "Ürün bazlı iade oranı" },
      { label: "Stok", text: "Tahmini stokta kalma günü" },
      { label: "Kâr", text: "Sipariş başı katkı kârı" },
    ],
    principle: {
      title: "Temel prensip",
      text: "Önce dönüşüm altyapısı, sonra trafik ve bütçe büyütülür.",
    },
    faqs: [
      {
        q: "Trendyol mağaza yönetimi hizmetine neler dahil?",
        a: "20 öncelikli ürün için mağaza ve rakip analizi, ürün içerik optimizasyonu, reklam ve kampanya yönetimi ile aylık performans raporu dahildir. Trendyol Büyüme paketi aylık 5.900 TL + KDV'dir.",
      },
      {
        q: "Ürünümü Trendyol'da 1 numaraya taşıyabilir misiniz?",
        a: "Kesin sıralama garantisi vermiyoruz. Görünürlüğü, gerçek ziyareti, favoriyi ve satış potansiyelini büyüten; Trendyol raporları ve dönüşüm verisiyle kanıtlanan bir sistem kuruyoruz.",
      },
      {
        q: "Yapay ziyaret veya favori hizmeti veriyor musunuz?",
        a: "Hayır. Bot, yapay ziyaret, sahte favori, sahte yorum veya manipülatif etkileşim RAENA hizmeti olarak sunulmaz. Başarıyı gerçek kullanıcı davranışı ve net satışla raporlarız.",
      },
    ],
    accent: "violet",
  },
  {
    slug: "meta-performans",
    name: "Meta Performance",
    engine: "Meta Performance Engine",
    short:
      "Kreatif strateji, kampanya kurulumu, yeniden pazarlama, creator reklamları, bütçe optimizasyonu, ROAS ve müşteri edinme maliyeti yönetimi.",
    outcome:
      "Reklam maliyetini tek başına değil; satış, kreatif ve müşteri edinme verimliliğiyle birlikte yönetiriz.",
    metaTitle: "Meta Reklam Yönetimi, CPAS ve Kreatif Test | RAENA",
    metaDescription:
      "Facebook ve Instagram reklam yönetimi, Meta CPAS, haftalık kreatif testleri ve ROAS optimizasyonu. Reklam bütçenizi kârlı satışa dönüştürün.",
    intro:
      "Amacımız CPC'nin her koşulda düşeceğini vaat etmek değil; sistematik kreatif ve hedef kitle testleriyle reklam yatırımınızı daha verimli hâle getirmek. Bütçeyi hissiyatla değil; yeterli veri, sürdürülebilir edinme maliyeti, stok ve ürün kârlılığı birlikte uygun olduğunda artırırız.",
    capabilities: [
      {
        title: "Kreatif test",
        text: "Hook, video başlangıcı, ürün faydası, sosyal kanıt, teklif ve format varyasyonları.",
      },
      {
        title: "CPAS ve retargeting",
        text: "Trendyol ürün ziyaretçileri ve sepete ekleyen kullanıcılar için yeniden hedefleme.",
      },
      {
        title: "Yeni müşteri kazanımı",
        text: "Markayı tanımayan kitlelere problem, çözüm, ürün faydası ve güçlü hook ile ulaşırız.",
      },
      {
        title: "Creator reklamları",
        text: "UGC ve Partnership Ads ile influencer otoritesini satışa dönüştürürüz.",
      },
      {
        title: "Ölçekleme",
        text: "CPC, CTR, ROAS, edinme maliyeti, stok ve katkı kârına göre kontrollü bütçe artırımı.",
      },
      {
        title: "Hesap ve ölçüm kontrolü",
        text: "Piksel, dönüşüm ve kampanya yapısının güvenilir veri üretecek şekilde kurulması.",
      },
    ],
    process: [
      "Hesap, ölçüm ve geçmiş kampanya verisinin kontrolü",
      "Kreatif test planı ve kampanya kurulumu",
      "Haftalık hook, açı, format ve teklif testleri",
      "Zayıf kreatiflerin hızlı durdurulması, öğrenimin kaydedilmesi",
      "Kazanan kreatiflere kontrollü bütçe artırımı",
    ],
    metrics: [
      { label: "CPC", text: "Tıklama başı maliyet" },
      { label: "CTR", text: "Tıklama oranı" },
      { label: "ROAS", text: "Reklam harcamasının getirisi" },
      { label: "CAC", text: "Yeni müşteri edinme maliyeti" },
      { label: "MER", text: "Toplam pazarlama verimliliği" },
      { label: "Hit rate", text: "Eşiği geçen kreatif oranı" },
    ],
    principle: {
      title: "Ölçekleme kuralı",
      text: "Bütçe hissiyatla değil; veri, edinme maliyeti, stok ve ürün kârlılığı birlikte uygun olduğunda artırılır.",
    },
    faqs: [
      {
        q: "Meta reklam yönetimi ücreti ne kadar?",
        a: "Meta Performans paketi aylık 6.900 TL + KDV'dir. Hesap ve ölçüm kontrolü, kampanya kurulumu, kreatif test planı, haftalık optimizasyon ile ROAS ve maliyet raporu içerir. Reklam bütçesi ayrıca ödenir.",
      },
      {
        q: "Meta CPAS nedir, Trendyol ile nasıl çalışır?",
        a: "CPAS (Collaborative Performance Advertising Solution), Meta reklamlarını Trendyol gibi pazaryerlerinin ürün kataloğu ve satış verisiyle ilişkilendiren iş birliği reklam çözümüdür. Trendyol ürün ziyaretçilerine ve sepete ekleyenlere yeniden hedefleme yapmayı sağlar.",
      },
      {
        q: "CPC'nin düşeceğini garanti ediyor musunuz?",
        a: "Hayır. Kreatif ve hedef kitle testleriyle CPC ve edinme maliyetini optimize ederiz; sonuçları Meta Ads Manager test ve kampanya verileriyle raporlarız.",
      },
    ],
    accent: "mint",
  },
  {
    slug: "influencer-marketing",
    name: "Influencer Engine",
    engine: "Creator Performance Network",
    short:
      "Creator seçimi, brief, pazarlık, yayın takibi, UGC üretimi, kullanım hakları, satış etkisi ve kazanan içeriklerin reklama dönüştürülmesi.",
    outcome:
      "Influencer paylaşımını tek günlük görünürlükten çıkarıp ölçülebilir satış ve reklam varlığına dönüştürürüz.",
    metaTitle: "Influencer Marketing ve UGC Ajansı | RAENA",
    metaDescription:
      "Satış verisine göre influencer seçimi, UGC üretimi, içerik kullanım hakları ve Meta Partnership Ads. Influencer bütçenizi ölçülebilir satışa bağlayın.",
    intro:
      "Bir influencer kampanyası üç ayrı değer üretmelidir: doğrudan satış, güven ve tekrar kullanılabilir reklam içeriği. Creator'ları takipçi sayısına göre değil; kategori uyumu, gerçek etkileşim ve geçmiş satış performansına göre seçeriz.",
    capabilities: [
      {
        title: "Veriye dayalı creator seçimi",
        text: "Kategori ve hedef kitle uyumu, gerçek etkileşim ve yorum kalitesi, geçmiş ziyaret ve satış performansı.",
      },
      {
        title: "Marka güvenliği",
        text: "Sahte takipçi kontrolü, kamera önü anlatım becerisi ve marka uyumu değerlendirmesi.",
      },
      {
        title: "Brief ve içerik onayı",
        text: "Ürünün gerçek kullanım senaryolarını anlatan net brief ve onay süreci.",
      },
      {
        title: "Takip edilebilir satış",
        text: "İndirim kodu veya takip edilebilir bağlantı ile ziyaret, favori ve satış ölçümü.",
      },
      {
        title: "İçerik kullanım hakları",
        text: "Organik ve reklam kullanımı, kurgu hakkı, münhasırlık süresi ve ham dosya teslimi yazılı olarak belirlenir.",
      },
      {
        title: "Partnership Ads",
        text: "Kazanan creator içeriği Meta reklamına çevrilerek uzun süre çalışan bir satış varlığına dönüşür.",
      },
    ],
    process: [
      "Kategoriye uygun creator havuzunun oluşturulması",
      "Brief, pazarlık ve içerik onayı",
      "Yayın, kod ve link takibi",
      "Ziyaret, favori, satış ve maliyet raporu",
      "Kazanan içeriğin Partnership Ads ile ölçeklenmesi",
    ],
    metrics: [
      { label: "Ziyaret", text: "Creator kaynaklı ürün ziyareti" },
      { label: "Satış", text: "Kod ve link bazlı satış" },
      { label: "Maliyet", text: "İş birliği başına edinme maliyeti" },
      { label: "Kreatif", text: "Reklama dönüşen içerik sayısı" },
    ],
    principle: {
      title: "RAENA farkı",
      text: "Kazanan influencer videosu Meta reklamına çevrilir; tek günlük görünürlük, uzun süre çalışan bir satış varlığına dönüşür.",
    },
    faqs: [
      {
        q: "Influencer koordinasyon paketi neleri kapsar?",
        a: "Aylık 4.900 TL + KDV karşılığında 20 creator iletişimi, 5 iş birliği koordinasyonu, brief ve içerik onayı, kod/link takibi ve performans raporu sunulur. Influencer ödemeleri ve ürün gönderimi ayrıca bütçelendirilir.",
      },
      {
        q: "Influencer seçerken takipçi sayısına mı bakıyorsunuz?",
        a: "Hayır. Kategori ve hedef kitle uyumu, gerçek etkileşim ve yorum kalitesi, geçmiş ziyaret ve satış performansı, içerik üretme becerisi ve sahte takipçi kontrolü birlikte değerlendirilir.",
      },
      {
        q: "Influencer içeriklerini reklamda kullanabilir miyiz?",
        a: "Evet; sözleşmede reklam kullanım hakkı, süresi, kurgu hakkı ve Meta Partnership Ads izni yazılı olarak tanımlanır. Böylece kazanan içerik reklamlarda ölçeklenebilir.",
      },
    ],
    accent: "navy",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
