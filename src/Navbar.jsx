import { Link, Outlet } from "react-router";

import { cx } from "./util";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <div className={styles["central"]}>
      <header className={styles["header-bar"]}>
        Aiden Smith
        <span className={styles["divider"]}>|</span>
        <Link className={styles["nav-link"]} to="/">
          About
        </Link>
        <Link className={styles["nav-link"]} to="/projects">
          Projects
        </Link>
        <Link className={styles["nav-link"]} to="/resume">
          Resume
        </Link>
        <Link className={cx(styles["nav-link"], styles["star"])} to="/stars">
          <span>★</span>
        </Link>
      </header>
      <Outlet />
    </div>
  );
}
