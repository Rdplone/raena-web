"use client";

import { useId, useState } from "react";

const fmt = new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 0 });

function parse(v: string) {
  const n = Number(v.replace(/\D/g, ""));
  return Number.isFinite(n) ? n : 0;
}

/** Baz dönem ve yeni dönem net cirosuna göre başarı payını hesaplar. */
export function SuccessFeeCalculator() {
  const id = useId();
  const [base, setBase] = useState("500000");
  const [current, setCurrent] = useState("700000");
  const [rate, setRate] = useState<3 | 2>(3);

  const b = parse(base);
  const c = parse(current);
  const growth = Math.max(0, c - b);
  const fee = Math.round((growth * rate) / 100);

  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 sm:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <label htmlFor={`${id}-base`} className="block">
          <span className="text-sm font-medium text-white/70">Baz dönem aylık net ciro (TL)</span>
          <input
            id={`${id}-base`}
            inputMode="numeric"
            value={fmt.format(b)}
            onChange={(e) => setBase(e.target.value)}
            className="mt-2 w-full rounded-xl border border-white/15 bg-navy px-4 py-3 text-lg font-semibold text-white outline-none focus:border-mint"
          />
        </label>
        <label htmlFor={`${id}-cur`} className="block">
          <span className="text-sm font-medium text-white/70">Yeni dönem net ciro (TL)</span>
          <input
            id={`${id}-cur`}
            inputMode="numeric"
            value={fmt.format(c)}
            onChange={(e) => setCurrent(e.target.value)}
            className="mt-2 w-full rounded-xl border border-white/15 bg-navy px-4 py-3 text-lg font-semibold text-white outline-none focus:border-mint"
          />
        </label>
      </div>

      <fieldset className="mt-6">
        <legend className="text-sm font-medium text-white/70">Paket</legend>
        <div className="mt-2 grid grid-cols-2 gap-2 rounded-full bg-navy p-1">
          {[
            { v: 3 as const, l: "360° Büyüme · %3" },
            { v: 2 as const, l: "VIP · %2" },
          ].map((o) => (
            <button
              key={o.v}
              type="button"
              aria-pressed={rate === o.v}
              onClick={() => setRate(o.v)}
              className={`rounded-full px-3 py-2.5 text-sm font-semibold transition ${
                rate === o.v ? "bg-mint text-navy" : "text-white/70 hover:text-white"
              }`}
            >
              {o.l}
            </button>
          ))}
        </div>
      </fieldset>

      <dl className="mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-7" aria-live="polite">
        <div>
          <dt className="text-sm text-white/60">Net büyüme</dt>
          <dd className="mt-1 text-2xl font-bold text-white">{fmt.format(growth)} TL</dd>
        </div>
        <div>
          <dt className="text-sm text-white/60">Aylık başarı payı</dt>
          <dd className="mt-1 text-2xl font-bold text-mint">{fmt.format(fee)} TL</dd>
        </div>
      </dl>
      <p className="mt-5 text-xs leading-5 text-white/45">
        Net ciro: KDV hariç tamamlanan satışlar − iptaller − iadeler − geri ödemeler. Büyüme yoksa
        başarı payı oluşmaz. Hesaplama bilgilendirme amaçlıdır; kesin koşullar sözleşmede
        belirlenir.
      </p>
    </div>
  );
}
