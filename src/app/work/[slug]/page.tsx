import { notFound } from "next/navigation";
import Link from "next/link";
import { CustomMDX } from "@/components/mdx";
import { getPosts } from "@/app/utils/utils";
import { Icon, SmartImage } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { person, work } from "@/app/resources/content";
import ScrollToHash from "@/components/ScrollToHash";
import { Metadata } from "next";
import { Meta, Schema } from "@/once-ui/modules";
import styles from "./page.module.scss";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = getPosts(["src", "app", "work", "projects"]);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}): Promise<Metadata> {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const posts = getPosts(["src", "app", "work", "projects"]);
  const post = posts.find((post) => post.slug === slugPath);

  if (!post) return {};

  return Meta.generate({
    title: `${post.metadata.title} — ${person.name}`,
    description: post.metadata.summary,
    baseURL: baseURL,
    image: post.metadata.image
      ? `${baseURL}${post.metadata.image}`
      : `${baseURL}/og?title=${encodeURIComponent(post.metadata.title)}`,
    path: `${work.path}/${post.slug}`,
  });
}

export default async function Project({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}) {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const post = getPosts(["src", "app", "work", "projects"]).find(
    (post) => post.slug === slugPath,
  );

  if (!post) {
    notFound();
  }

  const { metadata, content } = post;

  return (
    <article className={styles.page}>
      <div className="site-container">
        <Link href="/work" className={styles.back}>
          <Icon name="chevronLeft" size="xs" />
          All projects
        </Link>

        <header className={styles.header}>
          <div className={styles.metaRow}>
            {metadata.tag && <span className={styles.tag}>{metadata.tag}</span>}
            {metadata.status && (
              <span className={styles.status}>
                <span className={styles.dot} aria-hidden="true" />
                {metadata.status}
              </span>
            )}
            {metadata.timeline && <span className={styles.timeline}>{metadata.timeline}</span>}
          </div>

          <h1 className={styles.title}>{metadata.title}</h1>
          <p className={styles.summary}>{metadata.summary}</p>

          <div className={styles.actions}>
            {metadata.live && (
              <a
                href={metadata.live}
                target="_blank"
                rel="noreferrer noopener"
                className={styles.primary}
              >
                Visit live site
                <Icon name="arrowUpRight" size="s" />
              </a>
            )}
            {metadata.repo && (
              <a
                href={metadata.repo}
                target="_blank"
                rel="noreferrer noopener"
                className={styles.secondary}
              >
                <Icon name="github" size="s" />
                Source code
              </a>
            )}
          </div>
        </header>

        {metadata.image && (
          <div className={styles.cover}>
            <SmartImage
              priority
              src={metadata.image}
              alt={`${metadata.title} cover`}
              aspectRatio="16 / 9"
              objectFit="cover"
              sizes="100vw"
            />
          </div>
        )}

        <div className={styles.layout}>
          <div className={styles.article}>
            <CustomMDX source={content} />
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.panel}>
              <span className={styles.panelLabel}>Project details</span>

              <dl className={styles.facts}>
                {metadata.role && (
                  <div className={styles.fact}>
                    <dt>Role</dt>
                    <dd>{metadata.role}</dd>
                  </div>
                )}
                {metadata.timeline && (
                  <div className={styles.fact}>
                    <dt>Timeline</dt>
                    <dd>{metadata.timeline}</dd>
                  </div>
                )}
                {metadata.status && (
                  <div className={styles.fact}>
                    <dt>Status</dt>
                    <dd>{metadata.status}</dd>
                  </div>
                )}
              </dl>

              {metadata.tech.length > 0 && (
                <div className={styles.stack}>
                  <span className={styles.panelLabel}>Stack</span>
                  <ul className={styles.tech}>
                    {metadata.tech.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {(metadata.live || metadata.repo) && (
                <div className={styles.links}>
                  {metadata.live && (
                    <a href={metadata.live} target="_blank" rel="noreferrer noopener">
                      <Icon name="externalLink" size="xs" />
                      Live site
                    </a>
                  )}
                  {metadata.repo && (
                    <a href={metadata.repo} target="_blank" rel="noreferrer noopener">
                      <Icon name="github" size="xs" />
                      Repository
                    </a>
                  )}
                </div>
              )}
            </div>

            <div className={styles.contactCard}>
              <span className={styles.panelLabel}>Like this work?</span>
              <p>I&apos;m open to new projects and collaborations.</p>
              <a href={`mailto:${person.email}`}>Start a conversation →</a>
            </div>
          </aside>
        </div>

        <div className={styles.footerNav}>
          <Link href="/work" className={styles.footerLink}>
            <Icon name="grid" size="xs" />
            Browse all projects
          </Link>
          <Link href="/#contact" className={styles.footerLink}>
            Get in touch
            <Icon name="arrowRight" size="xs" />
          </Link>
        </div>
      </div>

      <Schema
        as="blogPosting"
        baseURL={baseURL}
        path={`${work.path}/${post.slug}`}
        title={metadata.title}
        description={metadata.summary}
        datePublished={metadata.publishedAt}
        dateModified={metadata.publishedAt}
        image={metadata.image}
        author={{
          name: person.name,
          url: baseURL,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <ScrollToHash />
    </article>
  );
}
