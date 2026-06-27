# Moeel Ashraf — Portfolio

A warm, editorial-style personal portfolio built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | What it does                                 |
| --------------- | -------------------------------------------- |
| `npm run dev`   | Start the Next.js dev server with hot reload |
| `npm run build` | Build the production bundle                  |
| `npm start`     | Run the production build locally             |
| `npm run lint`  | Run ESLint                                   |

## Project structure

```
site/
├── app/
│   ├── layout.tsx       # Root layout, fonts, metadata
│   ├── page.tsx         # Single-page composition
│   └── globals.css      # Tailwind + custom CSS variables
├── components/
│   ├── Nav.tsx          # Sticky nav + mobile drawer
│   ├── Hero.tsx         # Portrait, name, intro, CTAs
│   ├── Projects.tsx     # Expandable project list
│   ├── ProjectCard.tsx  # One project (expandable card + gallery)
│   ├── Experience.tsx   # Vertical timeline of roles
│   ├── About.tsx        # Bio + skill grid
│   ├── Contact.tsx      # Social links, mailto, CV download, footer
│   ├── BrowserFrame.tsx # Mac-style chrome around screenshots
│   ├── PhoneFrame.tsx   # Phone chrome for mobile screenshots
│   ├── Lightbox.tsx     # Click-to-expand image viewer
│   ├── TechBadge.tsx    # Tech logo chip (Simple Icons)
│   ├── SectionLabel.tsx # Reusable section heading
│   └── Reveal.tsx       # Scroll-reveal motion wrapper
├── lib/
│   ├── projects.ts      # Project data
│   └── experience.ts    # Work history + skills
└── public/
    ├── portrait.png     # Portrait
    ├── moeel-resume.pdf # Resume PDF served by Download CV button
    └── projects/        # Project screenshots
```

## Editing content

All content is data-driven so you can update it without touching components.

- **Projects** — edit [`lib/projects.ts`](./lib/projects.ts). Add new entries to the `PROJECTS` array; each entry has a title, period, tech stack, descriptions, and an `images` array. Each image picks a `frame` (`browser` / `phone` / `raw`), an optional `cropRatio` and `objectPosition` so a tall screenshot can be displayed as a clean top-cropped hero shot, and a `span` (`full` / `half` / `phone`) that determines its slot in the gallery grid.
- **Experience** — edit [`lib/experience.ts`](./lib/experience.ts). Update `EXPERIENCES` for the timeline and `SKILLS` for the About section's tech grid.
- **Hero copy** — edit the `NAME_WORDS` and `TAGLINE` arrays in [`components/Hero.tsx`](./components/Hero.tsx).
- **Resume PDF** — replace `public/moeel-resume.pdf`.
- **Portrait** — replace `public/portrait.png`.

## Adding a new tech logo

`components/TechBadge.tsx` maps short keys to [Simple Icons](https://simpleicons.org) via `react-icons/si`. Add an entry to the `ICON_MAP` object and reference the key from your project/experience data.

## Visual system

- **Palette** — paper cream (`#F7F2EA`), ink (`#1A1814`), terracotta accent (`#B5532A`). All defined as Tailwind tokens in [`tailwind.config.ts`](./tailwind.config.ts).
- **Type** — Fraunces (serif display) + Inter (sans body), loaded via `next/font/google`.
- **Motion** — Framer Motion. Hero uses staggered word reveals; sections fade-and-rise into view via the `Reveal` wrapper; project cards expand with `AnimatePresence` height transitions.

## Deployment

This project is Vercel-ready — no environment variables required.

```bash
vercel
```

Or any other static-friendly host (Netlify, Cloudflare Pages, etc.). The site is fully static (`next build` prerenders the single route).

## Tech

- Next.js 14 (App Router) · TypeScript · Tailwind CSS
- Framer Motion · `next/image` · `react-icons` · `lucide-react`
