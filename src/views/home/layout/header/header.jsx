import image from "./images/background.png";
import styles from "./header.module.scss";
import Arrow from "./components/arrow";

export default function Header() {
  function handleArrowClick() {}

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
            <span className={styles.other}>Meet</span>
            <span
              className={styles.name}
              role="button">
              Yusef Bataineh
            </span>
            <span className={styles.other}>
              The joke juggler who turns your frown upside down!
            </span>
          </h1>
          <div
            onClick={handleArrowClick}
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
