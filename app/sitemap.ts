import { APP_URL } from "@/misc/routes";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://es.heightcomparisonchart.com";
  
  return [
    {
      url: baseUrl,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/sobre-nosotras`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/preguntas-frecuentes`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/politica-de-privacidad`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/terminos`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
