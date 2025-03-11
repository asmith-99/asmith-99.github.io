import { useEffect, useRef } from "react";

import { Outlet } from "react-router";
import { renderStars } from "./StarsPage/stars";
import styles from "./StarWrapper.module.scss";

export default function StarWrapper() {
  const canvasContainer = useRef(null);
  const renderer = useRef(null);

  useEffect(() => {
    if (!canvasContainer.current || renderer.current) return;
    const newCanvas = renderStars(canvasContainer.current);
    renderer.current = newCanvas;
  }, []);

  return (
    <>
      <div className={styles["canvas-container"]} ref={canvasContainer} />
      <Outlet />
    </>
  );
}
