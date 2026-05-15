// app/services/financial-strategy/page.tsx
// SERVER COMPONENT — no "use client" — fully indexable by Google

import type { Metadata } from "next";
import Link from "next/link";
import {
  TrendingUp, ArrowRight, Check, ChevronDown,
  BookOpen, FileText, Shield, Calculator, BarChart2
} from "lucide-react";

// ── SEO Metadata ────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Financial Strategy for Small Businesses | True Orbit Bookkeeping",
  description:
    "Turn your financial data into a roadmap for growth. True Orbit delivers cash flow forecasting, KPI analysis, and strategic advisory for small businesses nationwide — remotely, with big-firm rigor.",
  keywords: [
    "financial strategy small business",
    "cash flow forecasting service",
    "small business financial advisor",
    "bookkeeping and financial strategy",
    "remote financial advisory",
    "business financial planning",
    "KPI analysis small business",
    "financial strategy Portland Oregon",
  ],
  openGraph: {
    title: "Financial Strategy for Small Businesses | True Orbit Bookkeeping",
    description:
      "Your numbers tell a story. We translate them into strategy. Cash flow forecasting, KPI tracking, and growth planning — handled remotely for small businesses nationwide.",
    url: "https://trueorbitbookkeeping.com/services/financial-strategy",
    siteName: "True Orbit Bookkeeping",
    type: "website",
  },
  alternates: {
    canonical: "https://trueorbitbookkeeping.com/services/financial-strategy",
  },
};

// ── JSON-LD Schema ───────────────────────────────────────────────
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Financial Strategy",
  description:
    "Deep-dive cash flow analysis, KPI benchmarking, and forward-looking financial planning for small businesses. We translate your numbers into informed decisions for sustainable growth.",
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
  serviceType: "Financial Advisory",
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
  "Monthly cash flow analysis and 90-day forward forecast",
  "Key performance indicator (KPI) identification and tracking",
  "Gross margin and expense ratio benchmarking",
  "Revenue trend analysis and growth projection modeling",
  "Pricing and profitability assessment on request",
  "Monthly strategy summary delivered with your financials",
  "Quarterly deep-dive advisory call",
  "Actionable recommendations — not just reports",
];

// ── FAQ ─────────────────────────────────────────────────────────
const faqs = [
  {
    q: "What's the difference between bookkeeping and financial strategy?",
    a: "Bookkeeping is the accurate recording of what already happened — every transaction, every account, reconciled to the penny. Financial strategy takes that clean data and looks forward: Where is your cash flow heading? Which expenses are eroding your margin? What does revenue need to look like next quarter to hit your goals? We offer both, and they work best together.",
  },
  {
    q: "Do I need to have clean books before starting financial strategy work?",
    a: "Yes — and that's exactly why we pair this service with our full-cycle bookkeeping. You cannot build reliable forecasts on unreliable data. If your books need cleanup first, we handle that as part of onboarding and then layer strategy on top of a solid foundation.",
  },
  {
    q: "What does a cash flow forecast actually look like?",
    a: "We produce a rolling 90-day projection that shows your expected inflows, outflows, and net cash position week by week. It's built from your actual historical data, your known upcoming expenses, and your revenue trends. You'll see exactly when cash gets tight before it happens — giving you time to act.",
  },
  {
    q: "I'm a solopreneur. Is financial strategy overkill for my size?",
    a: "It's actually where it matters most. Larger businesses have finance teams watching these numbers daily. As a solopreneur, you have no one else looking out for margin erosion, pricing gaps, or cash crunches — unless you hire someone like us. Strategic oversight scales down perfectly and the ROI at small scale is often higher.",
  },
  {
    q: "How is this delivered? Do I have to attend a lot of meetings?",
    a: "No. We send you a concise monthly strategy summary alongside your financial statements — written for business owners, not accountants. We hold one quarterly deep-dive call to walk through trends, discuss goals, and update projections. Everything else is asynchronous, on your schedule.",
  },
  {
    q: "Can you help me figure out whether to hire, expand, or take on debt?",
    a: "Yes — that's exactly the kind of decision this service is built for. We model the financial impact of specific decisions before you make them: what a new hire does to your runway, what a lease commitment does to cash flow, whether your current margins support the expansion you're planning. You get numbers, not guesses.",
  },
];

// ── Related services ─────────────────────────────────────────────
const related = [
  { icon: <BookOpen size={20} />,    title: "Full-Cycle Bookkeeping",       href: "/services/full-cycle-bookkeeping",       desc: "The clean data that makes strategy possible." },
  { icon: <FileText size={20} />,    title: "Tax Readiness",                 href: "/services/tax-readiness",                desc: "Turn strategy into a tax-efficient structure." },
  { icon: <BarChart2 size={20} />,   title: "Financial Reporting",           href: "/services/financial-reporting",          desc: "Statements formatted for decisions, not accountants." },
  { icon: <Calculator size={20} />,  title: "Accounts Payable & Receivable", href: "/services/accounts-payable-receivable",  desc: "Keep cash flow predictable and vendors happy." },
  { icon: <Shield size={20} />,      title: "Audit Support",                 href: "/services/audit-support",                desc: "Immaculate, defensible records at all times." },
];

