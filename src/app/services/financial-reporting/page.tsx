// app/services/financial-reporting/page.tsx
// SERVER COMPONENT — no "use client" — fully indexable by Google

import type { Metadata } from "next";
import Link from "next/link";
import {
  BarChart2, ArrowRight, Check, ChevronDown,
  BookOpen, TrendingUp, FileText, Calculator, Shield
} from "lucide-react";

// ── SEO Metadata ────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Financial Reporting for Small Businesses | True Orbit Bookkeeping",
  description:
    "Clear, timely financial statements your business can actually use. True Orbit delivers monthly P&L, balance sheet, and cash flow reports formatted for decision-makers — not accountants.",
  keywords: [
    "financial reporting small business",
    "monthly financial statements",
    "profit and loss statement service",
    "balance sheet preparation",
    "cash flow statement small business",
    "remote financial reporting",
    "small business financial reports",
    "financial reporting Portland Oregon",
  ],
  openGraph: {
    title: "Financial Reporting for Small Businesses | True Orbit Bookkeeping",
    description:
      "P&L, balance sheet, cash flow — delivered monthly in plain language. Reports that give you answers, not accounting jargon.",
    url: "https://trueorbitbookkeeping.com/services/financial-reporting",
    siteName: "True Orbit Bookkeeping",
    type: "website",
  },
  alternates: {
    canonical: "https://trueorbitbookkeeping.com/services/financial-reporting",
  },
};

// ── JSON-LD Schema ───────────────────────────────────────────────
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Financial Reporting",
  description:
    "Monthly financial statements — profit & loss, balance sheet, and cash flow — formatted clearly for small business owners who need answers, not accounting jargon.",
  provider: {
    "@type": "LocalBusiness",
    name: "True Orbit Bookkeeping LLC",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Portland",
      addressRegion: "OR",
      addressCountry: "US",
    },
    url: "https://trueorbitbookkeeping.com",
    areaServed: "United States",
  },
  serviceType: "Financial Reporting",
  areaServed: "United States",
};

// ── Colour tokens ────────────────────────────────────────────────
const C = {
  bg:      "#080d1a",
  surface: "#0d1425",
  border:  "#1a2540",
  gold:    "#c9a84c",
  goldLt:  "#e8c96d",
  goldDim: "#7a5f2a",
  text:    "#f1f5f9",
  muted:   "#94a3b8",
  dim:     "#475569",
};

// ── What's included ─────────────────────────────────────────────
const included = [
  "Monthly profit & loss (income) statement",
  "Monthly balance sheet with asset and liability breakdown",
  "Monthly cash flow statement",
  "Year-to-date comparisons against prior periods",
  "Plain-language executive summary with each report package",
  "Custom reports for lenders, investors, or partners on request",
  "Departmental or product-line breakdowns where applicable",
  "Secure delivery in your preferred format (PDF, Excel, QBO)",
];

// ── Report types ─────────────────────────────────────────────────
const reports = [
  {
    title: "Profit & Loss",
    abbr: "P&L",
    desc: "Shows revenue, cost of goods sold, operating expenses, and net profit for the period. The most-read statement in your business.",
    metric: "Net Profit",
    value: "$8,340",
    change: "+11.2%",
    up: true,
  },
  {
    title: "Balance Sheet",
    abbr: "BS",
    desc: "A snapshot of what your business owns, owes, and is worth at a specific point in time. Essential for lenders and investors.",
    metric: "Total Equity",
    value: "$41,820",
    change: "+4.7%",
    up: true,
  },
  {
    title: "Cash Flow",
    abbr: "CF",
    desc: "Tracks actual cash moving in and out of your business — separate from profit. Profitable businesses still fail from poor cash flow.",
    metric: "Net Cash",
    value: "$6,190",
    change: "−2.1%",
    up: false,
  },
];

