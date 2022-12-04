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
      <Pages
        pages={[
          {
            heading: "Welcome!",
            content: <WelcomePage />,
          },
          {
            heading: "Welcome!",
            content: <WelcomePage />,
          },
          {
            heading: "Welcome!",
            content: <WelcomePage />,
          },
        ]}
      />
    </div>
  );
}

const WelcomePage = () => {
  return (
    <>
      Hello, world!
      <p>{lorem.generateParagraphs(1)}</p>
      <p>{lorem.generateParagraphs(1)}</p>
      <p>{lorem.generateParagraphs(1)}</p>
      <p>{lorem.generateParagraphs(1)}</p>
    </>
  );
};

// the place where one or more pages are kept
const Pages = ({ pages }) => {
  const currentPage = 2;

  return (
    <div className={styles["pages-container"]}>
      {pages.map((page, index) => {
        if (index === currentPage) {
          return (
            <Page>
              <h1>{page.heading}</h1>
              {page.content}
            </Page>
          );
        } else {
          return <Page>{page.heading}</Page>;
        }
      })}
    </div>
  );
};

const Page = ({ children }) => {
  return <div className={styles["page"]}>{children}</div>;
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
