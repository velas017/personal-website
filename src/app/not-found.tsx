import Link from "next/link";
import { Container } from "@/components/site/primitives";

export default function NotFound() {
  return (
    <Container className="py-24 text-sm">
      <p className="text-faint">
        <span className="text-amber">$ </span>cd {"<that page>"}
      </p>
      <h1 className="mt-3 text-2xl font-medium tracking-tight">
        bash: cd: no such file or directory
      </h1>
      <p className="mt-3 text-muted-foreground">
        Error 404. The page you asked for isn&apos;t here.
      </p>
      <Link href="/" className="mt-8 inline-block text-amber underline-offset-4 hover:underline">
        ← cd ~
      </Link>
    </Container>
  );
}
