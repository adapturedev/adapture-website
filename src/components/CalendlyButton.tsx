"use client";

import { useEffect, useRef, useState } from "react";
import { getTranslations, type Locale } from "@/lib/i18n";

const CALENDLY_URL = "https://calendly.com/adapture-ai/discovery";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (opts: {
        url: string;
        parentElement: HTMLElement;
        resize?: boolean;
      }) => void;
    };
  }
}

export default function CalendlyEmbed({ locale }: { locale: Locale }) {
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const t = getTranslations(locale).calendly;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    function initWidget() {
      const el = containerRef.current;
      if (!el || !window.Calendly) return;

      const isDark = document.documentElement.classList.contains("dark");
      const params = new URLSearchParams({
        primary_color: "1A5CFF",
        text_color: isDark ? "EDEDEC" : "111110",
        background_color: isDark ? "181816" : "FFFFFF",
        hide_event_type_details: "1",
        hide_gdpr_banner: "1",
      });

      // Clear previous widget if component remounts.
      el.innerHTML = "";
      window.Calendly.initInlineWidget({
        url: `${CALENDLY_URL}?${params}`,
        parentElement: el,
        resize: true,
      });
    }

    const tryInit = window.setInterval(() => {
      if (!window.Calendly) return;

      window.clearInterval(tryInit);
      requestAnimationFrame(() => {
        requestAnimationFrame(initWidget);
      });
    }, 100);

    return () => {
      window.clearInterval(tryInit);
    };
  }, [isMounted, locale]);

  if (!isMounted) {
    return (
      <div className="flex h-[700px] w-full items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-center backdrop-blur-sm">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary/80">
            Calendly
          </p>
          <p className="text-white/60">{t.loading}</p>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      suppressHydrationWarning
      className="calendly-inline-widget h-[700px] w-full min-w-[320px] overflow-hidden rounded-2xl border border-white/10 bg-white dark:bg-[#181816]"
    />
  );
}
