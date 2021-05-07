import React, { useEffect, useState } from "react";
import Menu from "../menu";
import Search from "../search";

export const HeaderContext = React.createContext();

export default function Header(props) {
  const [sidebar, setSidebar] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [search, setSearch] = useState(false);
  const [searchResultLg, setSearchResultLg] = useState(false);

  useEffect(() => {
    if (sidebar) {
      document.body.classList.add("search-open");
    } else {
      document.body.classList.remove("search-open");
    }
  }, [sidebar]);

  useEffect(() => {
    if (search) {
      document.body.classList.add("search-open");
    } else {
      document.body.classList.remove("search-open");
    }
  }, [search]);

  const contextValue = {
    sidebar,
    setSidebar,
    dropdown,
    setDropdown,
    search,
    setSearch,
    searchResultLg,
    setSearchResultLg,
  };

  return (
    <React.Fragment>
      <HeaderContext.Provider value={contextValue}>
        <Menu />
        <Search />
      </HeaderContext.Provider>
    </React.Fragment>
  );
}
