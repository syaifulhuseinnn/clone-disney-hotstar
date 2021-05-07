import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import logo from "../../../assets/images/disney-hotstar-logo-dark.svg";
import { HeaderContext } from "../header";

export default function Navbar() {
  const {
    sidebar,
    setSidebar,
    dropdown,
    setDropdown,
    search,
    setSearch,
  } = useContext(HeaderContext);

  return (
    <nav
      className="d-flex d-lg-none justify-content-between align-items-end px-3 py-2"
      id="small"
    >
      <div className="d-flex align-items-end">
        <div className="d-block d-md-none">
          <i className="bx bx-menu" onClick={() => setSidebar(!sidebar)}></i>
        </div>
        <div className="d-none d-md-block d-lg-none">
          <i className="bx bx-menu" onClick={() => setDropdown(!dropdown)}></i>
        </div>
        <div className="mx-3">
          <img src={logo} alt="disney+" className="logo-disney" />
          <Button size="sm" className="subscribe">
            langganan
          </Button>
        </div>
      </div>
      <div id="search">
        <i className="bx bx-search" onClick={() => setSearch(!search)}></i>
      </div>
    </nav>
  );
}
