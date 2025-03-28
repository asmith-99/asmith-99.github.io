import styles from "./WorkHistory.module.scss";

export default function WorkHistory({
  workplace,
  title,
  duration,
  blurb,
  points,
}) {
  return (
    <>
      <section className={styles["container"]}>
        <div className={styles["work-header"]}>
          <span className={styles["company-name"]}>{workplace}</span>
          <span className={styles["start-end"]}>{duration}</span>
        </div>
        <div className={styles["job-title"]}>{title}</div>
      </section>
      {/*
        {blurb && blurb !== "" && <div>{blurb}</div>}
      {points.length > 0 && (
        <ul>
          {points.map((point) => (
            <li>{point}</li>
          ))}
        </ul>
      )}
      */}
    </>
  );
}
