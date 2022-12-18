import React, { createContext, useContext, useMemo, useState } from "react";
import { PAGES } from "../Content";

const initialState = {
  pages: [],
  pageComponents: [],
  openPage: () => {},
  closePage: () => {},
};

const MagicPagesContext = createContext(initialState);

const MagicPagesProvider = ({ children }) => {
  const [pageNames, setPageNames] = useState([]);

  const pages = useMemo(
    () => pageNames.map((page) => PAGES[page]),
    [pageNames]
  );

  const openPage = (newPage) => {
    const pageIndex = pageNames.indexOf(newPage);
    if (pageIndex !== -1) {
      setPageNames([...pageNames.slice(pageIndex, 1), newPage]);
    } else {
      setPageNames([...pageNames, newPage]);
    }
  };

  const closePage = (pageToClose) => {
    const pageIndex = pageNames.indexOf(pageToClose);
    if (pageIndex === -1) return;
    setPageNames([...pageNames.slice(pageIndex, 1)]);
  };

  const magicPages = {
    pageNames,
    pages,
    openPage,
    closePage,
  };

  return (
    <MagicPagesContext.Provider value={magicPages}>
      {children}
    </MagicPagesContext.Provider>
  );
};

export function useMagicPages() {
  return useContext(MagicPagesContext);
}

export const MagicLink = ({ page, children }) => {
  const { openPage } = useMagicPages();

  return <a onClick={() => openPage(page)}>{children}</a>;
};

export default MagicPagesProvider;
