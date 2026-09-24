/** Yapılandırılmış veriyi (schema.org) sayfaya ekler. */
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify çıktısındaki "<" karakteri kaçırılarak XSS riski önlenir.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
