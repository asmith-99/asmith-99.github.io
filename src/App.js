import { LoremIpsum } from "lorem-ipsum";
import React from "react";
import seedrandom from "seedrandom";

import styles from "./App.module.css";

const seededRNG = seedrandom("a seed for the rng.");

const lorem = new LoremIpsum({
  random: seededRNG,
});

export default function App() {
  return (
    <div className={styles["app-container"]}>
      <div className={styles["index-container"]}>
        <Index />
      </div>
      <div className={styles["pages-container"]}>
        <Pages />
      </div>
    </div>
  );
}

// the place where one or more pages are kept
const Pages = () => {
  return <Page />;
};

const Page = () => {
  return (
    <div className={styles["page"]}>
      <h1>Welcome</h1>
      Hello, world!
      <p>{lorem.generateParagraphs(1)}</p>
      <p>{lorem.generateParagraphs(1)}</p>
      <p>{lorem.generateParagraphs(1)}</p>
      <p>{lorem.generateParagraphs(1)}</p>
    </div>
  );
};

const Index = () => {
  return (
    <div className={styles["index"]}>
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
