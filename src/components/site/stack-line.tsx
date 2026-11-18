import { site } from "@/content/site";
import { Container } from "./primitives";

/** The one-line skills summary under the projects. */
export function StackLine() {
  return (
    <section id="about" className="border-t border-line py-8">
      <Container>
        <p className="text-sm text-muted-foreground">
          <span className="text-faint">Works with </span>
          <span className="text-foreground">{site.stack.join(" · ")}</span>
        </p>
      </Container>
    </section>
  );
}
