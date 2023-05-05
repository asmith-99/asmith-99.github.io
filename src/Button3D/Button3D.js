import styles from "./Button3D.module.css";

function Button3D({ children }) {
  return (
    <button className={styles["pushable"]}>
      <span className={styles["shadow"]}></span>
      <span className={styles["edge"]}></span>
      <span className={styles["front"]}>{children}</span>
    </button>
  );
}

export default Button3D;
