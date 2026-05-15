// app/services/audit-support/page.tsx
// SERVER COMPONENT — no "use client" — fully indexable by Google

import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield, ArrowRight, Check, ChevronDown,
  BookOpen, TrendingUp, FileText, BarChart2, Calculator
} from "lucide-react";

// ── SEO Metadata ────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Audit Support Services for Small Businesses | True Orbit Bookkeeping",
  description:
    "If the IRS comes knocking, you'll be ready. True Orbit keeps your records immaculate, organized, and defensible year-round — so an audit is a process, not a crisis.",
  keywords: [
    "audit support small business",
    "IRS audit preparation bookkeeping",
    "audit ready financial records",
    "small business audit defense",
    "bookkeeping audit support",
    "remote audit support service",
    "audit ready books",
    "audit support Portland Oregon",
  ],
  openGraph: {
    title: "Audit Support Services for Small Businesses | True Orbit Bookkeeping",
    description:
      "Immaculate, organized, defensible records — maintained year-round. If you ever face an audit, your books will be ready before the notice arrives.",
    url: "https://trueorbitbookkeeping.com/services/audit-support",
    siteName: "True Orbit Bookkeeping",
    type: "website",
  },
  alternates: {
    canonical: "https://trueorbitbookkeeping.com/services/audit-support",
  },
};

// ── JSON-LD Schema ───────────────────────────────────────────────
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Audit Support",
  description:
    "Year-round maintenance of immaculate, organized, and defensible financial records. Should you ever face an IRS or state audit, your books will be complete, accurate, and ready to present.",
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
  serviceType: "Audit Support and Preparation",
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
  "Year-round maintenance of audit-ready financial records",
  "Complete transaction documentation with source verification",
  "Reconciled accounts across all periods — no gaps, no errors",
  "Organized digital filing of receipts, invoices, and statements",
  "Audit notice response support and document assembly",
  "Liaison with your CPA or tax attorney during audit proceedings",
  "Historical record reconstruction if prior periods need cleanup",
  "Ongoing compliance monitoring to minimize audit risk factors",
];

// ── Audit readiness pillars ──────────────────────────────────────
const pillars = [
  {
    number: "01",
    title: "Complete Records",
    desc: "Every transaction has a source document. Every account is reconciled. Nothing is missing, estimated, or reconstructed from memory.",
  },
  {
    number: "02",
    title: "Consistent Categorization",
    desc: "Expenses are categorized the same way across every period. Auditors look for inconsistencies — we make sure there aren't any.",
  },
  {
    number: "03",
    title: "Documented Deductions",
    desc: "Every deduction is supported by documentation that withstands scrutiny. Business purpose, amount, date, and payee — all on file.",
  },
  {
    number: "04",
    title: "Clean Reconciliations",
    desc: "Every bank and credit card account reconciles to the penny every month. No unexplained differences, no floating transactions.",
  },
  {
    number: "05",
    title: "Organized Access",
    desc: "When an auditor requests records for a specific period, we produce them quickly and completely — no frantic searching required.",
  },
  {
    number: "06",
    title: "Professional Presentation",
    desc: "Records are formatted and organized the way auditors expect to receive them, reducing back-and-forth and accelerating resolution.",
  },
];

// ── FAQ ─────────────────────────────────────────────────────────
const faqs = [
  {
    q: "What triggers a small business audit?",
    a: "The IRS selects returns for audit through several methods: random selection, statistical anomalies (expenses that are unusually high relative to income in your industry), specific deductions that historically attract scrutiny (home office, meals, vehicle use), and discrepancies between your return and third-party information like 1099s. Maintaining clean, consistent, well-documented books significantly reduces your exposure across all of these.",
  },
  {
    q: "What does 'audit ready' actually mean in practice?",
    a: "It means that if you received an audit notice today, your response would be organized, complete, and delivered on time — with no scrambling. Every transaction has a source document. Every account reconciles. Every deduction is supported. The records are organized chronologically and by category, ready to present in exactly the format an auditor expects.",
  },
  {
    q: "Do you represent me during an audit?",
    a: "True Orbit is a bookkeeping and financial advisory firm — we're not CPAs or tax attorneys, and we don't provide legal representation. What we do is ensure your records are complete, accurate, and organized so that your CPA or tax attorney can represent you effectively. We also coordinate directly with your representatives, producing documents and answering questions about the books on your behalf.",
  },
  {
    q: "What if my books are already a mess and I just received an audit notice?",
    a: "This is urgent — and we can help. Historical record reconstruction and catch-up bookkeeping are services we provide specifically for situations like this. Contact us immediately for a discovery call. We'll assess what exists, what can be recovered, and build a realistic plan for getting your records into defensible shape as quickly as possible.",
  },
  {
    q: "How far back can an audit go?",
    a: "The IRS generally has three years from the filing date to audit a return. That extends to six years if they believe income was underreported by more than 25%, and there's no time limit at all in cases of fraud or unfiled returns. This is why consistent, well-maintained records across multiple years matter — and why catch-up bookkeeping for prior periods is sometimes necessary.",
  },
  {
    q: "Is audit support a separate service or included in bookkeeping?",
    a: "Audit readiness is built into everything we do — because properly maintained books are inherently audit-ready. This service specifically adds active audit response support: assembling documents in response to notices, coordinating with your representatives, and providing historical cleanup for prior periods if needed. It's the insurance layer that activates if you're ever selected.",
  },
];

