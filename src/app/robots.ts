// app/robots.ts
// Generates /robots.txt automatically.
// Allows all crawlers full access and points them to the sitemap.

import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],   // keep API routes private from crawlers
      },
    ],
    sitemap: "https://trueorbitbookkeeping.com/sitemap.xml",
    host: "https://trueorbitbookkeeping.com",
  };
}
