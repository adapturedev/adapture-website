import { Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 sm:flex-row sm:justify-between">
        {/* Brand */}
        <div className="flex flex-col items-center gap-2 sm:items-start">
          <span className="font-heading text-lg font-extrabold tracking-tight text-dark">
            Flowstate<span className="text-muted"> Labs</span>
          </span>
          <p className="text-sm text-muted">
            Automate smarter. Grow faster.
          </p>
        </div>

        {/* Links */}
        <nav className="flex gap-6 text-sm text-muted">
          <a href="#services" className="transition-colors hover:text-dark">
            Services
          </a>
          <a href="#why-us" className="transition-colors hover:text-dark">
            About
          </a>
          <a href="#contact" className="transition-colors hover:text-dark">
            Contact
          </a>
        </nav>

        {/* Social */}
        <div className="flex items-center gap-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition-colors hover:text-primary"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/flowstatelabsai"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted transition-colors hover:text-primary"
          >
            <Github size={20} />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl px-6">
        <p className="text-center text-xs text-muted">
          &copy; {new Date().getFullYear()} Flowstate Labs. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
