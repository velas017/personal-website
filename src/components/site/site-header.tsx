import Link from "next/link";
import { site } from "@/content/site";
import { Container } from "./primitives";

const nav = [
  { label: "./projects", href: "/#projects" },
  { label: "./about", href: "/#about" },
  { label: "./contact", href: "/#contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container className="flex h-14 items-center justify-between gap-4">
        <Link
          href="/"
          className="group flex items-center gap-2 text-sm text-muted-foreground"
          aria-label={`${site.name}, home`}
        >
          <span className="text-amber">~/{site.handle}</span>
          <span aria-hidden="true" className="hidden sm:inline">
            $
          </span>
          <span
            aria-hidden="true"
            className="hidden h-4 w-2 bg-amber/80 animate-blink-cursor sm:inline-block"
          />
        </Link>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-4 text-sm sm:gap-6">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-muted-foreground transition-colors hover:text-amber"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
