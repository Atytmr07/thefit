# The Fit EMS & Pilates — Landing Page

Awwwards-level landing page for **The Fit EMS & Pilates**, a premium AQ8 Wireless EMS,
Reformer Pilates, Functional Training & Nutrition studio in Muratpaşa, Antalya.
Founded by Sinan Kal · [@thefitstudio_](https://www.instagram.com/thefitstudio_/) ·
Google 4.9/5 (103 reviews).

**Art direction:** Dark Precision Brutalism with Neon Lime Pulse — OLED black canvas
(`#0A0A0A`), single neon-lime accent (`#C8F000`), Barlow Condensed display type.

## Stack

- Next.js 14 (App Router) · TypeScript
- Tailwind CSS v3
- Framer Motion
- lucide-react
- Fonts via `next/font/google` (Barlow Condensed + Barlow, `latin-ext` for Turkish)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build && npm run start   # production
```

## Architecture

```
app/
  layout.tsx        Fonts, SEO metadata, MotionProvider, global CSS
  page.tsx          Section composition
  globals.css       Canvas, scrollbar, reduced-motion, map invert
components/
  Navbar  Hero  EMSNedir  Hizmetler  Yorumlar  Stats  Iletisim  Footer
  LogoMark          Inline "the/fit by sinan kal" wordmark
  MotionProvider    <MotionConfig reducedMotion="user">
hooks/
  useCountUp.ts     rAF + IntersectionObserver, easeOut, fires once
lib/
  site.ts           Real contact details (WhatsApp / phone / address / IG)
  animations.ts     Shared Framer Motion variants
```

## Notes for the team

- **Fonts:** loaded with `next/font/google` and exposed as the Tailwind utilities
  `font-display` (Barlow Condensed) and `font-body` (Barlow) via CSS variables — no
  render-blocking `@import`.
- **Images:** hero/section backgrounds use solid placeholder surfaces. Drop real studio
  photography in `public/`, register any remote host in `next.config.js`, and replace the
  placeholder `<div>`s with `next/image`.
- **EMS stat grid:** the "geleneksel antrenman eşdeğeri" cell counts up to `4.5` (renders
  `4.5 sa`) since `useCountUp` animates a single number; change to a static `4-5` in
  `components/EMSNedir.tsx` if you prefer the literal range.
- **OpenGraph `type`:** set to the standard `website` (valid in the typed Metadata API)
  rather than the non-standard `local.business`.
- All contact CTAs are wired to real values in `lib/site.ts`.
```
