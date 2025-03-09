import styles from "./Education.module.scss";

export default function Education() {
  return (
    <div className={styles["education"]}>
      <img src="/ubc_crest.png" />
      <div className={styles["education-details"]}>
        <div>University of British Columbia</div>
        <div>BSc, Combined Major in Computer Science and Physics</div>
        <div>2016—2021, Graduated with Distinction</div>
      </div>
    </div>
  );
}
