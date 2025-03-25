import { Link } from "react-router";
import styles from "./Project.module.scss";
import { useState } from "react";

export default function Project({
  name,
  duration,
  description,
  blurb,
  coverImage,
  links,
}) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className={styles["container"]} data-show-more={showMore} id={name}>
      <div className={styles["preview-content"]}>
        <img className={styles["cover-image"]} src={coverImage} />
        <div className={styles["details"]}>
          <div className={styles["project-name"]}>
            <h3>{name}</h3>
            <span className={styles["duration"]}>{duration}</span>
          </div>
          <div className={styles["blurb"]}>{blurb}</div>
        </div>
      </div>
      <div className={styles["more-content"]}>
        {description.map((entry) => (
          <p>{entry}</p>
        ))}
      </div>
      <div className={styles["button-container"]}>
        {links.map(({ text, link }) => (
          <Link to={link} className={styles["writeup-link"]}>
            {text}
          </Link>
        ))}
        <span
          className={styles["more-prompt"]}
          onClick={() => setShowMore((value) => !value)}
        >
          {showMore ? "Back" : "More..."}
        </span>
      </div>
    </div>
  );
}
