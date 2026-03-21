"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#why-us" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/60 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          {/* Inline hex mark */}
          <svg
            width="36"
            height="40"
            viewBox="0 0 60 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <polygon
              points="30,6 60,23 60,57 30,74 0,57 0,23"
              fill="none"
              stroke="#111110"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <polygon
              points="30,15 51,27 51,53 30,65 9,53 9,27"
              fill="#1A5CFF"
              opacity="0.13"
              stroke="none"
            />
            <polygon
              points="30,15 51,27 51,53 30,65 9,53 9,27"
              fill="none"
              stroke="#1A5CFF"
              strokeWidth="1.2"
              strokeLinejoin="round"
              opacity="0.35"
            />
            <circle cx="30" cy="40" r="5" fill="#1A5CFF" />
          </svg>
          <span className="font-heading text-xl font-extrabold tracking-tight text-dark">
            Flowstate<span className="text-muted"> Labs</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-muted transition-colors hover:text-dark"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Get in touch
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-white px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm font-medium text-muted hover:text-dark"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="inline-block rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                Get in touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
