// app/services/accounts-payable-receivable/page.tsx
// SERVER COMPONENT — no "use client" — fully indexable by Google

import type { Metadata } from "next";
import Link from "next/link";
import {
  Calculator, ArrowRight, Check, ChevronDown,
  BookOpen, TrendingUp, FileText, BarChart2, Shield
} from "lucide-react";

// ── SEO Metadata ────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Accounts Payable & Receivable Services | True Orbit Bookkeeping",
  description:
    "Systematic management of what you owe and what you're owed. True Orbit keeps vendor relationships strong, invoices paid on time, and cash flow predictable — handled remotely for small businesses nationwide.",
  keywords: [
    "accounts payable receivable small business",
    "AP AR management service",
    "invoice management bookkeeping",
    "vendor payment management",
    "cash flow management small business",
    "remote accounts payable service",
    "accounts receivable tracking",
    "AP AR Portland Oregon",
  ],
  openGraph: {
    title: "Accounts Payable & Receivable Services | True Orbit Bookkeeping",
    description:
      "Know exactly what you owe, what you're owed, and when. True Orbit manages your AP and AR so cash flow stays predictable and vendor relationships stay strong.",
    url: "https://trueorbitbookkeeping.com/services/accounts-payable-receivable",
    siteName: "True Orbit Bookkeeping",
    type: "website",
  },
  alternates: {
    canonical: "https://trueorbitbookkeeping.com/services/accounts-payable-receivable",
  },
};

// ── JSON-LD Schema ───────────────────────────────────────────────
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Accounts Payable & Receivable",
  description:
    "Systematic management of vendor payments and customer invoicing for small businesses. Keep cash flow predictable, vendor relationships strong, and outstanding balances under control.",
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
  serviceType: "Accounts Payable and Receivable Management",
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
  "Vendor invoice tracking and payment scheduling",
  "Customer invoice creation and delivery",
  "Aging reports for outstanding receivables",
  "Overdue invoice follow-up and collections support",
  "Early payment discount identification and management",
  "Vendor statement reconciliation",
  "Monthly AP and AR summary with cash flow impact",
  "1099 tracking for contractor and vendor payments",
];

// ── AP vs AR breakdown ───────────────────────────────────────────
const sides = [
  {
    side: "AP",
    label: "Accounts Payable",
    tagline: "What You Owe",
    color: "#fb923c",
    items: [
      { vendor: "Office Supplies Co.",  amount: "$340",    due: "Due in 3 days",  status: "urgent" },
      { vendor: "Cloud Software Inc.",  amount: "$129",    due: "Due in 12 days", status: "ok" },
      { vendor: "Freight & Logistics",  amount: "$1,820",  due: "Due in 18 days", status: "ok" },
      { vendor: "Consulting Partners",  amount: "$2,500",  due: "Due in 30 days", status: "ok" },
    ],
    summary: "$4,789 total outstanding",
  },
  {
    side: "AR",
    label: "Accounts Receivable",
    tagline: "What You're Owed",
    color: "#4ade80",
    items: [
      { vendor: "Client: Hartwell LLC",    amount: "$3,200",  due: "Overdue 7 days",  status: "urgent" },
      { vendor: "Client: Morrow & Co.",    amount: "$1,750",  due: "Due in 5 days",   status: "warn" },
      { vendor: "Client: Apex Solutions",  amount: "$4,800",  due: "Due in 14 days",  status: "ok" },
      { vendor: "Client: Ridgeline Inc.",  amount: "$900",    due: "Due in 28 days",  status: "ok" },
    ],
    summary: "$10,650 total receivable",
  },
];

