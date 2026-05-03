"use client";

import Link from "next/link";
import { Phone } from "lucide-react";

const navItems = ["Services", "About", "Pricing", "Contact"];

const Navbar = () => {
  return (
    <nav style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 9999,
      backgroundColor: "#1e1b4b",
      borderBottom: "1px solid rgba(212,175,55,0.2)",
      boxShadow: "0 4px 30px rgba(0,0,0,0.5)",
    }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem",
        padding: "1rem 2rem",
        flexWrap: "wrap",
      }}>
        {navItems.map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase()}`}
            style={{
              color: "rgba(255,255,255,0.6)",
              textDecoration: "none",
              fontSize: "0.75rem",
              fontWeight: 900,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            {item}
          </Link>
        ))}
        <a
          href="tel:5033139953"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
            color: "#D4AF37",
            textDecoration: "none",
            fontSize: "0.75rem",
            fontWeight: 700,
            padding: "0.5rem 1rem",
            borderRadius: "9999px",
            border: "1px solid rgba(212,175,55,0.3)",
            backgroundColor: "rgba(212,175,55,0.1)",
          }}
        >
          ☎ (503) 313-9953
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
