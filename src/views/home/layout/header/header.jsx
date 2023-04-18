import image from "./images/background.png";
import styles from "./header.module.scss";
import Arrow from "./components/arrow";
import Tada from "react-reveal/Tada";
import Fade from "react-reveal/Fade";

export default function Header() {
  return (
    <header
      className={styles.header}
      id="header">
      <div className={styles.container}>
        <img
          className={styles.image}
          src={image}
          alt="stage chairs"
        />
        <div className={styles.overlay}>
          <h1 className={styles.h1}>
            <Fade
              left
              duration={1000}
              distance="80px"
              delay={200}>
              <span className={styles.other}>Meet</span>
            </Fade>
            <Tada delay={1200}>
              <span
                className={styles.name}
                role="button">
                Yusef Bataineh
              </span>
            </Tada>
            <Fade
              right
              duration={1000}
              distance="80px"
              delay={200}>
              <span className={styles.other}>
                The joke juggler who turns your frown upside down!
              </span>
            </Fade>
          </h1>
          <div
            className={styles.arrowContainer}
            role="button">
            <a href="#cta">
              <Arrow className={styles.arrow} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
