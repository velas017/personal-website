import { BlurFade } from "@/components/ui/blur-fade";
import { site } from "@/content/site";
import { Container, Eyebrow } from "./primitives";

const skills: Array<{ group: string; items: string[] }> = [
  { group: "languages", items: ["Java", "TypeScript", "JavaScript", "SQL"] },
  { group: "frontend", items: ["React", "Next.js", "Tailwind CSS", "CSS Modules", "accessibility (WCAG 2.2)"] },
  { group: "backend", items: ["Node", "REST APIs", "PostgreSQL", "Prisma", "Supabase", "NextAuth", "Zod"] },
  { group: "testing & qa", items: ["test strategy", "Vitest", "Playwright", "axe-core", "Lighthouse", "OOP & clean architecture"] },
  { group: "payments & infra", items: ["Square", "Stripe Connect", "AWS SES", "Upstash Redis", "Vercel", "Sentry"] },
  { group: "tooling", items: ["Git", "Bitbucket", "GitHub Actions", "Claude Code", "spec-driven builds"] },
];

const initials = site.name
  .split(" ")
  .map((n) => n[0])
  .join("");

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-line py-20 sm:py-28">
      <Container className="grid gap-12 md:grid-cols-[minmax(0,1fr)_280px] md:gap-16">
        <div>
          <BlurFade inView>
            <Eyebrow>About</Eyebrow>
            <h2 className="mt-3 text-2xl font-medium tracking-tight sm:text-3xl">
              <span className="text-muted-foreground">$ </span>whoami
            </h2>
          </BlurFade>
          <BlurFade inView delay={0.1}>
            {/* Bio draft written from your LinkedIn summary and repos. Edit freely. */}
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                I&apos;m {site.name}, a software engineer in {site.location}. For
                the last five years I&apos;ve been building and validating enterprise
                applications at {site.employer.company}, mostly in Java, React and
                TypeScript. My strength is turning complex requirements into
                reliable, well-tested software with a real focus on clean
                architecture and maintainability.
              </p>
              <p>
                What energizes me is building things end to end. I designed and
                shipped AnotherSchedulr, a multi-tenant SaaS scheduling platform on
                Next.js, TypeScript, PostgreSQL and Prisma: 100+ API endpoints,
                authentication, payment processing and tenant data isolation, from
                schema design through production deployment. The client sites here
                came from the same habit of not leaving a problem alone.
              </p>
              <p>
                I care about the parts people don&apos;t see: typed content so
                nothing drifts, accessibility checks that fail the build, security
                headers with a reason next to each one. I&apos;m always glad to talk
                with teams building ambitious products and solving hard engineering
                problems.
              </p>
            </div>
          </BlurFade>

          <BlurFade inView delay={0.15}>
            <div className="mt-10">
              <p className="text-sm text-muted-foreground">
                <span className="text-amber">$ </span>cat skills.txt
              </p>
              <dl className="mt-4 grid gap-x-8 gap-y-3 text-sm sm:grid-cols-[auto_1fr]">
                {skills.map((s) => (
                  <div key={s.group} className="contents">
                    <dt className="text-faint">{s.group}</dt>
                    <dd className="text-foreground">{s.items.join(" · ")}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </BlurFade>
        </div>

        <BlurFade inView delay={0.1} className="md:pt-14">
          {/* Drop a photo at public/headshot.jpg and swap this tile for next/image. */}
          <figure className="relative mx-auto aspect-square w-full max-w-[280px] overflow-hidden rounded-lg border border-line bg-screen">
            <div className="absolute inset-0 grid place-items-center">
              <span className="text-glow text-7xl font-medium tracking-tight text-amber">
                {initials}
              </span>
            </div>
            <figcaption className="absolute inset-x-0 bottom-0 border-t border-line bg-background/70 px-3 py-2 text-[11px] text-faint backdrop-blur">
              ~/photos/headshot.jpg
            </figcaption>
          </figure>
        </BlurFade>
      </Container>
    </section>
  );
}
