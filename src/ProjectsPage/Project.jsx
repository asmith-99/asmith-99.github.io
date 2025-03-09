import styles from "./Project.module.scss";

export default function Project({ name, duration, description, img }) {
  return (
    <div className={styles["container"]}>
      {img && <img className={styles["cover-image"]} src={img} />}
      <div className={styles["details"]}>
        <div className={styles["project-name"]}>
          <h3>{name}</h3>
          <span className={styles["duration"]}>{duration}</span>
        </div>
        {description.map((entry) => (
          <p>{entry}</p>
        ))}
      </div>
    </div>
  );
}
