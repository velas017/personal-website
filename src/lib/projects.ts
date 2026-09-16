import {
  categoryOrder,
  projects,
  type Project,
  type ProjectCategory,
} from "@/content/projects";

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug);
}

/** Projects grouped by category, in display order, empty groups removed. */
export function getProjectsByCategory(): Array<{
  category: ProjectCategory;
  items: Project[];
}> {
  return categoryOrder
    .map((category) => ({
      category,
      items: projects.filter((p) => p.category === category),
    }))
    .filter((g) => g.items.length > 0);
}

/** Previous / next neighbours for the case-study footer nav. */
export function getAdjacentProjects(slug: string): {
  prev?: Project;
  next?: Project;
} {
  const ordered = getProjectsByCategory().flatMap((g) => g.items);
  const i = ordered.findIndex((p) => p.slug === slug);
  if (i === -1) return {};
  return { prev: ordered[i - 1], next: ordered[i + 1] };
}

export const statusLabel: Record<Project["status"], string> = {
  live: "LIVE",
  beta: "BETA",
  "pre-launch": "PRE-LAUNCH",
  research: "RESEARCH",
};
