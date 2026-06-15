import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const runtime = "edge";
export const alt = `${siteConfig.name} — Software Development Agency`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 64,
          background: "linear-gradient(135deg, #1a2b3c 0%, #0d5c6d 55%, #0d9488 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 8,
              background: "#0d9488",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            C
          </div>
          <span style={{ fontSize: 28, fontWeight: 600, opacity: 0.9 }}>{siteConfig.name}</span>
        </div>
        <div style={{ fontSize: 48, fontWeight: 700, lineHeight: 1.2, maxWidth: 900 }}>
          {siteConfig.tagline}
        </div>
        <div style={{ fontSize: 24, marginTop: 24, opacity: 0.85, maxWidth: 800 }}>
          Local SEO · Web Design · Lead Generation
        </div>
      </div>
    ),
    { ...size },
  );
}
