import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Code2, ExternalLink } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { Container, Eyebrow, Tag } from "@/components/site/primitives";
import { site } from "@/content/site";
import {
  getAdjacentProjects,
  getAllSlugs,
  getProject,
  statusLabel,
} from "@/lib/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(
  props: PageProps<"/projects/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      type: "article",
      title: `${project.name} | ${site.name}`,
      description: project.description,
      url: `/projects/${project.slug}`,
    },
  };
}

export default async function ProjectPage(props: PageProps<"/projects/[slug]">) {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) notFound();
  const { prev, next } = getAdjacentProjects(project.slug);

  return (
    <article className="py-12 sm:py-16">
      <Container className="max-w-3xl">
        <BlurFade>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-amber"
          >
            <ArrowLeft aria-hidden="true" className="size-3.5" />
            back to projects
          </Link>

          <div className="mt-8 space-y-1 text-xs text-faint">
            <p>
              <span className="text-amber">$ </span>cd ~/projects/{project.slug}
            </p>
            <p>
              <span className="text-amber">$ </span>cat README.md
              <span className="ml-3 text-amber-dim">[{statusLabel[project.status]}]</span>
              <span className="ml-3">{project.year}</span>
            </p>
          </div>

          <h1 className="mt-6 text-3xl font-medium tracking-tight sm:text-4xl">
            {project.name}
          </h1>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <ul className="mt-5 flex flex-wrap gap-1.5">
            {project.tags.map((t) => (
              <li key={t}>
                <Tag>{t}</Tag>
              </li>
            ))}
          </ul>

          {project.links && (project.links.live || project.links.repo) && (
            <ul className="mt-6 flex flex-wrap gap-4 text-sm">
              {project.links.live && (
                <li>
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-foreground underline-offset-4 hover:text-amber hover:underline"
                  >
                    <ExternalLink aria-hidden="true" className="size-3.5" />
                    visit site
                  </a>
                </li>
              )}
              {project.links.repo && (
                <li>
                  <a
                    href={project.links.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-foreground underline-offset-4 hover:text-amber hover:underline"
                  >
                    <Code2 aria-hidden="true" className="size-3.5" />
                    source
                  </a>
                </li>
              )}
            </ul>
          )}
        </BlurFade>

        <BlurFade delay={0.1}>
          <p className="mt-10 border-l-2 border-amber/60 pl-4 text-[15px] leading-relaxed text-foreground">
            {project.summary}
          </p>
        </BlurFade>

        <div className="mt-12 space-y-12">
          <Section eyebrow="Problem" title="The problem">
            <p>{project.problem}</p>
          </Section>
          <Section eyebrow="Solution" title="The solution">
            <p>{project.solution}</p>
          </Section>
          <Section eyebrow="Highlights" title="Interesting details">
            <ul className="space-y-3">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-3">
                  <span aria-hidden="true" className="mt-[3px] text-amber">
                    •
                  </span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </Section>
          <Section eyebrow="Tech stack" title="Built with">
            <ul className="flex flex-wrap gap-1.5">
              {project.stack.map((s) => (
                <li key={s}>
                  <Tag>{s}</Tag>
                </li>
              ))}
            </ul>
          </Section>
        </div>

        <nav
          aria-label="More projects"
          className="mt-16 grid gap-3 border-t border-line pt-8 sm:grid-cols-2"
        >
          {prev ? (
            <AdjacentLink href={`/projects/${prev.slug}`} label="previous" name={prev.name} />
          ) : (
            <span />
          )}
          {next && (
            <AdjacentLink
              href={`/projects/${next.slug}`}
              label="next"
              name={next.name}
              align="right"
            />
          )}
        </nav>
      </Container>
    </article>
  );
}

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <BlurFade inView>
      <section>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-2 text-xl font-medium tracking-tight">{title}</h2>
        <div className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
          {children}
        </div>
      </section>
    </BlurFade>
  );
}

function AdjacentLink({
  href,
  label,
  name,
  align = "left",
}: {
  href: string;
  label: string;
  name: string;
  align?: "left" | "right";
}) {
  return (
    <Link
      href={href}
      className={`group flex flex-col gap-1 rounded-lg border border-line bg-elevated p-4 transition-colors hover:border-amber/60 ${
        align === "right" ? "sm:items-end sm:text-right" : ""
      }`}
    >
      <span className="text-xs text-faint">{label}</span>
      <span className="inline-flex items-center gap-1.5 text-sm text-foreground group-hover:text-amber">
        {name}
        <ArrowUpRight aria-hidden="true" className="size-3.5" />
      </span>
    </Link>
  );
}
