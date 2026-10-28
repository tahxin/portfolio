import { Icon } from "@/once-ui/components";
import { about, person } from "@/app/resources/content";
import { SectionHeader } from "./SectionHeader";
import styles from "./AboutSection.module.scss";

export function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="site-container">
        <SectionHeader
          eyebrow={about.eyebrow}
          heading={about.heading}
          description="Two disciplines, one practice: writing code that people can read, and writing prose that people want to read."
          meta={`${person.location} · UTC+6`}
        />

        <div className={styles.grid}>
          <div className={styles.story}>
            {about.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}

            <div className={styles.focus}>
              {about.focus.map((item) => (
                <span key={item} className={styles.chip}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <aside className={styles.panel}>
            <div className={styles.panelHeader}>
              <Icon name="person" size="s" />
              <span>Quick facts</span>
            </div>

            <dl className={styles.facts}>
              {about.facts.map((fact) => (
                <div key={fact.label} className={styles.fact}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
              <div className={styles.fact}>
                <dt>Hobbies</dt>
                <dd>{about.hobbies.join(" · ")}</dd>
              </div>
            </dl>

            <div className={styles.now}>
              <span className={styles.nowLabel}>Right now</span>
              <ul className={styles.nowList}>
                {about.currently.map((item) => (
                  <li key={item}>
                    <span className={styles.bullet} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
