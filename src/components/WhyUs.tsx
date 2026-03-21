import { Target, Wrench, TrendingUp } from "lucide-react";
import type { ReactNode } from "react";

interface PointProps {
  icon: ReactNode;
  title: string;
  description: string;
}

function Point({ icon, title, description }: PointProps) {
  return (
    <div className="flex gap-4">
      <div className="mt-1 shrink-0 text-primary">{icon}</div>
      <div>
        <h3 className="mb-1 font-bold">{title}</h3>
        <p className="leading-relaxed text-muted">{description}</p>
      </div>
    </div>
  );
}

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-white py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2">
        {/* Visual side */}
        <div className="flex items-center justify-center">
          <div className="relative">
            {/* Decorative hex grid */}
            <div className="grid grid-cols-3 gap-3">
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className={`h-20 w-20 rounded-2xl border sm:h-24 sm:w-24 ${
                    i === 4
                      ? "border-primary/30 bg-primary-light"
                      : "border-border bg-surface"
                  } transition-colors`}
                />
              ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rounded-full bg-primary p-4">
                <Target size={32} className="text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Content side */}
        <div>
          <h2 className="mb-4 text-3xl sm:text-4xl">
            Why Flowstate Labs?
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-muted">
            We&apos;re not a one-size-fits-all agency. Every solution is crafted
            around your actual workflows, goals, and team.
          </p>

          <div className="flex flex-col gap-8">
            <Point
              icon={<Target size={22} />}
              title="Personalized solutions"
              description="We study your business first, then design automation that fits — not generic templates."
            />
            <Point
              icon={<Wrench size={22} />}
              title="Pragmatic engineering"
              description="We use the right tools for the job. No overengineering, no unnecessary complexity."
            />
            <Point
              icon={<TrendingUp size={22} />}
              title="Results-driven"
              description="Every project has measurable outcomes. If it doesn't move the needle, we don't do it."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
