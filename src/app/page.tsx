// app/page.tsx
// SERVER COMPONENT — no "use client" — fully indexable by Google
//
// SEO structure: all meaningful content renders as static HTML in document order:
//   Nav (fixed) → Hero → Stats → Services → About → Pricing → Contact → Footer
//
// Client components are minimal and isolated:
//   HomeInteractive  — nav scroll state + mobile menu only
//   HeroCTA          — two hero buttons (need scrollTo onClick)
//   PricingContact   — pricing buttons + contact form (need onClick / form state)

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BookOpen, TrendingUp, FileText, Shield,
  Calculator, BarChart2
} from "lucide-react";
import HomeInteractive from "./components/HomeInteractive";
import HeroCTA from "./components/HeroCTA";
import PricingContact from "./components/PricingContact";

// ── SEO Metadata ─────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "True Orbit Bookkeeping | Expert Bookkeeping for Small Businesses",
  description:
    "Professional bookkeeping and financial advisory for small businesses nationwide. Full-cycle bookkeeping, financial strategy, tax readiness, and more — handled remotely with big-firm precision from Portland, Oregon.",
  keywords: [
    "small business bookkeeping",
    "remote bookkeeping service",
    "financial advisory small business",
    "bookkeeping Portland Oregon",
    "online bookkeeper",
    "tax ready bookkeeping",
    "cash flow management",
    "full cycle bookkeeping",
  ],
  openGraph: {
    title: "True Orbit Bookkeeping | Expert Financial Services for Small Businesses",
    description:
      "High-end bookkeeping and strategic financial advisory for ambitious small businesses. Precision, clarity, and big-firm rigor — delivered remotely nationwide.",
    url: "https://trueorbitbookkeeping.com",
    siteName: "True Orbit Bookkeeping",
    type: "website",
    images: [
      {
        url: "https://trueorbitbookkeeping.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "True Orbit Bookkeeping",
      },
    ],
  },
  alternates: {
    canonical: "https://trueorbitbookkeeping.com",
  },
};

// ── JSON-LD Organization Schema ──────────────────────────────────
const orgSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "True Orbit Bookkeeping LLC",
  description:
    "Professional bookkeeping and financial advisory for small businesses nationwide. Full-cycle bookkeeping, financial strategy, tax readiness, financial reporting, accounts payable and receivable, and audit support.",
  url: "https://trueorbitbookkeeping.com",
  telephone: "+15033139953",
  email: "info@trueorbitbookkeeping.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Portland",
    addressRegion: "OR",
    addressCountry: "US",
  },
  areaServed: "United States",
  priceRange: "$$$",
  sameAs: [],
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

// ── Static data ──────────────────────────────────────────────────
const services = [
  {
    icon: <BookOpen size={28} />,
    title: "Full-Cycle Bookkeeping",
    href: "/services/full-cycle-bookkeeping",
    desc: "Meticulous recording of all financial transactions, ensuring your ledgers are always accurate and up-to-date. Never wonder where your money went again.",
  },
  {
    icon: <TrendingUp size={28} />,
    title: "Financial Strategy",
    href: "/services/financial-strategy",
    desc: "Deep-dive analysis and cash flow forecasting to help you make informed decisions for future growth. Your numbers, translated into action.",
  },
  {
    icon: <FileText size={28} />,
    title: "Tax Readiness",
    href: "/services/tax-readiness",
    desc: "Organization of financial records to ensure a seamless tax season with maximum eligible deductions. No surprises, no scrambling.",
  },
  {
    icon: <BarChart2 size={28} />,
    title: "Financial Reporting",
    href: "/services/financial-reporting",
    desc: "Clear, timely financial statements — P&L, balance sheet, cash flow — formatted for business owners who need answers, not accounting jargon.",
  },
  {
    icon: <Calculator size={28} />,
    title: "Accounts Payable & Receivable",
    href: "/services/accounts-payable-receivable",
    desc: "Systematic management of what you owe and what you're owed. Keep vendor relationships strong and cash flow predictable.",
  },
  {
    icon: <Shield size={28} />,
    title: "Audit Support",
    href: "/services/audit-support",
    desc: "Should you ever face an audit, your records will be immaculate, organized, and defensible. We keep everything audit-ready at all times.",
  },
];