// ── FAQ ─────────────────────────────────────────────────────────
const faqs = [
  {
    q: "What's the difference between accounts payable and accounts receivable?",
    a: "Accounts payable (AP) is money your business owes to vendors and suppliers — bills you need to pay. Accounts receivable (AR) is money owed to your business by clients or customers — invoices you've sent that haven't been paid yet. Managing both is essential for cash flow: you need to pay your obligations on time while also ensuring your customers pay theirs.",
  },
  {
    q: "How does poor AP and AR management hurt a business?",
    a: "Late payments to vendors damage relationships, incur late fees, and can disrupt your supply chain. On the receivable side, slow collections mean cash you've earned is sitting with someone else — which forces you to cover expenses out of pocket or draw on credit. Many profitable businesses run into cash crises simply because their AR isn't being actively managed. We eliminate both problems.",
  },
  {
    q: "Do you send invoices directly to my clients?",
    a: "Yes, if you'd like us to. We can create and send invoices on your behalf through your accounting platform, track delivery and payment status, and follow up on overdue balances. Alternatively, we can manage the tracking and reporting while you handle client-facing communication — whatever works best for your business relationships.",
  },
  {
    q: "How do you handle overdue invoices?",
    a: "We generate aging reports that flag overdue receivables by how long they've been outstanding — 30, 60, and 90+ days. We provide you with a prioritized follow-up list and, if authorized, can send payment reminder communications on your behalf. For significantly overdue accounts, we'll flag them for your attention and recommend next steps.",
  },
  {
    q: "Can you help me get paid faster?",
    a: "Yes — faster payment starts with better invoicing practices. We ensure invoices are sent promptly, include clear payment terms, and are followed up systematically. We also identify early payment discount opportunities with vendors and can set up automated payment reminders for your clients. Most businesses that implement proper AR management see their average collection time drop meaningfully within the first 60 days.",
  },
  {
    q: "Is AP and AR management included in full-cycle bookkeeping?",
    a: "Core AP and AR tracking is part of full-cycle bookkeeping — every transaction flows through the books. This service goes deeper: active invoice management, systematic follow-up on outstanding balances, vendor reconciliation, and detailed aging reports. It's the operational layer that makes cash flow predictable, not just recorded.",
  },
];

// ── Related services ─────────────────────────────────────────────
const related = [
  { icon: <BookOpen size={20} />,   title: "Full-Cycle Bookkeeping",  href: "/services/full-cycle-bookkeeping",  desc: "Every AP and AR transaction flows into your books." },
  { icon: <TrendingUp size={20} />, title: "Financial Strategy",       href: "/services/financial-strategy",      desc: "Use your AP/AR data to forecast and plan ahead." },
  { icon: <FileText size={20} />,   title: "Tax Readiness",            href: "/services/tax-readiness",           desc: "Clean vendor records make 1099 season effortless." },
  { icon: <BarChart2 size={20} />,  title: "Financial Reporting",      href: "/services/financial-reporting",     desc: "AP and AR feed directly into your cash flow statement." },
  { icon: <Shield size={20} />,     title: "Audit Support",            href: "/services/audit-support",           desc: "Documented payables and receivables hold up to scrutiny." },
];

