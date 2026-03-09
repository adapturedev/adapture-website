import { Linkedin, Github, Instagram, Facebook } from "lucide-react";
import { getTranslations, type Locale } from "@/lib/i18n";

export default function Footer({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);

  return (
    <footer className="border-t border-border/60 bg-card py-8">
      {/* Top row: nav left, social right */}
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <nav className="flex gap-6 text-sm">
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

        <div className="flex items-center gap-4">
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-subtle transition-colors duration-200 hover:text-primary">
            <Linkedin size={16} strokeWidth={1.8} />
          </a>
          <a href="https://github.com/adapturedev" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-subtle transition-colors duration-200 hover:text-primary">
            <Github size={16} strokeWidth={1.8} />
          </a>
          <a href="https://www.instagram.com/adapture.ai" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-subtle transition-colors duration-200 hover:text-primary">
            <Instagram size={16} strokeWidth={1.8} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-subtle transition-colors duration-200 hover:text-primary">
            <Facebook size={16} strokeWidth={1.8} />
          </a>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mx-auto mt-6 max-w-6xl border-t border-border/40 px-6 pt-5">
        <p className="text-center text-xs text-subtle">
          &copy; {new Date().getFullYear()} {t.footer.copyright}
          {" · "}
          <a href="mailto:adapure@adapture.pt" className="transition-colors duration-200 hover:text-fg">adapure@adapture.pt</a>
          {" · "}
          Olhão, Portugal
        </p>
      </div>
    </footer>
  );
}
