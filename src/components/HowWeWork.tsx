import { Search, PenTool, Rocket } from "lucide-react";
import type { ReactNode } from "react";

interface StepProps {
  step: number;
  icon: ReactNode;
  title: string;
  description: string;
}

function Step({ step, icon, title, description }: StepProps) {
  return (
    <div className="relative flex flex-col items-center text-center">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white">
        {icon}
      </div>
      <span className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">
        Step {step}
      </span>
      <h3 className="mb-2 text-lg font-bold">{title}</h3>
      <p className="max-w-xs leading-relaxed text-muted">{description}</p>
    </div>
  );
}

export default function HowWeWork() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl sm:text-4xl">How we work</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted">
            A straightforward process designed to deliver real results, fast.
          </p>
        </div>

        <div className="relative grid gap-12 sm:grid-cols-3">
          {/* Connector line (desktop only) */}
          <div className="absolute left-[16.67%] right-[16.67%] top-7 hidden h-px bg-border sm:block" />

          <Step
            step={1}
            icon={<Search size={24} />}
            title="Discover"
            description="We map your workflows, pain points, and goals to understand where automation delivers the most value."
          />
          <Step
            step={2}
            icon={<PenTool size={24} />}
            title="Design"
            description="We architect a tailored solution — lean, practical, and aligned with your existing tools."
          />
          <Step
            step={3}
            icon={<Rocket size={24} />}
            title="Deliver"
            description="We implement, test, and deploy — then stick around to make sure everything runs smoothly."
          />
        </div>
      </div>
    </section>
  );
}
