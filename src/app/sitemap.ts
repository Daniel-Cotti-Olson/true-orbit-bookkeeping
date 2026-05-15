// app/sitemap.ts
// Generates /sitemap.xml automatically at build time and on-demand.
// No configuration needed — Vercel picks this up automatically.

import type { MetadataRoute } from "next";

const BASE_URL = "https://trueorbitbookkeeping.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    // ── Homepage ──────────────────────────────────────────────
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1.0,
    },

    // ── Service pages ─────────────────────────────────────────
    {
      url: `${BASE_URL}/services/full-cycle-bookkeeping`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/financial-strategy`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/tax-readiness`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/financial-reporting`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/accounts-payable-receivable`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/audit-support`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
