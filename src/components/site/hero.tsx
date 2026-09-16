import { BlurFade } from "@/components/ui/blur-fade";
import { DotPattern } from "@/components/ui/dot-pattern";
import { TypingAnimation as RoleTyper } from "@/components/ui/typing-animation";
import { Terminal, TypingAnimation, AnimatedSpan } from "@/components/ui/terminal";
import { site } from "@/content/site";
import { projects } from "@/content/projects";
import { cn } from "@/lib/utils";
import { AvailabilityBadge, ContactLinks, Container } from "./primitives";

export function Hero() {
  const dirs = projects.map((p) => `${p.slug}/`);
  return (
    <section className="relative overflow-hidden">
      <DotPattern
        aria-hidden="true"
        width={22}
        height={22}
        cr={0.9}
        className={cn(
          "text-line-strong/70",
          "[mask-image:radial-gradient(60%_60%_at_50%_0%,white,transparent)]",
        )}
      />
      <Container className="relative grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
        <div>
          <BlurFade delay={0.05}>
            <p className="text-sm text-muted-foreground">
              <span className="text-amber">{site.prompt}</span> ./introduce
            </p>
          </BlurFade>
          <BlurFade delay={0.15}>
            <h1 className="text-glow mt-5 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              {site.name}
            </h1>
          </BlurFade>
          <BlurFade delay={0.25}>
            <p className="mt-4 flex min-h-8 items-baseline gap-2 text-lg text-muted-foreground sm:text-xl">
              <span aria-hidden="true" className="text-amber">
                ↳
              </span>
              <RoleTyper
                words={[...site.roleWords]}
                loop
                startOnView={false}
                typeSpeed={55}
                deleteSpeed={30}
                pauseDelay={1800}
                cursorStyle="underscore"
                className="text-lg text-foreground sm:text-xl"
              />
              <span className="sr-only">{site.role}</span>
            </p>
          </BlurFade>
          <BlurFade delay={0.3}>
            <p className="mt-2 pl-6 text-sm text-muted-foreground">
              {site.employer.title} @{" "}
              <span className="text-foreground">{site.employer.company}</span>
              <span className="text-faint"> · {site.location}</span>
            </p>
          </BlurFade>
          <BlurFade delay={0.35}>
            <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-muted-foreground">
              Five years turning enterprise requirements into reliable, well-tested
              software in Java, React and TypeScript. After hours I build full-stack
              products end to end: a multi-tenant scheduling platform, booking
              flows, and local-SEO sites for real businesses.
            </p>
          </BlurFade>
          <BlurFade delay={0.45}>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <AvailabilityBadge />
              <ContactLinks />
            </div>
          </BlurFade>
        </div>

        <BlurFade delay={0.3} direction="left" className="min-w-0">
          <Terminal
            startOnView={false}
            className="max-h-none w-full max-w-none border-line bg-screen text-[13px] [&_pre]:whitespace-pre-wrap [&_code]:overflow-visible [&_code]:break-words shadow-[0_0_0_1px_var(--line),0_30px_80px_-30px_rgba(245,179,66,0.25)]"
          >
            <TypingAnimation duration={45} className="text-foreground">
              {`$ whoami`}
            </TypingAnimation>
            <AnimatedSpan className="text-muted-foreground">
              {`${site.handle} — ${site.role.toLowerCase()} · qa specialist @ ${site.employer.company.toLowerCase()} · ${site.location.toLowerCase()}`}
            </AnimatedSpan>
            <TypingAnimation duration={45} className="text-foreground">
              {`$ cat availability.txt`}
            </TypingAnimation>
            <AnimatedSpan className="text-ok">{`✔ ${site.availability.label}`}</AnimatedSpan>
            <TypingAnimation duration={45} className="text-foreground">
              {`$ ls ~/projects`}
            </TypingAnimation>
            <AnimatedSpan className="text-amber">
              <span className="flex flex-wrap gap-x-4">
                {dirs.map((d) => (
                  <span key={d}>{d}</span>
                ))}
              </span>
            </AnimatedSpan>
            <TypingAnimation duration={45} className="text-foreground">
              {`$ cat stack.txt`}
            </TypingAnimation>
            <AnimatedSpan className="text-muted-foreground">
              {`java · typescript · react · next.js · postgres · prisma · vercel`}
            </AnimatedSpan>
            <AnimatedSpan className="text-foreground">
              <span>
                $ <span className="inline-block h-3.5 w-2 translate-y-0.5 bg-amber animate-blink-cursor" />
              </span>
            </AnimatedSpan>
          </Terminal>
        </BlurFade>
      </Container>
    </section>
  );
}
