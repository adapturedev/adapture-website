import { ArrowUpRight, CalendarClock } from "lucide-react";
import { getTranslations, type Locale } from "@/lib/i18n";

const CALENDLY_URL = "https://calendly.com/adapture-ai/discovery";

export default function CalendlyButton({ locale }: { locale: Locale }) {
  const t = getTranslations(locale).calendly;

  return (
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-white/12 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-primary/60 hover:text-primary"
    >
      <CalendarClock size={17} strokeWidth={1.8} />
      {t.schedule}
      <ArrowUpRight size={15} strokeWidth={1.8} />
    </a>
  );
}
