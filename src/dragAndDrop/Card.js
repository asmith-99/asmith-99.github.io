import styles from "./dragAndDropStyles.module.css";
import { useState } from "react";

function Card({}) {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [dragStartPosition, setDragStartPosition] = useState({ x: 0, y: 0 });
  const [dragStartOffsetPosition, setDragStartOffsetPosition] = useState({
    x: 0,
    y: 0,
  });

  const handlePointerDown = (e) => {
    setIsDragging(true);
    setDragStartPosition({ x: e.pageX, y: e.pageY });
    setDragStartOffsetPosition({
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY,
    });
    console.log(e);
  };

  const handlePointerMove = (e) => {
    if (isDragging) {
      const pos = { x: e.pageX, y: e.pageY };
      setPosition({
        x: pos.x - dragStartOffsetPosition.x,
        y: pos.y - dragStartOffsetPosition.y,
      });
      console.log({
        x: pos.x - dragStartOffsetPosition.x,
        y: pos.y - dragStartOffsetPosition.y,
      });
      console.log("adjusted", position, dragStartPosition, pos);
    }
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className={styles["card-default"]}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      style={{ left: position.x, top: position.y }}
    >
      Test Content
    </div>
  );
}

export default Card;