// ════════════════════════════════════════════════════════════════
export default function AccountsPayableReceivablePage() {
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
          font-size: clamp(2.2rem, 4.5vw, 3.75rem);
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
          font-size: 1.3rem; font-weight: 700; color: ${C.text}; margin-bottom: 16px;
        }

        /* ── AP/AR tab preview ── */
        .apar-tabs { display: flex; gap: 2px; margin-bottom: 12px; }
        .apar-tab {
          flex: 1; padding: 8px 12px; text-align: center;
          font-size: 11px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; border-radius: 3px;
          border: 1px solid ${C.border}; cursor: default;
        }
        .apar-tab-ap { background: rgba(251,146,60,0.1); border-color: rgba(251,146,60,0.3); color: #fb923c; }
        .apar-tab-ar { background: rgba(74,222,128,0.1); border-color: rgba(74,222,128,0.3); color: #4ade80; }
        .apar-rows { display: flex; flex-direction: column; gap: 6px; }
        .apar-row {
          display: flex; align-items: center; justify-content: space-between;
          padding: 9px 12px; border-radius: 3px;
          border: 1px solid ${C.border}; background: rgba(8,13,26,0.5);
          font-size: 12px; gap: 8px;
        }
        .apar-row-name { color: ${C.muted}; flex: 1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .apar-row-amount { color: ${C.text}; font-weight: 600; flex-shrink: 0; }
        .apar-row-due { font-size: 10px; font-weight: 600; letter-spacing: 0.04em; flex-shrink: 0; }
        .status-urgent { color: #fb923c; }
        .status-warn   { color: ${C.gold}; }
        .status-ok     { color: ${C.dim}; }
        .apar-summary {
          margin-top: 10px; padding: 10px 12px; border-radius: 3px;
          border: 1px solid ${C.border}; background: rgba(201,168,76,0.05);
          font-size: 12px; font-weight: 600; color: ${C.gold};
          text-align: center; letter-spacing: 0.04em;
        }
        .hero-card-caption {
          font-size: 11px; color: ${C.dim}; letter-spacing: 0.06em;
          text-align: center; margin-top: 10px; font-style: italic;
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

        /* ── AP vs AR explainer ── */
        .sides-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 1px; background: ${C.border}; border: 1px solid ${C.border};
          margin-top: 48px;
        }
        .side-cell { background: ${C.surface}; padding: 40px 32px; }
        .side-badge {
          display: inline-flex; align-items: center; gap: 10px;
          margin-bottom: 20px;
        }
        .side-abbr {
          width: 44px; height: 44px; border-radius: 8px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          font-size: 11px; font-weight: 700; letter-spacing: 0.06em;
        }
        .side-abbr-ap { background: rgba(251,146,60,0.1); border: 1px solid rgba(251,146,60,0.25); color: #fb923c; }
        .side-abbr-ar { background: rgba(74,222,128,0.1); border: 1px solid rgba(74,222,128,0.25); color: #4ade80; }
        .side-tagline {
          font-size: 11px; font-weight: 600; letter-spacing: 0.12em;
          text-transform: uppercase; color: ${C.dim};
        }
        .side-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.5rem; font-weight: 700; color: ${C.text}; margin-bottom: 12px;
        }
        .side-desc { font-size: 14px; color: ${C.muted}; line-height: 1.75; font-weight: 300; margin-bottom: 20px; }
        .side-rows { display: flex; flex-direction: column; gap: 8px; }
        .side-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: 10px 14px; border: 1px solid ${C.border}; border-radius: 3px;
          background: rgba(8,13,26,0.4); font-size: 12px; gap: 8px;
        }
        .side-row-name { color: ${C.muted}; flex: 1; }
        .side-row-amount { color: ${C.text}; font-weight: 600; }
        .side-row-status { font-size: 10px; font-weight: 700; letter-spacing: 0.04em; }
        .side-total {
          margin-top: 14px; padding: 12px 14px; border-radius: 3px;
          font-size: 12px; font-weight: 700; letter-spacing: 0.04em;
          text-align: right;
        }
        .side-total-ap { background: rgba(251,146,60,0.08); border: 1px solid rgba(251,146,60,0.2); color: #fb923c; }
        .side-total-ar { background: rgba(74,222,128,0.08); border: 1px solid rgba(74,222,128,0.2); color: #4ade80; }

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
          .sides-grid { grid-template-columns: 1fr; }
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
        <span style={{ color: C.gold }}>Accounts Payable & Receivable</span>
      </nav>

      {/* ── Page Hero ── */}
      <header className="page-hero">
        <div>
          <div className="section-label">Cash Flow Management</div>
          <h1 className="page-title">
            Accounts Payable<br />
            <span>& Receivable</span>
          </h1>
          <p className="page-intro">
            Know exactly what you owe, what you're owed, and when. We manage
            your vendor payments and client invoicing systematically — so cash
            flow stays predictable, vendor relationships stay intact, and
            outstanding balances don't quietly pile up.
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

        {/* Live AP/AR dashboard preview */}
        <div className="hero-card">
          <div className="hero-card-icon">
            <Calculator size={28} />
          </div>
          <div className="hero-card-title">AP & AR Dashboard</div>
          {sides.map((s) => (
            <div key={s.side} style={{ marginBottom: s.side === "AP" ? 16 : 0 }}>
              <div className="apar-tabs">
                <div className={`apar-tab apar-tab-${s.side.toLowerCase()}`}>
                  {s.label} — {s.tagline}
                </div>
              </div>
              <div className="apar-rows">
                {s.items.map((item, i) => (
                  <div className="apar-row" key={i}>
                    <span className="apar-row-name">{item.vendor}</span>
                    <span className="apar-row-amount">{item.amount}</span>
                    <span className={`apar-row-due status-${item.status}`}>{item.due}</span>
                  </div>
                ))}
              </div>
              <div className="apar-summary">{s.summary}</div>
            </div>
          ))}
          <p className="hero-card-caption">Sample of your monthly AP & AR summary</p>
        </div>
      </header>

      <hr className="divider" />

      {/* ── What's Included ── */}
      <section className="section" aria-labelledby="included-heading">
        <div className="section-label">What You Get</div>
        <h2 className="section-title" id="included-heading">
          Both Sides of<br />
          <span>Your Cash Flow</span>
        </h2>
        <p className="section-body">
          What you owe and what you're owed — managed together, so nothing
          slips and cash flow stays under control. Here's everything included:
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

      {/* ── AP vs AR Side by Side ── */}
      <section className="section" aria-labelledby="sides-heading">
        <div className="section-label">How It Works</div>
        <h2 className="section-title" id="sides-heading">
          Two Sides,<br />
          <span>One Clear Picture</span>
        </h2>
        <p className="section-body">
          AP and AR are two sides of the same cash flow equation. We manage
          both so you always know exactly where you stand.
        </p>
        <div className="sides-grid">
          {sides.map((s) => (
            <div className="side-cell" key={s.side}>
              <div className="side-badge">
                <div className={`side-abbr side-abbr-${s.side.toLowerCase()}`}>{s.side}</div>
                <div className="side-tagline">{s.tagline}</div>
              </div>
              <div className="side-title">{s.label}</div>
              <div className="side-desc">
                {s.side === "AP"
                  ? "Every vendor bill tracked, scheduled, and paid on time. No late fees, no damaged relationships, no missed obligations."
                  : "Every invoice tracked from creation to collection. Aging reports flag what's overdue before it becomes a problem."}
              </div>
              <div className="side-rows">
                {s.items.map((item, i) => (
                  <div className="side-row" key={i}>
                    <span className="side-row-name">{item.vendor}</span>
                    <span className="side-row-amount">{item.amount}</span>
                    <span className={`side-row-status status-${item.status}`}>{item.due}</span>
                  </div>
                ))}
              </div>
              <div className={`side-total side-total-${s.side.toLowerCase()}`}>{s.summary}</div>
            </div>
          ))}
        </div>
      </section>

      <hr className="divider" />

      {/* ── Body Copy ── */}
      <section className="body-section" aria-label="About this service">
        <div className="body-section-inner">
          <div className="body-copy">
            <h3>Cash Flow Is a Timing Problem</h3>
            <p>
              Most small business cash flow problems aren't caused by lack of
              revenue — they're caused by timing mismatches. Money goes out
              before money comes in. Invoices go unpaid for 60 days while
              vendor bills come due in 30. The business is profitable on paper
              but constantly scrambling for cash.
            </p>
            <p>
              Systematic AP and AR management closes that gap. When you know
              exactly what's due and when — on both sides — you can plan,
              prioritize, and never be caught off guard by a cash crunch.
            </p>
          </div>
          <div className="body-copy">
            <h3>Relationships Live in the Details</h3>
            <p>
              Late payments to vendors are rarely forgotten. Slow follow-up
              on client invoices signals that your business isn't organized.
              Both erode trust in ways that are hard to repair.
            </p>
            <p>
              We keep vendor payments on schedule and client invoices moving
              through the collection cycle efficiently — so your relationships
              reflect the professionalism of your work, not the chaos of
              disorganized finances.
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
          AP and AR management works best as part of a complete financial
          system. Explore the services that connect to it.
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
            Stop Chasing Invoices.<br />
            <span>Start Managing Cash Flow.</span>
          </div>
          <p className="cta-sub">
            Start with a free discovery call. We'll assess your current AP
            and AR situation and show you how much time and money systematic
            management can recover.
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
