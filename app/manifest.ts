import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Collins Wilson — Product Engineer and Software Engineer",
    short_name: "Collins Wilson",
    description:
      "Product Engineer with more than six years turning product and business requirements into useful software.",
    start_url: "/",
    display: "standalone",
    background_color: "#06080d",
    theme_color: "#06080d",
    icons: [{ src: "/favicon.png", sizes: "1024x1024", type: "image/png" }],
  };
}
