import { site } from "@/content/site";
import { AvailabilityBadge, ContactLinks, Container } from "./primitives";

type Entry = { what: string; where: string; note?: string };

const initials = site.name
  .split(" ")
  .map((n) => n[0])
  .join("");

/** Who you are in a few lines, so the projects start on the first screen. */
export function Intro() {
  return (
    <section>
      <Container className="pt-8 sm:pt-12">
        <div className="flex items-center gap-4">
          {/* Drop a photo at public/headshot.jpg and swap this tile for next/image. */}
          <div
            aria-hidden="true"
            className="grid size-20 shrink-0 place-items-center rounded-lg border border-line bg-screen sm:size-24"
          >
            <span className="text-glow text-2xl font-medium text-amber">{initials}</span>
          </div>
          <div className="min-w-0">
            <h1 className="text-glow text-2xl font-semibold tracking-tight sm:text-3xl">
              {site.name}
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              {site.role} <span className="text-faint">· {site.location}</span>
            </p>
          </div>
        </div>

        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
          {site.intro}
        </p>

        <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-1">
          <AvailabilityBadge />
          <ContactLinks />
        </div>

        <div className="mt-5 grid gap-x-12 gap-y-4 md:grid-cols-2">
          <EntryList title="Now" entries={site.now} />
          <EntryList title="Previously" entries={site.previously} />
        </div>
      </Container>
    </section>
  );
}

function EntryList({ title, entries }: { title: string; entries: readonly Entry[] }) {
  return (
    <div>
      <h2 className="text-xs font-medium tracking-[0.2em] text-amber uppercase">{title}</h2>
      <ul className="mt-1.5 space-y-1 text-sm text-muted-foreground">
        {entries.map((entry) => (
          <li key={`${entry.what} ${entry.where}`} className="flex gap-2">
            <span aria-hidden="true" className="text-amber">
              ↳
            </span>
            <span>
              {entry.what} <span className="text-foreground">{entry.where}</span>
              {entry.note && <span className="text-faint"> · {entry.note}</span>}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
