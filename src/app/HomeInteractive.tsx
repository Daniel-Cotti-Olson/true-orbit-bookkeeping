"use client";

// app/components/HomeInteractive.tsx
// This is the ONLY client component on the homepage.
// It handles: scroll-triggered nav, mobile menu, contact form submission.

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, Menu, X, Mail, Phone, MapPin, Check } from "lucide-react";

const C = {
  bg:      "#080d1a",
  surface: "#0d1425",
  border:  "#1a2540",
  gold:    "#c9a84c",
  goldDim: "#7a5f2a",
  text:    "#f1f5f9",
  muted:   "#94a3b8",
  dim:     "#475569",
};

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

const contactItems = [
  { icon: <Mail size={16} />,   label: "Email Us",  value: <a href="mailto:info@trueorbitbookkeeping.com">info@trueorbitbookkeeping.com</a> },
  { icon: <Phone size={16} />,  label: "Call Us",   value: <a href="tel:5033139953">(503) 313-9953</a> },
  { icon: <MapPin size={16} />, label: "Location",  value: "Remote — Nationwide" },
];

export default function HomeInteractive() {
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [scrolled,  setScrolled]  = useState(false);
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
    const response = await fetch("/api/contact", { method: "POST", body: data });
    const result = await response.json();
    if (result.success) {
      setSubmitted(true);
    } else {
      alert("Something went wrong. Please call us directly at (503) 313-9953.");
    }
  };

  return (
    <>
      {/* ── NAV ── */}
      <nav
        className="nav"
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          padding: "0 48px", height: 72,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          background: scrolled ? "rgba(8,13,26,0.92)" : "transparent",
          borderBottom: scrolled ? `1px solid ${C.border}` : "1px solid transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          transition: "background 0.3s, border-color 0.3s",
        }}
      >
        <Image
          src="/Color_logo_-_no_background.svg"
          alt="True Orbit Bookkeeping"
          width={180} height={50}
          style={{ objectFit: "contain", cursor: "pointer" }}
          onClick={() => scrollTo("hero")}
        />
        {/* Desktop links */}
        <ul style={{ display: "flex", gap: 20, listStyle: "none" }} className="nav-links-desktop">
          {["services","about","pricing","contact"].map(id => (
            <li key={id}>
              <a
                onClick={() => scrollTo(id)}
                style={{
                  fontSize: 13, fontWeight: 500, letterSpacing: "0.08em",
                  textTransform: "uppercase", color: C.muted,
                  textDecoration: "none", cursor: "pointer",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = C.gold)}
                onMouseLeave={e => (e.currentTarget.style.color = C.muted)}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={() => scrollTo("contact")}
          className="nav-cta-btn"
          style={{
            background: "transparent", border: `1px solid ${C.gold}`,
            color: C.gold, fontFamily: "'DM Sans', sans-serif",
            fontSize: 12, fontWeight: 600, letterSpacing: "0.1em",
            textTransform: "uppercase", padding: "10px 24px",
            borderRadius: 2, cursor: "pointer",
          }}
        >
          Free Consultation
        </button>
        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="nav-hamburger-btn"
          style={{
            display: "none", background: "none", border: "none",
            color: C.gold, cursor: "pointer",
            visibility: menuOpen ? "hidden" : "visible",
          }}
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* ── MOBILE MENU ── */}
      {menuOpen && (
        <div style={{
          position: "fixed", inset: 0, background: C.bg,
          zIndex: 99, display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center", gap: 32,
        }}>
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              position: "absolute", bottom: 48, left: "50%",
              transform: "translateX(-50%)", background: "none", border: "none",
              color: C.gold, cursor: "pointer", padding: 20, zIndex: 110,
            }}
          >
            <X size={28} />
          </button>
          {["services","about","pricing","contact"].map(id => (
            <a
              key={id}
              onClick={() => scrollTo(id)}
              style={{
                fontSize: "1.5rem", fontFamily: "'Cormorant Garamond', serif",
                color: C.text, textDecoration: "none", cursor: "pointer",
              }}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
      )}

      {/* ── HERO BUTTONS ── */}
      {/* These are injected via a portal-like approach — see page.tsx for static hero markup.
          The hero buttons need onClick so we render them here as an overlay using
          CSS absolute positioning within the hero section. */}
      <div
        id="hero-actions-client"
        style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", position: "relative" }}
      >
        <button
          className="btn-primary"
          onClick={() => scrollTo("contact")}
          style={{
            background: `linear-gradient(135deg, ${C.goldDim}, ${C.gold})`,
            color: C.bg, border: "none", fontFamily: "'DM Sans', sans-serif",
            fontSize: 13, fontWeight: 700, letterSpacing: "0.08em",
            textTransform: "uppercase", padding: "16px 36px", borderRadius: 2,
            cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8,
            transition: "opacity 0.2s, transform 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.opacity = "0.9";
            (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
            (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 32px rgba(201,168,76,0.3)";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.opacity = "1";
            (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
            (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
          }}
        >
          Book Free Consultation <ArrowRight size={16} />
        </button>
        <button
          onClick={() => scrollTo("services")}
          style={{
            background: "transparent", color: C.muted,
            border: `1px solid ${C.border}`, fontFamily: "'DM Sans', sans-serif",
            fontSize: 13, fontWeight: 500, letterSpacing: "0.06em",
            textTransform: "uppercase", padding: "16px 36px", borderRadius: 2,
            cursor: "pointer", transition: "color 0.2s, border-color 0.2s",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.color = C.gold;
            (e.currentTarget as HTMLButtonElement).style.borderColor = C.goldDim;
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.color = C.muted;
            (e.currentTarget as HTMLButtonElement).style.borderColor = C.border;
          }}
        >
          Our Services
        </button>
      </div>

      {/* ── PRICING ── */}
      {/* Pricing buttons need scrollTo so we render the full pricing grid here */}
      <section id="pricing">
        <div className="section">
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
          <div className="pricing-grid">
            {plans.map((plan, i) => (
              <div key={i} className={`pricing-card${plan.popular ? " popular" : ""}`}>
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
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ background: C.surface, borderTop: `1px solid ${C.border}` }}>
        <div className="section">
          <div className="contact-grid">
            <div>
              <div className="section-label">Get In Touch</div>
              <h2 className="section-title">
                Secure Your<br />
                <span>Financial Future</span>
              </h2>
              <p className="section-body">
                Ready to orbit your business to new heights? Contact us
                today for a free initial consultation and discovery call.
              </p>
              <div className="contact-info">
                {contactItems.map((item, i) => (
                  <div key={i} className="contact-item">
                    <div className="contact-icon">{item.icon}</div>
                    <div>
                      <div className="contact-item-label">{item.label}</div>
                      <div className="contact-item-value">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              {submitted ? (
                <div style={{ textAlign: "center", padding: "80px 0" }}>
                  <div style={{ fontSize: "3rem", color: C.gold, marginBottom: 16 }}>✓</div>
                  <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2rem", color: C.text, marginBottom: 8 }}>
                    Message Received
                  </h3>
                  <p style={{ color: C.muted }}>We'll be in touch shortly.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-field">
                      <label className="form-label">First Name</label>
                      <input className="form-input" type="text" name="firstName" />
                    </div>
                    <div className="form-field">
                      <label className="form-label">Last Name</label>
                      <input className="form-input" type="text" name="lastName" />
                    </div>
                  </div>
                  <div className="form-field">
                    <label className="form-label">Business Email</label>
                    <input className="form-input" type="email" name="email" />
                  </div>
                  <div className="form-field">
                    <label className="form-label">Phone Number</label>
                    <input className="form-input" type="tel" name="phone" />
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
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER NAV SCROLLS ── */}
      {/* Footer is in page.tsx (server), but the nav scroll links need client.
          We inject a small script tag to handle anchor clicks gracefully. */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.querySelectorAll('[data-scroll-to]').forEach(el => {
              el.addEventListener('click', () => {
                const target = document.getElementById(el.dataset.scrollTo);
                if (target) target.scrollIntoView({ behavior: 'smooth' });
              });
            });
          `,
        }}
      />
    </>
  );
}
