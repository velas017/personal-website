import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { getAllSlugs } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: site.url, lastModified: now, changeFrequency: "monthly", priority: 1 },
    ...getAllSlugs().map((slug) => ({
      url: `${site.url}/projects/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
