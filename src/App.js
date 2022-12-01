import React from "react";

import styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles["app-container"]}>
      <IndexFrame />
      <PageFrame />
    </div>
  );
}

const PageFrame = () => {
  return <div className={styles["page-frame"]}>Hello, world!</div>;
};

const IndexFrame = () => {
  return <div className={styles["index-frame"]}>Hello, world!</div>;
};
