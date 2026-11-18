import { site } from "@/content/site";
import { cn } from "@/lib/utils";
import { ContactLinks, Container, focusRing } from "./primitives";

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-line py-10">
      <Container>
        <h2 className="text-xl font-medium tracking-tight sm:text-2xl">Got a project in mind?</h2>
        <p className="mt-2 max-w-xl text-sm text-muted-foreground">
          Client sites, booking flows, internal tools. Send a note and I&apos;ll reply
          within a day or two.
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
          <a
            href={`mailto:${site.email}?subject=Project%20inquiry`}
            className="inline-flex min-h-11 items-center rounded-md bg-amber px-5 text-sm font-medium text-primary-foreground shadow-[0_0_24px_-6px_var(--amber)] transition hover:bg-amber-glow hover:shadow-[0_0_32px_-4px_var(--amber)] focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
          >
            Send an email →
          </a>
          <a
            href={`mailto:${site.email}`}
            className={cn(
              "inline-flex min-h-11 items-center text-sm break-all text-amber underline-offset-4 hover:text-amber-glow hover:underline",
              focusRing,
            )}
          >
            {site.email}
          </a>
        </div>

        <div className="mt-2">
          <ContactLinks />
        </div>
      </Container>
    </section>
  );
}
