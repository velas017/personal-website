import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { categoryMeta, type Project } from "@/content/projects";
import { getProjectsByCategory, statusLabel } from "@/lib/projects";
import { cn } from "@/lib/utils";
import { Container, Eyebrow, Tag } from "./primitives";

export function ProjectsSection() {
  const groups = getProjectsByCategory();
  return (
    <section id="projects" className="scroll-mt-20 border-t border-line py-20 sm:py-28">
      <Container>
        <BlurFade inView>
          <Eyebrow>Selected work</Eyebrow>
          <h2 className="mt-3 text-2xl font-medium tracking-tight sm:text-3xl">
            <span className="text-muted-foreground">$ </span>ls ~/projects
          </h2>
          <p className="mt-3 max-w-xl text-sm text-muted-foreground">
            Real clients, real products. Each one has a short write-up of the
            problem, the approach, and the parts that were interesting to build.
          </p>
        </BlurFade>

        <div className="mt-12 space-y-14">
          {groups.map((group, gi) => (
            <div key={group.category}>
              <BlurFade inView delay={0.05 * gi}>
                <div className="mb-5 flex items-baseline gap-3">
                  <h3 className="text-base text-amber">
                    ./{categoryMeta[group.category].label}
                  </h3>
                  <span className="text-xs text-faint">
                    {categoryMeta[group.category].blurb}
                  </span>
                </div>
              </BlurFade>
              <ul className="grid gap-4 sm:grid-cols-2">
                {group.items.map((project, i) => (
                  <li key={project.slug} className="flex">
                    <BlurFade inView delay={0.05 * (i + 1)} className="flex w-full">
                      <ProjectCard project={project} />
                    </BlurFade>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn(
        "group relative flex w-full flex-col gap-4 rounded-lg border border-line bg-elevated p-5 transition-colors",
        "hover:border-amber/60 focus-visible:border-amber/60 focus-visible:outline-none",
        project.featured && "sm:col-span-2",
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <p className="text-xs text-faint">
          ~/projects/{project.slug}
          <span className="ml-2 text-amber-dim">[{statusLabel[project.status]}]</span>
        </p>
        <ArrowUpRight
          aria-hidden="true"
          className="size-4 shrink-0 text-faint transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-amber"
        />
      </div>
      <div>
        <h4 className="text-lg font-medium tracking-tight text-foreground group-hover:text-amber">
          {project.name}
        </h4>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
      </div>
      <ul className="mt-auto flex flex-wrap gap-1.5">
        {project.tags.map((t) => (
          <li key={t}>
            <Tag>{t}</Tag>
          </li>
        ))}
      </ul>
    </Link>
  );
}
