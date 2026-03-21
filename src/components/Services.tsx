import { Workflow, Sparkles, Plug, BarChart3 } from "lucide-react";
import FadeIn from "./FadeIn";
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
      <div className="group relative h-full overflow-hidden rounded-2xl border border-border/60 bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/[0.08]">
        {/* Hover gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="relative">
          <div className="mb-6 inline-flex rounded-2xl bg-primary-light p-3.5 text-primary transition-colors duration-300 group-hover:bg-primary-medium">
            {icon}
          </div>
          <h3 className="mb-3 text-lg font-bold tracking-tight">{title}</h3>
          <p className="text-[15px] leading-relaxed text-muted">{description}</p>
        </div>
      </div>
    </FadeIn>
  );
}

const services = [
  {
    icon: <Workflow size={22} strokeWidth={1.8} />,
    title: "Process Automation",
    description:
      "Eliminate repetitive tasks and manual processes with smart automation workflows tailored to your business.",
  },
  {
    icon: <Sparkles size={22} strokeWidth={1.8} />,
    title: "Digital Transformation",
    description:
      "Modernize your operations with the right digital tools — from legacy migration to cloud-native solutions.",
  },
  {
    icon: <Plug size={22} strokeWidth={1.8} />,
    title: "Custom Integrations",
    description:
      "Connect your existing tools and systems seamlessly so data flows where it needs to, automatically.",
  },
  {
    icon: <BarChart3 size={22} strokeWidth={1.8} />,
    title: "Data & Analytics",
    description:
      "Turn raw data into actionable insights with dashboards and reporting built for your decision-making.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn animation="fade-up" className="mb-16 text-center">
          <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.15em] text-primary">
            Services
          </p>
          <h2 className="mb-5 text-3xl sm:text-4xl lg:text-5xl">What we do</h2>
          <p className="mx-auto max-w-xl text-lg text-muted">
            We design and build automation solutions that fit your organization
            — not the other way around.
          </p>
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
