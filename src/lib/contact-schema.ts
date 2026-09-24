import { z } from "zod";

export const revenueRanges = [
  "Henüz satış yok / yeni mağaza",
  "0 - 100.000 TL",
  "100.000 - 500.000 TL",
  "500.000 - 1.000.000 TL",
  "1.000.000 TL +",
] as const;

export const interestOptions = [
  "RAENA 360° Büyüme Paketi",
  "Trendyol Büyüme",
  "Meta Performans",
  "Influencer",
  "VIP Category Leadership Program",
  "Henüz emin değilim",
] as const;

/** Hem istemci hem sunucu tarafında kullanılan form doğrulama şeması */
export const contactSchema = z.object({
  name: z
    .string({ error: "Lütfen adınızı ve soyadınızı yazın." })
    .trim()
    .min(2, "Lütfen adınızı ve soyadınızı yazın.")
    .max(100),
  email: z.email({ error: "Geçerli bir e-posta adresi girin." }).max(160),
  phone: z
    .string()
    .trim()
    .max(30)
    .regex(/^[+\d\s()-]*$/, "Telefon numarası yalnızca rakam içermelidir.")
    .optional()
    .or(z.literal("")),
  brand: z
    .string({ error: "Marka veya şirket adını yazın." })
    .trim()
    .min(2, "Marka veya şirket adını yazın.")
    .max(120),
  storeUrl: z.string().trim().max(300).optional().or(z.literal("")),
  revenue: z.enum(revenueRanges).optional().or(z.literal("")),
  interest: z.enum(interestOptions, { error: "Lütfen ilgilendiğiniz hizmeti seçin." }),
  message: z.string().trim().max(3000).optional().or(z.literal("")),
  consent: z.literal(true, { error: "Devam etmek için aydınlatma metnini onaylayın." }),
  // Bot koruması: gizli alan boş kalmalı, form en az 3 sn açık kalmış olmalı
  website: z.string().max(0).optional().or(z.literal("")),
  startedAt: z.number().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
