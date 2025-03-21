import { Link, Outlet, useLocation } from "react-router";

import { cx } from "./util";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  const location = useLocation();
  const showFooter = location.pathname !== "/stars";

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
      {showFooter && (
        <footer className={styles["footer"]}>
          <span>©2025 Aiden Smith</span>
          <span>|</span>
          <a href="mailto:aiden.smith10@gmail.com">Email</a>
          <span>|</span>
          <a href="https://github.com/asmith-99">Github</a>
        </footer>
      )}
    </div>
  );
}
