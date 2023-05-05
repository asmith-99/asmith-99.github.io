import { createContext, useEffect, useRef } from "react";

import styles from "./dragAndDropStyles.module.css";

function TableTop({ children }) {
  const currentElementMoveHandler = useRef(null);
  const currentElementPointerUpHandler = useRef(null);

  useEffect(() => {
    const handlePointerMove = (e) => {
      if (currentElementMoveHandler.current) {
        currentElementMoveHandler.current(e);
      }
    };
    const handlePointerUp = (e) => {
      if (currentElementPointerUpHandler.current) {
        currentElementPointerUpHandler.current(e);
      }
    };
    document.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("pointerup", handlePointerUp);

    return () => {
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerup", handlePointerUp);
    };
  }, []);

  return (
    <div className={styles["tabletop"]}>
      <DragAndDropContext.Provider
        value={{ currentElementMoveHandler, currentElementPointerUpHandler }}
      >
        {children}
      </DragAndDropContext.Provider>
    </div>
  );
}

export const DragAndDropContext = createContext({});

export default TableTop;
