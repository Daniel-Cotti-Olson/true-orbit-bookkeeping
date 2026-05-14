"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  BookOpen, TrendingUp, FileText, Shield, Calculator,
  BarChart2, ArrowRight, Check, Mail, Phone, MapPin,
  Menu, X
} from "lucide-react";

// ── Colour tokens ──────────────────────────────────────────────
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

// ── Pricing ────────────────────────────────────────────────────
const plans = [
  {
    name: "Core Orbit",
    tagline: "Essential monthly bookkeeping for solopreneurs",
    price: "$299",
    period: "/ month",
    features: [
      "Monthly bank reconciliation",
      "Financial statements",
      "Email support",
      "Tax ready records",
      "Quarterly review call",
    ],
    cta: "Start with Core",
    popular: false,
  },
  {
    name: "Professional Clarity",
    tagline: "Weekly updates and strategy for growing businesses",
    price: "$599",
    period: "/ month",
    features: [
      "Weekly bookkeeping",
      "Accounts payable/receivable",
      "Cash flow forecasting",
      "Monthly strategy call",
      "Priority support",
      "Budgeting vs. actuals",
    ],
    cta: "Go Professional",
    popular: true,
  },
  {
    name: "Elite Advisory",
    tagline: "Full financial controller and forecasting services",
    price: "$1,200+",
    period: "/ month",
    features: [
      "Daily transaction entry",
      "Cash flow forecasting",
      "Budgeting vs. actuals",
      "Unlimited consultations",
      "Dedicated advisor",
      "CFO-level guidance",
      "Tax coordination",
    ],
    cta: "Inquire for Elite",
    popular: false,
  },
];

// ── Services ────────────────────────────────────────────────────
const services = [
  {
    icon: <BookOpen size={28} />,
    title: "Full-Cycle Bookkeeping",
    desc: "Meticulous recording of all financial transactions, ensuring your ledgers are always accurate and up-to-date. Never wonder where your money went again.",
  },
  {
    icon: <TrendingUp size={28} />,
    title: "Financial Strategy",
    desc: "Deep-dive analysis and cash flow forecasting to help you make informed decisions for future growth. Your numbers, translated into action.",
  },
  {
    icon: <FileText size={28} />,
    title: "Tax Readiness",
    desc: "Organization of financial records to ensure a seamless tax season with maximum eligible deductions. No surprises, no scrambling.",
  },
  {
    icon: <BarChart2 size={28} />,
    title: "Financial Reporting",
    desc: "Clear, timely financial statements — P&L, balance sheet, cash flow — formatted for business owners who need answers, not accounting jargon.",
  },
  {
    icon: <Calculator size={28} />,
    title: "Accounts Payable & Receivable",
    desc: "Systematic management of what you owe and what you're owed. Keep vendor relationships strong and cash flow predictable.",
  },
  {
    icon: <Shield size={28} />,
    title: "Audit Support",
    desc: "Should you ever face an audit, your records will be immaculate, organized, and defensible. We keep everything audit-ready at all times.",
  },
];

// ── Values ─────────────────────────────────────────────────────
const values = [
  {
    title: "Mission Driven",
    desc: "Empowering owners to focus on their craft. Your growth is our metric.",
  },
  {
    title: "Uncompromising Integrity",
    desc: "Your financial security is our top priority. We never cut corners.",
  },
  {
    title: "Precision Over Everything",
    desc: "Every number matters. We treat your books with big-firm rigor.",
  },
];

// ── Stats ───────────────────────────────────────────────────────
const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "100%", label: "Accuracy Guarantee" },
  { value: "3", label: "Service Tiers" },
  { value: "∞", label: "Peace of Mind" },
];

