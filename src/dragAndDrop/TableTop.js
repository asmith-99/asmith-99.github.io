import styles from "./dragAndDropStyles.module.css";

function TableTop({ children }) {
  return <div className={styles["tabletop"]}>{children}</div>;
}

export default TableTop;
