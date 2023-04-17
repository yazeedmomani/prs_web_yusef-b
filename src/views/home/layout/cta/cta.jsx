import styles from "./cta.module.scss";
import image from "./images/yusef.png";

export default function CTA() {
  return (
    <section
      className={styles.cta}
      id="cta">
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src={image}
          alt="Yusef Bataineh"
        />
      </div>
    </section>
  );
}
