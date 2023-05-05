import React, { useEffect } from "react";

import Card from "./dragAndDrop/Card";
import TableTop from "./dragAndDrop/TableTop";
import { lorem } from ".";
import styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles["app-container"]}>
      <TableTop>
        <Card>
          {lorem.generateParagraphs(1)}
          <hr />
          {lorem.generateParagraphs(1)}
        </Card>
      </TableTop>
    </div>
  );
}