// ════════════════════════════════════════════════════════════════
export default function FinancialStrategyPage() {
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
          color: ${C.muted}; text-decoration: none;
          transition: color 0.2s;
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
          padding: 96px 48px 0;
          max-width: 1200px; margin: 0 auto;
          display: flex; align-items: center; gap: 8px;
          font-size: 12px; color: ${C.dim};
          letter-spacing: 0.06em; text-transform: uppercase;
        }
        .breadcrumb a { color: ${C.dim}; text-decoration: none; transition: color 0.2s; }
        .breadcrumb a:hover { color: ${C.gold}; }
        .breadcrumb-sep { color: ${C.border}; }

        /* ── Hero ── */
        .page-hero {
          padding: 48px 48px 80px;
          max-width: 1200px; margin: 0 auto;
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
          color: ${C.bg}; border: none;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px; font-weight: 700;
          letter-spacing: 0.08em; text-transform: uppercase;
          padding: 16px 32px; border-radius: 2px; cursor: pointer;
          display: inline-flex; align-items: center; gap: 8px;
          text-decoration: none; transition: opacity 0.2s, transform 0.2s, box-shadow 0.2s;
        }
        .btn-primary:hover {
          opacity: 0.9; transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(201,168,76,0.3);
        }
        .btn-ghost {
          background: transparent; color: ${C.muted};
          border: 1px solid ${C.border};
          font-family: 'DM Sans', sans-serif;
          font-size: 13px; font-weight: 500;
          letter-spacing: 0.06em; text-transform: uppercase;
          padding: 16px 32px; border-radius: 2px; cursor: pointer;
          text-decoration: none; display: inline-flex; align-items: center; gap: 8px;
          transition: color 0.2s, border-color 0.2s;
        }
        .btn-ghost:hover { color: ${C.gold}; border-color: ${C.goldDim}; }

        /* ── Hero card ── */
        .hero-card {
          background: ${C.surface};
          border: 1px solid ${C.border};
          border-radius: 4px; padding: 40px;
          position: relative; overflow: hidden;
        }
        .hero-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, ${C.goldDim}, ${C.gold}, ${C.goldDim});
        }
        .hero-card-icon {
          width: 56px; height: 56px;
          border: 1px solid ${C.border}; border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          color: ${C.gold}; margin-bottom: 24px;
          background: rgba(201,168,76,0.05);
        }
        .hero-card-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.5rem; font-weight: 700;
          color: ${C.text}; margin-bottom: 8px;
        }
        .hero-card-desc {
          font-size: 14px; color: ${C.muted}; line-height: 1.7;
          font-weight: 300; margin-bottom: 28px;
        }
        /* ── Forecast preview card ── */
        .forecast-preview {
          border: 1px solid ${C.border}; border-radius: 4px;
          overflow: hidden; margin-top: 4px;
        }
        .forecast-header {
          background: rgba(201,168,76,0.08);
          border-bottom: 1px solid ${C.border};
          padding: 10px 16px;
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.12em; text-transform: uppercase; color: ${C.gold};
          display: flex; justify-content: space-between;
        }
        .forecast-row {
          display: grid; grid-template-columns: 1fr 1fr 1fr;
          padding: 10px 16px; border-bottom: 1px solid ${C.border};
          font-size: 13px;
        }
        .forecast-row:last-child { border-bottom: none; }
        .forecast-label { color: ${C.muted}; font-weight: 300; }
        .forecast-val { color: ${C.text}; font-weight: 500; text-align: center; }
        .forecast-trend { text-align: right; font-size: 11px; font-weight: 600; }
        .trend-up { color: #4ade80; }
        .trend-warn { color: #fb923c; }

        /* ── Section ── */
        .section { padding: 80px 48px; max-width: 1200px; margin: 0 auto; }
        .section-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.8rem, 3.5vw, 2.8rem);
          font-weight: 700; line-height: 1.1;
          color: ${C.text}; margin-bottom: 16px; letter-spacing: -0.01em;
        }
        .section-title span { color: ${C.gold}; }
        .section-body {
          font-size: 1rem; color: ${C.muted};
          line-height: 1.75; max-width: 560px; font-weight: 300;
        }
        .divider { border: none; border-top: 1px solid ${C.border}; margin: 0; }

        /* ── Included grid ── */
        .included-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 12px; margin-top: 48px;
        }
        .included-item {
          display: flex; align-items: flex-start; gap: 14px;
          padding: 18px 20px;
          border: 1px solid ${C.border}; border-radius: 4px;
          background: ${C.surface}; transition: border-color 0.2s;
        }
        .included-item:hover { border-color: ${C.goldDim}; }
        .included-check {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(201,168,76,0.1);
          border: 1px solid rgba(201,168,76,0.3);
          display: flex; align-items: center; justify-content: center;
          color: ${C.gold}; flex-shrink: 0; margin-top: 1px;
        }
        .included-text { font-size: 14px; color: ${C.muted}; line-height: 1.6; font-weight: 400; }

        /* ── Body copy ── */
        .body-section { padding: 0 48px 80px; max-width: 1200px; margin: 0 auto; }
        .body-section-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; }
        .body-copy h3 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.5rem; font-weight: 700;
          color: ${C.text}; margin-bottom: 14px;
        }
        .body-copy p { font-size: 15px; color: ${C.muted}; line-height: 1.8; font-weight: 300; margin-bottom: 16px; }

        /* ── FAQ ── */
        .faq-list { margin-top: 48px; display: flex; flex-direction: column; gap: 2px; }
        .faq-item { border: 1px solid ${C.border}; background: ${C.surface}; overflow: hidden; }
        .faq-item:first-child { border-radius: 4px 4px 0 0; }
        .faq-item:last-child  { border-radius: 0 0 4px 4px; }
        .faq-q {
          width: 100%; background: none; border: none; cursor: pointer;
          padding: 22px 28px;
          display: flex; align-items: center; justify-content: space-between;
          text-align: left; gap: 16px;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px; font-weight: 500; color: ${C.text};
          transition: color 0.2s; list-style: none;
        }
        .faq-q:hover { color: ${C.gold}; }
        .faq-a { padding: 0 28px 22px; font-size: 14px; color: ${C.muted}; line-height: 1.75; font-weight: 300; }

        /* ── Related ── */
        .related-grid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 1px; background: ${C.border};
          border: 1px solid ${C.border}; margin-top: 48px;
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
          margin: 0 auto 80px; padding: 56px 64px;
          max-width: 1104px;
          border: 1px solid ${C.border}; background: ${C.surface};
          border-radius: 4px;
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
        <span style={{ color: C.gold }}>Financial Strategy</span>
      </nav>

      {/* ── Page Hero ── */}
      <header className="page-hero">
        <div>
          <div className="section-label">Strategic Advisory</div>
          <h1 className="page-title">
            Financial<br />
            <span>Strategy</span>
          </h1>
          <p className="page-intro">
            Clean books tell you what happened. Financial strategy tells you
            what to do next. We take your numbers, translate them into plain
            language, and build a forward-looking roadmap your business can
            actually use to grow with confidence.
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

        {/* Sample deliverable preview */}
        <div className="hero-card">
          <div className="hero-card-icon">
            <TrendingUp size={28} />
          </div>
          <div className="hero-card-title">90-Day Cash Flow Forecast</div>
          <div className="hero-card-desc">
            A sample of what you receive monthly — your projected cash position,
            trend direction, and early warnings before they become problems.
          </div>
          <div className="forecast-preview">
            <div className="forecast-header">
              <span>Month</span><span>Net Cash</span><span>Trend</span>
            </div>
            <div className="forecast-row">
              <span className="forecast-label">June</span>
              <span className="forecast-val">$14,820</span>
              <span className="forecast-trend trend-up">▲ +8.4%</span>
            </div>
            <div className="forecast-row">
              <span className="forecast-label">July</span>
              <span className="forecast-val">$11,340</span>
              <span className="forecast-trend trend-warn">▼ −3.2%</span>
            </div>
            <div className="forecast-row">
              <span className="forecast-label">August</span>
              <span className="forecast-val">$17,650</span>
              <span className="forecast-trend trend-up">▲ +12.1%</span>
            </div>
          </div>
        </div>
      </header>

      <hr className="divider" />

      {/* ── What's Included ── */}
      <section className="section" aria-labelledby="included-heading">
        <div className="section-label">What You Get</div>
        <h2 className="section-title" id="included-heading">
          Your Numbers,<br />
          <span>Translated Into Action</span>
        </h2>
        <p className="section-body">
          Every deliverable is designed to be readable by a business owner,
          not just an accountant. Here's what's included every month:
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

      {/* ── Body Copy ── */}
      <section className="body-section" aria-label="About this service">
        <div className="body-section-inner">
          <div className="body-copy">
            <h3>Strategy Without Clean Books Is Guesswork</h3>
            <p>
              Many small business owners seek financial advice before their books
              are in order — and the advice they get is only as reliable as the
              data it's built on. Forecasts built on messy records produce
              misleading projections. Budgets based on unreconciled accounts
              create false confidence.
            </p>
            <p>
              That's why True Orbit pairs financial strategy with full-cycle
              bookkeeping. When strategy is built on a verified financial
              foundation, the recommendations are ones you can actually act on.
            </p>
          </div>
          <div className="body-copy">
            <h3>Know Before You Decide</h3>
            <p>
              The most expensive financial mistakes small business owners make
              aren't from bad judgment — they're from insufficient information.
              Hiring before the cash flow can support it. Expanding into a lease
              without modeling the impact. Pricing services below sustainable margin.
            </p>
            <p>
              Our strategic advisory service exists to give you the information
              you need before the decision, not the autopsy afterward. We model
              scenarios, track your KPIs monthly, and tell you what the numbers
              mean in plain English.
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
          Financial strategy works best when it's built on a complete financial
          infrastructure. Explore the services that support it.
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
            Stop Making Decisions<br />
            <span>Without the Numbers</span>
          </div>
          <p className="cta-sub">
            Start with a free discovery call. We'll assess your current financial
            picture and show you exactly what strategic clarity could look like
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
