import React, { useEffect } from "react";

import styles from "./App.module.css";
import MagicPagesProvider, {
  MagicLink,
  useMagicPages,
} from "./MagicPages/MagicPageProvider";
import Pages from "./MagicPages/Pages";

export default function App() {
  return (
    <MagicPagesProvider>
      <div className={styles["app-container"]}>
        <div className={styles["index-container"]}>
          <Index />
        </div>
        <Pages />
      </div>
    </MagicPagesProvider>
  );
}

const Index = () => {
  const { openPage } = useMagicPages();

  useEffect(() => {
    openPage("welcome");
  }, []);

  return (
    <div className={styles["index"]}>
      <h2>
        <MagicLink page="welcome">Welcome</MagicLink>
      </h2>
      <hr />
      <h2>Projects</h2>
      <li>
        <MagicLink page="catbot"> - Catbot</MagicLink>
      </li>
      <li> - This site</li>
      <li> - akjshf</li>
      <hr />
      <h2>Welcome</h2>
      <hr />
      <h2>Welcome</h2>
    </div>
  );
};
