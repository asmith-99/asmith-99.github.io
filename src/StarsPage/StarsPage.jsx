import styles from "./StarsPage.module.scss";
import { useState } from "react";

export default function StarsPage() {
  const [hidden, setHidden] = useState(false);

  return (
    <div>
      <div className={styles["blurb"]} data-is-hidden={hidden}>
        I implemented the background for this site using three.js, and it shows
        a view of the 9000 brightest stars from the{" "}
        <a href="https://www.astronexus.com/projects/hyg">HYG 2.0</a> dataset.
        The size and color of the stars represents the apparent magnitude and
        R-B color index of the real star.
        <p>
          On this page the background is clickable. Try clicking and dragging,
          or zooming out!
        </p>
        <p>
          Want more technical details? Want to check out the code? Check out my{" "}
          <a href="https://github.com/asmith-99/asmith-99.github.io">
            github page
          </a>{" "}
          for this site.
        </p>
      </div>
      <div className={styles["button-container"]}>
        <button className={styles["button"]} onClick={() => setHidden(!hidden)}>
          {hidden ? "Unhide details" : "Hide details"}
        </button>
      </div>
    </div>
  );
}