// ── Related services ─────────────────────────────────────────────
const related = [
  { icon: <BookOpen size={20} />,   title: "Full-Cycle Bookkeeping",        href: "/services/full-cycle-bookkeeping",      desc: "The clean foundation that makes audit defense possible." },
  { icon: <TrendingUp size={20} />, title: "Financial Strategy",             href: "/services/financial-strategy",          desc: "Consistent records that hold up under strategic scrutiny too." },
  { icon: <FileText size={20} />,   title: "Tax Readiness",                  href: "/services/tax-readiness",               desc: "Accurate filings reduce audit triggers from the start." },
  { icon: <BarChart2 size={20} />,  title: "Financial Reporting",            href: "/services/financial-reporting",         desc: "Verified statements that stand behind every number." },
  { icon: <Calculator size={20} />, title: "Accounts Payable & Receivable",  href: "/services/accounts-payable-receivable", desc: "Documented payables and receivables built for scrutiny." },
];

// ════════════════════════════════════════════════════════════════
export default function AuditSupportPage() {
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
          border-radius: 4px; padding: 40px;
          position: relative; overflow: hidden;
        }
        .hero-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, ${C.goldDim}, ${C.gold}, ${C.goldDim});
        }
        .hero-card-icon {
          width: 56px; height: 56px; border: 1px solid ${C.border}; border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          color: ${C.gold}; margin-bottom: 24px; background: rgba(201,168,76,0.05);
        }
        .hero-card-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.4rem; font-weight: 700; color: ${C.text}; margin-bottom: 20px;
        }

        /* ── Audit status display ── */
        .audit-status-header {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 16px;
        }
        .audit-status-label {
          font-size: 11px; font-weight: 600; letter-spacing: 0.12em;
          text-transform: uppercase; color: ${C.dim};
        }
        .audit-status-badge {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 4px 12px; border-radius: 20px;
          font-size: 11px; font-weight: 700; letter-spacing: 0.06em;
          text-transform: uppercase;
          background: rgba(74,222,128,0.1); border: 1px solid rgba(74,222,128,0.3);
          color: #4ade80;
        }
        .audit-status-dot {
          width: 6px; height: 6px; border-radius: 50%; background: #4ade80;
        }
        .audit-categories { display: flex; flex-direction: column; gap: 10px; }
        .audit-category {
          padding: 14px 16px; border: 1px solid ${C.border}; border-radius: 4px;
          background: rgba(8,13,26,0.5);
        }
        .audit-category-top {
          display: flex; justify-content: space-between; align-items: center;
          margin-bottom: 8px;
        }
        .audit-category-name { font-size: 13px; font-weight: 500; color: ${C.text}; }
        .audit-category-pct { font-size: 12px; font-weight: 700; color: #4ade80; }
        .audit-bar-track {
          height: 4px; background: ${C.border}; border-radius: 2px; overflow: hidden;
        }
        .audit-bar-fill {
          height: 100%; border-radius: 2px;
          background: linear-gradient(90deg, ${C.goldDim}, #4ade80);
        }
        .hero-card-caption {
          font-size: 11px; color: ${C.dim}; letter-spacing: 0.06em;
          text-align: center; margin-top: 16px; font-style: italic;
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

        /* ── Pillars grid ── */
        .pillars-grid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 1px; background: ${C.border}; border: 1px solid ${C.border};
          margin-top: 48px;
        }
        .pillar-cell {
          background: ${C.surface}; padding: 36px 28px;
          position: relative; overflow: hidden; transition: background 0.2s;
        }
        .pillar-cell::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(201,168,76,0.04), transparent);
          opacity: 0; transition: opacity 0.3s;
        }
        .pillar-cell:hover::before { opacity: 1; }
        .pillar-number {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.5rem; font-weight: 700; line-height: 1;
          color: ${C.border}; margin-bottom: 16px; letter-spacing: -0.02em;
        }
        .pillar-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.2rem; font-weight: 700; color: ${C.text}; margin-bottom: 10px;
        }
        .pillar-desc { font-size: 13px; color: ${C.muted}; line-height: 1.7; font-weight: 300; }

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
          .pillars-grid { grid-template-columns: 1fr 1fr; }
          .related-grid { grid-template-columns: 1fr; }
          .cta-banner { flex-direction: column; align-items: flex-start; padding: 36px 28px; margin: 0 24px 60px; }
          .footer { padding: 40px 24px 24px; }
          .footer-inner { grid-template-columns: 1fr; gap: 32px; }
          .footer-bottom { flex-direction: column; gap: 8px; text-align: center; }
        }
        @media (max-width: 480px) {
          .pillars-grid { grid-template-columns: 1fr; }
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
        <span style={{ color: C.gold }}>Audit Support</span>
      </nav>

      {/* ── Page Hero ── */}
      <header className="page-hero">
        <div>
          <div className="section-label">Audit Defense</div>
          <h1 className="page-title">
            Audit<br />
            <span>Support</span>
          </h1>
          <p className="page-intro">
            An audit notice doesn't have to be a crisis. When your records are
            maintained meticulously year-round — every transaction documented,
            every account reconciled, every deduction supported — an audit
            becomes a process you can navigate confidently, not a scramble
            you have to survive.
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

        {/* Audit readiness score preview */}
        <div className="hero-card">
          <div className="hero-card-icon">
            <Shield size={28} />
          </div>
          <div className="hero-card-title">Audit Readiness Overview</div>
          <div className="audit-status-header">
            <span className="audit-status-label">Overall Status</span>
            <span className="audit-status-badge">
              <span className="audit-status-dot" />
              Audit Ready
            </span>
          </div>
          <div className="audit-categories">
            {[
              { name: "Bank Reconciliations",    pct: 100 },
              { name: "Expense Documentation",   pct: 100 },
              { name: "Deduction Support",        pct: 97  },
              { name: "1099 Compliance",          pct: 100 },
              { name: "Period Completeness",      pct: 100 },
            ].map((cat, i) => (
              <div className="audit-category" key={i}>
                <div className="audit-category-top">
                  <span className="audit-category-name">{cat.name}</span>
                  <span className="audit-category-pct">{cat.pct}%</span>
                </div>
                <div className="audit-bar-track">
                  <div className="audit-bar-fill" style={{ width: `${cat.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
          <p className="hero-card-caption">Sample audit readiness dashboard</p>
        </div>
      </header>

      <hr className="divider" />

      {/* ── What's Included ── */}
      <section className="section" aria-labelledby="included-heading">
        <div className="section-label">What You Get</div>
        <h2 className="section-title" id="included-heading">
          Immaculate Records,<br />
          <span>Every Single Year</span>
        </h2>
        <p className="section-body">
          Audit readiness isn't a one-time cleanup — it's a discipline built
          into how your books are maintained every month. Here's everything
          included:
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

      {/* ── Six Pillars ── */}
      <section className="section" aria-labelledby="pillars-heading">
        <div className="section-label">The Foundation</div>
        <h2 className="section-title" id="pillars-heading">
          Six Pillars of<br />
          <span>Audit Readiness</span>
        </h2>
        <p className="section-body">
          Audit defense isn't about having the right answers when an auditor
          asks — it's about having built the right records before they ever do.
        </p>
        <div className="pillars-grid">
          {pillars.map((p, i) => (
            <div className="pillar-cell" key={i}>
              <div className="pillar-number">{p.number}</div>
              <div className="pillar-title">{p.title}</div>
              <div className="pillar-desc">{p.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <hr className="divider" />

      {/* ── Body Copy ── */}
      <section className="body-section" aria-label="About this service">
        <div className="body-section-inner">
          <div className="body-copy">
            <h3>The Best Audit Defense Is Prevention</h3>
            <p>
              Most audit problems aren't caused by intentional wrongdoing —
              they're caused by poor record-keeping. Missing receipts,
              inconsistent categorization, unreconciled accounts, and
              undocumented deductions are what turn a routine inquiry into
              a costly, time-consuming ordeal.
            </p>
            <p>
              When books are maintained correctly from the start, there's
              nothing to fear from an audit. The records speak for themselves —
              clearly, completely, and consistently. That's what we build
              for every client, every month.
            </p>
          </div>
          <div className="body-copy">
            <h3>When a Notice Arrives</h3>
            <p>
              If you do receive an audit notice, the first thing you need is
              organized, complete records for the period in question. The
              second thing you need is a team that can assemble and present
              those records quickly and professionally.
            </p>
            <p>
              We coordinate directly with your CPA or tax attorney, produce
              the documentation they need, and ensure nothing is missing or
              misrepresented. If prior periods need reconstruction, we handle
              that too — with urgency and accuracy.
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
          Audit readiness is strongest when it's built into every layer of
          your financial management. Explore the services that support it.
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
            Be Ready Before<br />
            <span>The Notice Arrives</span>
          </div>
          <p className="cta-sub">
            Start with a free discovery call. We'll assess your current
            record-keeping and show you exactly what audit-ready looks like
            for your business.
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
