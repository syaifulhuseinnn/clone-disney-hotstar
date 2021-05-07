import React, { useContext } from "react";
import { Form } from "react-bootstrap";
import kidssafe from "../../../assets/images/kids-safe.svg";
import { HeaderContext } from "../header";

export default function Sidebar() {
  const { sidebar, setSidebar } = useContext(HeaderContext);

  return (
    <>
      <div
        className={
          sidebar
            ? "sidebar-backdrop active d-md-none"
            : "sidebar-backdrop d-md-none"
        }
        onClick={() => setSidebar(!sidebar)}
      ></div>
      <div
        className={sidebar ? "sidebar active d-md-none" : "sidebar d-md-none"}
      >
        <ul>
          <li className="d-flex justify-content-between align-items-center px-3">
            <div>
              <span className="d-block" id="sign-in">
                MASUK
              </span>
              <span id="notice">Untuk pengalaman yang lebih baik</span>
            </div>
            <div>
              <i className="bx bx-chevron-right"></i>
            </div>
          </li>
          <li id="watchlist" className="p-3">
            Daftar Tonton
          </li>
          <li id="kids-safe" className="d-flex justify-content-between p-3">
            <div>
              <img src={kidssafe} alt="" />
            </div>
            <div>
              <Form.Check type="switch" id="custom-switch" />
            </div>
          </li>
          <li id="genres" className="p-3 d-flex">
            <i className="bx bx-mask mr-3"></i>
            <span>Genres</span>
          </li>
        </ul>
      </div>
    </>
  );
}
