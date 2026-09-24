import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "RAENA — Görünürlüğü satışa, satışı büyümeye dönüştürür.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const icon = await readFile(join(process.cwd(), "public/icon-256.png"));
  const iconSrc = `data:image/png;base64,${icon.toString("base64")}`;
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#11152B",
        padding: 80,
        position: "relative",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -220,
          right: -160,
          width: 620,
          height: 620,
          borderRadius: 9999,
          background: "#6C55F6",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -260,
          right: 120,
          width: 420,
          height: 420,
          borderRadius: 9999,
          background: "#4834C7",
        }}
      />
      <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
        <img src={iconSrc} width={96} height={96} alt="" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 56, fontWeight: 800, color: "white", letterSpacing: 2 }}>
            RAENA
          </div>
          <div style={{ fontSize: 20, fontWeight: 700, color: "#46D7B4", letterSpacing: 3 }}>
            E-TICARET BUYUME AJANSI
          </div>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 820 }}>
        <div style={{ fontSize: 64, fontWeight: 800, color: "white", lineHeight: 1.1 }}>
          Görünürlüğü satışa, satışı büyümeye dönüştürür.
        </div>
        <div style={{ fontSize: 28, color: "rgba(255,255,255,0.7)", marginTop: 28 }}>
          Trendyol · Meta Ads · Influencer Marketing
        </div>
      </div>
    </div>,
    size,
  );
}
