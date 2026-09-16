/**
 * Single source of truth for who you are and how to reach you.
 * Edit this file; every section of the site reads from it.
 */
export const site = {
  name: "Edar Velasquez",
  handle: "edar",
  role: "Software Engineer & Builder",
  /** Rotating descriptors typed out in the hero. */
  roleWords: [
    "Software Engineer",
    "Full-stack builder",
    "Next.js & TypeScript",
    "AI-assisted workflows",
  ],
  location: "United States",
  tagline:
    "I build web apps and client sites end to end, from design to deploy.",
  availability: {
    open: true,
    label: "open to new projects",
  },
  email: "velasquezedar17@gmail.com",
  links: {
    github: "https://github.com/velas017",
    // TODO: confirm your LinkedIn URL
    linkedin: "https://www.linkedin.com/in/edar-velasquez",
  },
  /** Used for canonical URLs, sitemap and Open Graph. Override with NEXT_PUBLIC_SITE_URL. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://edarvelasquez.com",
  /** Path shown in the fake shell prompt. */
  prompt: "visitor@edar ~ $",
} as const;

export type SiteConfig = typeof site;
