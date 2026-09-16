/**
 * Project catalogue. Add a project by appending an object here;
 * the home grid and /projects/[slug] pages are generated from it.
 */
export type ProjectCategory = "websites" | "apps" | "automation" | "experiments";

export type ProjectStatus = "live" | "beta" | "pre-launch" | "research";

export interface Project {
  slug: string;
  name: string;
  category: ProjectCategory;
  /** One line, shown on the card. Keep under ~20 words. */
  description: string;
  /** Short tag list for the card (3-4 max). */
  tags: readonly string[];
  /** Full stack list for the case-study page. */
  stack: readonly string[];
  status: ProjectStatus;
  year: string;
  featured?: boolean;
  links?: {
    live?: string;
    repo?: string;
  };
  /** Case-study body. */
  summary: string;
  problem: string;
  solution: string;
  highlights: readonly string[];
}

export const categoryMeta: Record<ProjectCategory, { label: string; blurb: string }> = {
  apps: { label: "apps", blurb: "full products with accounts, data and billing" },
  websites: { label: "websites", blurb: "marketing and lead-gen sites for real businesses" },
  automation: { label: "automation", blurb: "scripts, bots and pipelines" },
  experiments: { label: "experiments", blurb: "research, prototypes and things I wanted to try" },
};

export const categoryOrder: readonly ProjectCategory[] = [
  "apps",
  "websites",
  "automation",
  "experiments",
];

