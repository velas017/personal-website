import Link from "next/link";
import { cn } from "@/lib/utils";
import { site } from "@/content/site";

/** `// LABEL` style section eyebrow used across the site. */
export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-xs font-medium tracking-[0.2em] text-amber uppercase",
        className,
      )}
    >
      <span aria-hidden="true">{"// "}</span>
      {children}
    </p>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-sm border border-line bg-screen px-2 py-0.5 text-[11px] leading-5 text-muted-foreground">
      {children}
    </span>
  );
}

export function AvailabilityBadge({ className }: { className?: string }) {
  const { open, label } = site.availability;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-line bg-elevated px-3 py-1 text-xs text-foreground",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "size-2 rounded-full",
          open ? "bg-ok animate-pulse-dot" : "bg-faint",
        )}
      />
      {open ? label : "not taking new projects right now"}
    </span>
  );
}

/** Email / LinkedIn / GitHub, separated by slashes like a path. */
export function ContactLinks({ className }: { className?: string }) {
  const items = [
    { label: "Email", href: `mailto:${site.email}`, external: false },
    { label: "LinkedIn", href: site.links.linkedin, external: true },
    { label: "GitHub", href: site.links.github, external: true },
  ];
  return (
    <ul className={cn("flex flex-wrap items-center text-sm", className)}>
      {items.map((item, i) => (
        <li key={item.label} className="flex items-center">
          {i > 0 && (
            <span aria-hidden="true" className="px-2 text-faint">
              /
            </span>
          )}
          <a
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            className="text-foreground underline-offset-4 transition-colors hover:text-amber hover:underline"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-5xl px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}

export function PathLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "text-sm text-muted-foreground transition-colors hover:text-amber",
        className,
      )}
    >
      {children}
    </Link>
  );
}
