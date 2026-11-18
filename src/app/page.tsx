import { Intro } from "@/components/site/intro";
import { ProjectsSection } from "@/components/site/projects-section";
import { StackLine } from "@/components/site/stack-line";
import { ContactSection } from "@/components/site/contact-section";

export default function HomePage() {
  return (
    <>
      <Intro />
      <ProjectsSection />
      <StackLine />
      <ContactSection />
    </>
  );
}
