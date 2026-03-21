import { Workflow, Sparkles, Plug, BarChart3 } from "lucide-react";
import FadeIn from "./FadeIn";
import TiltCard from "./TiltCard";
import { getTranslations, type Locale } from "@/lib/i18n";
import type { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay: number;
}

function ServiceCard({ icon, title, description, delay }: ServiceCardProps) {
  return (
    <FadeIn animation="fade-up" delay={delay}>
      <TiltCard className="h-full">
        <div className="group relative h-full overflow-hidden rounded-2xl border border-border/60 bg-white p-8 transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/[0.08]">
          {/* Hover gradient */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-transparent to-primary/[0.02] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="relative">
            <div className="mb-6 inline-flex rounded-2xl bg-primary-light p-3.5 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
              {icon}
            </div>
            <h3 className="mb-3 text-lg font-bold tracking-tight">{title}</h3>
            <p className="text-[15px] leading-relaxed text-muted">{description}</p>
          </div>
        </div>
      </TiltCard>
    </FadeIn>
  );
}

const icons = [
  <Workflow key="w" size={22} strokeWidth={1.8} />,
  <Sparkles key="s" size={22} strokeWidth={1.8} />,
  <Plug key="p" size={22} strokeWidth={1.8} />,
  <BarChart3 key="b" size={22} strokeWidth={1.8} />,
];

export default function Services({ locale }: { locale: Locale }) {
  const t = getTranslations(locale).services;

  return (
    <section id="services" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn animation="fade-up" className="mb-16 text-center">
          <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.15em] text-primary">
            {t.label}
          </p>
          <h2 className="mb-5 text-3xl sm:text-4xl lg:text-5xl">{t.heading}</h2>
          <p className="mx-auto max-w-xl text-lg text-muted">
            {t.subtitle}
          </p>
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.cards.map((card, i) => (
            <ServiceCard key={card.title} icon={icons[i]} title={card.title} description={card.description} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
