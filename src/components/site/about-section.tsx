import { BlurFade } from "@/components/ui/blur-fade";
import { site } from "@/content/site";
import { Container, Eyebrow } from "./primitives";

const skills: Array<{ group: string; items: string[] }> = [
  { group: "frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "CSS Modules"] },
  { group: "backend", items: ["Node", "PostgreSQL", "Prisma", "Supabase", "NextAuth", "Zod"] },
  { group: "payments & infra", items: ["Square", "Stripe Connect", "AWS SES", "Upstash Redis", "Vercel", "Sentry"] },
  { group: "quality", items: ["Vitest", "Playwright", "axe-core", "Lighthouse", "WCAG 2.2"] },
  { group: "ai-assisted", items: ["Claude Code", "prompt & context engineering", "spec-driven builds"] },
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
            {/* TODO: this bio is a draft written from your repos. Edit freely. */}
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                I&apos;m {site.name}, a software engineer based in {site.location}. I
                build web products end to end: the design, the data model, the
                payments, the tests, and the deploy.
              </p>
              <p>
                Most of my work starts with a real business that needs something
                to exist. A skincare studio that needed bookings out of their DMs.
                An auto shop that needed to show up in local search. Small service
                businesses that were overpaying for scheduling software, which
                turned into a full booking platform of my own.
              </p>
              <p>
                I care about the parts people don&apos;t see: typed content so nothing
                drifts, accessibility checks that fail the build, security headers
                with a reason next to each one. And I lean hard on AI-assisted
                workflows to move faster without skipping those parts.
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
