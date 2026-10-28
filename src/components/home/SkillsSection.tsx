import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiDaisyui,
  SiHeroui,
  SiShadcnui,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiMongodb,
  SiMongoose,
  SiSqlite,
  SiFirebase,
  SiStripe,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiVercel,
  SiRailway,
  SiRender,
  SiNetlify,
  SiFigma,
  SiArchlinux,
  SiUbuntu,
  SiPython,
  SiCplusplus,
  SiMendeley,
  SiZotero,
  SiHtml5,
  SiCss,
  SiPostman,
  SiBetterauth,
  SiAuth0,
  SiGithubactions,
} from "react-icons/si";
import { Icon } from "@/once-ui/components";
import { skills } from "@/app/resources/content";
import { SectionHeader } from "./SectionHeader";
import styles from "./SkillsSection.module.scss";

const logos: Record<string, IconType> = {
  react: SiReact,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  javascript: SiJavascript,
  tailwind: SiTailwindcss,
  daisyui: SiDaisyui,
  heroui: SiHeroui,
  shadcn: SiShadcnui,
  node: SiNodedotjs,
  express: SiExpress,
  django: SiDjango,
  mongodb: SiMongodb,
  mongoose: SiMongoose,
  sqlite: SiSqlite,
  firebase: SiFirebase,
  stripe: SiStripe,
  docker: SiDocker,
  kubernetes: SiKubernetes,
  git: SiGit,
  githubactions: SiGithubactions,
  vercel: SiVercel,
  railway: SiRailway,
  render: SiRender,
  netlify: SiNetlify,
  figma: SiFigma,
  arch: SiArchlinux,
  ubuntu: SiUbuntu,
  python: SiPython,
  cplusplus: SiCplusplus,
  mendeley: SiMendeley,
  zotero: SiZotero,
  html: SiHtml5,
  css: SiCss,
  postman: SiPostman,
  betterauth: SiBetterauth,
  oauth: SiAuth0,
};

type SkillGroup = (typeof skills.groups)[number];
type SkillItem = SkillGroup["items"][number];

function SkillLogo({ item }: { item: SkillItem }) {
  const Logo = logos[item.icon];

  if (!Logo) {
    return <span className={styles.monogram}>{item.name.slice(0, 2).toUpperCase()}</span>;
  }

  return <Logo aria-hidden="true" className={styles.logo} />;
}

export function SkillsSection() {
  return (
    <section id="skills" className="section">
      <div className="site-container">
        <SectionHeader
          eyebrow={skills.eyebrow}
          heading={skills.heading}
          description={skills.description}
          meta={`${skills.groups.length} categories`}
        />

        <div className={styles.grid}>
          {skills.groups.map((group, index) => (
            <article key={group.title} className={styles.card}>
              <header className={styles.cardHeader}>
                <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
                <span className={styles.icon}>
                  <Icon name={group.icon as never} size="s" />
                </span>
                <h3 className={styles.title}>{group.title}</h3>
                <span className={styles.count}>{group.items.length}</span>
              </header>

              <p className={styles.description}>{group.description}</p>

              <ul className={styles.items}>
                {group.items.map((item) => (
                  <li key={`${group.title}-${item.name}`} className={styles.item}>
                    <SkillLogo item={item} />
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
