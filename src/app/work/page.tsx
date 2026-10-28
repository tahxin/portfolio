import { baseURL } from "@/app/resources";
import { person, work } from "@/app/resources/content";
import { Meta, Schema } from "@/once-ui/modules";
import { Projects } from "@/components/work/Projects";
import styles from "./page.module.scss";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: "/images/og/banner.jpg",
    path: work.path,
  });
}

export default function Work() {
  return (
    <div className={styles.page}>
      <div className="site-container">
        <header className={styles.header}>
          <span className="eyebrow">Selected work</span>
          <h1 className={styles.title}>Projects built for real users.</h1>
          <p className={styles.description}>
            Client platforms, community products and experiments. Each one ships with a case study
            covering the decisions, the stack and what I would change next.
          </p>
        </header>

        <Projects />
      </div>

      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image="/images/og/banner.jpg"
        author={{
          name: person.name,
          url: baseURL,
          image: `${baseURL}${person.avatar}`,
        }}
      />
    </div>
  );
}
