"use client";

import { useEffect, useRef, useState } from "react";

interface TextRevealProps {
  text: string;
  className?: string;
  /** Delay before the first word appears (ms) */
  startDelay?: number;
  /** Stagger between each word (ms) */
  stagger?: number;
  /** Whether to apply text-gradient class to this line */
  gradient?: boolean;
}

/**
 * Animates text word-by-word with a spring-like slide-up + fade effect.
 * Triggers when the element enters the viewport.
 */
export default function TextReveal({
  text,
  className = "",
  startDelay = 0,
  stagger = 80,
  gradient = false,
}: TextRevealProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const words = text.split(" ");

  return (
    <span ref={ref} className={`inline ${className}`}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden"
        >
          <span
            className={`inline-block transition-all duration-700 ${
              gradient ? "text-gradient" : ""
            }`}
            style={{
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              transitionDelay: visible ? `${startDelay + i * stagger}ms` : "0ms",
              transform: visible ? "translateY(0)" : "translateY(110%)",
              opacity: visible ? 1 : 0,
            }}
          >
            {word}
          </span>
          {i < words.length - 1 && "\u00A0"}
        </span>
      ))}
    </span>
  );
}
