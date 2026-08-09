import type { MetadataRoute } from "next";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: profile.siteUrl,
      changeFrequency: "monthly",
      priority: 1,
      images: [`${profile.siteUrl}/images/profile/collins-wilson.jpg`],
    },
    ...projects.map((project) => ({
      url: `${profile.siteUrl}/work/${project.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      ...(project.heroImage
        ? { images: [new URL(project.heroImage, profile.siteUrl).toString()] }
        : {}),
    })),
  ];
}
