import { Target, Wrench, TrendingUp } from "lucide-react";
import FadeIn from "./FadeIn";
import { getTranslations, type Locale } from "@/lib/i18n";
import type { ReactNode } from "react";

interface PointProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay: number;
}

function Point({ icon, title, description, delay }: PointProps) {
  return (
    <FadeIn animation="slide-right" delay={delay}>
      <div className="group flex gap-5">
        <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
          {icon}
        </div>
        <div>
          <h3 className="mb-1.5 text-[17px] font-bold tracking-tight">{title}</h3>
          <p className="text-[15px] leading-relaxed text-muted">{description}</p>
        </div>
      </div>
    </FadeIn>
  );
}

function AbstractGrid() {
  const cells = [
    "bg-primary/10", "bg-border/30", "bg-primary/[0.06]",
    "bg-border/30", "bg-primary/15", "bg-border/30",
    "bg-primary/[0.06]", "bg-border/30", "bg-primary/10",
  ];
  return (
    <FadeIn animation="slide-left">
      <div className="relative">
        <div className="grid grid-cols-3 gap-3">
          {cells.map((bg, i) => (
            <div
              key={i}
              className={`aspect-square rounded-2xl ${bg} transition-colors duration-500`}
            />
          ))}
        </div>
        <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
      </div>
    </FadeIn>
  );
}

const pointIcons: ReactNode[] = [
  <Target key="t" size={20} strokeWidth={1.8} />,
  <Wrench key="w" size={20} strokeWidth={1.8} />,
  <TrendingUp key="r" size={20} strokeWidth={1.8} />,
];

export default function WhyUs({ locale }: { locale: Locale }) {
  const t = getTranslations(locale).whyUs;

  return (
    <section id="why-us" className="relative overflow-hidden bg-white py-28">
      {/* Subtle background accent */}
      <div className="pointer-events-none absolute -right-60 top-0 h-[500px] w-[500px] rounded-full bg-primary/[0.03] blur-[80px]" />

      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2">
        {/* Visual side — abstract grid */}
        <AbstractGrid />

        {/* Content side */}
        <div>
          <FadeIn animation="fade-up">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.15em] text-primary">
              {t.label}
            </p>
            <h2 className="mb-5 text-3xl sm:text-4xl lg:text-5xl">
              {t.heading}
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-muted">
              {t.subtitle}
            </p>
          </FadeIn>

          <div className="flex flex-col gap-8">
            {t.points.map((point, i) => (
              <Point
                key={point.title}
                icon={pointIcons[i]}
                title={point.title}
                description={point.description}
                delay={(i + 1) * 100}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
