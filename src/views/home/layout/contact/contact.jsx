import styles from "./contact.module.scss";
import Facebook from "./components/facebook";
import Instagram from "./components/instagram";
import Twitter from "./components/twitter";
import Youtube from "./components/youtube";

export default function Contact() {
  return (
    <section className={styles.contact}>
      <h2 className={styles.h2}>Get in touch!</h2>
      <div className={styles.iconContainer}>
        <Facebook className={styles.icon} />
        <Instagram className={styles.icon} />
        <Twitter className={styles.icon} />
        <Youtube className={styles.icon} />
      </div>
      <a
        href="mailto:hello@yusefbataineh.com"
        className={styles.email}>
        hello@yusefbataineh.com
      </a>
    </section>
  );
}
