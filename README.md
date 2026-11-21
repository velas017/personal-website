# Edar Velasquez — portfolio

Personal portfolio site: one page that shows the projects straight away, says who is behind them, and gives a way to get in touch.
Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · deployed on Vercel.

Live at https://velasanothercoder.com.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (all routes prerendered)
npm run lint
```

`AGENTS.md` is rewritten by `next dev`. It tells coding agents to read the Next.js 16 docs in `node_modules/next/dist/docs/` before writing code, because this version differs from older ones.

## What the home page shows

Top to bottom, with no top bar and no fade-in, so everything is there on first paint and with scripts off:

1. **Intro**: name, role and location, one or two plain sentences, the availability badge, email / GitHub / LinkedIn, then "Now" and "Previously" one-liners.
2. **Projects**: one card per project, each with a screenshot in a terminal-window frame. The screenshot and "Visit site" open the live site in a new tab. "How it was built" opens the write-up at `/projects/[slug]`. A project with status `research` has nothing to open, so it is listed as one line under the cards.
3. **Works with**: a single line of skills.
4. **Contact**: one sentence and an email button.

## Edit content (no component changes needed)

| What | Where |
| --- | --- |
| Name, role, location, availability, email, links, site URL | `src/content/site.ts` |
| Intro sentences under the name | `intro` in `src/content/site.ts` |
| "Now" and "Previously" lines | `now` and `previously` in `src/content/site.ts` |
| "Works with" skills line | `stack` in `src/content/site.ts` |
| Description used for search engines and link previews | `tagline` in `src/content/site.ts` |
| Projects (home page cards and write-up pages) | `src/content/projects.ts` |
| Project screenshots | `public/projects/` |
| Contact heading and sentence | `src/components/site/contact-section.tsx` |
| Headshot | drop `public/headshot.jpg`, then swap the initials tile in `src/components/site/intro.tsx` for `next/image` |

### Add or change a project

Append an object to the `projects` array in `src/content/projects.ts`. The home page, the write-up page and the sitemap all update from it.

The fields the home page card uses:

- `kind`: what it is, in a few words ("Client website", "My own product").
- `plain`: one line written for someone who does not code.
- `image`: a 1280×720 screenshot saved in `public/projects/`, plus `alt` text that describes it for people who cannot see it.
- `links.live`: the address the screenshot and "Visit site" open. Leave it out and the screenshot is not a link.
- `status`: `live`, `beta`, `pre-launch` or `research`. `research` moves the project out of the cards and into the one-line list.

The rest (`description`, `tags`, `stack`, `summary`, `problem`, `solution`, `highlights`) is the technical detail shown on the write-up page.

## Look

The amber terminal style lives in `src/app/globals.css`: the color tokens, JetBrains Mono, the faint scanline overlay and the text glow. Text colors are set to meet 4.5:1 contrast on the dark background. In the home page sections, links and buttons are at least 44 px tall and have a visible amber focus ring (`focusRing` in `src/components/site/primitives.tsx`). Keep those when adding anything. The footer and the write-up pages have not had that pass yet.

## Layout

```
src/app/                 routes: /, /projects/[slug], not-found, opengraph-image, sitemap, robots
src/components/site/     intro, projects-section, stack-line, contact-section, site-footer, primitives
src/components/ui/       blur-fade (vendored Magic UI; only the write-up pages still use it)
src/content/             site config and project data
src/lib/                 project helpers, cn()
public/projects/         project screenshots
```

## Deploys

Vercel is connected to the GitHub repo. Pushes to `main` deploy production at https://velasanothercoder.com. Pushes to `develop` or any other branch get a preview URL, which needs a Vercel login to open.

`NEXT_PUBLIC_SITE_URL` overrides the address used for canonical URLs, the sitemap and link previews. Without it the site uses https://velasanothercoder.com.

## Open work

The home page revamp shipped on 18 Nov 2026. Three parts of that plan are approved but not built:

- **Write-up pages** (`src/app/projects/[slug]/page.tsx`) still fade in with `BlurFade`, so they are blank with scripts off. Remove the fade to match the home page. After that, `src/components/ui/blur-fade.tsx` and the `motion` package can go.
- **Accessibility pass** on the footer and the write-up pages: 44 px links and visible focus rings, as on the home page.
- **Cleanup**: the five starter images in `public/` (`file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg`), the unused `PathLink` in `primitives.tsx`, the unused `employer.since` in `site.ts`, and the stray `cn` package in `package.json`.

Content still to confirm: the intro sentences and card descriptions are drafts, the "Now" and "Previously" dates come from LinkedIn, and the initials tile stands in until there is a headshot.
