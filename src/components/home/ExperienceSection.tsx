import { Icon } from "@/once-ui/components";
import { experience } from "@/app/resources/content";
import { SectionHeader } from "./SectionHeader";
import styles from "./ExperienceSection.module.scss";

export function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <div className="site-container">
        <SectionHeader
          eyebrow={experience.eyebrow}
          heading={experience.heading}
          description={experience.description}
          meta="2 roles · 7 leadership positions"
        />

        <div className={styles.layout}>
          <div className={styles.professional}>
            {experience.professional.map((job) => (
              <article key={`${job.org}-${job.role}`} className={styles.job}>
                <header className={styles.jobHeader}>
                  <span className={styles.jobIcon}>
                    <Icon name="briefcase" size="s" />
                  </span>
                  <div className={styles.jobTitle}>
                    <h3>{job.role}</h3>
                    <p>
                      {job.org}
                      <span className={styles.type}>{job.type}</span>
                    </p>
                  </div>
                  <span className={styles.period}>{job.period}</span>
                </header>

                <p className={styles.description}>{job.description}</p>

                <ul className={styles.highlights}>
                  {job.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <aside className={styles.side}>
            <div className={styles.leadership}>
              <div className={styles.sideHeader}>
                <Icon name="users" size="s" />
                <h3>Leadership</h3>
              </div>

              <ul className={styles.roles}>
                {experience.leadership.map((role) => (
                  <li key={`${role.org}-${role.role}`} className={styles.role}>
                    <div className={styles.roleMain}>
                      <span className={styles.roleTitle}>{role.role}</span>
                      <span className={styles.roleOrg}>{role.org}</span>
                    </div>
                    <span className={styles.rolePeriod}>{role.period}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.award}>
              <div>
                <span className={styles.awardLabel}>Highlight</span>
                <h4>{experience.highlight.title}</h4>
                <p className={styles.awardOrg}>{experience.highlight.org}</p>
                <p className={styles.awardText}>{experience.highlight.description}</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
