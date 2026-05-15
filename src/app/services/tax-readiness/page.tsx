// app/services/tax-readiness/page.tsx
// SERVER COMPONENT — no "use client" — fully indexable by Google

import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText, ArrowRight, Check, ChevronDown,
  BookOpen, TrendingUp, Shield, Calculator, BarChart2
} from "lucide-react";

// ── SEO Metadata ────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Tax Readiness Services for Small Businesses | True Orbit Bookkeeping",
  description:
    "Go into every tax season fully prepared. True Orbit organizes your financial records year-round, maximizes eligible deductions, and delivers clean, CPA-ready books — no scrambling, no surprises.",
  keywords: [
    "tax readiness small business",
    "tax preparation bookkeeping",
    "CPA ready books",
    "small business tax organization",
    "year round tax planning",
    "maximize business deductions",
    "remote tax readiness service",
    "tax ready bookkeeping Portland Oregon",
  ],
  openGraph: {
    title: "Tax Readiness Services for Small Businesses | True Orbit Bookkeeping",
    description:
      "No scrambling. No surprises. True Orbit keeps your books tax-ready year-round so that when the season hits, you're already done — and your deductions are maximized.",
    url: "https://trueorbitbookkeeping.com/services/tax-readiness",
    siteName: "True Orbit Bookkeeping",
    type: "website",
  },
  alternates: {
    canonical: "https://trueorbitbookkeeping.com/services/tax-readiness",
  },
};

// ── JSON-LD Schema ───────────────────────────────────────────────
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Tax Readiness",
  description:
    "Year-round organization of financial records to ensure a seamless tax season with maximum eligible deductions. Clean, categorized, CPA-ready books delivered on time — every time.",
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
  serviceType: "Tax Preparation Support",
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
  "Year-round categorization of all deductible expenses",
  "Clean, reconciled books delivered to your CPA on request",
  "Deduction identification across all eligible categories",
  "1099 preparation support for contractors and vendors",
  "Quarterly estimated tax payment reminders and summaries",
  "Organized documentation for home office, mileage, and equipment",
  "End-of-year financial package ready before January 31",
  "Direct coordination with your CPA or tax preparer",
];

// ── Deduction categories ─────────────────────────────────────────
const deductions = [
  { label: "Home Office",         desc: "Proportional rent, utilities, and maintenance" },
  { label: "Software & Tools",    desc: "Subscriptions, SaaS, and business applications" },
  { label: "Contractors & Staff", desc: "1099 payments, payroll expenses, benefits" },
  { label: "Travel & Mileage",    desc: "Business trips, client visits, vehicle use" },
  { label: "Equipment",           desc: "Computers, hardware, and depreciable assets" },
  { label: "Professional Fees",   desc: "Legal, accounting, and advisory costs" },
];

// ── FAQ ─────────────────────────────────────────────────────────
const faqs = [
  {
    q: "What does 'tax ready' actually mean?",
    a: "Tax ready means your books are fully reconciled, every transaction is correctly categorized, all deductible expenses are identified and documented, and a clean financial package — profit & loss, balance sheet, and supporting records — is ready to hand off to your CPA or tax preparer. They open the file and get to work. No back-and-forth, no cleanup, no delays.",
  },
  {
    q: "Do you file my taxes?",
    a: "No — True Orbit is a bookkeeping and financial advisory firm, not a tax filing service. We prepare and organize everything your CPA needs to file accurately and efficiently. Think of us as the foundation your tax preparer builds on. Many clients find their CPA fees drop significantly once their books are consistently clean.",
  },
  {
    q: "How do you help maximize my deductions?",
    a: "By keeping your books current and correctly categorized throughout the year, we ensure nothing eligible is missed. Most business owners who do their own bookkeeping — or let it fall behind — overlook deductions simply because expenses aren't recorded or categorized correctly at the time they occur. We catch those in real time, not at year-end when it's too late.",
  },
  {
    q: "What if I've fallen behind on my books and tax season is approaching?",
    a: "That's one of the most common situations we handle. We offer catch-up bookkeeping to get your records current and accurate as quickly as possible. We'll assess the scope of the cleanup on your discovery call and give you a fixed price and realistic timeline. Many clients go from months behind to fully tax-ready within two to three weeks.",
  },
  {
    q: "Can you work directly with my existing CPA?",
    a: "Absolutely — and we encourage it. We coordinate directly with your CPA or tax preparer, sharing your financial package in the format they prefer. If you don't have a CPA, we're happy to refer you to one we trust. The goal is a seamless handoff that makes their job easier and your filing faster.",
  },
  {
    q: "Is tax readiness a separate service or included in bookkeeping?",
    a: "Tax readiness is built into our full-cycle bookkeeping service — because proper bookkeeping done right is what creates tax readiness. We also offer it as a focused engagement for clients who have a bookkeeper elsewhere but want a second set of eyes before tax season, or who need catch-up work completed before filing.",
  },
];

