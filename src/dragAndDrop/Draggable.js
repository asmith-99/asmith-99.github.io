import { createContext, useContext, useState } from "react";

import { DragAndDropContext } from "./TableTop";
import styles from "./dragAndDropStyles.module.css";

function Draggable({
  children,
  initialX = 100,
  initialY = 100,
  containerClassname = "",
}) {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: initialX, y: initialY });

  const { currentElementMoveHandler, currentElementPointerUpHandler } =
    useContext(DragAndDropContext);

  const handlePointerDown = (e) => {
    setIsDragging(true);
    const dragStartClickPosition = { x: e.pageX, y: e.pageY };
    const dragStartElementPosition = position;
    const handlePointerMoveWhileDragging = (e) => {
      const pos = { x: e.pageX, y: e.pageY };
      setPosition({
        x: dragStartElementPosition.x + pos.x - dragStartClickPosition.x,
        y: dragStartElementPosition.y + pos.y - dragStartClickPosition.y,
      });
    };

    const handlePointerUpWhileDragging = () => {
      setIsDragging(false);
      currentElementMoveHandler.current = null;
    };
    currentElementMoveHandler.current = handlePointerMoveWhileDragging;
    currentElementPointerUpHandler.current = handlePointerUpWhileDragging;
  };

  return (
    <div
      className={`${styles["container-default"]} ${containerClassname}`}
      onPointerDown={handlePointerDown}
      style={{ left: position.x, top: position.y }}
    >
      <div
        className={`${styles["content-container"]} ${
          isDragging ? styles["dragging"] : ""
        }`}
      >
        <DraggableContext.Provider value={{ dragging: isDragging }}>
          {children}
        </DraggableContext.Provider>
      </div>
    </div>
  );
}

export const DraggableContext = createContext({ dragging: false });

export default Draggable;
