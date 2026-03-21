# Adapture — Website Plan

## 1. Company Identity

**Adapture** uses AI and automation to accelerate small-to-medium companies and organizations through digital transformation and personalized solutions — streamlining every task in the smartest way possible.

**Tagline ideas:** "Automate smarter. Grow faster." / "Your operations, on autopilot."

---

## 2. Color Palette (from logo)

| Role           | Hex       | Usage                                      |
|----------------|-----------|---------------------------------------------|
| Primary        | `#1A5CFF` | CTAs, accents, links, highlights            |
| Primary light  | `#1A5CFF` @ 13% opacity | Subtle fills, card backgrounds, hover states |
| Dark           | `#111110` | Headings, body text, navbar                 |
| Secondary text | `#888780` | Subheadings, muted text, captions           |
| Border/subtle  | `#E0DED8` | Dividers, card borders, separators          |
| Background     | `#FAFAF8` | Page background (warm off-white)            |
| White          | `#FFFFFF` | Cards, sections, inputs                     |

**Font:** Syne (800 for headings / display) + Inter or System UI for body.

---

## 3. Website Scope

**Type:** Static landing page (no backend, no CMS for now).

**Framework:** Next.js (App Router) with static export (`output: 'export'`).

**Styling:** Tailwind CSS v4.

**Hosting target:** Vercel or any static host.

---

## 4. Page Structure

### 4.1 Navbar
- Logo (SVG inline) + "Adapture" wordmark
- Links: Services · About · Contact
- Sticky on scroll, glass/blur backdrop
- Mobile: hamburger menu

### 4.2 Hero Section
- Large heading: bold value proposition
- Subheading: one-liner explaining what we do
- Primary CTA button ("Get in touch" / "Let's talk")
- Optional: subtle animated hexagon pattern or gradient mesh background (ties to logo shape)

### 4.3 What We Do / Services
- 3–4 cards in a grid
- Each card: icon + title + short description
- Examples: Process Automation, Digital Transformation, Custom Integrations, Data & Analytics
- Clean card design with subtle hover lift

### 4.4 Why Us / Value Proposition
- 2-column layout: visual left + text right (or vice versa)
- 3 key differentiators as bullet/icon points
- Emphasis on: personalized, pragmatic, results-driven

### 4.5 How We Work (optional — lightweight)
- 3-step timeline/process: Discover → Design → Deliver
- Horizontal stepper or vertical timeline

### 4.6 Social Proof / Trust
- Placeholder for logos or testimonials
- Can start with a simple quote block or "Trusted by X+ companies"

### 4.7 CTA / Contact
- Centered section with strong CTA
- "Ready to automate?" + contact button / email link
- Optional: minimal contact form (name + email + message)

### 4.8 Footer
- Logo + tagline
- Quick links
- Social links (LinkedIn, GitHub)
- © 2026 Adapture

---

## 5. SEO Rules

> These rules apply to all pages and components.

1. **Semantic HTML** — use `<header>`, `<main>`, `<section>`, `<footer>`, `<article>`, `<nav>`. No div soup.
2. **One `<h1>` per page** — the hero heading. Sections use `<h2>`, subsections `<h3>`.
3. **Meta tags** — every page must have:
   - `<title>` (50–60 chars, include "Adapture")
   - `<meta name="description">` (150–160 chars, action-oriented)
   - `<meta name="robots" content="index, follow">`
   - Open Graph: `og:title`, `og:description`, `og:image`, `og:url`, `og:type`
   - Twitter Card: `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
4. **Canonical URL** — `<link rel="canonical">` on every page.
5. **Structured Data** — JSON-LD for `Organization` schema at minimum.
6. **Performance** — Lighthouse ≥ 95 on all metrics:
   - Images: WebP/AVIF, lazy-loaded, with explicit `width`/`height`
   - Fonts: `font-display: swap`, preload critical fonts
   - CSS: Tailwind purge (automatic with v4)
   - No render-blocking JS
7. **Accessibility** — all images have `alt`, buttons have labels, color contrast ≥ 4.5:1, keyboard navigable.
8. **Sitemap** — auto-generated `sitemap.xml` via `next-sitemap` or equivalent.
9. **robots.txt** — allow all crawlers, link sitemap.
10. **URL structure** — lowercase, hyphenated, no trailing slashes (or consistent trailing slashes).
11. **Core Web Vitals** — LCP < 2.5s, FID < 100ms, CLS < 0.1.

---

## 6. Design Principles

- **Clean & minimal** — whitespace is a feature, not a waste
- **Motion with purpose** — subtle fade-ins on scroll, hover micro-interactions; no gratuitous animation
- **Consistent spacing** — 8px grid system (via Tailwind defaults)
- **Mobile-first** — responsive from 320px up
- **Dark mode** — not in scope for v1 (can add later)

---

## 7. Tech Stack Summary

| Layer     | Choice               |
|-----------|----------------------|
| Framework | Next.js 15 (App Router) |
| Styling   | Tailwind CSS v4      |
| Icons     | Lucide React         |
| Fonts     | Google Fonts (Syne + Inter) |
| Linting   | ESLint + Prettier    |
| Export    | Static (`next export`) |
| SEO       | next-sitemap, JSON-LD |
| Deploy    | Vercel (or any static host) |

---

## 8. File Structure (planned)

```
src/
├── app/
│   ├── layout.tsx        # Root layout, fonts, metadata
│   ├── page.tsx           # Landing page
│   ├── globals.css        # Tailwind directives + custom vars
│   └── favicon.ico
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── WhyUs.tsx
│   ├── HowWeWork.tsx
│   ├── CTA.tsx
│   └── Footer.tsx
├── lib/
│   └── metadata.ts       # Shared SEO metadata helpers
└── public/
    ├── logo.svg
    ├── og-image.png       # Open Graph image
    └── robots.txt
```

---

## Next Steps

See the project task list for implementation order.
