"use client";

// app/components/ScrollAnimator.tsx
// Purely visual — no markup, no layout impact.
// Queries .scroll-animate and .scroll-animate-group classes (reliable in React).
// Uses IntersectionObserver to add .is-visible when elements enter the viewport.
// MutationObserver catches client components that mount after SSR.

import { useEffect } from "react";

const SELECTOR = ".scroll-animate, .scroll-animate-group";

function observeAll(observer: IntersectionObserver) {
  document.querySelectorAll(SELECTOR).forEach((el) => {
    if (!el.classList.contains("is-visible")) {
      observer.observe(el);
    }
  });
}

export default function ScrollAnimator() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    observeAll(io);

    const mo = new MutationObserver(() => observeAll(io));
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
