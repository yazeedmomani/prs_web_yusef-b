import styles from "./null.module.scss";

export default function Null() {
  return (
    <p className={styles.error}>
      Error: This website is compatible with small laptop screen sizes or larger
      only.
    </p>
  );
}