// ── FAQ ─────────────────────────────────────────────────────────
const faqs = [
  {
    q: "What's the difference between a P&L and a balance sheet?",
    a: "The profit & loss statement (P&L) shows what your business earned and spent over a period of time — a month, a quarter, a year. It tells you whether you made money. The balance sheet is a snapshot at a single point in time showing what your business owns (assets), what it owes (liabilities), and what's left over (equity). Both are essential, and neither tells the full story without the other.",
  },
  {
    q: "Why do I need a cash flow statement if I already have a P&L?",
    a: "Because profit and cash are not the same thing. A business can be profitable on paper while simultaneously running out of cash — this happens when revenue is recognized before it's collected, or when expenses are paid before they show up in your P&L. The cash flow statement shows the actual movement of money, which is what keeps the lights on. Many business failures happen to profitable companies with poor cash visibility.",
  },
  {
    q: "How are your reports different from what QuickBooks already generates?",
    a: "QuickBooks can generate reports automatically — but only if the underlying data is clean, categorized correctly, and reconciled. Most business owners who run their own books have significant errors in their data that make auto-generated reports misleading. Our reports are built on verified, reconciled data, reviewed by a professional, and delivered with a plain-language summary that tells you what the numbers actually mean for your business.",
  },
  {
    q: "Can I get reports formatted for a bank loan or investor?",
    a: "Yes. Lenders and investors have specific expectations for how financial statements should be presented — typically GAAP-adjacent formatting with clear period comparisons and supporting schedules. We produce custom report packages for loan applications, SBA financing, investor decks, and partnership agreements on request.",
  },
  {
    q: "How quickly are reports delivered each month?",
    a: "Most clients receive their monthly financial package within the first 10 business days of the following month — once all transactions from the prior period are settled and reconciled. For clients who need faster turnaround for board meetings or investor reporting, we offer priority delivery schedules.",
  },
  {
    q: "Do I need an accountant to understand these reports?",
    a: "Not with ours. Every monthly package includes a plain-language executive summary that translates the numbers into plain English: what changed, why it changed, what to watch, and what it means for your business. We write for owners, not auditors.",
  },
];

// ── Related services ─────────────────────────────────────────────
const related = [
  { icon: <BookOpen size={20} />,   title: "Full-Cycle Bookkeeping",        href: "/services/full-cycle-bookkeeping",      desc: "The accurate data that makes reliable reports possible." },
  { icon: <TrendingUp size={20} />, title: "Financial Strategy",             href: "/services/financial-strategy",          desc: "Turn your reports into a forward-looking growth plan." },
  { icon: <FileText size={20} />,   title: "Tax Readiness",                  href: "/services/tax-readiness",               desc: "Reports formatted for a seamless hand-off to your CPA." },
  { icon: <Calculator size={20} />, title: "Accounts Payable & Receivable",  href: "/services/accounts-payable-receivable", desc: "The transactions that feed every report we produce." },
  { icon: <Shield size={20} />,     title: "Audit Support",                  href: "/services/audit-support",               desc: "Reports built to withstand scrutiny from day one." },
];