// ── useInView ───────────────────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function AnimSection({ children, delay = 0, className = "" }: {
  children: React.ReactNode; delay?: number; className?: string;
}) {
  const { ref, visible } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
            
// ══════════════════════════════════════════════════════════════════
export default function BookkeepingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const response = await fetch("/api/contact", {
      method: "POST",
      body: data,
    });
    const result = await response.json();
    if (result.success) {
      setSubmitted(true);
    } else {
      alert("Something went wrong. Please call us directly at (503) 313-9953.");
    }
  };

  return (
    <>
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
          transition: background 0.3s, border-color 0.3s;
        }
        .nav.scrolled {
          background: rgba(8,13,26,0.92);
          border-bottom: 1px solid ${C.border};
          backdrop-filter: blur(12px);
        }
        .nav-links { display: flex; gap: 20px; list-style: none; }
        .nav-links a {
          font-size: 13px; font-weight: 500;
          letter-spacing: 0.08em; text-transform: uppercase;
          color: ${C.muted}; text-decoration: none; cursor: pointer;
          transition: color 0.2s;
        }
        .nav-links a:hover { color: ${C.gold}; }
        .nav-cta {
          background: transparent; border: 1px solid ${C.gold};
          color: ${C.gold}; font-family: 'DM Sans', sans-serif;
          font-size: 12px; font-weight: 600; letter-spacing: 0.1em;
          text-transform: uppercase; padding: 10px 24px;
          border-radius: 2px; cursor: pointer;
          transition: background 0.2s, color 0.2s;
        }
        .nav-cta:hover { background: ${C.gold}; color: ${C.bg}; }
        .nav-hamburger {
          display: none; background: none; border: none;
          color: ${C.gold}; cursor: pointer;
        }
        .mobile-menu {
          position: fixed; inset: 0; background: ${C.bg};
          z-index: 99; display: flex; flex-direction: column;
          align-items: center; justify-content: center; gap: 32px;
        }
        .mobile-menu a {
          font-size: 1.5rem; font-family: 'Cormorant Garamond', serif;
          color: ${C.text}; text-decoration: none; cursor: pointer;
        }

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
          position: absolute; width: 600px; height: 600px;
          border-radius: 50%;
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
        }
        .hero-eyebrow {
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.25em; text-transform: uppercase;
          color: ${C.gold}; margin-bottom: 24px;
          display: inline-flex; align-items: center; gap: 12px;
          position: relative;
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
        }
        .hero-actions {
          display: flex; gap: 16px; justify-content: center;
          flex-wrap: wrap; position: relative;
        }
        .btn-primary {
          background: linear-gradient(135deg, ${C.goldDim}, ${C.gold});
          color: ${C.bg}; border: none;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px; font-weight: 700;
          letter-spacing: 0.08em; text-transform: uppercase;
          padding: 16px 36px; border-radius: 2px; cursor: pointer;
          transition: opacity 0.2s, transform 0.2s, box-shadow 0.2s;
          display: inline-flex; align-items: center; gap: 8px;
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
          padding: 16px 36px; border-radius: 2px; cursor: pointer;
          transition: color 0.2s, border-color 0.2s;
        }
        .btn-ghost:hover { color: ${C.gold}; border-color: ${C.goldDim}; }

        /* ── Stat strip ── */
        .stat-strip {
          border-top: 1px solid ${C.border};
          border-bottom: 1px solid ${C.border};
          background: ${C.surface};
          padding: 40px 48px;
          display: grid; grid-template-columns: repeat(4, 1fr);
          position: relative; z-index: 0;
        }
        .stat-item { text-align: center; padding: 0 24px; border-right: 1px solid ${C.border}; }
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
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: ${C.gold}; margin-bottom: 16px;
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
        .section-body {
          font-size: 1rem; color: ${C.muted};
          line-height: 1.75; max-width: 560px; font-weight: 300;
        }

        /* ── Bento grid ── */
        .bento-grid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 1px; background: ${C.border};
          border: 1px solid ${C.border}; margin-top: 64px;
        }
        .bento-cell {
          background: ${C.surface}; padding: 40px 36px;
          transition: background 0.25s; position: relative; overflow: hidden;
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

        /* ── About ── */
        .about-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 80px; align-items: center;
        }
        .photo-wrapper {
          position: relative;
          border-radius: 4px;
          overflow: hidden;
          aspect-ratio: 4/5;
          border: 1px solid ${C.border};
          box-shadow: 0 32px 80px rgba(0,0,0,0.4);
        }
        .photo-wrapper::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, ${C.goldDim}, ${C.gold}, ${C.goldDim});
          z-index: 2;
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

        /* ── Pricing ── */
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
          position: absolute; top: -1px; left: 50%;
          transform: translateX(-50%);
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
        .contact-grid {
          display: grid; grid-template-columns: 1fr 1.6fr;
          gap: 80px; align-items: start;
        }
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

        /* ── Footer ── */
        .footer {
          border-top: 1px solid ${C.border};
          background: ${C.surface}; padding: 48px;
        }
        .footer-inner {
          max-width: 1200px; margin: 0 auto;
          display: grid; grid-template-columns: 2fr 1fr 1fr;
          gap: 64px; margin-bottom: 48px;
        }
        .footer-tagline { font-size: 13px; color: ${C.dim}; line-height: 1.7; max-width: 280px; font-weight: 300; margin-top: 16px; }
        .footer-col-title {
          font-size: 11px; font-weight: 700; letter-spacing: 0.15em;
          text-transform: uppercase; color: ${C.gold}; margin-bottom: 20px;
        }
        .footer-links { list-style: none; display: flex; flex-direction: column; gap: 10px; }
        .footer-links a {
          font-size: 13px; color: ${C.dim}; text-decoration: none;
          cursor: pointer; transition: color 0.2s;
        }
        .footer-links a:hover { color: ${C.gold}; }
        .footer-bottom {
          max-width: 1200px; margin: 0 auto; padding-top: 24px;
          border-top: 1px solid ${C.border};
          display: flex; justify-content: space-between;
          align-items: center; font-size: 12px; color: ${C.dim};
        }

        /* ── Mobile ── */
        @media (max-width: 900px) {
          .nav { padding: 0 24px; }
          .nav-links, .nav-cta { display: none; }
          .nav-hamburger { display: block; }
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
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-badge   { animation: fadeUp 0.7s ease 0.1s both; }
        .hero-eyebrow { animation: fadeUp 0.7s ease 0.2s both; }
        .hero-title   { animation: fadeUp 0.7s ease 0.4s both; }
        .hero-sub     { animation: fadeUp 0.7s ease 0.6s both; }
        .hero-actions { animation: fadeUp 0.7s ease 0.8s both; }
      `}</style>

      {/* ── NAV ── */}
      <nav className={`nav${scrolled ? " scrolled" : ""}`}>
        <Image
          src="/Color_logo_-_no_background.svg"
          alt="True Orbit Bookkeeping"
          width={180}
          height={50}
          style={{ objectFit: "contain", cursor: "pointer" }}
          onClick={() => scrollTo("hero")}
        />
        <ul className="nav-links">
          {["services","about","pricing","contact"].map(id => (
            <li key={id}>
              <a onClick={() => scrollTo(id)}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
        <button className="nav-cta" onClick={() => scrollTo("contact")}>
          Free Consultation
        </button>
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ visibility: menuOpen ? "hidden" : "visible" }}
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* ── MOBILE MENU ── */}
      {menuOpen && (
        <div className="mobile-menu">
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              position: "absolute", bottom: 48, left: "50%",
              transform: "translateX(-50%)", background: "none", border: "none",
              color: C.gold, cursor: "pointer", padding: 20, zIndex: 110
            }}
          >
            <X size={28} />
          </button>
          {["services","about","pricing","contact"].map(id => (
            <a key={id} onClick={() => scrollTo(id)}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
      )}

     {/* ── HERO ── */}
      <section id="hero" className="hero">
        <div className="hero-bg-grid" />
        <div className="hero-glow" />

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
        <div className="hero-actions">
          <button className="btn-primary" onClick={() => scrollTo("contact")}>
            Book Free Consultation <ArrowRight size={16} />
          </button>
          <button className="btn-ghost" onClick={() => scrollTo("services")}>
            Our Services
          </button>
        </div>
      </section>

      {/* ── STAT STRIP ── */}
      <div className="stat-strip">
        {stats.map((s, i) => (
          <div key={i} className="stat-item">
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* ── SERVICES ── */}
      <section id="services">
        <div className="section">
          <AnimSection>
            <div className="section-label">Expert Financial Services</div>
            <h2 className="section-title">
              Everything Your Business<br />
              <span>Needs to Thrive</span>
            </h2>
            <p className="section-body">
              We provide the technical financial foundation your business
              needs to scale with confidence — handled with precision,
              delivered with clarity.
            </p>
          </AnimSection>

          <div className="bento-grid">
            {services.map((s, i) => (
              <AnimSection key={i} delay={i * 80} className="bento-cell">
                <div className="bento-icon">{s.icon}</div>
                <div className="bento-title">{s.title}</div>
                <div className="bento-desc">{s.desc}</div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ background: C.surface, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
        <div className="section">
          <div className="about-grid">

            {/* Photo */}
            <AnimSection delay={100}>
              <div style={{ position: "relative" }}>
                <div className="photo-glow-top" />
                <div className="photo-glow-bottom" />
                <div className="photo-wrapper">
                  <Image
                    src="/Daniel4.jpg"
                    alt="Daniel — True Orbit Bookkeeping"
                    fill
                    priority
                    style={{ objectFit: "cover", objectPosition: "center top" }}
                  />
                </div>
              </div>
            </AnimSection>

            {/* Text */}
            <div>
              <AnimSection>
                <div className="section-label">About</div>
                <h2 className="section-title">
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
              </AnimSection>

              <div className="about-values">
                {values.map((v, i) => (
                  <AnimSection key={i} delay={i * 100}>
                    <div className="about-value">
                      <div className="about-value-dot" />
                      <div>
                        <div className="about-value-title">{v.title}</div>
                        <div className="about-value-desc">{v.desc}</div>
                      </div>
                    </div>
                  </AnimSection>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing">
        <div className="section">
          <AnimSection>
            <div className="section-label">Transparent Pricing</div>
            <h2 className="section-title">
              Select the Orbit That<br />
              <span>Matches Your Trajectory</span>
            </h2>
            <p className="section-body">
              Investment in clarity. Every plan includes a free initial
              consultation and discovery call so we understand your
              business before we begin.
            </p>
          </AnimSection>

          <div className="pricing-grid">
            {plans.map((plan, i) => (
              <AnimSection key={i} delay={i * 80}>
                <div className={`pricing-card${plan.popular ? " popular" : ""}`}>
                  <div className="pricing-name">{plan.name}</div>
                  <div className="pricing-tagline">{plan.tagline}</div>
                  <div className="pricing-price">{plan.price}</div>
                  {plan.period && <div className="pricing-period">{plan.period}</div>}
                  <div className="pricing-divider" />
                  <ul className="pricing-features">
                    {plan.features.map((f, j) => (
                      <li key={j} className="pricing-feature">
                        <span className="pricing-check">
                          <Check size={11} strokeWidth={3} />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    className="pricing-btn"
                    onClick={() => scrollTo("contact")}
                  >
                    {plan.cta}
                  </button>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ background: C.surface, borderTop: `1px solid ${C.border}` }}>
        <div className="section">
          <div className="contact-grid">
            <div>
              <AnimSection>
                <div className="section-label">Get In Touch</div>
                <h2 className="section-title">
                  Secure Your<br />
                  <span>Financial Future</span>
                </h2>
                <p className="section-body">
                  Ready to orbit your business to new heights? Contact us
                  today for a free initial consultation and discovery call.
                </p>
              </AnimSection>

              <div className="contact-info">
                {[
                  { icon: <Mail size={16} />, label: "Email Us", value: <a href="mailto:info@trueorbitbookkeeping.com">info@trueorbitbookkeeping.com</a> },
                  { icon: <Phone size={16} />, label: "Call Us", value: <a href="tel:5033139953">(503) 313-9953</a> },
                  { icon: <MapPin size={16} />, label: "Location", value: "Remote — Nationwide" },
                ].map((item, i) => (
                  <AnimSection key={i} delay={i * 80}>
                    <div className="contact-item">
                      <div className="contact-icon">{item.icon}</div>
                      <div>
                        <div className="contact-item-label">{item.label}</div>
                        <div className="contact-item-value">{item.value}</div>
                      </div>
                    </div>
                  </AnimSection>
                ))}
              </div>
            </div>

            <AnimSection delay={200}>
              {submitted ? (
                <div style={{ textAlign: "center", padding: "80px 0" }}>
                  <div style={{ fontSize: "3rem", color: C.gold, marginBottom: 16 }}>✓</div>
                  <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2rem", color: C.text, marginBottom: 8 }}>Message Received</h3>
                  <p style={{ color: C.muted }}>We'll be in touch shortly.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-field">
                      <label className="form-label">First Name</label>
                      <input className="form-input" type="text" name="firstName" placeholder="Jane" />
                    </div>
                    <div className="form-field">
                      <label className="form-label">Last Name</label>
                      <input className="form-input" type="text" name="lastName" placeholder="Smith" />
                    </div>
                  </div>
                  <div className="form-field">
                    <label className="form-label">Business Email</label>
                    <input className="form-input" type="email" name="email" placeholder="jane@company.com" />
                  </div>
                  <div className="form-field">
                    <label className="form-label">Phone Number</label>
                    <input className="form-input" type="tel" name="phone" placeholder="(503) 000-0000" />
                  </div>
                  <div className="form-field">
                    <label className="form-label">Service Interest</label>
                    <select className="form-select" name="service">
                      <option value="">Select a service...</option>
                      <option>Full-Cycle Bookkeeping</option>
                      <option>Financial Strategy</option>
                      <option>Tax Readiness</option>
                      <option>Financial Reporting</option>
                      <option>Accounts Payable & Receivable</option>
                      <option>Audit Support</option>
                    </select>
                  </div>
                  <div className="form-field">
                    <label className="form-label">Message</label>
                    <textarea
                      className="form-textarea"
                      name="message"
                      placeholder="Tell us about your business and what you're looking for..."
                    />
                  </div>
                  <div>
                    <button type="submit" className="btn-primary">
                      Send Message <ArrowRight size={16} />
                    </button>
                  </div>
                </form>
              )}
            </AnimSection>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer-inner">
          <div>
            <Image
              src="/Color_logo_-_no_background.svg"
              alt="True Orbit Bookkeeping"
              width={200}
              height={60}
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
              {["services","about","pricing","contact"].map(id => (
                <li key={id}>
                  <a onClick={() => scrollTo(id)}>
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </a>
                </li>
              ))}
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
