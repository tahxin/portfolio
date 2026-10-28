import { Column } from "@/once-ui/components";

import { Hero } from "@/components/home/Hero";
import { AboutSection } from "@/components/home/AboutSection";
import { SkillsSection } from "@/components/home/SkillsSection";
import { EducationSection } from "@/components/home/EducationSection";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { ContactSection } from "@/components/home/ContactSection";
import { Projects } from "@/components/work/Projects";

import { baseURL } from "@/app/resources";
import { home, person } from "@/app/resources/content";
import { hasResume } from "@/app/utils/resume";
import { Meta, Schema } from "@/once-ui/modules";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  const resumeAvailable = hasResume();

  return (
    <Column fillWidth>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={home.image}
        author={{
          name: person.name,
          url: baseURL,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Hero resumeAvailable={resumeAvailable} />
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <ExperienceSection />
      <Projects withSection />
      <ContactSection />
    </Column>
  );
}
