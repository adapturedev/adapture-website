import type { MetadataRoute } from "next";

const BASE = "https://flowstatelabs.pt";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE}/pt`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: { pt: `${BASE}/pt`, en: `${BASE}/en` },
      },
    },
    {
      url: `${BASE}/en`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: { pt: `${BASE}/pt`, en: `${BASE}/en` },
      },
    },
  ];
}
