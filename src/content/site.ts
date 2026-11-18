/**
 * Single source of truth for who you are and how to reach you.
 * Edit this file; every section of the site reads from it.
 */
export const site = {
  name: "Edar Velasquez",
  role: "Software Engineer",
  /** Current position, shown under the role line and in structured data. */
  employer: {
    title: "Quality Assurance Specialist",
    company: "Bank of America",
    url: "https://www.bankofamerica.com",
    since: "2021",
  },
  /** One or two sentences under your name on the home page. Plain words, no jargon. */
  intro:
    "I build websites and booking tools for local businesses. By day I build and test enterprise software at Bank of America.",
  /** One-line entries under the intro: what you do, where (shown brighter), and an optional note. */
  now: [
    { what: "Quality Assurance Specialist", where: "Bank of America" },
    { what: "Building", where: "AnotherSchedulr", note: "in beta" },
  ],
  previously: [
    { what: "Apprentice", where: "Bank of America", note: "2021–2022" },
    { what: "Coding fellow", where: "Road to Hire", note: "2020–2021" },
  ],
  /** The single "Works with" line under the projects. */
  stack: ["java", "typescript", "react", "next.js", "postgres", "prisma", "vercel"],
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
