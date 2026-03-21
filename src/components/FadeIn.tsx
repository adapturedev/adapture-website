"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

type Animation = "fade-up" | "fade-in" | "scale-in" | "slide-left" | "slide-right";

interface FadeInProps {
  children: ReactNode;
  animation?: Animation;
  delay?: number;
  className?: string;
  as?: keyof HTMLElementTagNameMap;
}

export default function FadeIn({
  children,
  animation = "fade-up",
  delay = 0,
  className = "",
  as: Tag = "div",
}: FadeInProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.animationDelay = `${delay}ms`;
          el.classList.add("visible", `anim-${animation}`);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animation, delay]);

  // We use a generic div wrapper — the `as` prop is a nice-to-have but
  // for simplicity we always render a div.
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
