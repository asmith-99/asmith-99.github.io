import Draggable from "./Draggable";
import styles from "./Card.module.css";

function Card({ children }) {
  return <Draggable containerClassname={styles["paper"]}>{children}</Draggable>;
}

export default Card;
