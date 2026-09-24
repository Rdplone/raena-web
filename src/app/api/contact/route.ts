import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";
import { escapeHtml, getTransporter, MailConfigError, mailAddresses } from "@/lib/mailer";
import { site } from "@/lib/site";

// Nodemailer TCP soketi kullandığı için Node.js runtime gereklidir (Edge desteklenmez).
export const runtime = "nodejs";
export const maxDuration = 30;

// Basit, örnek başına bellek içi hız sınırlama (Vercel'de her soğuk başlangıçta sıfırlanır).
const hits = new Map<string, { count: number; reset: number }>();
const LIMIT = 5;
const WINDOW_MS = 10 * 60 * 1000;

function rateLimited(ip: string) {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || entry.reset < now) {
    hits.set(ip, { count: 1, reset: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > LIMIT;
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json(
      {
        ok: false,
        message: "Çok fazla deneme yapıldı. Lütfen birkaç dakika sonra tekrar deneyin.",
      },
      { status: 429 },
    );
  }

  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Geçersiz istek." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(json);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "form");
      fieldErrors[key] ??= issue.message;
    }
    return NextResponse.json(
      { ok: false, message: "Lütfen formdaki hataları düzeltin.", fieldErrors },
      { status: 422 },
    );
  }

  const data = parsed.data;

  // Bot tuzakları: doldurulmuş gizli alan veya 3 saniyeden kısa doldurma süresi
  if (data.website || (data.startedAt && Date.now() - data.startedAt < 3000)) {
    return NextResponse.json({ ok: true });
  }

  const rows: [string, string][] = [
    ["Ad Soyad", data.name],
    ["E-posta", data.email],
    ["Telefon", data.phone || "-"],
    ["Marka / Şirket", data.brand],
    ["Mağaza bağlantısı", data.storeUrl || "-"],
    ["Aylık net ciro", data.revenue || "-"],
    ["İlgilenilen hizmet", data.interest],
    ["Mesaj", data.message || "-"],
  ];

  const html = `
    <div style="font-family:Arial,sans-serif;color:#11152B;max-width:620px">
      <h2 style="margin:0 0 4px">Yeni marka analizi talebi</h2>
      <p style="margin:0 0 20px;color:#5b6078">${escapeHtml(site.url)} iletişim formu</p>
      <table cellpadding="10" style="border-collapse:collapse;width:100%;font-size:14px">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="border-bottom:1px solid #e3e5ef;font-weight:bold;width:170px;vertical-align:top">${k}</td><td style="border-bottom:1px solid #e3e5ef;white-space:pre-wrap">${escapeHtml(v)}</td></tr>`,
          )
          .join("")}
      </table>
    </div>`;
  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");

  try {
    const transporter = getTransporter();
    const { from, to } = mailAddresses();

    await transporter.sendMail({
      from,
      to,
      replyTo: { name: data.name, address: data.email },
      subject: `Yeni başvuru: ${data.brand} — ${data.interest}`,
      text,
      html,
    });

    if (process.env.CONTACT_SEND_AUTOREPLY === "true") {
      await transporter
        .sendMail({
          from,
          to: data.email,
          subject: "RAENA | Talebinizi aldık",
          text: `Merhaba ${data.name},\n\nMarka analizi talebiniz bize ulaştı. Ekibimiz en geç 2 iş günü içinde sizinle iletişime geçecek.\n\n${site.slogan}\nRAENA | E-Ticaret Büyüme Ajansı\n${site.url}`,
          html: `<div style="font-family:Arial,sans-serif;color:#11152B;max-width:560px"><p>Merhaba ${escapeHtml(data.name)},</p><p>Marka analizi talebiniz bize ulaştı. Ekibimiz en geç 2 iş günü içinde sizinle iletişime geçecek.</p><p style="color:#6C55F6;font-weight:bold">${site.slogan}</p><p>RAENA | E-Ticaret Büyüme Ajansı<br/><a href="${site.url}" style="color:#6C55F6">${site.url.replace(/^https?:\/\//, "")}</a></p></div>`,
        })
        .catch((err) => console.error("[contact] Otomatik yanıt gönderilemedi:", err));
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] E-posta gönderilemedi:", err);
    const message =
      err instanceof MailConfigError
        ? "Form şu anda yapılandırılıyor. Lütfen bize doğrudan e-posta ile ulaşın."
        : "Mesajınız gönderilemedi. Lütfen daha sonra tekrar deneyin veya e-posta ile ulaşın.";
    return NextResponse.json({ ok: false, message }, { status: 500 });
  }
}
