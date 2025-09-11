import type { MetadataRoute } from "next";

const BASE_URL = "https://www.motionbender.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: `${BASE_URL}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    // Adicione novas páginas quando existirem, ex:
    // { url: `${BASE_URL}/contato`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
  ];
}
