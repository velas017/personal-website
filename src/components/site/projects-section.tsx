import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";
import { getResearchProjects, getShowcaseProjects, statusLabel } from "@/lib/projects";
import { cn } from "@/lib/utils";
import { Container, focusRing } from "./primitives";

const textLink = cn(
  "inline-flex min-h-11 items-center text-sm text-foreground underline-offset-4 transition-colors hover:text-amber hover:underline",
  focusRing,
);

export function ProjectsSection() {
  const shown = getShowcaseProjects();
  const research = getResearchProjects();
  return (
    <section id="projects" className="scroll-mt-4">
      <Container className="pt-8 pb-10">
        <h2 className="text-xl font-medium tracking-tight sm:text-2xl">
          <span aria-hidden="true" className="text-amber">
            ${" "}
          </span>
          Projects
        </h2>

        <ul className="mt-5 grid gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((project, i) => (
            <li key={project.slug}>
              <ProjectCard project={project} eager={i === 0} />
            </li>
          ))}
        </ul>

        {research.map((project) => (
          <p
            key={project.slug}
            className="mt-6 flex flex-wrap items-center gap-x-2 text-sm text-muted-foreground"
          >
            <span aria-hidden="true" className="text-amber">
              ↳
            </span>
            <span>
              Also in the works: <span className="text-foreground">{project.name}</span>,{" "}
              {lowerFirst(project.plain)}
            </span>
            <span className="text-[11px] text-amber-dim">[{statusLabel[project.status]}]</span>
            <Link href={`/projects/${project.slug}`} className={textLink}>
              Read the plan →<span className="sr-only"> for {project.name}</span>
            </Link>
          </p>
        ))}
      </Container>
    </section>
  );
}

function ProjectCard({ project, eager }: { project: Project; eager: boolean }) {
  const live = project.links?.live;
  const preview = project.image && (
    <div className="overflow-hidden rounded-lg border border-line bg-screen transition-colors group-hover:border-amber/60">
      <div className="flex items-center gap-2 border-b border-line px-3 py-2">
        <span aria-hidden="true" className="flex gap-1.5">
          <i className="size-2 rounded-full bg-[#ef4444]" />
          <i className="size-2 rounded-full bg-[#eab308]" />
          <i className="size-2 rounded-full bg-[#22c55e]" />
        </span>
        <span className="min-w-0 truncate text-[11px] text-faint">
          {live ? hostname(live) : project.name.toLowerCase()}
        </span>
      </div>
      <Image
        src={project.image.src}
        alt={project.image.alt}
        width={1280}
        height={720}
        sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
        loading={eager ? "eager" : "lazy"}
        className="block aspect-video w-full object-cover object-top"
      />
    </div>
  );

  return (
    <article>
      {preview &&
        (live ? (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className={cn("group block", focusRing, "rounded-lg")}
          >
            {preview}
            <span className="sr-only">Opens the {project.name} site in a new tab</span>
          </a>
        ) : (
          preview
        ))}

      <div className="mt-3 flex items-baseline justify-between gap-3">
        <h3 className="text-base font-medium tracking-tight text-foreground">{project.name}</h3>
        <span className="shrink-0 text-[11px] text-amber-dim">
          [{statusLabel[project.status]}]
        </span>
      </div>
      <p className="text-xs text-faint">
        {project.kind} · {project.year}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.plain}</p>

      <div className="mt-1 flex flex-wrap gap-x-5">
        {live && (
          <a href={live} target="_blank" rel="noopener noreferrer" className={textLink}>
            Visit site ↗
            <span className="sr-only">
              {" "}
              ({project.name}, opens in a new tab)
            </span>
          </a>
        )}
        <Link href={`/projects/${project.slug}`} className={textLink}>
          How it was built →<span className="sr-only">: {project.name}</span>
        </Link>
      </div>
    </article>
  );
}

function hostname(url: string): string {
  return new URL(url).hostname.replace(/^www\./, "");
}

function lowerFirst(text: string): string {
  return text.charAt(0).toLowerCase() + text.slice(1);
}
