import { Icon, SmartImage } from "@/once-ui/components";
import styles from "./ProjectCard.module.scss";

export interface ProjectCardProps {
  href: string;
  title: string;
  summary: string;
  image?: string;
  tech?: string[];
  status?: string;
  tag?: string;
  live?: string;
  repo?: string;
  priority?: boolean;
}

const emptyTech: string[] = [];

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  title,
  summary,
  image,
  tech = emptyTech,
  status,
  tag,
  live,
  repo,
  priority = false,
}) => {
  return (
    <article className={styles.card}>
      <a href={href} className={styles.coverLink} aria-label={`Open case study: ${title}`}>
        <div className={styles.cover}>
          {image ? (
            <SmartImage
              priority={priority}
              src={image}
              alt={`${title} cover`}
              aspectRatio="16 / 9"
              objectFit="cover"
              sizes="(max-width: 768px) 100vw, 380px"
            />
          ) : (
            <div className={styles.placeholder}>
              <Icon name="code" size="l" />
            </div>
          )}
          <span className={styles.coverGlow} aria-hidden="true" />
        </div>
      </a>

      <div className={styles.body}>
        <div className={styles.meta}>
          {tag && <span className={styles.tag}>{tag}</span>}
          {status && (
            <span className={styles.status}>
              <span className={styles.dot} aria-hidden="true" />
              {status}
            </span>
          )}
        </div>

        <h3 className={styles.title}>
          <a href={href}>{title}</a>
        </h3>

        <p className={styles.summary}>{summary}</p>

        {tech.length > 0 && (
          <ul className={styles.tech}>
            {tech.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}

        <div className={styles.actions}>
          <a href={href} className={styles.study}>
            View Details
            <Icon name="arrowRight" size="xs" />
          </a>

          <div className={styles.links}>
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noreferrer noopener"
                className={styles.iconLink}
                aria-label={`${title} live site`}
                title="Live site"
              >
                <Icon name="externalLink" size="xs" />
              </a>
            )}
            {repo && (
              <a
                href={repo}
                target="_blank"
                rel="noreferrer noopener"
                className={styles.iconLink}
                aria-label={`${title} source code`}
                title="Source code"
              >
                <Icon name="github" size="xs" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
