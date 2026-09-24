export type Package = {
  id: string;
  name: string;
  price: string;
  priceValue: number;
  period: string;
  description: string;
  features: string[];
  href: string;
};

export const entryPackages: Package[] = [
  {
    id: "trendyol",
    name: "Trendyol Büyüme",
    price: "5.900 TL",
    priceValue: 5900,
    period: "Aylık + KDV",
    description: "Mağazanızı satışa hazırlayan, görünürlüğü ve dönüşümü büyüten temel paket.",
    features: [
      "20 öncelikli ürün",
      "Mağaza ve rakip analizi",
      "Ürün içerik optimizasyonu",
      "Reklam ve kampanya yönetimi",
      "Aylık performans raporu",
    ],
    href: "/hizmetler/trendyol-buyume",
  },
  {
    id: "meta",
    name: "Meta Performans",
    price: "6.900 TL",
    priceValue: 6900,
    period: "Aylık + KDV",
    description: "Instagram ve Facebook reklamlarını kreatif testlerle verimli hâle getiren paket.",
    features: [
      "Hesap ve ölçüm kontrolü",
      "Kampanya kurulumu",
      "Kreatif test planı",
      "Haftalık optimizasyon",
      "ROAS ve maliyet raporu",
    ],
    href: "/hizmetler/meta-performans",
  },
  {
    id: "influencer",
    name: "Influencer",
    price: "4.900 TL",
    priceValue: 4900,
    period: "Aylık + KDV",
    description: "Creator iş birliklerini takip edilebilir satışa bağlayan koordinasyon paketi.",
    features: [
      "20 creator iletişimi",
      "5 iş birliği koordinasyonu",
      "Brief ve içerik onayı",
      "Kod / link takibi",
      "Performans raporu",
    ],
    href: "/hizmetler/influencer-marketing",
  },
];

export const growth360 = {
  name: "RAENA 360° Büyüme Paketi",
  price: "12.900 TL",
  priceValue: 12900,
  launchPrice: "9.900 TL",
  launchNote: "İlk 5 markaya özel lansman fiyatı",
  period: "+ KDV / ay",
  successFee: 3,
  description: "Trendyol, Meta ve influencer yönetimini tek veri döngüsünde birleştiren ana paket.",
  features: [
    "Trendyol Büyüme + Meta Performans + Influencer koordinasyonu",
    "30-60-90 günlük ortak büyüme planı",
    "Haftalık optimizasyon ve aylık strateji toplantısı",
    "20 öncelikli ürün, 10 aktif Meta kampanya / reklam seti",
    "20 influencer iletişimi ve 5 iş birliği koordinasyonu",
    "Baz dönemin üzerindeki net ciro artışından %3 başarı payı",
  ],
};

export const vipPackage = {
  name: "Category Leadership Program",
  price: "39.900 TL",
  priceValue: 39900,
  period: "+ KDV / ay",
  successFee: 2,
  minMonths: 6,
  maxBrands: 5,
  features: [
    "75 ürün ve 10 Hero SKU için öncelikli Trendyol yönetimi",
    "Haftalık Category Leadership çalışma toplantısı",
    "Günlük reklam ve kritik metrik kontrolü",
    "Aylık 50 influencer iletişimi ve 10 iş birliği koordinasyonu",
    "Haftalık kreatif test sprinti ve Meta ölçekleme planı",
    "Markaya özel dashboard, yönetici özeti ve aylık büyüme konseyi",
    "Kampanya dönemlerinde hızlı aksiyon ve öncelikli iletişim kanalı",
  ],
};

export const excludedCosts =
  "Reklam bütçesi, influencer ödemesi, ürün gönderimi ve profesyonel prodüksiyon ayrıca bütçelendirilir.";

export const successFeeSteps = [
  {
    title: "Baz dönem",
    text: "Son 60-90 günün iade ve iptal sonrası aylık net ciro ortalaması.",
  },
  {
    title: "Yeni dönem",
    text: "RAENA yönetimindeki ayın gerçekleşen ve tahsil edilen net satışı.",
  },
  {
    title: "Net büyüme",
    text: "Yeni dönem net cirosu eksi baz dönem; sezon etkisi ayrıca not edilir.",
  },
  {
    title: "Başarı payı",
    text: "Standart pakette net büyümenin %3'ü; VIP pakette %2'si.",
  },
];

export const pricingFaqs = [
  {
    q: "Başarı payı nasıl hesaplanıyor?",
    a: "RAENA markanın eski satışından değil, ölçülebilir net büyümeden pay alır. Baz dönem son 60-90 günün iade ve iptal sonrası aylık net ciro ortalamasıdır. Örneğin 500.000 TL baz ciro 700.000 TL'ye çıkarsa 200.000 TL net büyümenin %3'ü olan 6.000 TL başarı payı oluşur.",
  },
  {
    q: "Net ciro nasıl tanımlanıyor?",
    a: "Net ciro; KDV hariç tamamlanan satışlardan iptaller, iadeler ve geri ödemeler düşülerek hesaplanır. İade sonuçlarının oturması için başarı payı takip eden ayda kesinleştirilir.",
  },
  {
    q: "Reklam ve influencer bütçesi fiyata dahil mi?",
    a: "Hayır. Meta, Trendyol ve influencer harcamaları ile ürün gönderimi ve profesyonel prodüksiyon ajans bedelinden ayrıdır ve doğrudan marka tarafından karşılanır.",
  },
  {
    q: "Minimum sözleşme süresi var mı?",
    a: "Öğrenme ve ölçekleme için ilk sözleşme dönemi en az 3 ay olarak planlanır. VIP Category Leadership Program için minimum süre 6 aydır.",
  },
  {
    q: "Yeni açılan bir Trendyol mağazası için model nasıl işliyor?",
    a: "Geçmiş verisi olmayan mağazalarda ilk 90 gün aylık sabit hizmet bedeli ve tamamlanan net ciro üzerinden %2-%3 oranı uygulanır. Veri oluştuktan sonra baz ciro ve artış modeline geçilir.",
  },
  {
    q: "Satış garantisi veriyor musunuz?",
    a: "Kesin ciro garantisi vermiyoruz. Bunun yerine baz dönem, 30 günlük test planı ve haftalık raporla desteklenen veri temelli hedef ve performans senaryosu sunuyoruz.",
  },
  {
    q: "Neden fiyatlar kapsamlı ajansların altında?",
    a: "RAENA ucuz ajans değildir; ilk referans döneminde fiyat avantajı sunan bir performans ajansıdır. Sabit ücreti erişilebilir tutup kazancımızın bir bölümünü sizin ölçülebilir büyümenize bağlıyoruz.",
  },
];
