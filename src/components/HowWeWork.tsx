import { Search, PenTool, Rocket } from "lucide-react";
import FadeIn from "./FadeIn";
import { getTranslations, type Locale } from "@/lib/i18n";
import type { ReactNode } from "react";

interface StepProps {
  step: number;
  icon: ReactNode;
  title: string;
  description: string;
  delay: number;
}

function Step({ step, icon, title, description, delay }: StepProps) {
  return (
    <FadeIn animation="fade-up" delay={delay}>
      <div className="relative flex flex-col items-center text-center">
        {/* Step number badge */}
        <div className="mb-6 relative">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/20 transition-transform duration-300 hover:scale-105">
            {icon}
          </div>
          <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-fg text-xs font-bold text-card">
            {step}
          </span>
        </div>
        <h3 className="mb-2.5 text-lg font-bold tracking-tight">{title}</h3>
        <p className="max-w-xs text-[15px] leading-relaxed text-muted">{description}</p>
      </div>
    </FadeIn>
  );
}

const stepIcons: ReactNode[] = [
  <Search key="s" size={24} strokeWidth={1.8} />,
  <PenTool key="p" size={24} strokeWidth={1.8} />,
  <Rocket key="r" size={24} strokeWidth={1.8} />,
];

export default function HowWeWork({ locale }: { locale: Locale }) {
  const t = getTranslations(locale).howWeWork;

  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <FadeIn animation="fade-up">
          <div className="mb-16 text-center">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.15em] text-primary">
              {t.label}
            </p>
            <h2 className="mb-5 text-3xl sm:text-4xl lg:text-5xl">{t.heading}</h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted">
              {t.subtitle}
            </p>
          </div>
        </FadeIn>

        <div className="relative grid gap-12 sm:grid-cols-3">
          {/* Connector line (desktop only) */}
          <div className="absolute left-[16.67%] right-[16.67%] top-8 hidden sm:block">
            <div className="h-px w-full bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />
          </div>

          {t.steps.map((step, i) => (
            <Step
              key={step.title}
              step={i + 1}
              icon={stepIcons[i]}
              title={step.title}
              description={step.description}
              delay={i * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
