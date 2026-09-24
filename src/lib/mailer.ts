import "server-only";
import nodemailer, { type Transporter } from "nodemailer";

let transporter: Transporter | null = null;

export class MailConfigError extends Error {}

/** Vercel ortam değişkenlerinden SMTP bağlantısını oluşturur (sunucusuz ortamda yeniden kullanılır). */
export function getTransporter() {
  if (transporter) return transporter;
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_SECURE } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    throw new MailConfigError(
      "SMTP_HOST, SMTP_USER ve SMTP_PASS ortam değişkenleri tanımlı değil.",
    );
  }
  const port = Number(SMTP_PORT ?? 465);
  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: SMTP_SECURE ? SMTP_SECURE === "true" : port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
    // Vercel fonksiyon süresini aşmamak için kısa zaman aşımları
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
  });
  return transporter;
}

export function mailAddresses() {
  const from = process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER!;
  const to = (process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER!)
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  return { from, to };
}

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