export const projects: readonly Project[] = [
  {
    slug: "anotherschedulr",
    name: "AnotherSchedulr",
    category: "apps",
    description:
      "Multi-tenant booking platform for service businesses: white-labeled booking pages, deposits, no-show protection and intake forms.",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Square"],
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Prisma 7",
      "PostgreSQL / Supabase",
      "NextAuth",
      "Square SDK",
      "Stripe Connect",
      "AWS SES",
      "Upstash Redis",
      "Sentry",
      "Vitest",
      "Playwright",
      "Vercel",
    ],
    status: "beta",
    year: "2025–2026",
    featured: true,
    summary:
      "A full booking product for solo operators and small service businesses. Each tenant gets a branded booking page on their own subdomain, a calendar with real availability rules, deposits or saved-card no-show protection, intake forms, reminders and reports. One flat plan instead of per-seat pricing.",
    problem:
      "Lash techs, salons, coaches and consultants need a booking page, a calendar, deposits and no-show protection, and they end up paying per-seat prices for tools like Acuity to get it. Most of them are one person. They need the whole flow to work without a setup consultant.",
    solution:
      "A Next.js App Router monolith over PostgreSQL with Prisma. A middleware layer rewrites tenant subdomains to the public booking route, applies a per-request-nonce Content Security Policy and rate-limits traffic. Two surfaces share the codebase: a sessionless public booking flow (service, add-ons, availability, intake form, payment) and an authenticated dashboard for calendar, services, clients, email templates and reports. Reminders and follow-ups run on scheduled jobs.",
    highlights: [
      "Processor-agnostic payment layer with three modes: percentage or fixed deposit, full payment, or save-card, where the card is vaulted at booking and a capped no-show fee can be charged later. Connected-processor tokens are encrypted at rest, keeping PCI scope at SAQ A.",
      "Availability engine built around practitioners as calendars, with rule and override models and a strict wall-clock versus timezone separation so slots render correctly in the visitor's zone.",
      "Test pyramid: Vitest unit and integration projects (integration refuses to run without an explicit test database flag) plus 17 Playwright end-to-end specs including axe accessibility and Lighthouse checks.",
      "Defense in depth: 34 Prisma models scoped by owner on every query, row-level security enabled on every public table, nonce plus strict-dynamic CSP in production and distributed rate limiting.",
      "Scheduled reminders driven by Postgres cron posting to a secret-protected route, transactional email through AWS SES with a rich-text template editor.",
      "Private intake file uploads through signed URLs with server-side object verification and an orphan sweep.",
    ],
  },
  {
    slug: "streamline-performance-garage",
    name: "Streamline Performance Garage",
    category: "websites",
    description:
      "Static marketing and lead-gen site for a Subaru, Nissan and Honda specialist shop in Concord, NC.",
    tags: ["Next.js", "Tailwind", "JSON-LD", "Vitest"],
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript (strict)",
      "Tailwind CSS v4",
      "Zod",
      "schema-dts",
      "Vitest + Testing Library",
      "axe-core",
      "Instagram Graph API",
      "Vercel",
    ],
    status: "pre-launch",
    year: "2026",
    links: {
      live: "https://streamline-performance-garage.vercel.app",
      repo: "https://github.com/velas017/streamlinePerformanceGarage",
    },
    summary:
      "A fully static, fully prerendered site for an independent Japanese-import repair shop serving the Charlotte metro. Built for local search first: one physical-location page with structured data, separate service-area pages, and a clear path from search result to phone call or contact form.",
    problem:
      "The shop's old domain redirected somewhere else, so it had no web presence it owned. It needed to rank for searches like \"Subaru mechanic Concord NC\" and turn those visits into calls and leads, with a site the owner would not have to babysit.",
    solution:
      "Next.js App Router with every one of its 39 routes prerendered. All business identity (name, address, hours, socials, geo) flows from a single typed config into both the rendered markup and JSON-LD, so nothing drifts. Page content lives as typed arrays that pages map over, and leads post to a webhook through a validated server action.",
    highlights: [
      "Typed routes everywhere: every internal link is checked by the TypeScript compiler, and raw Link usage is banned in favor of a typed wrapper.",
      "Accessibility as a test gate: strict jsx-a11y linting plus five axe-core test suites covering the carousel, layout, gallery, sections and contact form. Definition of done is Lighthouse mobile Performance 95+, Accessibility 100, SEO 95+.",
      "SEO rules enforced by unit tests, including sitemap correctness, and JSON-LD produced only from typed schema builders (AutoRepair, Service, ImageGallery).",
      "Instagram feed without a third-party widget: server-side fetch, Zod validation, hourly ISR cache, and a graceful follow card when no token is configured. A script refreshes the long-lived token in place.",
      "Gallery import pipeline that optimizes and strips EXIF from source photos, appends to a typed manifest, and fails tests on missing alt text.",
      "Fail-fast environment validation at boot, so a missing lead webhook surfaces as an error instead of a silently dropped lead.",
    ],
  },
  {
    slug: "estheticly-skincare",
    name: "EstheticLY Skincare",
    category: "websites",
    description:
      "Multi-page site for a Charlotte, NC esthetician with hardened Acuity booking embed and local-business structured data.",
    tags: ["Next.js", "CSS Modules", "Acuity", "WCAG 2.2"],
    stack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "CSS Modules + custom properties",
      "Acuity Scheduling embed",
      "Square gift cards",
      "Vercel",
    ],
    status: "live",
    year: "2025–2026",
    links: {
      live: "https://estheticlyskincare.com",
      repo: "https://github.com/velas017/estheticlyNextjs",
    },
    summary:
      "A seven-page marketing site for a solo licensed esthetician. It explains treatments, prep and aftercare, and funnels clients into her existing Acuity booking flow instead of DMs. Delivered, in use, and maintained through client content updates.",
    problem:
      "A one-person skincare studio needed to be found locally, answer the pre- and post-treatment questions clients ask over and over, and get bookings into one system. The existing setup was social media DMs and word of mouth.",
    solution:
      "Next.js App Router, server components by default, styled with CSS Modules over a small token system. Each route is composed from marketing sections driven by typed content modules, so the client's price and FAQ changes are data edits. Booking is an embedded Acuity scheduler gated behind policy acceptance.",
    highlights: [
      "Hand-written Content Security Policy plus HSTS, nosniff, Referrer-Policy and Permissions-Policy headers, with narrowly scoped exceptions for the Acuity embed and a documented reason for each one.",
      "Self-resizing booking iframe that listens for postMessage height events and hard-checks the message origin before touching the DOM, with a shimmer skeleton until load.",
      "Policy gate: the scheduler only renders after the client has read the cancellation and late policies.",
      "BeautySalon JSON-LD with address, phone, opening hours and social profiles, sourced from the same content module the contact page renders.",
      "WCAG 2.2 AA accessibility pass across the site, including a skip link and a contrast fix for mobile dark mode.",
      "Zero runtime dependencies beyond React and Next.",
    ],
  },
  {
    slug: "special-delivery-presents",
    name: "Special Delivery Presents",
    category: "experiments",
    description:
      "Research and architecture plan for a nightlife promoter site: event calendar, venues, ticket links and VIP capture.",
    tags: ["Research", "Next.js", "Sanity", "SEO"],
    stack: [
      "Next.js App Router (proposed)",
      "Tailwind CSS v4 (proposed)",
      "Sanity CMS (proposed)",
      "Vercel ISR (proposed)",
    ],
    status: "research",
    year: "2026",
    summary:
      "A pre-build teardown and plan for an events brand that needs a public calendar with detail pages, venue and recurring-series pages, private-event lead capture and a VIP list. No code yet by design: the open questions belong to the owner, so the work so far is research that makes the build cheap once they answer.",
    problem:
      "Event pages are the long-tail search surface for a promoter, so the site has to be discoverable per event, keep up with ticketing platforms, and still be simple enough for a promoter to run. Picking the wrong ingestion strategy up front would mean maintaining scrapers forever.",
    solution:
      "A competitive teardown of a comparable promoter site, fingerprinted from response headers and asset URLs to identify Next.js with ISR on Vercel and Sanity as the CMS. From that, a proposed architecture: CMS-managed events first, a scheduled ingestion sync only if the brand sells on more than one platform, and server routes for VIP and contact forms.",
    highlights: [
      "Identified the reference site's stack from prerender and stale-time headers, DNS, and CDN image URLs, without access to its source.",
      "Captured a concrete event data model from the reference feed that maps cleanly onto Event JSON-LD, a JSON feed and an ICS feed.",
      "Documented and then argued against the reference's hourly multi-source scraper pipeline for a brand that likely uses one ticketing platform.",
      "Planned SEO surface: JSON-LD on every page, generated Open Graph images, llms.txt, and JSON plus ICS alternate feeds.",
      "Recorded design direction: dark-only, flyer-forward card grid with brand and venue filter chips.",
    ],
  },
];
