"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRef, useState, type FormEvent } from "react";
import { contactSchema, interestOptions, revenueRanges } from "@/lib/contact-schema";
import { ArrowRight, Check } from "./Icons";

type Status = "idle" | "sending" | "success" | "error";

const inputCls =
  "mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 text-[15px] text-ink outline-none transition placeholder:text-muted/60 focus:border-violet focus:ring-4 focus:ring-violet/10 aria-[invalid=true]:border-[#d6405f]";

const presetByParam: Record<string, (typeof interestOptions)[number]> = {
  vip: "VIP Category Leadership Program",
  "360": "RAENA 360° Büyüme Paketi",
  trendyol: "Trendyol Büyüme",
  meta: "Meta Performans",
  influencer: "Influencer",
};

export function ContactForm() {
  const params = useSearchParams();
  const preset = presetByParam[params.get("paket") ?? ""] ?? "";
  const startedAt = useRef(0);
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const markStart = () => {
    if (!startedAt.current) startedAt.current = Date.now();
  };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      brand: String(fd.get("brand") ?? ""),
      storeUrl: String(fd.get("storeUrl") ?? ""),
      revenue: String(fd.get("revenue") ?? ""),
      interest: String(fd.get("interest") ?? ""),
      message: String(fd.get("message") ?? ""),
      consent: fd.get("consent") === "on",
      website: String(fd.get("website") ?? ""),
      startedAt: startedAt.current || undefined,
    };

    const check = contactSchema.safeParse(payload);
    if (!check.success) {
      const fe: Record<string, string> = {};
      for (const i of check.error.issues) fe[String(i.path[0])] ??= i.message;
      setErrors(fe);
      setStatus("error");
      setMessage("Lütfen işaretli alanları kontrol edin.");
      const first = Object.keys(fe)[0];
      e.currentTarget.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    setErrors({});
    setStatus("sending");
    setMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json()) as {
        ok: boolean;
        message?: string;
        fieldErrors?: Record<string, string>;
      };
      if (!res.ok || !json.ok) {
        setErrors(json.fieldErrors ?? {});
        setStatus("error");
        setMessage(json.message ?? "Bir hata oluştu.");
        return;
      }
      setStatus("success");
    } catch {
      setStatus("error");
      setMessage("Bağlantı hatası. Lütfen tekrar deneyin.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[2rem] border border-line bg-white p-10 text-center" role="status">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-mint text-navy">
          <Check className="h-8 w-8" strokeWidth={2.5} />
        </span>
        <h2 className="mt-6 text-2xl font-bold text-ink">Talebiniz bize ulaştı.</h2>
        <p className="mx-auto mt-3 max-w-md text-muted">
          Ekibimiz mağazanızı inceleyip en geç 2 iş günü içinde sizinle iletişime geçecek.
        </p>
        <Link href="/blog" className="btn btn-outline mt-8">
          Bu arada blogumuza göz atın
        </Link>
      </div>
    );
  }

  const err = (name: string) =>
    errors[name] ? (
      <span id={`${name}-error`} className="mt-1.5 block text-sm text-[#d6405f]">
        {errors[name]}
      </span>
    ) : null;
  const a11y = (name: string) => ({
    "aria-invalid": Boolean(errors[name]),
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      onFocus={markStart}
      className="rounded-[2rem] border border-line bg-white p-7 shadow-[0_40px_80px_-60px_rgba(17,21,43,0.5)] sm:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-semibold text-ink">Ad Soyad *</span>
          <input name="name" autoComplete="name" className={inputCls} {...a11y("name")} />
          {err("name")}
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-ink">Marka / Şirket *</span>
          <input name="brand" autoComplete="organization" className={inputCls} {...a11y("brand")} />
          {err("brand")}
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-ink">E-posta *</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            className={inputCls}
            {...a11y("email")}
          />
          {err("email")}
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-ink">Telefon</span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+90 5xx xxx xx xx"
            className={inputCls}
            {...a11y("phone")}
          />
          {err("phone")}
        </label>
        <label className="block sm:col-span-2">
          <span className="text-sm font-semibold text-ink">Trendyol mağaza bağlantısı</span>
          <input
            name="storeUrl"
            inputMode="url"
            placeholder="https://www.trendyol.com/magaza/..."
            className={inputCls}
          />
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-ink">Aylık net ciro</span>
          <select name="revenue" defaultValue="" className={inputCls}>
            <option value="">Seçiniz</option>
            {revenueRanges.map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-ink">İlgilendiğiniz hizmet *</span>
          <select name="interest" defaultValue={preset} className={inputCls} {...a11y("interest")}>
            <option value="" disabled>
              Seçiniz
            </option>
            {interestOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
          {err("interest")}
        </label>
        <label className="block sm:col-span-2">
          <span className="text-sm font-semibold text-ink">Mesajınız</span>
          <textarea
            name="message"
            rows={4}
            placeholder="Kategoriniz, hedefleriniz ve şu an yaşadığınız zorluklar..."
            className={`${inputCls} resize-y`}
          />
        </label>

        {/* Bot tuzağı — kullanıcılar görmez */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
          <label>
            Web sitesi
            <input name="website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        <label className="flex items-start gap-3 sm:col-span-2">
          <input
            type="checkbox"
            name="consent"
            className="mt-1 h-4 w-4 shrink-0 accent-violet"
            {...a11y("consent")}
          />
          <span className="text-sm leading-6 text-muted">
            <Link href="/kvkk" target="_blank" className="font-semibold text-violet underline">
              KVKK Aydınlatma Metni
            </Link>
            &apos;ni okudum; talebime dönüş yapılması amacıyla kişisel verilerimin işlenmesini kabul
            ediyorum. *{err("consent")}
          </span>
        </label>
      </div>

      {status === "error" && message && (
        <p role="alert" className="mt-6 rounded-xl bg-[#fdecef] px-4 py-3 text-sm text-[#b3263f]">
          {message}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn btn-primary mt-8 w-full !py-4 text-base"
      >
        {status === "sending" ? "Gönderiliyor..." : "Ücretsiz analiz talep et"}
        {status !== "sending" && <ArrowRight className="h-5 w-5" />}
      </button>
    </form>
  );
}
