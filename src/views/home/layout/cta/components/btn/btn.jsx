import styles from "./btn.module.scss";

export default function Btn({ className, children, ...props }) {
  return (
    <a
      className={`${styles.btn} ${className}`}
      {...props}>
      {children}
    </a>
  );
}
