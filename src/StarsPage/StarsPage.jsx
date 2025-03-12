import { useEffect, useRef, useState } from "react";

import { renderStars } from "./stars";
import styles from "./StarsPage.module.scss";

export default function StarsPage() {
  const canvasContainer = useRef(null);
  const renderer = useRef(null);

  /*

  useEffect(() => {
    if (!canvasContainer.current || renderer.current) return;
    const newCanvas = renderStars(canvasContainer.current);
    renderer.current = newCanvas;
  }, []);

  return (
    <div>
      <div>Star Rendering Test</div>
      <div className={styles["canvas-container"]} ref={canvasContainer} />
    </div>
  );

  */
}
