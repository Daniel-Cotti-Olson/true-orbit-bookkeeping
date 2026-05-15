"use client";

// app/components/HeroCTA.tsx
// Minimal client component — only exists because hero buttons need scrollTo onClick.
// Keeps page.tsx a pure server component for maximum SEO crawlability.

import { ArrowRight } from "lucide-react";

const C = {
  bg:      "#080d1a",
  gold:    "#c9a84c",
  goldDim: "#7a5f2a",
  muted:   "#94a3b8",
  border:  "#1a2540",
};

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function HeroCTA() {
  return (
    <div
      className="hero-actions-wrap"
      style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}
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
  );
}