// ════════════════════════════════════════════════════════════════
export default function FinancialReportingPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body {
          background: ${C.bg};
          color: ${C.text};
          font-family: 'DM Sans', sans-serif;
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
        }
        body::before {
          content: '';
          position: fixed; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none; z-index: 0; opacity: 0.4;
        }

        /* ── Nav ── */
        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          padding: 0 48px; height: 72px;
          display: flex; align-items: center; justify-content: space-between;
          background: rgba(8,13,26,0.92);
          border-bottom: 1px solid ${C.border};
          backdrop-filter: blur(12px);
        }
        .nav-links { display: flex; gap: 20px; list-style: none; }
        .nav-links a {
          font-size: 13px; font-weight: 500; letter-spacing: 0.08em;
          text-transform: uppercase; color: ${C.muted}; text-decoration: none;
          transition: color 0.2s;
        }
        .nav-links a:hover { color: ${C.gold}; }
        .nav-cta {
          background: transparent; border: 1px solid ${C.gold};
          color: ${C.gold}; font-family: 'DM Sans', sans-serif;
          font-size: 12px; font-weight: 600; letter-spacing: 0.1em;
          text-transform: uppercase; padding: 10px 24px; border-radius: 2px;
          cursor: pointer; text-decoration: none;
          transition: background 0.2s, color 0.2s; display: inline-block;
        }
        .nav-cta:hover { background: ${C.gold}; color: ${C.bg}; }

        /* ── Breadcrumb ── */
        .breadcrumb {
          padding: 96px 48px 0; max-width: 1200px; margin: 0 auto;
          display: flex; align-items: center; gap: 8px;
          font-size: 12px; color: ${C.dim};
          letter-spacing: 0.06em; text-transform: uppercase;
        }
        .breadcrumb a { color: ${C.dim}; text-decoration: none; transition: color 0.2s; }
        .breadcrumb a:hover { color: ${C.gold}; }
        .breadcrumb-sep { color: ${C.border}; }

        /* ── Hero ── */
        .page-hero {
          padding: 48px 48px 80px; max-width: 1200px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 80px; align-items: center;
        }
        .hero-bg-grid {
          position: fixed; inset: 0; pointer-events: none; z-index: -1;
          background-image:
            linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 80% 60% at 50% 20%, black, transparent);
        }
        .section-label {
          font-size: 11px; font-weight: 600; letter-spacing: 0.2em;
          text-transform: uppercase; color: ${C.gold}; margin-bottom: 16px;
          display: flex; align-items: center; gap: 12px;
        }
        .section-label::after {
          content: ''; flex: 1; max-width: 60px; height: 1px; background: ${C.goldDim};
        }
        .page-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          font-weight: 700; line-height: 1.08;
          color: ${C.text}; margin-bottom: 24px; letter-spacing: -0.01em;
        }
        .page-title span {
          background: linear-gradient(135deg, ${C.goldDim} 0%, ${C.goldLt} 50%, ${C.goldDim} 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .page-intro { font-size: 1.05rem; color: ${C.muted}; line-height: 1.8; font-weight: 300; margin-bottom: 36px; }
        .hero-actions { display: flex; gap: 16px; flex-wrap: wrap; }
        .btn-primary {
          background: linear-gradient(135deg, ${C.goldDim}, ${C.gold});
          color: ${C.bg}; border: none; font-family: 'DM Sans', sans-serif;
          font-size: 13px; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; padding: 16px 32px; border-radius: 2px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          text-decoration: none; transition: opacity 0.2s, transform 0.2s, box-shadow 0.2s;
        }
        .btn-primary:hover { opacity: 0.9; transform: translateY(-2px); box-shadow: 0 8px 32px rgba(201,168,76,0.3); }
        .btn-ghost {
          background: transparent; color: ${C.muted}; border: 1px solid ${C.border};
          font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500;
          letter-spacing: 0.06em; text-transform: uppercase; padding: 16px 32px;
          border-radius: 2px; cursor: pointer; text-decoration: none;
          display: inline-flex; align-items: center; gap: 8px;
          transition: color 0.2s, border-color 0.2s;
        }
        .btn-ghost:hover { color: ${C.gold}; border-color: ${C.goldDim}; }

        /* ── Hero card ── */
        .hero-card {
          background: ${C.surface}; border: 1px solid ${C.border};
          border-radius: 4px; padding: 36px;
          position: relative; overflow: hidden;
        }
        .hero-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, ${C.goldDim}, ${C.gold}, ${C.goldDim});
        }
        .hero-card-icon {
          width: 56px; height: 56px; border: 1px solid ${C.border}; border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          color: ${C.gold}; margin-bottom: 20px; background: rgba(201,168,76,0.05);
        }
        .hero-card-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.3rem; font-weight: 700; color: ${C.text}; margin-bottom: 20px;
        }

        /* ── Mini report cards ── */
        .mini-reports { display: flex; flex-direction: column; gap: 10px; }
        .mini-report {
          border: 1px solid ${C.border}; border-radius: 4px;
          background: rgba(8,13,26,0.5); padding: 14px 16px;
          display: flex; align-items: center; justify-content: space-between; gap: 12px;
        }
        .mini-report-left { display: flex; align-items: center; gap: 12px; }
        .mini-abbr {
          width: 36px; height: 36px; border-radius: 6px; flex-shrink: 0;
          background: rgba(201,168,76,0.1); border: 1px solid rgba(201,168,76,0.2);
          display: flex; align-items: center; justify-content: center;
          font-size: 10px; font-weight: 700; letter-spacing: 0.05em;
          color: ${C.gold};
        }
        .mini-report-name { font-size: 13px; font-weight: 500; color: ${C.text}; }
        .mini-report-metric { font-size: 11px; color: ${C.dim}; margin-top: 2px; }
        .mini-report-right { text-align: right; flex-shrink: 0; }
        .mini-val { font-family: 'Cormorant Garamond', serif; font-size: 1.2rem; font-weight: 700; color: ${C.text}; }
        .mini-change { font-size: 11px; font-weight: 600; margin-top: 2px; }
        .up { color: #4ade80; }
        .down { color: #fb923c; }
        .hero-card-caption {
          font-size: 11px; color: ${C.dim}; letter-spacing: 0.06em;
          text-align: center; margin-top: 12px; font-style: italic;
        }

        /* ── Sections ── */
        .section { padding: 80px 48px; max-width: 1200px; margin: 0 auto; }
        .section-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.8rem, 3.5vw, 2.8rem);
          font-weight: 700; line-height: 1.1;
          color: ${C.text}; margin-bottom: 16px; letter-spacing: -0.01em;
        }
        .section-title span { color: ${C.gold}; }
        .section-body { font-size: 1rem; color: ${C.muted}; line-height: 1.75; max-width: 560px; font-weight: 300; }
        .divider { border: none; border-top: 1px solid ${C.border}; margin: 0; }

        /* ── Included grid ── */
        .included-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 48px; }
        .included-item {
          display: flex; align-items: flex-start; gap: 14px; padding: 18px 20px;
          border: 1px solid ${C.border}; border-radius: 4px;
          background: ${C.surface}; transition: border-color 0.2s;
        }
        .included-item:hover { border-color: ${C.goldDim}; }
        .included-check {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(201,168,76,0.1); border: 1px solid rgba(201,168,76,0.3);
          display: flex; align-items: center; justify-content: center;
          color: ${C.gold}; flex-shrink: 0; margin-top: 1px;
        }
        .included-text { font-size: 14px; color: ${C.muted}; line-height: 1.6; font-weight: 400; }

        /* ── Report explainer grid ── */
        .report-grid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 1px; background: ${C.border}; border: 1px solid ${C.border};
          margin-top: 48px;
        }
        .report-cell {
          background: ${C.surface}; padding: 36px 28px;
          position: relative; overflow: hidden; transition: background 0.2s;
        }
        .report-cell::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(201,168,76,0.04), transparent);
          opacity: 0; transition: opacity 0.3s;
        }
        .report-cell:hover::before { opacity: 1; }
        .report-abbr-badge {
          display: inline-flex; align-items: center; justify-content: center;
          width: 48px; height: 48px; border-radius: 8px;
          background: rgba(201,168,76,0.08); border: 1px solid rgba(201,168,76,0.2);
          font-size: 11px; font-weight: 700; letter-spacing: 0.06em;
          color: ${C.gold}; margin-bottom: 16px;
        }
        .report-cell-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.25rem; font-weight: 700; color: ${C.text}; margin-bottom: 10px;
        }
        .report-cell-desc { font-size: 13px; color: ${C.muted}; line-height: 1.7; font-weight: 300; }
        .report-cell-metric {
          margin-top: 20px; padding-top: 16px; border-top: 1px solid ${C.border};
          display: flex; justify-content: space-between; align-items: baseline;
        }
        .report-metric-label { font-size: 11px; color: ${C.dim}; letter-spacing: 0.08em; text-transform: uppercase; }
        .report-metric-value {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.4rem; font-weight: 700; color: ${C.gold};
        }

        /* ── Body copy ── */
        .body-section { padding: 0 48px 80px; max-width: 1200px; margin: 0 auto; }
        .body-section-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; }
        .body-copy h3 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.5rem; font-weight: 700; color: ${C.text}; margin-bottom: 14px;
        }
        .body-copy p { font-size: 15px; color: ${C.muted}; line-height: 1.8; font-weight: 300; margin-bottom: 16px; }

        /* ── FAQ ── */
        .faq-list { margin-top: 48px; display: flex; flex-direction: column; gap: 2px; }
        .faq-item { border: 1px solid ${C.border}; background: ${C.surface}; overflow: hidden; }
        .faq-item:first-child { border-radius: 4px 4px 0 0; }
        .faq-item:last-child  { border-radius: 0 0 4px 4px; }
        .faq-q {
          width: 100%; background: none; border: none; cursor: pointer;
          padding: 22px 28px; display: flex; align-items: center;
          justify-content: space-between; text-align: left; gap: 16px;
          font-family: 'DM Sans', sans-serif; font-size: 15px; font-weight: 500;
          color: ${C.text}; transition: color 0.2s; list-style: none;
        }
        .faq-q:hover { color: ${C.gold}; }
        .faq-a { padding: 0 28px 22px; font-size: 14px; color: ${C.muted}; line-height: 1.75; font-weight: 300; }

        /* ── Related ── */
        .related-grid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 1px; background: ${C.border}; border: 1px solid ${C.border}; margin-top: 48px;
        }
        .related-card {
          background: ${C.surface}; padding: 28px 24px;
          display: flex; flex-direction: column; gap: 10px;
          text-decoration: none; position: relative; overflow: hidden;
        }
        .related-card::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(201,168,76,0.04), transparent);
          opacity: 0; transition: opacity 0.3s;
        }
        .related-card:hover::before { opacity: 1; }
        .related-icon { color: ${C.gold}; }
        .related-title { font-family: 'Cormorant Garamond', serif; font-size: 1.1rem; font-weight: 600; color: ${C.text}; }
        .related-desc { font-size: 13px; color: ${C.muted}; line-height: 1.6; font-weight: 300; }
        .related-arrow {
          color: ${C.goldDim}; margin-top: auto; padding-top: 8px;
          display: flex; align-items: center; gap: 6px;
          font-size: 12px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase;
          transition: color 0.2s, gap 0.2s;
        }
        .related-card:hover .related-arrow { color: ${C.gold}; gap: 10px; }

        /* ── CTA ── */
        .cta-banner {
          margin: 0 auto 80px; padding: 56px 64px; max-width: 1104px;
          border: 1px solid ${C.border}; background: ${C.surface}; border-radius: 4px;
          display: flex; align-items: center; justify-content: space-between;
          gap: 40px; position: relative; overflow: hidden;
        }
        .cta-banner::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, ${C.goldDim}, ${C.gold}, ${C.goldDim});
        }
        .cta-glow {
          position: absolute; right: -60px; top: 50%; transform: translateY(-50%);
          width: 300px; height: 300px; border-radius: 50%;
          background: radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%);
          pointer-events: none;
        }
        .cta-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.6rem, 3vw, 2.4rem);
          font-weight: 700; color: ${C.text}; line-height: 1.15;
        }
        .cta-title span { color: ${C.gold}; }
        .cta-sub { font-size: 15px; color: ${C.muted}; font-weight: 300; line-height: 1.6; margin-top: 10px; max-width: 400px; }

        /* ── Footer ── */
        .footer { border-top: 1px solid ${C.border}; background: ${C.surface}; padding: 56px 48px 32px; }
        .footer-inner {
          max-width: 1200px; margin: 0 auto;
          display: grid; grid-template-columns: 2fr 1fr 1fr;
          gap: 48px; margin-bottom: 48px;
        }
        .footer-tagline { font-size: 13px; color: ${C.dim}; line-height: 1.7; font-weight: 300; margin-top: 16px; max-width: 280px; }
        .footer-col-title { font-size: 11px; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; color: ${C.muted}; margin-bottom: 16px; }
        .footer-links { list-style: none; display: flex; flex-direction: column; gap: 10px; }
        .footer-links a { font-size: 14px; color: ${C.dim}; text-decoration: none; transition: color 0.2s; }
        .footer-links a:hover { color: ${C.gold}; }
        .footer-bottom {
          max-width: 1200px; margin: 0 auto; padding-top: 24px;
          border-top: 1px solid ${C.border};
          display: flex; justify-content: space-between; align-items: center;
          font-size: 12px; color: ${C.dim};
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .nav { padding: 0 24px; }
          .nav-links { display: none; }
          .breadcrumb { padding: 96px 24px 0; }
          .page-hero { grid-template-columns: 1fr; gap: 40px; padding: 32px 24px 60px; }
          .section { padding: 60px 24px; }
          .body-section { padding: 0 24px 60px; }
          .body-section-inner { grid-template-columns: 1fr; gap: 32px; }
          .included-grid { grid-template-columns: 1fr; }
          .report-grid { grid-template-columns: 1fr; }
          .related-grid { grid-template-columns: 1fr; }
          .cta-banner { flex-direction: column; align-items: flex-start; padding: 36px 28px; margin: 0 24px 60px; }
          .footer { padding: 40px 24px 24px; }
          .footer-inner { grid-template-columns: 1fr; gap: 32px; }
          .footer-bottom { flex-direction: column; gap: 8px; text-align: center; }
        }
      `}</style>

      <div className="hero-bg-grid" aria-hidden="true" />

      {/* ── Nav ── */}
      <nav className="nav" aria-label="Main navigation">
        <Link href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/Color_logo_-_no_background.svg" alt="True Orbit Bookkeeping" width={160} height={48} style={{ objectFit: "contain" }} />
        </Link>
        <ul className="nav-links">
          <li><Link href="/#services">Services</Link></li>
          <li><Link href="/#about">About</Link></li>
          <li><Link href="/#pricing">Pricing</Link></li>
          <li><Link href="/#contact">Contact</Link></li>
        </ul>
        <Link href="/#contact" className="nav-cta">Free Consultation</Link>
      </nav>

      {/* ── Breadcrumb ── */}
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span className="breadcrumb-sep">›</span>
        <Link href="/#services">Services</Link>
        <span className="breadcrumb-sep">›</span>
        <span style={{ color: C.gold }}>Financial Reporting</span>
      </nav>

      {/* ── Page Hero ── */}
      <header className="page-hero">
        <div>
          <div className="section-label">Monthly Statements</div>
          <h1 className="page-title">
            Financial<br />
            <span>Reporting</span>
          </h1>
          <p className="page-intro">
            Your financial statements should answer questions, not raise them.
            We deliver clear, timely P&L, balance sheet, and cash flow reports
            every month — formatted for business owners who need answers, not
            a degree in accounting to interpret them.
          </p>
          <div className="hero-actions">
            <Link href="/#contact" className="btn-primary">
              Get a Free Consultation <ArrowRight size={16} />
            </Link>
            <Link href="/#pricing" className="btn-ghost">
              View Pricing
            </Link>
          </div>
        </div>

        {/* Sample report summary preview */}
        <div className="hero-card">
          <div className="hero-card-icon">
            <BarChart2 size={28} />
          </div>
          <div className="hero-card-title">Monthly Report Summary</div>
          <div className="mini-reports">
            {reports.map((r, i) => (
              <div className="mini-report" key={i}>
                <div className="mini-report-left">
                  <div className="mini-abbr">{r.abbr}</div>
                  <div>
                    <div className="mini-report-name">{r.title}</div>
                    <div className="mini-report-metric">{r.metric}</div>
                  </div>
                </div>
                <div className="mini-report-right">
                  <div className="mini-val">{r.value}</div>
                  <div className={`mini-change ${r.up ? "up" : "down"}`}>{r.change} MoM</div>
                </div>
              </div>
            ))}
          </div>
          <p className="hero-card-caption">Sample of your monthly financial package</p>
        </div>
      </header>

      <hr className="divider" />

      {/* ── What's Included ── */}
      <section className="section" aria-labelledby="included-heading">
        <div className="section-label">What You Get</div>
        <h2 className="section-title" id="included-heading">
          Reports That Give You<br />
          <span>Answers, Not Jargon</span>
        </h2>
        <p className="section-body">
          Every monthly package is built on verified, reconciled data and
          delivered with a plain-language summary. Here's exactly what's included:
        </p>
        <div className="included-grid">
          {included.map((item, i) => (
            <div className="included-item" key={i}>
              <div className="included-check">
                <Check size={12} strokeWidth={3} />
              </div>
              <span className="included-text">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <hr className="divider" />

      {/* ── The Three Core Reports ── */}
      <section className="section" aria-labelledby="reports-heading">
        <div className="section-label">The Core Three</div>
        <h2 className="section-title" id="reports-heading">
          Three Statements,<br />
          <span>One Complete Picture</span>
        </h2>
        <p className="section-body">
          No single report tells the whole story. Together, these three
          statements give you complete visibility into how your business
          performed, where it stands, and where cash is flowing.
        </p>
        <div className="report-grid">
          {reports.map((r, i) => (
            <div className="report-cell" key={i}>
              <div className="report-abbr-badge">{r.abbr}</div>
              <div className="report-cell-title">{r.title}</div>
              <div className="report-cell-desc">{r.desc}</div>
              <div className="report-cell-metric">
                <span className="report-metric-label">{r.metric}</span>
                <span className="report-metric-value">{r.value}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="divider" />

      {/* ── Body Copy ── */}
      <section className="body-section" aria-label="About this service">
        <div className="body-section-inner">
          <div className="body-copy">
            <h3>Reports Are Only as Good as the Data</h3>
            <p>
              Auto-generated reports from QuickBooks or Xero look convincing —
              but if the underlying transactions aren't reconciled and correctly
              categorized, they're misleading. Garbage in, garbage out.
            </p>
            <p>
              Every report we produce is built on verified, reconciled data.
              Before a number appears in your statement, it's been confirmed
              against your actual bank records. That's what makes the reports
              reliable — and what makes decisions based on them sound.
            </p>
          </div>
          <div className="body-copy">
            <h3>Written for Owners, Not Auditors</h3>
            <p>
              Most financial statements are produced for accountants and
              regulators. Ours are produced for you. Every monthly package
              includes a plain-language executive summary: what changed this
              month, why it changed, what to watch, and what action — if any —
              we recommend.
            </p>
            <p>
              When you need reports for a bank loan, investor meeting, or
              business valuation, we produce presentation-ready packages in
              the format your audience expects — complete with period
              comparisons and supporting schedules.
            </p>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── FAQ ── */}
      <section className="section" aria-labelledby="faq-heading">
        <div className="section-label">Common Questions</div>
        <h2 className="section-title" id="faq-heading">
          Everything You Need<br />
          <span>To Know</span>
        </h2>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <details className="faq-item" key={i}>
              <summary className="faq-q">
                {faq.q}
                <ChevronDown size={18} style={{ color: C.gold, flexShrink: 0 }} />
              </summary>
              <p className="faq-a">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <hr className="divider" />

      {/* ── Related Services ── */}
      <section className="section" aria-labelledby="related-heading">
        <div className="section-label">Also Available</div>
        <h2 className="section-title" id="related-heading">
          Complete Your<br />
          <span>Financial Picture</span>
        </h2>
        <p className="section-body">
          Financial reporting is most powerful when it's part of a complete
          system. Explore the services that feed and extend it.
        </p>
        <div className="related-grid">
          {related.map((svc, i) => (
            <Link href={svc.href} className="related-card" key={i}>
              <div className="related-icon">{svc.icon}</div>
              <div className="related-title">{svc.title}</div>
              <div className="related-desc">{svc.desc}</div>
              <div className="related-arrow">
                Learn more <ArrowRight size={14} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <div className="cta-banner">
        <div className="cta-glow" aria-hidden="true" />
        <div>
          <div className="cta-title">
            Know Your Numbers<br />
            <span>Every Single Month</span>
          </div>
          <p className="cta-sub">
            Start with a free discovery call. We'll show you exactly what
            your monthly financial package would look like — and what it
            would tell you that you don't know right now.
          </p>
        </div>
        <Link href="/#contact" className="btn-primary" style={{ whiteSpace: "nowrap", flexShrink: 0 }}>
          Book Free Consultation <ArrowRight size={16} />
        </Link>
      </div>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="footer-inner">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/Color_logo_-_no_background.svg" alt="True Orbit Bookkeeping" width={160} height={48} style={{ objectFit: "contain" }} />
            <p className="footer-tagline">
              Elevating your business through meticulous financial clarity
              and strategic advisory. We orbit your success with precision and care.
            </p>
          </div>
          <div>
            <div className="footer-col-title">Services</div>
            <ul className="footer-links">
              <li><Link href="/services/full-cycle-bookkeeping">Full-Cycle Bookkeeping</Link></li>
              <li><Link href="/services/financial-strategy">Financial Strategy</Link></li>
              <li><Link href="/services/tax-readiness">Tax Readiness</Link></li>
              <li><Link href="/services/financial-reporting">Financial Reporting</Link></li>
              <li><Link href="/services/accounts-payable-receivable">AP & Receivable</Link></li>
              <li><Link href="/services/audit-support">Audit Support</Link></li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Contact</div>
            <ul className="footer-links">
              <li><a href="mailto:info@trueorbitbookkeeping.com">info@trueorbitbookkeeping.com</a></li>
              <li><a href="tel:5033139953">(503) 313-9953</a></li>
              <li><a>Remote — Nationwide</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} True Orbit Bookkeeping LLC. All rights reserved.</span>
          <span style={{ color: C.goldDim }}>Your Trusted Partner in Financial Clarity</span>
        </div>
      </footer>
    </>
  );
}
