import { BlurFade } from "@/components/ui/blur-fade";
import { site } from "@/content/site";
import { AvailabilityBadge, ContactLinks, Container, Eyebrow } from "./primitives";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-line py-20 sm:py-28">
      <Container>
        <BlurFade inView>
          <Eyebrow>Let&apos;s talk</Eyebrow>
          <h2 className="mt-3 text-2xl font-medium tracking-tight sm:text-3xl">
            Got a project in mind?
          </h2>
          <p className="mt-3 max-w-xl text-sm text-muted-foreground">
            Client sites, booking flows, internal tools, or something you can&apos;t
            quite describe yet. Send a note and I&apos;ll reply within a day or two.
          </p>
        </BlurFade>

        <BlurFade inView delay={0.1}>
          <a
            href={`mailto:${site.email}`}
            className="text-glow mt-10 block break-all text-2xl font-medium tracking-tight text-amber underline-offset-8 transition-colors hover:text-amber-glow hover:underline sm:text-4xl md:text-5xl"
          >
            {site.email}
          </a>
        </BlurFade>

        <BlurFade inView delay={0.15}>
          <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
            <a
              href={`mailto:${site.email}?subject=Project%20inquiry`}
              className="inline-flex h-10 items-center rounded-md bg-amber px-5 text-sm font-medium text-primary-foreground shadow-[0_0_24px_-6px_var(--amber)] transition hover:bg-amber-glow hover:shadow-[0_0_32px_-4px_var(--amber)] focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
            >
              Send an email →
            </a>
            <AvailabilityBadge />
            <ContactLinks />
          </div>
        </BlurFade>
      </Container>
    </section>
  );
}
