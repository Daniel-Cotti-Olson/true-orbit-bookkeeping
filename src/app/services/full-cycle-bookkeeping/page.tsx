// app/services/full-cycle-bookkeeping/page.tsx
// SERVER COMPONENT — no "use client" — fully indexable by Google

import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen, ArrowRight, Check, ChevronDown,
  TrendingUp, FileText, Shield, Calculator, BarChart2
} from "lucide-react";

// ── SEO Metadata ────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Full-Cycle Bookkeeping Services | True Orbit Bookkeeping",
  description:
    "Professional full-cycle bookkeeping for small businesses nationwide. Accurate ledgers, monthly reconciliation, and real-time financial clarity — handled remotely with big-firm precision.",
  keywords: [
    "full cycle bookkeeping",
    "small business bookkeeping",
    "remote bookkeeping service",
    "monthly bookkeeping",
    "bookkeeping for small business",
    "online bookkeeper",
    "bookkeeping Portland Oregon",
  ],
  openGraph: {
    title: "Full-Cycle Bookkeeping Services | True Orbit Bookkeeping",
    description:
      "Never wonder where your money went again. True Orbit handles every transaction, reconciliation, and ledger entry — remotely, accurately, and on time.",
    url: "https://bitbookkeeping.com/services/full-cycle-bookkeeping",
    siteName: "True Orbit Bookkeeping",
    type: "website",
  },
  alternates: {
    canonical: "https://bitbookkeeping.com/services/full-cycle-bookkeeping",
  },
};

// ── JSON-LD Schema ───────────────────────────────────────────────
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Full-Cycle Bookkeeping",
  description:
    "Comprehensive bookkeeping service covering all financial transactions, monthly bank reconciliation, and real-time ledger maintenance for small businesses.",
  provider: {
    "@type": "LocalBusiness",
    name: "True Orbit Bookkeeping LLC",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Portland",
      addressRegion: "OR",
      addressCountry: "US",
    },
    telephone: "+15033139953",
    email: "info@trueorbitbookkeeping.com",
    url: "https://bitbookkeeping.com",
    areaServed: "United States",
  },
  serviceType: "Bookkeeping",
  areaServed: "United States",
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    price: "299",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "299",
      priceCurrency: "USD",
      unitText: "MONTH",
    },
  },
};

// ── Colour tokens (match homepage exactly) ──────────────────────
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
  "Monthly bank and credit card reconciliation",
  "Categorization of all income and expense transactions",
  "Accounts reconciled to the penny — every month",
  "Monthly P&L, balance sheet, and cash flow statement",
  "Dedicated bookkeeper familiar with your business",
  "Secure cloud-based document sharing",
  "Quarterly review call to walk through your numbers",
  "Tax-ready records delivered to your CPA on request",
];

// ── FAQ ─────────────────────────────────────────────────────────
const faqs = [
  {
    q: "What exactly does full-cycle bookkeeping include?",
    a: "Full-cycle bookkeeping covers the complete accounting cycle: recording every transaction as it occurs, categorizing income and expenses, reconciling your bank and credit card accounts monthly, and producing your core financial statements — profit & loss, balance sheet, and cash flow. Nothing falls through the cracks.",
  },
  {
    q: "How is remote bookkeeping different from hiring someone local?",
    a: "Remote bookkeeping is fully equivalent in quality — and often superior in accuracy and cost. We use industry-standard cloud tools to access your accounts securely. You get the same meticulous work, faster turnaround, and no overhead of an in-house hire. We serve clients nationwide from our Portland, Oregon base.",
  },
  {
    q: "How long does it take to get started?",
    a: "Most clients are fully onboarded within 5–7 business days. We start with a free discovery call to understand your business, then handle the software setup and historical cleanup ourselves. You don't need to do anything technical.",
  },
  {
    q: "What accounting software do you use?",
    a: "We work primarily with QuickBooks Online and Xero — the two most widely used platforms for small business bookkeeping. If you're already on one of these, we connect directly. If you're not yet set up, we'll recommend the best fit for your business and get it configured.",
  },
  {
    q: "Do I need to do anything month to month?",
    a: "Very little. We handle everything on our end. You'll occasionally need to answer a question about an unusual transaction, and we'll send you a brief monthly summary. Beyond that, your books are our responsibility — not yours.",
  },
  {
    q: "What if my books are a mess or months behind?",
    a: "That's exactly the situation we're built for. Historical cleanup and catch-up bookkeeping is something we specialize in. We'll assess the scope on your discovery call and give you a clear timeline and fixed price before any work begins.",
  },
];

