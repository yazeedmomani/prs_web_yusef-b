import styles from "./contact.module.scss";
import Facebook from "./components/facebook";
import Instagram from "./components/instagram";
import Twitter from "./components/twitter";
import Youtube from "./components/youtube";
import Fade from "react-reveal/Fade";

export default function Contact() {
  return (
    <section
      className={styles.contact}
      id="contact">
      <Fade
        top
        distance="40px"
        delay={200}
        duration={1000}>
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
      </Fade>
    </section>
  );
}