// ── Related services ─────────────────────────────────────────────
const related = [
  { icon: <BookOpen size={20} />,   title: "Full-Cycle Bookkeeping",        href: "/services/full-cycle-bookkeeping",      desc: "The clean records that make tax season effortless." },
  { icon: <TrendingUp size={20} />, title: "Financial Strategy",             href: "/services/financial-strategy",          desc: "Turn your tax picture into a growth roadmap." },
  { icon: <BarChart2 size={20} />,  title: "Financial Reporting",            href: "/services/financial-reporting",         desc: "Statements your CPA and lenders will appreciate." },
  { icon: <Calculator size={20} />, title: "Accounts Payable & Receivable",  href: "/services/accounts-payable-receivable", desc: "Keep vendor records clean for 1099 season." },
  { icon: <Shield size={20} />,     title: "Audit Support",                  href: "/services/audit-support",               desc: "If the IRS comes knocking, you'll be ready." },
];

// ════════════════════════════════════════════════════════════════
export default function TaxReadinessPage() {
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
          position: fixed; top: 0; left: 0; right: 0;
          z-index: 100; padding: 0 48px; height: 72px;
          display: flex; align-items: center; justify-content: space-between;
          background: rgba(8,13,26,0.92);
          border-bottom: 1px solid ${C.border};
          backdrop-filter: blur(12px);
        }
        .nav-links { display: flex; gap: 20px; list-style: none; }
        .nav-links a {
          font-size: 13px; font-weight: 500;
          letter-spacing: 0.08em; text-transform: uppercase;
          color: ${C.muted}; text-decoration: none; transition: color 0.2s;
        }
        .nav-links a:hover { color: ${C.gold}; }
        .nav-cta {
          background: transparent; border: 1px solid ${C.gold};
          color: ${C.gold}; font-family: 'DM Sans', sans-serif;
          font-size: 12px; font-weight: 600; letter-spacing: 0.1em;
          text-transform: uppercase; padding: 10px 24px;
          border-radius: 2px; cursor: pointer; text-decoration: none;
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
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: ${C.gold}; margin-bottom: 16px;
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
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .page-intro {
          font-size: 1.05rem; color: ${C.muted};
          line-height: 1.8; font-weight: 300; margin-bottom: 36px;
        }
        .hero-actions { display: flex; gap: 16px; flex-wrap: wrap; }
        .btn-primary {
          background: linear-gradient(135deg, ${C.goldDim}, ${C.gold});
          color: ${C.bg}; border: none; font-family: 'DM Sans', sans-serif;
          font-size: 13px; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; padding: 16px 32px; border-radius: 2px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          text-decoration: none; transition: opacity 0.2s, transform 0.2s, box-shadow 0.2s;
        }
        .btn-primary:hover {
          opacity: 0.9; transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(201,168,76,0.3);
        }
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

        /* ── Checklist preview ── */
        .checklist-preview { display: flex; flex-direction: column; gap: 10px; }
        .checklist-row {
          display: flex; align-items: center; gap: 12px;
          padding: 10px 14px; border-radius: 4px;
          border: 1px solid ${C.border}; background: rgba(8,13,26,0.5);
          font-size: 13px;
        }
        .check-done {
          width: 18px; height: 18px; border-radius: 50%; flex-shrink: 0;
          background: rgba(74,222,128,0.15); border: 1px solid rgba(74,222,128,0.4);
          display: flex; align-items: center; justify-content: center;
          color: #4ade80; font-size: 10px; font-weight: 700;
        }
        .check-pending {
          width: 18px; height: 18px; border-radius: 50%; flex-shrink: 0;
          background: rgba(201,168,76,0.08); border: 1px solid ${C.border};
        }
        .check-label-done { color: ${C.muted}; text-decoration: line-through; opacity: 0.6; }
        .check-label { color: ${C.text}; font-weight: 400; }
        .checklist-caption {
          font-size: 11px; color: ${C.dim}; letter-spacing: 0.06em;
          text-align: center; margin-top: 4px; font-style: italic;
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
        .included-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 48px;
        }
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

        /* ── Deduction grid ── */
        .deduction-grid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 1px; background: ${C.border}; border: 1px solid ${C.border};
          margin-top: 48px;
        }
        .deduction-cell {
          background: ${C.surface}; padding: 28px 24px;
          transition: background 0.2s; position: relative; overflow: hidden;
        }
        .deduction-cell::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(201,168,76,0.04), transparent);
          opacity: 0; transition: opacity 0.3s;
        }
        .deduction-cell:hover::before { opacity: 1; }
        .deduction-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: ${C.gold}; margin-bottom: 14px;
        }
        .deduction-label {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.1rem; font-weight: 600;
          color: ${C.text}; margin-bottom: 6px;
        }
        .deduction-desc { font-size: 13px; color: ${C.muted}; line-height: 1.6; font-weight: 300; }

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
          text-decoration: none; transition: background 0.2s;
          position: relative; overflow: hidden;
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
          max-width: 1200px; margin: 0 auto;
          padding-top: 24px; border-top: 1px solid ${C.border};
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
          .deduction-grid { grid-template-columns: 1fr 1fr; }
          .related-grid { grid-template-columns: 1fr; }
          .cta-banner { flex-direction: column; align-items: flex-start; padding: 36px 28px; margin: 0 24px 60px; }
          .footer { padding: 40px 24px 24px; }
          .footer-inner { grid-template-columns: 1fr; gap: 32px; }
          .footer-bottom { flex-direction: column; gap: 8px; text-align: center; }
        }
        @media (max-width: 480px) {
          .deduction-grid { grid-template-columns: 1fr; }
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
        <span style={{ color: C.gold }}>Tax Readiness</span>
      </nav>

      {/* ── Page Hero ── */}
      <header className="page-hero">
        <div>
          <div className="section-label">Tax Preparation</div>
          <h1 className="page-title">
            Tax<br />
            <span>Readiness</span>
          </h1>
          <p className="page-intro">
            Tax season doesn't have to be a scramble. When your books are kept
            clean and current year-round, filing becomes a handoff — not a
            crisis. We organize your records, identify every eligible deduction,
            and deliver a CPA-ready package before the deadline ever gets close.
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

        {/* Sample tax readiness checklist preview */}
        <div className="hero-card">
          <div className="hero-card-icon">
            <FileText size={28} />
          </div>
          <div className="hero-card-title">Year-End Readiness Checklist</div>
          <div className="checklist-preview">
            {[
              { done: true,  label: "Bank accounts reconciled" },
              { done: true,  label: "Expenses categorized & documented" },
              { done: true,  label: "1099s prepared for contractors" },
              { done: true,  label: "Home office deduction calculated" },
              { done: false, label: "Final P&L delivered to CPA" },
              { done: false, label: "Tax package signed off" },
            ].map((item, i) => (
              <div className="checklist-row" key={i}>
                <div className={item.done ? "check-done" : "check-pending"}>
                  {item.done && "✓"}
                </div>
                <span className={item.done ? "check-label-done" : "check-label"}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
          <p className="checklist-caption">Sample of your year-end delivery package</p>
        </div>
      </header>

      <hr className="divider" />

      {/* ── What's Included ── */}
      <section className="section" aria-labelledby="included-heading">
        <div className="section-label">What You Get</div>
        <h2 className="section-title" id="included-heading">
          No Surprises.<br />
          <span>No Scrambling.</span>
        </h2>
        <p className="section-body">
          Everything needed to walk into tax season — or hand off to your CPA —
          with complete confidence. Here's what's covered:
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

      {/* ── Deduction Categories ── */}
      <section className="section" aria-labelledby="deductions-heading">
        <div className="section-label">Deduction Tracking</div>
        <h2 className="section-title" id="deductions-heading">
          Every Dollar You're<br />
          <span>Entitled To</span>
        </h2>
        <p className="section-body">
          Missed deductions are money left on the table. We track every eligible
          category throughout the year — so nothing gets overlooked at filing time.
        </p>
        <div className="deduction-grid">
          {deductions.map((d, i) => (
            <div className="deduction-cell" key={i}>
              <div className="deduction-dot" />
              <div className="deduction-label">{d.label}</div>
              <div className="deduction-desc">{d.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <hr className="divider" />

      {/* ── Body Copy ── */}
      <section className="body-section" aria-label="About this service">
        <div className="body-section-inner">
          <div className="body-copy">
            <h3>Why Year-Round Beats Year-End</h3>
            <p>
              The single biggest tax mistake small business owners make is
              treating bookkeeping as a once-a-year event. When records are
              reconstructed from memory at year-end, transactions get
              miscategorized, receipts go missing, and deductions are lost.
            </p>
            <p>
              When your books are maintained monthly — every transaction
              categorized at the time it occurs — nothing falls through the
              cracks. Your CPA gets clean data and you get a bigger refund.
              The math is straightforward.
            </p>
          </div>
          <div className="body-copy">
            <h3>A Package Your CPA Will Thank You For</h3>
            <p>
              Most CPAs spend a significant portion of their time cleaning up
              the books before they can even begin filing. That time is billed
              to you. When we deliver your year-end package, it's ready to work
              with immediately — reconciled accounts, categorized expenses,
              organized supporting documents, and a clean P&L.
            </p>
            <p>
              Many True Orbit clients report their CPA fees decreasing
              noticeably after their first full year with us. The books do the
              heavy lifting so your CPA can focus on strategy, not cleanup.
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
          Tax readiness works best as part of a complete financial system.
          Explore the services that support it.
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
            Never Scramble at<br />
            <span>Tax Season Again</span>
          </div>
          <p className="cta-sub">
            Start with a free discovery call. We'll assess your current records
            and show you exactly what a clean, stress-free tax season looks like
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
