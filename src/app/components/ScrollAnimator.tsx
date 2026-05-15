"use client";

// app/components/ScrollAnimator.tsx
// Purely visual — no markup, no layout impact.
// Uses IntersectionObserver to add .is-visible to any element with
// data-animate="true" once it enters the viewport.
// Keeps page.tsx a server component while restoring scroll animations.

import { useEffect } from "react";

export default function ScrollAnimator() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            // Unobserve after firing so it only animates in once
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
