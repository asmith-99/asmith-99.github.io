import { LoremIpsum } from "lorem-ipsum";
import React from "react";

import styles from "./App.module.css";

const lorem = new LoremIpsum();

export default function App() {
  return (
    <div className={styles["app-container"]}>
      <IndexFrame />
      <PageFrame />
    </div>
  );
}

const PageFrame = () => {
  return (
    <div className={styles["page-frame"]}>
      <h1>Welcome</h1>
      Hello, world!
      <p>{lorem.generateParagraphs(1)}</p>
      <p>{lorem.generateParagraphs(1)}</p>
      <p>{lorem.generateParagraphs(1)}</p>
      <p>{lorem.generateParagraphs(1)}</p>
    </div>
  );
};

const IndexFrame = () => {
  return (
    <div className={styles["index-frame"]}>
      <h2>Welcome</h2>
      <hr />
      <h2>Projects</h2>
      <li> - Catbot</li>
      <li> - This site</li>
      <li> - akjshf</li>
      <hr />
      <h2>Welcome</h2>
      <hr />
      <h2>Welcome</h2>
    </div>
  );
};
