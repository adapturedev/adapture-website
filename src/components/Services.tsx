import { Workflow, Sparkles, Plug, BarChart3 } from "lucide-react";
import type { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="group rounded-2xl border border-border bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
      <div className="mb-5 inline-flex rounded-xl bg-primary-light p-3 text-primary">
        {icon}
      </div>
      <h3 className="mb-3 text-lg font-bold">{title}</h3>
      <p className="leading-relaxed text-muted">{description}</p>
    </div>
  );
}

const services = [
  {
    icon: <Workflow size={24} />,
    title: "Process Automation",
    description:
      "Eliminate repetitive tasks and manual processes with smart automation workflows tailored to your business.",
  },
  {
    icon: <Sparkles size={24} />,
    title: "Digital Transformation",
    description:
      "Modernize your operations with the right digital tools — from legacy migration to cloud-native solutions.",
  },
  {
    icon: <Plug size={24} />,
    title: "Custom Integrations",
    description:
      "Connect your existing tools and systems seamlessly so data flows where it needs to, automatically.",
  },
  {
    icon: <BarChart3 size={24} />,
    title: "Data & Analytics",
    description:
      "Turn raw data into actionable insights with dashboards and reporting built for your decision-making.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl sm:text-4xl">What we do</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted">
            We design and build automation solutions that fit your organization
            — not the other way around.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
