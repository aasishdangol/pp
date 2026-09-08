# Portfolio — Next.js

A responsive frontend developer portfolio built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**. Design direction: a "drafting board / blueprint" aesthetic — ink-blue structure, warm amber accent, monospace annotations, and an animated code-editor hero panel instead of a generic gradient hero.

## 1. Install

```bash
npm install
```

## 2. Run locally

```bash
npm run dev
```

Open http://localhost:3000.

## 3. Project structure

```
app/
  layout.tsx       Fonts (Space Grotesk, Inter, JetBrains Mono) + global metadata
  page.tsx          Assembles all sections
  globals.css       Tailwind layers + the "drafting frame" corner-bracket utility
components/
  Navbar.tsx        Sticky nav, mobile menu
  Hero.tsx          Headline + animated CodePanel
  CodePanel.tsx     Typing-effect "about-me.ts" code block
  About.tsx         Bio + stats
  Skills.tsx        Skill groups with proficiency bars
  Projects.tsx      Project grid (spec-card style)
  Contact.tsx       Contact form + socials
  Footer.tsx
  SectionTag.tsx    Reusable "A / About" style section label
tailwind.config.ts  Color tokens, fonts, grid backgrounds, animations
```

## 4. Customize the content

This is the only step required before it's truly *your* portfolio:

| What | Where |
|---|---|
| Name, title, bio, social links | `components/Hero.tsx`, `components/Contact.tsx`, `app/layout.tsx` (metadata) |
| Code snippet in the hero panel | `components/CodePanel.tsx` → `lines` array |
| About text + stats | `components/About.tsx` |
| Skills & proficiency levels | `components/Skills.tsx` → `groups` array |
| Projects | `components/Projects.tsx` → `projects` array |
| Résumé file | drop a PDF at `public/resume.pdf` (linked from the navbar) |
| Portrait photo | replace the placeholder box in `About.tsx` with an `<Image>` |
| Contact form backend | `components/Contact.tsx` → wire `handleSubmit` to Formspree, Resend, an API route, etc. |

## 5. Colors & fonts

All design tokens live in `tailwind.config.ts`:
- `paper` / `ink` / `amber` / `charcoal` / `slate.muted` / `line` — the palette
- `font-display` (Space Grotesk), `font-body` (Inter), `font-mono` (JetBrains Mono)

Change any of these and the whole site updates consistently.

## 6. Deploy

The fastest path is [Vercel](https://vercel.com/new):

```bash
npm i -g vercel
vercel
```

Or build for any Node host:

```bash
npm run build
npm run start
```

## 7. Accessibility & performance notes already baked in

- Visible keyboard focus rings (amber outline)
- `prefers-reduced-motion` respected (animations disable automatically)
- Semantic headings, labelled form fields, `aria-label`s on icon-only links
- Fonts loaded via `next/font` (self-hosted, no layout shift)
