import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Collins Wilson — Product Engineer",
    short_name: "Collins Wilson",
    description: "Product Engineer building across web, mobile and APIs.",
    start_url: "/",
    display: "standalone",
    background_color: "#06080d",
    theme_color: "#06080d",
    icons: [{ src: "/favicon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
