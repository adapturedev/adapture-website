import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/8 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-1.5 text-sm text-muted">
          <span className="h-2 w-2 rounded-full bg-primary" />
          Automation &amp; Digital Transformation
        </div>

        <h1 className="mb-6 text-5xl leading-tight tracking-tight sm:text-6xl lg:text-7xl">
          Automate smarter.
          <br />
          <span className="text-primary">Grow faster.</span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
          We help small and medium companies streamline operations through
          digitalization and personalized automation solutions — so you can focus
          on what matters most.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-white transition-opacity hover:opacity-90"
          >
            Let&apos;s talk
            <ArrowRight size={18} />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-white px-8 py-3.5 text-base font-semibold text-dark transition-colors hover:bg-surface"
          >
            See what we do
          </a>
        </div>
      </div>
    </section>
  );
}
