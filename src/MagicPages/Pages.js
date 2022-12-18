import styles from "../App.module.css";
import { useMagicPages } from "./MagicPageProvider";
import Page from "./Page.js";

// the place where one or more pages are kept
const Pages = ({}) => {
  const { pages } = useMagicPages();

  const currentPage = pages.length - 1;

  return (
    <div className={styles["pages-container"]}>
      {pages.map((page, index) => {
        console.log(page);
        if (index === currentPage) {
          return (
            <Page key={page.heading}>
              <h1>{page.heading}</h1>
              <page.content />
            </Page>
          );
        } else {
          return <Page key={page.heading}>{page.heading}</Page>;
        }
      })}
    </div>
  );
};

export default Pages;
