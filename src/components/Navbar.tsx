"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#why-us" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-border/50 bg-white/70 shadow-sm backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="group flex items-center gap-3">
          <svg
            width="32"
            height="36"
            viewBox="0 0 60 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:scale-105"
          >
            <polygon
              points="30,6 60,23 60,57 30,74 0,57 0,23"
              fill="none"
              stroke="#111110"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            <polygon
              points="30,15 51,27 51,53 30,65 9,53 9,27"
              fill="#1A5CFF"
              opacity="0.1"
            />
            <polygon
              points="30,15 51,27 51,53 30,65 9,53 9,27"
              fill="none"
              stroke="#1A5CFF"
              strokeWidth="1.2"
              strokeLinejoin="round"
              opacity="0.3"
            />
            <circle cx="30" cy="40" r="5" fill="#1A5CFF" />
          </svg>
          <span className="font-heading text-lg font-extrabold tracking-tight text-dark">
            Flowstate
            <span className="text-subtle"> Labs</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-[13px] font-medium tracking-wide text-muted uppercase transition-colors duration-300 hover:text-dark after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="btn-glow rounded-full bg-dark px-6 py-2.5 text-[13px] font-semibold tracking-wide text-white transition-all duration-300 hover:bg-primary hover:shadow-lg hover:shadow-primary/25"
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
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-border/50 bg-white/90 px-6 py-6 backdrop-blur-xl">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm font-medium text-muted transition-colors hover:text-dark"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                className="inline-block rounded-full bg-dark px-6 py-2.5 text-sm font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                Get in touch
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
