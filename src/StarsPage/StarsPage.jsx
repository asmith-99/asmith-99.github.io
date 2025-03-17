import styles from "./StarsPage.module.scss";
import { useState } from "react";

export default function StarsPage() {
  const [hidden, setHidden] = useState(false);

  return (
    <div>
      <div className={styles["blurb"]} data-is-hidden={hidden}>
        The background for this site was written using three.js, and shows a
        view of the 9000 brightest stars. The size and color of the stars
        represents the apparent magnitude and color index of the real star. On
        this page the background is clickable. Try clicking and dragging, or
        zooming in and out!
        <p>
          Want to know more? Check out the{" "}
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
