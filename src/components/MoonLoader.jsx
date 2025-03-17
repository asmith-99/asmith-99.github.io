import styles from "./MoonLoader.module.scss";

export default function MoonLoader({ loading, label = null }) {
  if (loading)
    return (
      <div className={styles["container"]}>
        <span className={styles["loader"]} />
        {label && <span className={styles["label"]}>{label}</span>}
      </div>
    );
}
