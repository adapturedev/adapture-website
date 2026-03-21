import { Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border/60 bg-white py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 sm:flex-row sm:justify-between">
        {/* Brand */}
        <div className="flex flex-col items-center gap-2 sm:items-start">
          <span className="font-heading text-lg font-extrabold tracking-tight text-dark">
            Flowstate<span className="text-subtle"> Labs</span>
          </span>
          <p className="text-sm text-subtle">
            Automate smarter. Grow faster.
          </p>
        </div>

        {/* Links */}
        <nav className="flex gap-7 text-sm">
          <a href="#services" className="text-subtle transition-colors duration-200 hover:text-dark">
            Services
          </a>
          <a href="#why-us" className="text-subtle transition-colors duration-200 hover:text-dark">
            About
          </a>
          <a href="#contact" className="text-subtle transition-colors duration-200 hover:text-dark">
            Contact
          </a>
        </nav>

        {/* Social */}
        <div className="flex items-center gap-5">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-subtle transition-colors duration-200 hover:text-primary"
          >
            <Linkedin size={19} strokeWidth={1.8} />
          </a>
          <a
            href="https://github.com/flowstatelabsai"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-subtle transition-colors duration-200 hover:text-primary"
          >
            <Github size={19} strokeWidth={1.8} />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-border/40 px-6 pt-6">
        <p className="text-center text-xs text-subtle">
          &copy; {new Date().getFullYear()} Flowstate Labs. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
