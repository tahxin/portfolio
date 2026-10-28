import Link from "next/link";
import { getPosts } from "@/app/utils/utils";
import { ProjectCard } from "@/components";
import { projects } from "@/app/resources/content";
import { SectionHeader } from "@/components/home/SectionHeader";
import styles from "./Projects.module.scss";

interface ProjectsProps {
  withSection?: boolean;
}

export function Projects({ withSection = false }: ProjectsProps) {
  const allProjects = getPosts(["src", "app", "work", "projects"]);

  const sortedProjects = allProjects.toSorted((a, b) => {
    const orderA = a.metadata.order ?? 99;
    const orderB = b.metadata.order ?? 99;
    if (orderA !== orderB) return orderA - orderB;
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const grid = (
    <div className={styles.grid}>
      {sortedProjects.map((post, index) => (
        <ProjectCard
          priority={index < 3}
          key={post.slug}
          href={`/work/${post.slug}`}
          title={post.metadata.title}
          summary={post.metadata.summary}
          image={post.metadata.image || post.metadata.images?.[0]}
          tech={post.metadata.tech}
          status={post.metadata.status}
          tag={post.metadata.tag}
          live={post.metadata.live}
          repo={post.metadata.repo}
        />
      ))}
    </div>
  );

  if (!withSection) {
    return grid;
  }

  return (
    <section id="projects" className="section">
      <div className="site-container">
        <SectionHeader
          eyebrow={projects.eyebrow}
          heading={projects.heading}
          description={projects.description}
          meta={`${sortedProjects.length} projects`}
        />
        {grid}
        <div className={styles.footer}>
          <Link href="/work" className={styles.all}>
            {projects.cta}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
