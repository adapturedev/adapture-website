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

function NetworkViz() {
  const cx = 200, cy = 180;
  const r1 = 78, r2 = 138;
  const orbitPath = (r: number) =>
    `M${cx + r},${cy} A${r},${r} 0 1,1 ${cx - r},${cy} A${r},${r} 0 1,1 ${cx + r},${cy}`;
  const spokeAngles = [0, 60, 120, 180, 240, 300];

  return (
    <FadeIn animation="slide-left">
      <div className="relative mx-auto w-full max-w-[420px]">
        <svg viewBox="0 0 400 360" className="w-full" fill="none" aria-hidden="true">
          <defs>
            <path id="orbit-inner" d={orbitPath(r1)} />
            <path id="orbit-outer" d={orbitPath(r2)} />
          </defs>

          {/* Radial spokes */}
          {spokeAngles.map((deg) => {
            const rad = (deg * Math.PI) / 180;
            return (
              <line
                key={deg}
                x1={cx} y1={cy}
                x2={cx + Math.cos(rad) * (r2 + 20)}
                y2={cy + Math.sin(rad) * (r2 + 20)}
                stroke="#E8E6E1" strokeWidth={0.8}
                strokeDasharray="3 8" opacity={0.4}
              />
            );
          })}

          {/* Orbit rings */}
          <use href="#orbit-inner" stroke="#E8E6E1" strokeWidth={1} strokeDasharray="4 8" opacity={0.6} />
          <use href="#orbit-outer" stroke="#E8E6E1" strokeWidth={1} strokeDasharray="4 8" opacity={0.5} />
          <circle cx={cx} cy={cy} r={r2 + 30} stroke="#E8E6E1" strokeWidth={0.5} strokeDasharray="2 10" opacity={0.3} />

          {/* Fast data pulses — inner orbit */}
          {[0, -3].map((begin, i) => (
            <circle key={`ip-${i}`} r={2.5} fill="#1A5CFF" opacity={0.65}>
              <animateMotion dur="6s" repeatCount="indefinite" begin={`${begin}s`}>
                <mpath href="#orbit-inner" />
              </animateMotion>
            </circle>
          ))}

          {/* Fast data pulses — outer orbit (reverse) */}
          {[0, -4, -8].map((begin, i) => (
            <circle key={`op-${i}`} r={2} fill="#1A5CFF" opacity={0.5}>
              <animateMotion dur="10s" repeatCount="indefinite" begin={`${begin}s`} keyPoints="1;0" keyTimes="0;1" calcMode="linear">
                <mpath href="#orbit-outer" />
              </animateMotion>
            </circle>
          ))}

          {/* Inner orbit nodes — 3 nodes, clockwise, 30s */}
          {[0, 1, 2].map((i) => (
            <g key={`n1-${i}`}>
              <animateMotion dur="30s" repeatCount="indefinite" begin={`${(-30 / 3) * i}s`}>
                <mpath href="#orbit-inner" />
              </animateMotion>
              <circle r={16} fill="white" stroke="#E8E6E1" strokeWidth={1.5} />
              {i === 0 && (
                <circle r={11} fill="none" stroke="#1A5CFF" strokeWidth={1.5} opacity={0.25} strokeDasharray="69.1" strokeDashoffset={69.1} strokeLinecap="round">
                  <animate attributeName="stroke-dashoffset" values="69.1;0;69.1" dur="4s" repeatCount="indefinite" />
                </circle>
              )}
              <circle r={4} fill="#1A5CFF" opacity={0.5}>
                <animate attributeName="opacity" values="0.3;0.8;0.3" dur={`${2 + i * 0.4}s`} repeatCount="indefinite" />
              </circle>
            </g>
          ))}

          {/* Outer orbit nodes — 4 nodes, counter-clockwise, 45s */}
          {[0, 1, 2, 3].map((i) => (
            <g key={`n2-${i}`}>
              <animateMotion dur="45s" repeatCount="indefinite" begin={`${(-45 / 4) * i}s`} keyPoints="1;0" keyTimes="0;1" calcMode="linear">
                <mpath href="#orbit-outer" />
              </animateMotion>
              <circle r={13} fill="white" stroke="#E8E6E1" strokeWidth={1.5} />
              {i === 2 && (
                <circle r={9} fill="none" stroke="#1A5CFF" strokeWidth={1.2} opacity={0.2} strokeDasharray="56.5" strokeDashoffset={56.5} strokeLinecap="round">
                  <animate attributeName="stroke-dashoffset" values="56.5;0;56.5" dur="5s" repeatCount="indefinite" />
                </circle>
              )}
              <circle r={3.5} fill="#1A5CFF" opacity={0.4}>
                <animate attributeName="opacity" values="0.2;0.7;0.2" dur={`${2.5 + i * 0.3}s`} repeatCount="indefinite" />
              </circle>
            </g>
          ))}

          {/* Radar ping from hub */}
          <circle cx={cx} cy={cy} r={26} fill="none" stroke="#1A5CFF" strokeWidth={1}>
            <animate attributeName="r" values="26;80" dur="4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.15;0" dur="4s" repeatCount="indefinite" />
            <animate attributeName="stroke-width" values="1;0.3" dur="4s" repeatCount="indefinite" />
          </circle>

          {/* Hub breathing glow */}
          <circle cx={cx} cy={cy} r={38} fill="#1A5CFF" opacity={0.04}>
            <animate attributeName="r" values="38;50;38" dur="4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.04;0.01;0.04" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle cx={cx} cy={cy} r={30} fill="#1A5CFF" opacity={0.07}>
            <animate attributeName="r" values="30;36;30" dur="4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.07;0.03;0.07" dur="4s" repeatCount="indefinite" />
          </circle>

          {/* Hub circle */}
          <circle cx={cx} cy={cy + 2} r={26} fill="#1A5CFF" opacity={0.12} />
          <circle cx={cx} cy={cy} r={26} fill="#1A5CFF" />

          {/* Hexagon mark inside hub */}
          <polygon
            points={`${cx},${cy - 13} ${cx + 11.3},${cy - 6.5} ${cx + 11.3},${cy + 6.5} ${cx},${cy + 13} ${cx - 11.3},${cy + 6.5} ${cx - 11.3},${cy - 6.5}`}
            fill="white" opacity={0.9}
          />
        </svg>

        {/* Ambient glow behind viz */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.05] blur-[60px]" />
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
        {/* Visual side — orbital network */}
        <NetworkViz />

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
