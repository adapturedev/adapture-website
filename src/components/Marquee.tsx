import { getTranslations, type Locale } from "@/lib/i18n";

export default function Marquee({ locale }: { locale: Locale }) {
  const items = getTranslations(locale).marquee;
  // Duplicate the list for seamless infinite scroll
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-border/50 bg-white py-5">
      {/* Left fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
      {/* Right fade */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />

      <div className="marquee-track flex w-max gap-8">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="whitespace-nowrap text-[13px] font-semibold uppercase tracking-[0.2em] text-muted/60">
              {item}
            </span>
            <span className="text-border" aria-hidden="true">
              ◆
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
