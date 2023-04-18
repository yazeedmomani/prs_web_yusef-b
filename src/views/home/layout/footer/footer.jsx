import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <p className={styles.copyright}>&copy; 2023 Yusef Bataineh</p>
    </div>
  );
}
