import dynamic from "next/dynamic";
import FadeIn from "./FadeIn";
import ContactForm from "./ContactForm";
import { getTranslations, type Locale } from "@/lib/i18n";

const CalendlyEmbed = dynamic(() => import("./CalendlyButton"), {
  ssr: false,
});

export default function CTA({ locale }: { locale: Locale }) {
  const translations = getTranslations(locale);
  const t = translations.cta;

  return (
    <section id="contact" className="noise-overlay relative overflow-hidden bg-contrast py-28 text-white">
      {/* Gradient orbs */}
      <div className="pointer-events-none absolute -left-40 top-0 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-primary/[0.08] blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <FadeIn animation="fade-up">
          <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.15em] text-primary">
            {t.label}
          </p>
          <h2 className="mb-5 text-3xl sm:text-4xl lg:text-5xl text-white">
            {t.heading}
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-lg leading-relaxed text-white/60">
            {t.subtitle}
          </p>
        </FadeIn>

        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 lg:flex-row lg:items-stretch lg:gap-0">
          {/* Calendly embed */}
          <div className="w-full lg:flex-1">
            <CalendlyEmbed locale={locale} />
          </div>

          {/* Vertical "OR" divider (desktop) / horizontal (mobile) */}
          <div className="flex w-full items-center gap-4 lg:w-auto lg:flex-col lg:items-center lg:justify-center lg:px-8">
            <div className="h-px flex-1 bg-white/10 lg:h-auto lg:w-px lg:flex-1" />
            <span className="shrink-0 text-sm font-medium uppercase tracking-widest text-white/30">
              {translations.calendly.divider}
            </span>
            <div className="h-px flex-1 bg-white/10 lg:h-auto lg:w-px lg:flex-1" />
          </div>

          {/* Contact form */}
          <div className="flex w-full items-center lg:flex-1">
            <ContactForm locale={locale} />
          </div>
        </div>
      </div>
    </section>
  );
}
