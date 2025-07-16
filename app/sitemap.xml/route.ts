import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://es.heightcomparisonchart.com";
  const lastMod = new Date().toISOString().split("T")[0];

  const urls = [
    { loc: baseUrl, priority: 1, changeFreq: "monthly" },
    { loc: `${baseUrl}/sobre-nosotras`, priority: 0.8, changeFreq: "yearly" },
    { loc: `${baseUrl}/contacto`, priority: 0.7, changeFreq: "yearly" },
    { loc: `${baseUrl}/preguntas-frecuentes`, priority: 0.7, changeFreq: "monthly" },
    { loc: `${baseUrl}/politica-de-privacidad`, priority: 0.6, changeFreq: "yearly" },
    { loc: `${baseUrl}/terminos`, priority: 0.5, changeFreq: "yearly" },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
    urls
      .map(
        ({ loc, priority, changeFreq }) =>
          `\n  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastMod}</lastmod>\n    <changefreq>${changeFreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`
      )
      .join("") +
    "\n</urlset>";

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
