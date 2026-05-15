"use client";

// app/components/HomeInteractive.tsx
// ONLY handles: scroll-triggered nav styles + mobile menu.
// Hero buttons → HeroCTA.tsx
// Pricing + Contact → PricingContact.tsx
// This keeps page.tsx a pure server component for maximum SEO crawlability.

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const C = {
  bg:      "#080d1a",
  border:  "#1a2540",
  gold:    "#c9a84c",
  muted:   "#94a3b8",
};

export default function HomeInteractive() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Footer data-scroll-to links also need smooth scroll — wire them up once mounted
  useEffect(() => {
    const els = document.querySelectorAll("[data-scroll-to]");
    const handlers: Array<[Element, () => void]> = [];
    els.forEach(el => {
      const handler = () => {
        const id = (el as HTMLElement).dataset.scrollTo!;
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      };
      el.addEventListener("click", handler);
      handlers.push([el, handler]);
    });
    return () => handlers.forEach(([el, handler]) => el.removeEventListener("click", handler));
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
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
          {["services", "about", "pricing", "contact"].map(id => (
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
          {["services", "about", "pricing", "contact"].map(id => (
            <a
              key={id}
              onClick={() => scrollTo(id)}
              style={{
                fontSize: "1.5rem", fontFamily: "'Cormorant Garamond', serif",
                color: C.gold, textDecoration: "none", cursor: "pointer",
              }}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
