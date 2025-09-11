import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.motionbender.com.br";

  return {
    rules: [
      {
        userAgent: "*",
        disallow: [
          "/_components/", // Bloqueia acesso direto à pasta de componentes
          "/types/", // Bloqueia acesso direto à pasta de types
        ],
        allow: ["/"], // Permite indexação do restante
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
