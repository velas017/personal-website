/**
 * Single source of truth for who you are and how to reach you.
 * Edit this file; every section of the site reads from it.
 */
export const site = {
  name: "Edar Velasquez",
  handle: "edar",
  role: "Software Engineer",
  /** Current position, shown under the role line and in structured data. */
  employer: {
    title: "Quality Assurance Specialist",
    company: "Bank of America",
    url: "https://www.bankofamerica.com",
    since: "2021",
  },
  /** Rotating descriptors typed out in the hero. */
  roleWords: [
    "Software Engineer",
    "Java · React · TypeScript",
    "Full-stack with Next.js & Postgres",
    "Tests that fail the build on purpose",
  ],
  location: "Charlotte, NC",
  locality: "Charlotte",
  region: "North Carolina",
  tagline:
    "Software engineer with 5+ years building and validating enterprise applications, and shipping full-stack products end to end.",
  availability: {
    open: true,
    label: "open to new projects",
  },
  email: "velasquezedarsw@gmail.com",
  links: {
    github: "https://github.com/velas017",
    linkedin: "https://www.linkedin.com/in/velasquezedar/",
  },
  /** Used for canonical URLs, sitemap and Open Graph. Override with NEXT_PUBLIC_SITE_URL. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://velasanothercoder.com",
  /** Path shown in the fake shell prompt. */
  prompt: "visitor@edar ~ $",
} as const;

export type SiteConfig = typeof site;