// ── Related services ─────────────────────────────────────────────
const related = [
  { icon: <TrendingUp size={20} />, title: "Financial Strategy", href: "/services/financial-strategy", desc: "Turn your clean books into a roadmap for growth." },
  { icon: <FileText size={20} />, title: "Tax Readiness", href: "/services/tax-readiness", desc: "Go into tax season with zero scrambling." },
  { icon: <BarChart2 size={20} />, title: "Financial Reporting", href: "/services/financial-reporting", desc: "Clear statements formatted for decision-makers." },
  { icon: <Calculator size={20} />, title: "Accounts Payable & Receivable", href: "/services/accounts-payable-receivable", desc: "Keep cash flow predictable and vendors happy." },
  { icon: <Shield size={20} />, title: "Audit Support", href: "/services/audit-support", desc: "Immaculate, defensible records at all times." },
];

// ════════════════════════════════════════════════════════════════
export default function FullCycleBookkeepingPage() {
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
        .hero-actions {
          display: flex; gap: 16px; flex-wrap: wrap;
        }
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

        /* ── Hero right card ── */
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
        .hero-card-price-label {
          font-size: 11px; font-weight: 600; letter-spacing: 0.15em;
          text-transform: uppercase; color: ${C.dim}; margin-bottom: 4px;
        }
        .hero-card-price {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.8rem; font-weight: 700; color: ${C.gold};
          line-height: 1;
        }
        .hero-card-price-period {
          font-size: 14px; color: ${C.muted}; font-weight: 300;
        }

        /* ── Section wrapper ── */
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
        .included-text {
          font-size: 14px; color: ${C.muted}; line-height: 1.6;
          font-weight: 400;
        }

        /* ── Body copy section ── */
        .body-section {
          padding: 0 48px 80px;
          max-width: 1200px; margin: 0 auto;
        }
        .body-section-inner {
          display: grid; grid-template-columns: 1fr 1fr; gap: 64px;
        }
        .body-copy h3 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.5rem; font-weight: 700;
          color: ${C.text}; margin-bottom: 14px;
        }
        .body-copy p {
          font-size: 15px; color: ${C.muted};
          line-height: 1.8; font-weight: 300; margin-bottom: 16px;
        }

        /* ── Divider ── */
        .divider {
          border: none; border-top: 1px solid ${C.border};
          margin: 0;
        }

        /* ── FAQ ── */
        .faq-list { margin-top: 48px; display: flex; flex-direction: column; gap: 2px; }
        .faq-item {
          border: 1px solid ${C.border};
          background: ${C.surface}; overflow: hidden;
        }
        .faq-item:first-child { border-radius: 4px 4px 0 0; }
        .faq-item:last-child { border-radius: 0 0 4px 4px; }
        .faq-q {
          width: 100%; background: none; border: none; cursor: pointer;
          padding: 22px 28px;
          display: flex; align-items: center; justify-content: space-between;
          text-align: left; gap: 16px;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px; font-weight: 500; color: ${C.text};
          transition: color 0.2s;
        }
        .faq-q:hover { color: ${C.gold}; }
        .faq-a {
          padding: 0 28px 22px;
          font-size: 14px; color: ${C.muted}; line-height: 1.75;
          font-weight: 300;
        }

        /* ── Related services ── */
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
        .related-icon {
          color: ${C.gold};
        }
        .related-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.1rem; font-weight: 600; color: ${C.text};
        }
        .related-desc {
          font-size: 13px; color: ${C.muted}; line-height: 1.6; font-weight: 300;
        }
        .related-arrow {
          color: ${C.goldDim}; margin-top: auto; padding-top: 8px;
          display: flex; align-items: center; gap: 6px;
          font-size: 12px; font-weight: 600;
          letter-spacing: 0.08em; text-transform: uppercase;
          transition: color 0.2s, gap 0.2s;
        }
        .related-card:hover .related-arrow { color: ${C.gold}; gap: 10px; }

        /* ── CTA banner ── */
        .cta-banner {
          margin: 0 48px 80px;
          max-width: 1104px; /* 1200 - 96px padding */
          margin-left: auto; margin-right: auto;
          border: 1px solid ${C.border};
          background: ${C.surface};
          border-radius: 4px; padding: 56px 64px;
          display: flex; align-items: center; justify-content: space-between;
          gap: 40px; position: relative; overflow: hidden;
        }
        .cta-banner::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, ${C.goldDim}, ${C.gold}, ${C.goldDim});
        }
        .cta-glow {
          position: absolute; right: -60px; top: 50%;
          transform: translateY(-50%);
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
        .cta-sub {
          font-size: 15px; color: ${C.muted}; font-weight: 300;
          line-height: 1.6; margin-top: 10px; max-width: 400px;
        }

        /* ── Footer ── */
        .footer {
          border-top: 1px solid ${C.border};
          background: ${C.surface};
          padding: 56px 48px 32px;
        }
        .footer-inner {
          max-width: 1200px; margin: 0 auto;
          display: grid; grid-template-columns: 2fr 1fr 1fr;
          gap: 48px; margin-bottom: 48px;
        }
        .footer-tagline {
          font-size: 13px; color: ${C.dim}; line-height: 1.7;
          font-weight: 300; margin-top: 16px; max-width: 280px;
        }
        .footer-col-title {
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.15em; text-transform: uppercase;
          color: ${C.muted}; margin-bottom: 16px;
        }
        .footer-links { list-style: none; display: flex; flex-direction: column; gap: 10px; }
        .footer-links a {
          font-size: 14px; color: ${C.dim}; text-decoration: none;
          transition: color 0.2s; cursor: pointer;
        }
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
          .nav-links { display: none; }
        }
      `}</style>

      {/* ── Background grid ── */}
      <div className="hero-bg-grid" aria-hidden="true" />

      {/* ── Nav ── */}
      <nav className="nav" aria-label="Main navigation">
        <Link href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/Color_logo_-_no_background.svg"
            alt="True Orbit Bookkeeping"
            width={160}
            height={48}
            style={{ objectFit: "contain" }}
          />
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
        <span style={{ color: C.gold }}>Full-Cycle Bookkeeping</span>
      </nav>

      {/* ── Page Hero ── */}
      <header className="page-hero">
        <div>
          <div className="section-label">Core Service</div>
          <h1 className="page-title">
            Full-Cycle<br />
            <span>Bookkeeping</span>
          </h1>
          <p className="page-intro">
            Every transaction recorded. Every account reconciled. Every month,
            without fail. We handle the complete accounting cycle for your business
            so you can stop worrying about your books and start focusing on your
            growth.
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

        <div className="hero-card">
          <div className="hero-card-icon">
            <BookOpen size={28} />
          </div>
          <div className="hero-card-title">Full-Cycle Bookkeeping</div>
          <div className="hero-card-desc">
            Complete financial record-keeping from transaction entry through
            to reconciled, tax-ready financial statements — handled remotely
            for small businesses nationwide.
          </div>
          <div className="hero-card-price-label">Starting at</div>
          <div className="hero-card-price">
            $299 <span className="hero-card-price-period">/ month</span>
          </div>
        </div>
      </header>

      <hr className="divider" />

      {/* ── What's Included ── */}
      <section className="section" aria-labelledby="included-heading">
        <div className="section-label">What You Get</div>
        <h2 className="section-title" id="included-heading">
          Everything Covered,<br />
          <span>Nothing Left to Chance</span>
        </h2>
        <p className="section-body">
          Our full-cycle bookkeeping service is comprehensive by design. Here's
          exactly what's included every month:
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
            <h3>Why Full-Cycle Bookkeeping Matters</h3>
            <p>
              Most small business owners know they need bookkeeping — but few
              understand what "full-cycle" actually means. Partial bookkeeping
              (entering transactions but never reconciling accounts, for example)
              creates a false sense of security. You think your books are clean
              until tax season reveals months of errors.
            </p>
            <p>
              Full-cycle bookkeeping closes that loop. Every transaction is
              entered, categorized, and then verified against your actual bank
              statements. Discrepancies are caught and resolved in real time —
              not discovered a year later when the damage is already done.
            </p>
          </div>
          <div className="body-copy">
            <h3>Built for Remote, Growing Businesses</h3>
            <p>
              True Orbit serves small business owners across the United States
              entirely remotely. Whether you're a solopreneur in New York or a
              growing team in Texas, you get the same meticulous, big-firm
              approach to your books — without the big-firm overhead.
            </p>
            <p>
              With 5+ years of applied financial experience, we've built systems
              that make remote bookkeeping seamless. Secure cloud access, clear
              monthly communication, and records your CPA will actually thank you
              for delivering.
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
          Full-cycle bookkeeping is the foundation. These services build on it
          to give your business a complete financial advantage.
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
            Ready to Stop Worrying<br />
            <span>About Your Books?</span>
          </div>
          <p className="cta-sub">
            Start with a free discovery call. No commitment, no pressure — just
            a clear picture of what your books need and how we can help.
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
            <img
              src="/Color_logo_-_no_background.svg"
              alt="True Orbit Bookkeeping"
              width={160}
              height={48}
              style={{ objectFit: "contain" }}
            />
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
