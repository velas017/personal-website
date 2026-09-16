import { Hero } from "@/components/site/hero";
import { ProjectsSection } from "@/components/site/projects-section";
import { AboutSection } from "@/components/site/about-section";
import { ContactSection } from "@/components/site/contact-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
