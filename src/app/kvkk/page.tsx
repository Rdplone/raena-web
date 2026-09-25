import { Breadcrumbs, PageHero } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";
import { fullAddress, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "KVKK Aydınlatma Metni | RAENA",
  description:
    "RAENA web sitesi iletişim formu aracılığıyla işlenen kişisel verilere ilişkin 6698 sayılı KVKK kapsamındaki aydınlatma metni.",
  path: "/kvkk",
});

export default function KvkkPage() {
  return (
    <>
      <PageHero eyebrow="Yasal" title="KVKK Aydınlatma Metni">
        <div className="mt-8">
          <Breadcrumbs items={[{ name: "KVKK Aydınlatma Metni" }]} />
        </div>
      </PageHero>
      <section className="py-16 sm:py-20">
        <div className="container-x prose-raena max-w-3xl">
          <p>
            Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;)
            uyarınca, veri sorumlusu sıfatıyla {site.legalName} (&quot;RAENA&quot;) tarafından, web
            sitemizdeki iletişim formu aracılığıyla paylaştığınız kişisel verilerin işlenmesine
            ilişkin olarak hazırlanmıştır.
          </p>
          <h2>İşlenen kişisel veriler</h2>
          <p>
            Ad soyad, e-posta adresi, telefon numarası, marka/şirket adı, mağaza bağlantısı ve
            mesajınızda paylaştığınız bilgiler.
          </p>
          <h2>İşleme amaçları</h2>
          <ul>
            <li>Talebinize dönüş yapılması ve ücretsiz marka analizinin hazırlanması,</li>
            <li>Hizmet tekliflerinin sunulması ve sözleşme öncesi görüşmelerin yürütülmesi,</li>
            <li>Hukuki yükümlülüklerin yerine getirilmesi.</li>
          </ul>
          <h2>Hukuki sebep ve toplama yöntemi</h2>
          <p>
            Verileriniz, web sitesi formu aracılığıyla elektronik ortamda; KVKK md. 5/2-(c)
            &quot;sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması&quot; ve md. 5/2-(f)
            &quot;meşru menfaat&quot; hukuki sebeplerine dayanılarak toplanmaktadır.
          </p>
          <h2>Aktarım</h2>
          <p>
            Verileriniz, yalnızca yukarıdaki amaçlarla sınırlı olarak e-posta ve barındırma hizmeti
            aldığımız tedarikçilerle paylaşılabilir. Bu hizmet sağlayıcıların sunucuları yurt
            dışında bulunabilir.
          </p>
          <h2>Haklarınız</h2>
          <p>
            KVKK md. 11 kapsamındaki haklarınıza ilişkin taleplerinizi {fullAddress} adresine yazılı
            olarak veya{" "}
            <a href={`mailto:${site.email}`} className="font-semibold text-violet underline">
              {site.email}
            </a>{" "}
            adresine iletebilirsiniz.
          </p>
          <p className="text-sm text-muted">
            Not: Bu metin genel bir şablondur; yayına alınmadan önce şirket unvanı ve MERSİS
            bilgileriyle güncellenmeli ve bir hukuk danışmanı tarafından kontrol edilmelidir.
          </p>
        </div>
      </section>
    </>
  );
}
