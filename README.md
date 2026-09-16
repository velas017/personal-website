# Edar Velasquez — portfolio

Personal portfolio site: projects, availability, and a point of contact.
Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Magic UI components · deployed on Vercel.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (all routes prerendered)
npm run lint
```

## Edit content (no component changes needed)

| What | Where |
| --- | --- |
| Name, role, rotating role words, availability, email, links, site URL | `src/content/site.ts` |
| Projects (cards + `/projects/[slug]` case studies) | `src/content/projects.ts` |
| About bio and skills list | `src/components/site/about-section.tsx` |
| Headshot | drop `public/headshot.jpg`, then swap the initials tile in `about-section.tsx` for `next/image` |

Add a project by appending an object to the `projects` array. The home grid,
its case-study page, the sitemap and the hero's `ls ~/projects` output all update.

## Before launch

- Confirm the LinkedIn URL in `src/content/site.ts`.
- Set `NEXT_PUBLIC_SITE_URL` in Vercel to the real domain (used for canonical URLs, sitemap, Open Graph).
- Replace the draft bio in `about-section.tsx` with your own words.

## Layout

```
src/app/                 routes: /, /projects/[slug], not-found, opengraph-image, sitemap, robots
src/components/site/     header, footer, hero, projects, about, contact, primitives
src/components/ui/       vendored Magic UI components (blur-fade, terminal, typing-animation, dot-pattern)
src/content/             site config and project data
src/lib/                 project helpers, cn()
```

## Deploys

Vercel is connected to the GitHub repo: pushes to `main` deploy production at https://velasanothercoder.com, pushes to `develop` (or any PR) get a preview URL.
