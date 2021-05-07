import React from "react";
import SearchLarge from "./searchLarge";
import SearchSmall from "./searchSmall";

export default function Search() {
  return (
    <React.Fragment>
      <SearchSmall />
      <SearchLarge />
    </React.Fragment>
  );
}
