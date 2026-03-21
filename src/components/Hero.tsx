import { ArrowRight } from "lucide-react";
import FadeIn from "./FadeIn";
import TextReveal from "./TextReveal";
import MouseGlow from "./MouseGlow";
import { getTranslations, type Locale } from "@/lib/i18n";

export default function Hero({ locale }: { locale: Locale }) {
  const t = getTranslations(locale).hero;
  return (
    <section className="noise-overlay relative flex min-h-dvh items-center justify-center overflow-hidden">
      {/* ── Animated background ──────────────────────── */}
      <div className="pointer-events-none absolute inset-0">
        {/* Gradient orbs */}
        <div
          className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary/[0.08] blur-[120px]"
          style={{ animation: "pulse-glow 8s ease-in-out infinite" }}
        />
        <div
          className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-primary/[0.06] blur-[100px]"
          style={{ animation: "pulse-glow 10s ease-in-out infinite 2s" }}
        />
        <div
          className="absolute left-1/2 top-1/3 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-primary/[0.05] blur-[80px]"
          style={{ animation: "float 12s ease-in-out infinite 1s" }}
        />

        {/* Dot grid overlay */}
        <div className="bg-dot-pattern absolute inset-0 opacity-20" />
        {/* Top fade */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-surface to-transparent" />
        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-surface to-transparent" />
      </div>

      {/* Mouse-tracking radial gradient spotlight */}
      <MouseGlow />

      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-24 pb-16 text-center">
        <FadeIn animation="scale-in">
          <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-border bg-white/80 px-5 py-2 text-[13px] font-medium tracking-wide text-muted backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            {t.badge}
          </div>
        </FadeIn>

        <h1 className="mb-8 text-5xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          <TextReveal text={t.heading1} stagger={90} />
          <br />
          <TextReveal
            text={t.heading2}
            startDelay={450}
            stagger={90}
            gradient
          />
        </h1>

        <FadeIn animation="fade-up" delay={900}>
          <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            {t.description}
          </p>
        </FadeIn>

        <FadeIn animation="fade-up" delay={1100}>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="btn-glow group inline-flex items-center gap-2.5 rounded-full bg-dark px-8 py-4 text-[15px] font-semibold text-white transition-all duration-300 hover:bg-primary hover:shadow-xl hover:shadow-primary/20"
            >
              {t.cta}
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white/60 px-8 py-4 text-[15px] font-semibold text-dark backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-white hover:shadow-lg hover:shadow-primary/5"
            >
              {t.secondary}
            </a>
          </div>
        </FadeIn>
      </div>

    </section>
  );
}