const values = [
  { title: "Mission Driven",           desc: "Empowering owners to focus on their craft. Your growth is our metric." },
  { title: "Uncompromising Integrity", desc: "Your financial security is our top priority. We never cut corners." },
  { title: "Precision Over Everything", desc: "Every number matters. We treat your books with big-firm rigor." },
];

const stats = [
  { value: "5+",   label: "Years Experience" },
  { value: "100%", label: "Accuracy Guarantee" },
  { value: "3",    label: "Service Tiers" },
  { value: "∞",    label: "Peace of Mind" },
];

// ════════════════════════════════════════════════════════════════
export default function HomePage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
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

        /* ── Nav desktop/mobile show/hide ── */
        .nav-links-desktop { display: flex; }
        .nav-cta-btn       { display: inline-block; }
        .nav-hamburger-btn { display: none; }

        /* ── Hero ── */
        .hero {
          min-height: 100vh; width: 100%;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          text-align: center; padding: 120px 24px 80px;
          position: relative; overflow: hidden;
        }
        .hero-bg-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 80% 60% at 50% 50%, black, transparent);
        }
        .hero-glow {
          position: absolute; width: 600px; height: 600px; border-radius: 50%;
          background: radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%);
          top: 50%; left: 50%; transform: translate(-50%, -50%);
          pointer-events: none;
        }
        .hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          border: 1px solid rgba(201,168,76,0.3);
          background: rgba(201,168,76,0.06);
          padding: 8px 20px; border-radius: 999px;
          font-size: 12px; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: ${C.gold}; margin-bottom: 32px; position: relative;
          animation: fadeUp 0.7s ease 0.1s both;
        }
        .hero-eyebrow {
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.25em; text-transform: uppercase;
          color: ${C.gold}; margin-bottom: 24px;
          display: inline-flex; align-items: center; gap: 12px;
          position: relative;
          animation: fadeUp 0.7s ease 0.2s both;
        }
        .hero-eyebrow::before, .hero-eyebrow::after {
          content: ''; width: 40px; height: 1px; background: ${C.goldDim};
        }
        .hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.8rem, 7vw, 5.5rem);
          font-weight: 700; line-height: 1.05;
          color: ${C.text}; margin-bottom: 24px;
          position: relative; letter-spacing: -0.01em;
          animation: fadeUp 0.7s ease 0.4s both;
        }
        .hero-title span {
          background: linear-gradient(135deg, ${C.goldDim} 0%, ${C.goldLt} 50%, ${C.goldDim} 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero-sub {
          font-size: clamp(1rem, 2vw, 1.15rem);
          color: ${C.muted}; max-width: 540px;
          margin: 0 auto 48px; line-height: 1.75;
          font-weight: 300; position: relative;
          animation: fadeUp 0.7s ease 0.6s both;
        }
        .hero-actions-wrap {
          animation: fadeUp 0.7s ease 0.8s both;
          position: relative;
        }

        /* ── Stat strip ── */
        .stat-strip {
          border-top: 1px solid ${C.border};
          border-bottom: 1px solid ${C.border};
          background: ${C.surface};
          padding: 40px 48px;
          display: grid; grid-template-columns: repeat(4, 1fr);
          position: relative; z-index: 0;
        }
        .stat-item {
          text-align: center; padding: 0 24px;
          border-right: 1px solid ${C.border};
        }
        .stat-item:last-child { border-right: none; }
        .stat-value {
          font-family: 'Cormorant Garamond', serif;
          font-size: 3rem; font-weight: 700;
          color: ${C.gold}; line-height: 1; margin-bottom: 6px;
        }
        .stat-label {
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.15em; text-transform: uppercase; color: ${C.dim};
        }

        /* ── Sections ── */
        .section { padding: 100px 48px; max-width: 1200px; margin: 0 auto; }
        .section-label {
          font-size: 11px; font-weight: 600; letter-spacing: 0.2em;
          text-transform: uppercase; color: ${C.gold}; margin-bottom: 16px;
          display: flex; align-items: center; gap: 12px;
        }
        .section-label::after {
          content: ''; flex: 1; max-width: 60px; height: 1px; background: ${C.goldDim};
        }
        .section-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2rem, 4vw, 3.25rem);
          font-weight: 700; line-height: 1.1;
          color: ${C.text}; margin-bottom: 16px; letter-spacing: -0.01em;
        }
        .section-title span { color: ${C.gold}; }
        .section-body { font-size: 1rem; color: ${C.muted}; line-height: 1.75; max-width: 560px; font-weight: 300; }

        /* ── Bento grid ── */
        .bento-grid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 1px; background: ${C.border};
          border: 1px solid ${C.border}; margin-top: 64px;
        }
        .bento-cell {
          background: ${C.surface}; padding: 40px 36px;
          transition: background 0.25s; position: relative; overflow: hidden;
          text-decoration: none; display: block;
        }
        .bento-cell::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(201,168,76,0.04), transparent);
          opacity: 0; transition: opacity 0.3s;
        }
        .bento-cell:hover::before { opacity: 1; }
        .bento-icon {
          width: 52px; height: 52px; border: 1px solid ${C.border};
          border-radius: 8px; display: flex; align-items: center; justify-content: center;
          color: ${C.gold}; margin-bottom: 20px; transition: border-color 0.2s, background 0.2s;
        }
        .bento-cell:hover .bento-icon { border-color: ${C.goldDim}; background: rgba(201,168,76,0.06); }
        .bento-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.35rem; font-weight: 600; color: ${C.text}; margin-bottom: 10px;
        }
        .bento-desc { font-size: 14px; color: ${C.muted}; line-height: 1.7; font-weight: 300; }
        .bento-arrow {
          display: flex; align-items: center; gap: 6px;
          margin-top: 20px; font-size: 11px; font-weight: 600;
          letter-spacing: 0.08em; text-transform: uppercase;
          color: ${C.goldDim}; transition: color 0.2s, gap 0.2s;
        }
        .bento-cell:hover .bento-arrow { color: ${C.gold}; gap: 10px; }

        /* ── About ── */
        .about-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 80px; align-items: center;
        }
        .photo-wrapper {
          position: relative; border-radius: 4px; overflow: hidden;
          aspect-ratio: 4/5; border: 1px solid ${C.border};
          box-shadow: 0 32px 80px rgba(0,0,0,0.4);
        }
        .photo-wrapper::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, ${C.goldDim}, ${C.gold}, ${C.goldDim}); z-index: 2;
        }
        .photo-glow-bottom {
          position: absolute; bottom: -40px; right: -40px;
          width: 200px; height: 200px; border-radius: 50%;
          background: radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%);
          z-index: 0; pointer-events: none;
        }
        .photo-glow-top {
          position: absolute; top: -40px; left: -40px;
          width: 160px; height: 160px; border-radius: 50%;
          background: radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%);
          z-index: 0; pointer-events: none;
        }
        .about-values { margin-top: 40px; display: flex; flex-direction: column; gap: 16px; }
        .about-value {
          display: flex; gap: 16px; align-items: flex-start;
          padding: 18px 24px; border: 1px solid ${C.border};
          border-radius: 4px; background: ${C.surface}; transition: border-color 0.2s;
        }
        .about-value:hover { border-color: ${C.goldDim}; }
        .about-value-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: ${C.gold}; margin-top: 6px; flex-shrink: 0;
        }
        .about-value-title {
          font-weight: 600; font-size: 12px; color: ${C.text};
          margin-bottom: 4px; letter-spacing: 0.04em; text-transform: uppercase;
        }
        .about-value-desc { font-size: 13px; color: ${C.muted}; line-height: 1.6; font-weight: 300; }

        /* ── Pricing (styles only — markup in PricingContact.tsx) ── */
        .pricing-grid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 1px; background: ${C.border};
          border: 1px solid ${C.border}; margin-top: 64px;
        }
        .pricing-card {
          background: ${C.surface}; padding: 40px 32px;
          display: flex; flex-direction: column; position: relative;
        }
        .pricing-card.popular { background: #0f1d35; }
        .pricing-card.popular::before {
          content: 'Most Recommended';
          position: absolute; top: -1px; left: 50%; transform: translateX(-50%);
          background: linear-gradient(135deg, ${C.goldDim}, ${C.gold});
          color: ${C.bg}; font-size: 10px; font-weight: 700;
          letter-spacing: 0.15em; text-transform: uppercase;
          padding: 5px 16px; white-space: nowrap;
        }
        .pricing-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.5rem; font-weight: 700; color: ${C.text}; margin-bottom: 6px;
        }
        .pricing-tagline { font-size: 13px; color: ${C.dim}; margin-bottom: 32px; line-height: 1.5; font-weight: 300; }
        .pricing-price {
          font-family: 'Cormorant Garamond', serif;
          font-size: 3.5rem; font-weight: 700; color: ${C.gold}; line-height: 1; margin-bottom: 4px;
        }
        .pricing-period { font-size: 13px; color: ${C.dim}; margin-bottom: 32px; }
        .pricing-divider { height: 1px; background: ${C.border}; margin-bottom: 28px; }
        .pricing-features {
          list-style: none; display: flex; flex-direction: column;
          gap: 12px; flex: 1; margin-bottom: 32px;
        }
        .pricing-feature {
          display: flex; align-items: flex-start; gap: 10px;
          font-size: 14px; color: ${C.muted}; font-weight: 300; line-height: 1.5;
        }
        .pricing-check {
          width: 18px; height: 18px; border-radius: 50%;
          background: rgba(201,168,76,0.1);
          display: flex; align-items: center; justify-content: center;
          color: ${C.gold}; flex-shrink: 0; margin-top: 1px;
        }
        .pricing-btn {
          width: 100%; padding: 14px;
          border: 1px solid ${C.goldDim}; background: transparent;
          color: ${C.gold}; font-family: 'DM Sans', sans-serif;
          font-size: 12px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; cursor: pointer; border-radius: 2px;
          transition: background 0.2s, color 0.2s;
        }
        .pricing-btn:hover, .pricing-card.popular .pricing-btn {
          background: linear-gradient(135deg, ${C.goldDim}, ${C.gold});
          color: ${C.bg}; border-color: transparent;
        }

        /* ── Contact ── */
        .contact-grid { display: grid; grid-template-columns: 1fr 1.6fr; gap: 80px; align-items: start; }
        .contact-info { display: flex; flex-direction: column; gap: 24px; margin-top: 40px; }
        .contact-item { display: flex; gap: 14px; align-items: flex-start; }
        .contact-icon {
          width: 40px; height: 40px; border: 1px solid ${C.border};
          border-radius: 4px; display: flex; align-items: center; justify-content: center;
          color: ${C.gold}; flex-shrink: 0;
        }
        .contact-item-label { font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: ${C.dim}; margin-bottom: 2px; }
        .contact-item-value { font-size: 14px; color: ${C.muted}; }
        .contact-item-value a { color: ${C.gold}; text-decoration: none; transition: opacity 0.2s; }
        .contact-item-value a:hover { opacity: 0.8; }
        .contact-form { display: flex; flex-direction: column; gap: 16px; margin-top: 40px; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .form-field { display: flex; flex-direction: column; gap: 6px; }
        .form-label { font-size: 11px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: ${C.dim}; }
        .form-input, .form-select, .form-textarea {
          background: ${C.surface}; border: 1px solid ${C.border};
          color: ${C.text}; font-family: 'DM Sans', sans-serif;
          font-size: 14px; padding: 12px 16px; border-radius: 2px;
          outline: none; transition: border-color 0.2s; width: 100%;
        }
        .form-input:focus, .form-select:focus, .form-textarea:focus { border-color: ${C.goldDim}; }
        .form-select { appearance: none; cursor: pointer; }
        .form-textarea { resize: vertical; min-height: 120px; }
        .btn-primary {
          background: linear-gradient(135deg, ${C.goldDim}, ${C.gold});
          color: ${C.bg}; border: none; font-family: 'DM Sans', sans-serif;
          font-size: 13px; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; padding: 16px 36px; border-radius: 2px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: opacity 0.2s, transform 0.2s, box-shadow 0.2s;
        }
        .btn-primary:hover { opacity: 0.9; transform: translateY(-2px); box-shadow: 0 8px 32px rgba(201,168,76,0.3); }

        /* ── Footer ── */
        .footer { border-top: 1px solid ${C.border}; background: ${C.surface}; padding: 48px; }
        .footer-inner {
          max-width: 1200px; margin: 0 auto;
          display: grid; grid-template-columns: 2fr 1fr 1fr;
          gap: 64px; margin-bottom: 48px;
        }
        .footer-tagline { font-size: 13px; color: ${C.dim}; line-height: 1.7; max-width: 280px; font-weight: 300; margin-top: 16px; }
        .footer-col-title { font-size: 11px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: ${C.gold}; margin-bottom: 20px; }
        .footer-links { list-style: none; display: flex; flex-direction: column; gap: 10px; }
        .footer-links a { font-size: 13px; color: ${C.dim}; text-decoration: none; cursor: pointer; transition: color 0.2s; }
        .footer-links a:hover { color: ${C.gold}; }
        .footer-bottom {
          max-width: 1200px; margin: 0 auto; padding-top: 24px;
          border-top: 1px solid ${C.border};
          display: flex; justify-content: space-between; align-items: center;
          font-size: 12px; color: ${C.dim};
        }

        /* ── Animations ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.7s ease both; }

        /* ── Mobile ── */
        @media (max-width: 900px) {
          .nav-links-desktop { display: none; }
          .nav-cta-btn       { display: none; }
          .nav-hamburger-btn { display: block; }
          .section { padding: 64px 24px; }
          .hero { padding: 100px 24px 60px; min-height: auto; }
          .bento-grid { grid-template-columns: 1fr; }
          .stat-strip { grid-template-columns: repeat(2,1fr); padding: 32px 24px; }
          .stat-item { border-right: none; border-bottom: 1px solid ${C.border}; padding: 20px 0; }
          .stat-item:last-child, .stat-item:nth-child(even) { border-bottom: none; }
          .about-grid { grid-template-columns: 1fr; gap: 40px; }
          .pricing-grid { grid-template-columns: 1fr; }
          .contact-grid { grid-template-columns: 1fr; gap: 40px; }
          .footer-inner { grid-template-columns: 1fr; gap: 32px; }
          .footer-bottom { flex-direction: column; gap: 8px; text-align: center; }
          .form-row { grid-template-columns: 1fr; }
          .footer { padding: 40px 24px 24px; }
        }
      `}</style>

      {/* Nav: fixed position, renders at top regardless of DOM order */}
      <HomeInteractive />

      {/* ── HERO ── */}
      <section id="hero" className="hero">
        <div className="hero-bg-grid" aria-hidden="true" />
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-badge">Elite Financial Management</div>
        <p className="hero-eyebrow">True Orbit Bookkeeping</p>
        <h1 className="hero-title">
          Your Trusted Partner in<br />
          <span>Financial Clarity</span>
        </h1>
        <p className="hero-sub">
          High-end bookkeeping and strategic financial advisory designed
          specifically for ambitious small businesses and solopreneurs
          who demand excellence.
        </p>
        {/* Buttons need onClick — isolated in HeroCTA to keep this file server-only */}
        <HeroCTA />
      </section>

      {/* ── STAT STRIP ── */}
      <div className="stat-strip" aria-label="Key statistics">
        {stats.map((s, i) => (
          <div key={i} className="stat-item">
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* ── SERVICES ── */}
      <section id="services" aria-labelledby="services-heading">
        <div className="section">
          <div className="section-label">Expert Financial Services</div>
          <h2 className="section-title" id="services-heading">
            Everything Your Business<br />
            <span>Needs to Thrive</span>
          </h2>
          <p className="section-body">
            We provide the technical financial foundation your business
            needs to scale with confidence — handled with precision,
            delivered with clarity.
          </p>
          <div className="bento-grid">
            {services.map((s, i) => (
              <Link key={i} href={s.href} className="bento-cell">
                <div className="bento-icon" aria-hidden="true">{s.icon}</div>
                <div className="bento-title">{s.title}</div>
                <div className="bento-desc">{s.desc}</div>
                <div className="bento-arrow" aria-hidden="true">Learn more →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section
        id="about"
        aria-labelledby="about-heading"
        style={{ background: C.surface, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}
      >
        <div className="section">
          <div className="about-grid">
            {/* Photo */}
            <div style={{ position: "relative" }}>
              <div className="photo-glow-top" aria-hidden="true" />
              <div className="photo-glow-bottom" aria-hidden="true" />
              <div className="photo-wrapper">
                <Image
                  src="/Daniel4.jpg"
                  alt="Daniel — True Orbit Bookkeeping founder"
                  fill
                  priority
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
              </div>
            </div>
            {/* Text */}
            <div>
              <div className="section-label">About</div>
              <h2 className="section-title" id="about-heading">
                Elevating Business<br />
                <span>Through Precision</span>
              </h2>
              <p className="section-body">
                True Orbit Bookkeeping was founded on a simple principle:
                small businesses deserve big-firm financial expertise.
                We don't just record numbers — we interpret them.
              </p>
              <p className="section-body" style={{ marginTop: 16 }}>
                With 5+ years of applied financial experience and a
                data-driven approach to every engagement, we bring the
                same discipline and rigor to your books that institutional
                financial analysts bring to Wall Street.
              </p>
              <div className="about-values">
                {values.map((v, i) => (
                  <div key={i} className="about-value">
                    <div className="about-value-dot" aria-hidden="true" />
                    <div>
                      <div className="about-value-title">{v.title}</div>
                      <div className="about-value-desc">{v.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING + CONTACT ── */}
      {/* Buttons need onClick / form needs state — isolated in PricingContact */}
      <PricingContact />

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer-inner">
          <div>
            <Image
              src="/Color_logo_-_no_background.svg"
              alt="True Orbit Bookkeeping"
              width={200} height={60}
              style={{ objectFit: "contain" }}
            />
            <p className="footer-tagline">
              Elevating your business through meticulous financial clarity
              and strategic advisory. We orbit your success with precision
              and care.
            </p>
          </div>
          <div>
            <div className="footer-col-title">Navigation</div>
            <ul className="footer-links">
              {["services", "about", "pricing", "contact"].map(id => (
                <li key={id}>
                  <a data-scroll-to={id}>
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
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
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} True Orbit Bookkeeping LLC. All rights reserved.</span>
          <span style={{ color: C.goldDim }}>Your Trusted Partner in Financial Clarity</span>
        </div>
      </footer>
    </>
  );
}
