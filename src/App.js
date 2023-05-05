import React, { useEffect } from "react";

import Card from "./dragAndDrop/Card";
import TableTop from "./dragAndDrop/TableTop";
import styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles["app-container"]}>
      <TableTop>
        <Card />
      </TableTop>
    </div>
  );
}
