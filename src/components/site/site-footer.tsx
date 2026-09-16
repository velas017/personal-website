import { site } from "@/content/site";
import { Container } from "./primitives";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col items-start justify-between gap-3 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
        <p>
          <span aria-hidden="true">© </span>
          {new Date().getFullYear()} {site.name}
          <span className="text-faint"> · built with Next.js, deployed on Vercel</span>
        </p>
        <a href="#main" className="transition-colors hover:text-amber">
          ↑ back to top
        </a>
      </Container>
    </footer>
  );
}
