import styles from "./StarsPage.module.scss";

export default function StarsPage() {
  return (
    <div className={styles["blurb"]}>
      The background for this site was written using three.js, and shows a view
      of the 9000 brightest stars. The size and color of the stars represents
      the apparent magnitude and color index of the real star. On this page the
      background is clickable (below this paragraph). Try clicking and dragging,
      or zooming in and out!
      <p>
        Want to know more? Check out the{" "}
        <a href="https://github.com/asmith-99/asmith-99.github.io">
          github page
        </a>{" "}
        for this site.
      </p>
    </div>
  );
}
