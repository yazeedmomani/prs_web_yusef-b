import styles from "./modal.module.scss";
import { createPortal } from "react-dom";

export default function Modal({ setShowModal }) {
  const target = document.getElementById("modal");

  function handleClick(e) {
    e.preventDefault();

    if (e.target.className !== styles.backdrop) return;

    setShowModal(false);
  }
  return createPortal(
    <div
      className={styles.backdrop}
      onClick={handleClick}>
      <form
        action="#"
        className={styles.contentContainer}>
        <input
          type="text"
          name="name"
          placeholder="John Doe"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="john@example.com"
          required
        />
        <input
          type="number"
          name="number"
          placeholder="+1 234 567 8912"
          required
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>,
    target
  );
}
