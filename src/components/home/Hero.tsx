import { Icon, SmartImage } from "@/once-ui/components";
import { home, person, social } from "@/app/resources/content";
import { resumeHref } from "@/app/utils/resume-href";
import styles from "./Hero.module.scss";

type HeroProps = {
  resumeAvailable?: boolean;
};

export function Hero({ resumeAvailable = false }: HeroProps) {
  const resumeHrefFinal = resumeAvailable
    ? resumeHref
    : `mailto:${person.email}?subject=${encodeURIComponent("Resume request")}`;

  return (
    <section id="top" className={styles.hero}>
      <div className="site-container">
        <div className={styles.grid}>
          <div className={styles.copy}>
            <p className={`eyebrow ${styles.hello}`}>{`// ${home.eyebrow}`}</p>

            <h1 className={styles.name}>
              {person.firstName}
              <span className={styles.surname}>{person.lastName}</span>
            </h1>

            <p className={styles.role}>
              <span className={styles.roleLine} aria-hidden="true" />
              {person.role}
            </p>

            <p className={styles.intro}>{home.intro}</p>

            <div className={styles.actions}>
              <a href="#projects" className={styles.primary}>
                Things I&apos;ve shipped
                <Icon name="arrowRight" size="s" />
              </a>
              <a
                href={resumeHrefFinal}
                {...(resumeAvailable
                  ? { download: "Shahjalal-Ahmed-Nishat-Resume.pdf" }
                  : {})}
                className={styles.secondary}
              >
                <Icon name="download" size="s" />
                Download resume
              </a>
            </div>

            <div className={styles.socials}>
              <span className={styles.socialsLabel}>Find me on</span>
              <div className={styles.socialRow}>
                {social.map((item) => (
                  <a
                    key={item.name}
                    href={item.link}
                    target={item.link.startsWith("http") ? "_blank" : undefined}
                    rel={item.link.startsWith("http") ? "noreferrer noopener" : undefined}
                    aria-label={item.name}
                    title={item.name}
                    className={styles.socialLink}
                  >
                    <Icon name={item.icon as never} size="s" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.visual}>
            <div className={`${styles.frame} corners`}>
              <SmartImage
                priority
                src={person.avatar}
                alt={`Portrait of ${person.name}`}
                aspectRatio="4 / 5"
                objectFit="cover"
                sizes="(max-width: 1024px) 100vw, 420px"
              />
              <div className={styles.frameCaption}>
                <span>Brahmanbaria, BD</span>
                <span className={styles.frameCoord}>24.05°N 90.60°E</span>
              </div>
            </div>

            <div className={styles.timeCard}>
              <Icon name="terminal" size="xs" />
              <div>
                <span className={styles.cardLabel}>Currently</span>
                <span className={styles.cardValue}>CTO @ Oxygen AHB</span>
              </div>
            </div>

            <div className={styles.stackCard}>
              <span className={styles.cardLabel}>Core stack</span>
              <span className={styles.stackValue}>Next.js · TypeScript · Node</span>
            </div>
          </div>
        </div>

        <div className={styles.stats}>
          {home.stats.map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
