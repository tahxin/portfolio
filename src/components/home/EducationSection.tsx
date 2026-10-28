import { Icon } from "@/once-ui/components";
import { education } from "@/app/resources/content";
import { SectionHeader } from "./SectionHeader";
import styles from "./EducationSection.module.scss";

export function EducationSection() {
  return (
    <section id="education" className="section">
      <div className="site-container">
        <SectionHeader
          eyebrow={education.eyebrow}
          heading={education.heading}
          description={education.description}
          meta="3 institutions"
        />

        <div className={styles.timeline}>
          {education.entries.map((entry) => (
            <article key={entry.school} className={styles.entry}>
              <div className={styles.aside}>
                <span className={styles.period}>{entry.period}</span>
                {entry.current && <span className={styles.badge}>In progress</span>}
              </div>

              <div className={styles.marker} aria-hidden="true">
                <span className={styles.dot} />
              </div>

              <div className={styles.body}>
                <div className={styles.headingRow}>
                  <div>
                    <h3 className={styles.degree}>{entry.degree}</h3>
                    <p className={styles.school}>
                      <Icon name="academicCap" size="xs" />
                      {entry.school}
                      <span className={styles.location}>· {entry.location}</span>
                    </p>
                  </div>
                  <span className={styles.grade}>{entry.grade}</span>
                </div>

                <ul className={styles.details}>
                  {entry.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
