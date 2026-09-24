const steps = [
  { n: "01", title: "Mağazayı hazırla", text: "Analiz, ürün sayfası ve teklif optimizasyonu" },
  { n: "02", title: "Talep üret", text: "Meta reklamları ve creator iş birlikleri" },
  { n: "03", title: "İçeriği test et", text: "Hook, açı, format ve teklif testleri" },
  { n: "04", title: "Satışı ölç", text: "Net ciro, ROAS, iade ve katkı kârı" },
  { n: "05", title: "Kazananı ölçekle", text: "Bütçeyi kazanan ürün ve içeriğe aktar" },
];

/** RAENA Revenue Loop — beş adımlı büyüme döngüsü görseli */
export function RevenueLoop({ dark = false }: { dark?: boolean }) {
  return (
    <ol className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      <div
        aria-hidden
        className="pointer-events-none absolute top-9 right-[10%] left-[10%] hidden h-px bg-gradient-to-r from-violet via-mint to-violet lg:block"
      />
      {steps.map((s, i) => (
        <li
          key={s.n}
          className={`relative rounded-3xl border p-6 ${
            dark ? "border-white/10 bg-white/[0.04]" : "border-line bg-white"
          }`}
        >
          <span
            className={`relative z-10 grid h-12 w-12 place-items-center rounded-2xl text-sm font-bold ${
              i === steps.length - 1 ? "bg-mint text-navy" : "bg-violet text-white"
            }`}
          >
            {s.n}
          </span>
          <h3 className={`mt-5 text-lg font-bold ${dark ? "text-white" : "text-ink"}`}>
            {s.title}
          </h3>
          <p className={`mt-2 text-sm leading-6 ${dark ? "text-white/60" : "text-muted"}`}>
            {s.text}
          </p>
        </li>
      ))}
    </ol>
  );
}
