import { Icon } from "@/once-ui/components";
import { contact, person, social } from "@/app/resources/content";
import { SectionHeader } from "./SectionHeader";
import styles from "./ContactSection.module.scss";

export function ContactSection() {
  return (
    <section id="contact" className="section">
      <div className="site-container">
        <SectionHeader
          eyebrow={contact.eyebrow}
          heading={contact.heading}
          description={contact.description}
          meta="Replies within 24h"
        />

        <div className={styles.panel}>
          <div className={styles.copy}>
            <span className={styles.label}>Start a conversation</span>
            <a className={styles.email} href={`mailto:${person.email}`}>
              <span className={styles.emailText}>
                <span>{person.email.split("@")[0]}</span>
                <span>@{person.email.split("@")[1]}</span>
              </span>
              <Icon name="arrowUpRight" size="s" />
            </a>
            <p className={styles.note}>
              Prefer a quick chat? Message me on WhatsApp at{" "}
              <a href={person.whatsapp} target="_blank" rel="noreferrer noopener">
                {person.phone}
              </a>
              .
            </p>

            <div className={styles.socials}>
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  target={item.link.startsWith("http") ? "_blank" : undefined}
                  rel={item.link.startsWith("http") ? "noreferrer noopener" : undefined}
                  className={styles.social}
                >
                  <Icon name={item.icon as never} size="xs" />
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className={styles.channels}>
            {contact.channels.map((channel) => {
              const external = channel.href.startsWith("http");
              return (
                <a
                  key={channel.label}
                  href={channel.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer noopener" : undefined}
                  className={styles.channel}
                >
                  <span className={styles.channelIcon}>
                    <Icon name={channel.icon as never} size="s" />
                  </span>
                  <span className={styles.channelBody}>
                    <span className={styles.channelLabel}>{channel.label}</span>
                    <span className={styles.channelValue}>
                      {channel.value.includes("@") ? (
                        <>
                          {channel.value.split("@")[0]}
                          <wbr />@{channel.value.split("@")[1]}
                        </>
                      ) : (
                        channel.value
                      )}
                    </span>
                    <span className={styles.channelNote}>{channel.note}</span>
                  </span>
                  <Icon name="arrowUpRight" size="xs" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
