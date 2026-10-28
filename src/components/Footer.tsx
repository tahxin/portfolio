import Link from "next/link";
import { Icon } from "@/once-ui/components";
import { person, social, footer as footerContent } from "@/app/resources/content";
import styles from "./Footer.module.scss";

const navigation = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Education", href: "/#education" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

const currentYear = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="site-container">
        <div className={styles.top}>
          <div className={styles.intro}>
            <Link href="/" className={styles.brand}>
              <span>{person.name}</span>
            </Link>
            <p className={styles.tagline}>{footerContent.tagline}</p>
            <div className={styles.socials}>
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  target={item.link.startsWith("http") ? "_blank" : undefined}
                  rel={item.link.startsWith("http") ? "noreferrer noopener" : undefined}
                  className={styles.social}
                  aria-label={item.name}
                  title={item.name}
                >
                  <Icon name={item.icon as never} size="s" />
                </a>
              ))}
            </div>
          </div>

          <div className={styles.columns}>
            <div className={styles.column}>
              <h2 className={styles.columnTitle}>Navigate</h2>
              <ul className={styles.list}>
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.column}>
              <h2 className={styles.columnTitle}>Elsewhere</h2>
              <ul className={styles.list}>
                {social.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.link}
                      target={item.link.startsWith("http") ? "_blank" : undefined}
                      rel={item.link.startsWith("http") ? "noreferrer noopener" : undefined}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
                <li>
                  <Link href="/work">All projects</Link>
                </li>
              </ul>
            </div>

            <div className={styles.column}>
              <h2 className={styles.columnTitle}>Based in</h2>
              <p className={styles.meta}>{person.location}</p>
              <p className={styles.meta}>UTC+6 · Remote friendly</p>
              <a className={styles.email} href={`mailto:${person.email}`}>
                {person.email.split("@")[0]}
                <wbr />@{person.email.split("@")[1]}
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            © {currentYear} {person.name}. All rights reserved.
          </p>
          <p className={styles.note}>{footerContent.note}</p>
          {/* Usage of this template requires attribution. Please don't remove the link to Once UI. */}
          <p>
            Built with{" "}
            <a href="https://once-ui.com/templates/magic-portfolio" target="_blank" rel="noreferrer">
              Once UI
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
