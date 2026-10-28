"use client";

import { RevealFx } from "@/once-ui/components";
import styles from "./SectionHeader.module.scss";

type SectionHeaderProps = {
  eyebrow: string;
  heading: string;
  description?: string;
  meta?: string;
};

export function SectionHeader({ eyebrow, heading, description, meta }: SectionHeaderProps) {
  return (
    <RevealFx translateY="8" fillWidth>
      <div className={styles.header}>
        <div className={styles.left}>
          <span className="eyebrow">{eyebrow}</span>
          <h2 className={styles.heading}>{heading}</h2>
        </div>
        {(description || meta) && (
          <div className={styles.right}>
            {description && <p className={styles.description}>{description}</p>}
            {meta && <span className={styles.meta}>{meta}</span>}
          </div>
        )}
      </div>
    </RevealFx>
  );
}
