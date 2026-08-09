# Prepwise — AI Interview Preparation Platform

A frontend-only, production-quality landing page for an AI-powered interview
prep product. Dark, glassmorphic, gradient-driven UI built with React, Vite,
TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

## Stack

- **React 19 + Vite** — build tooling and dev server
- **TypeScript** — strict typing throughout
- **Tailwind CSS 3** — utility-first styling with custom design tokens
- **Framer Motion** — scroll reveals, stagger, hover, and page-load animation
- **Lucide React** — icon set

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build      # type-check + production build to /dist
npm run preview    # preview the production build locally
```

## Project structure

```
src/
  components/
    Navbar.tsx        Sticky glass navbar with mobile menu
    Hero.tsx           Hero + "Neural Readiness Console" illustration
    Features.tsx        Six feature cards
    Workflow.tsx         Seven-step animated timeline
    Dashboard.tsx         Fake product dashboard preview
    Pricing.tsx            Free / Pro / Enterprise tiers
    Testimonials.tsx        Three testimonial cards
    FAQ.tsx                  Animated accordion
    CTA.tsx                   Closing call-to-action band
    Footer.tsx                 Links, socials, copyright
    ui/
      GlassCard.tsx            Reusable glass surface
      GlassButton.tsx           Reusable gradient/glass button
      SectionHeading.tsx         Reusable eyebrow + title + description
  lib/
    animations.ts               Shared Framer Motion variants
  index.css                      Tailwind layers + glass utility classes
  App.tsx                        Section composition
  main.tsx                       React entry point
```

## Design tokens

- Background: `#050505` with soft indigo/purple radial glow
- Accents: blue `#4d7bff` → indigo `#7c6cff` → purple `#a855f7` gradient ("aurora")
- Display type: Space Grotesk · Body type: Inter · Data/labels: JetBrains Mono
- Glass surfaces: `bg-white/[0.04]` + `backdrop-blur-xl` + `border-white/10`

This is a static frontend only — there is no backend, API, or real data
persistence. All dashboard numbers, testimonials, and metrics are illustrative
content for the design.
