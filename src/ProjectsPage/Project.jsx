import styles from "./Project.module.scss";

export default function Project({ name, duration, description, blurb, img }) {
  return (
    <div className={styles["container"]}>
      <div className={styles["preview-content"]}>
        <img className={styles["cover-image"]} src={img} />
        <div className={styles["details"]}>
          <div className={styles["project-name"]}>
            <h3>{name}</h3>
            <span className={styles["duration"]}>{duration}</span>
          </div>
          {blurb}
          <span className={styles["more-prompt"]}>More...</span>
        </div>
      </div>
      <div className={styles["more-content"]}>
        {description.map((entry) => (
          <p>{entry}</p>
        ))}
      </div>
    </div>
  );
}
