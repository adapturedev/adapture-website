import { getTranslations, type Locale } from "@/lib/i18n";

export default function Footer({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);

  return (
    <footer className="border-t border-border/60 bg-card py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 sm:flex-row sm:justify-between">
        {/* Brand */}
        <div className="flex flex-col items-center gap-2 sm:items-start">
          <span className="font-heading text-lg font-bold tracking-tight text-fg">
            Flowstate<span className="text-subtle"> Labs</span>
          </span>
          <p className="text-sm text-subtle">
            {t.footer.tagline}
          </p>
        </div>

        {/* Links */}
        <nav className="flex gap-7 text-sm">
          <a href="#services" className="text-subtle transition-colors duration-200 hover:text-fg">
            {t.nav.services}
          </a>
          <a href="#why-us" className="text-subtle transition-colors duration-200 hover:text-fg">
            {t.nav.about}
          </a>
          <a href="#contact" className="text-subtle transition-colors duration-200 hover:text-fg">
            {t.nav.contact}
          </a>
        </nav>


      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-border/40 px-6 pt-6">
        <p className="text-center text-xs text-subtle">
          &copy; {new Date().getFullYear()} {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
