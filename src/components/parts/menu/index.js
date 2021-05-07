import React, { useState } from "react";
import NavbarSmall from "./navbarSmall";
import Sidebar from "./sidebar";
import NavbarLarge from "./navbarLarge";
import Dropdown from "./dropdown";
import "./style.css";

export default function Menu() {
  return (
    <React.Fragment>
      <NavbarSmall />
      <Sidebar />
      <NavbarLarge />
      <Dropdown />
    </React.Fragment>
  );
}
