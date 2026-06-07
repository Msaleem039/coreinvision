import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0b0f19",
    theme_color: "#6366f1",
    icons: [{ src: "/icon", sizes: "512x512", type: "image/png" }],
  };
}
