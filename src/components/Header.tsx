"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { Icon } from "@/once-ui/components";

import { person } from "@/app/resources/content";
import { resumeHref } from "@/app/utils/resume-href";
import styles from "./Header.module.scss";

const sections = [
  { id: "about", label: "About", index: "01" },
  { id: "skills", label: "Skills", index: "02" },
  { id: "education", label: "Education", index: "03" },
  { id: "experience", label: "Experience", index: "04" },
  { id: "projects", label: "Projects", index: "05" },
  { id: "contact", label: "Contact", index: "06" },
];

type HeaderProps = {
  resumeAvailable?: boolean;
};

export const Header = ({ resumeAvailable = false }: HeaderProps) => {
  const pathname = usePathname() ?? "";
  const isHome = pathname === "/";
  const [active, setActive] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const resumeHrefFinal = resumeAvailable
    ? resumeHref
    : `mailto:${person.email}?subject=${encodeURIComponent("Resume request")}`;

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  // Background treatment once the page has scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in view.
  useEffect(() => {
    if (!isHome) {
      return;
    }

    const onScroll = () => {
      const offset = window.innerHeight * 0.32;
      let current: string | null = null;

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top - offset <= 0) {
          current = section.id;
        }
      }

      // Above the first section (hero), nothing is active.
      const first = document.getElementById("about");
      if (first && first.getBoundingClientRect().top - offset > 0) {
        current = null;
      }

      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isHome]);

  // Lock body scroll and support Escape while the mobile sheet is open.
  useEffect(() => {
    if (!menuOpen) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen, closeMenu]);

  const linkFor = (id: string) => (isHome ? `#${id}` : `/#${id}`);
  const activeSection = isHome ? active : null;

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`site-container ${styles.inner}`}>
        <a href={isHome ? "#top" : "/"} className={styles.brand} aria-label={`${person.name} — home`}>
          <span className={styles.brandText}>
            <strong>{person.firstName}</strong>
            <span>{person.lastName}</span>
          </span>
        </a>

        <nav className={styles.desktopNav} aria-label="Sections">
          {sections.map((section) => (
            <a
              key={section.id}
              href={linkFor(section.id)}
              className={`${styles.navLink} ${activeSection === section.id ? styles.active : ""}`}
              aria-current={activeSection === section.id ? "true" : undefined}
            >
              {section.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <a
            href={person.whatsapp}
            target="_blank"
            rel="noreferrer noopener"
            className={styles.iconAction}
            aria-label="Message on WhatsApp"
          >
            <Icon name="whatsapp" size="s" />
          </a>
          <a
            href="https://github.com/tahxin"
            target="_blank"
            rel="noreferrer noopener"
            className={styles.iconAction}
            aria-label="GitHub profile"
          >
            <Icon name="github" size="s" />
          </a>
          <a
            href={resumeHrefFinal}
            {...(resumeAvailable ? { download: "Shahjalal-Ahmed-Nishat-Resume.pdf" } : {})}
            className={styles.resume}
          >
            <Icon name="download" size="xs" />
            <span>Download resume</span>
          </a>

          <button
            type="button"
            className={styles.menuButton}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? "close" : "menu"} size="m" />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`${styles.sheet} ${menuOpen ? styles.sheetOpen : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav className={styles.sheetNav} aria-label="Sections">
          {sections.map((section) => (
            <a
              key={section.id}
              href={linkFor(section.id)}
              className={styles.sheetLink}
              onClick={closeMenu}
            >
              <span className={styles.sheetIndex}>{section.index}</span>
              <span>{section.label}</span>
              <Icon name="arrowUpRight" size="s" />
            </a>
          ))}
        </nav>
        <div className={styles.sheetFooter}>
          <a href={resumeHrefFinal} className={styles.sheetResume} onClick={closeMenu}>
            <Icon name="download" size="s" />
            Download resume
          </a>
          <Link href="/work" className={styles.sheetSecondary} onClick={closeMenu}>
            All projects
            <Icon name="arrowRight" size="xs" />
          </Link>
          <p className={styles.sheetMeta}>
            {person.location} · {person.role}
          </p>
        </div>
      </div>
    </header>
  );
};
