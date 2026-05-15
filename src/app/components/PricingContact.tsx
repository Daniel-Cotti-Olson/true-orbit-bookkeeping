"use client";

// app/components/PricingContact.tsx
// Client component for Pricing + Contact sections only.
// These need onClick (pricing buttons → scroll to contact) and form state.
// All static content (headings, copy) is intentionally kept in page.tsx
// so Google crawls it as server-rendered HTML — this component handles
// only the interactive layer.

import { useState } from "react";
import { ArrowRight, Mail, Phone, MapPin, Check } from "lucide-react";

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

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function PricingContact() {
  const [submitted, setSubmitted] = useState(false);

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
      {/* ── PRICING ── */}
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
                      <option>Accounts Payable &amp; Receivable</option>
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
    </>
  );
}
