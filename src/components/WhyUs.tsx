import { Target, Wrench, TrendingUp } from "lucide-react";
import FadeIn from "./FadeIn";
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

export default function WhyUs() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-white py-28">
      {/* Subtle background accent */}
      <div className="pointer-events-none absolute -right-60 top-0 h-[500px] w-[500px] rounded-full bg-primary/[0.03] blur-[80px]" />

      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2">
        {/* Visual side */}
        <FadeIn animation="slide-left">
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="grid grid-cols-3 gap-3">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-20 w-20 rounded-2xl border sm:h-24 sm:w-24 transition-all duration-500 ${
                      i === 4
                        ? "border-primary/20 bg-primary-medium shadow-lg shadow-primary/10"
                        : "border-border/60 bg-surface hover:border-primary/15 hover:bg-primary-light"
                    }`}
                  />
                ))}
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-2xl bg-primary p-5 shadow-xl shadow-primary/25 transition-transform duration-500 hover:scale-105">
                  <Target size={28} className="text-white" strokeWidth={1.8} />
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Content side */}
        <div>
          <FadeIn animation="fade-up">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.15em] text-primary">
              Why us
            </p>
            <h2 className="mb-5 text-3xl sm:text-4xl lg:text-5xl">
              Why Flowstate Labs?
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-muted">
              We&apos;re not a one-size-fits-all agency. Every solution is
              crafted around your actual workflows, goals, and team.
            </p>
          </FadeIn>

          <div className="flex flex-col gap-8">
            <Point
              icon={<Target size={20} strokeWidth={1.8} />}
              title="Personalized solutions"
              description="We study your business first, then design automation that fits — not generic templates."
              delay={100}
            />
            <Point
              icon={<Wrench size={20} strokeWidth={1.8} />}
              title="Pragmatic engineering"
              description="We use the right tools for the job. No overengineering, no unnecessary complexity."
              delay={200}
            />
            <Point
              icon={<TrendingUp size={20} strokeWidth={1.8} />}
              title="Results-driven"
              description="Every project has measurable outcomes. If it doesn't move the needle, we don't do it."
              delay={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
