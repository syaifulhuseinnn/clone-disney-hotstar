import React, { useContext } from "react";
import { Form } from "react-bootstrap";
import kidssafe from "../../../assets/images/kids-safe.svg";
import { HeaderContext } from "../header";

export default function Dropdown() {
  const { dropdown } = useContext(HeaderContext);
  return (
    <div
      id="dropdown"
      className={
        dropdown
          ? "d-none d-md-block d-xl-none rounded active"
          : "d-none d-md-block d-xl-none rounded"
      }
    >
      <ul>
        <li className="px-md-3 pt-md-3 pb-md-4">
          <span className="d-md-block" id="sign-in">
            Masuk
          </span>
          <span id="notice">Untuk pengalaman yang lebih baik</span>
        </li>
        <li id="watchlist" className="px-md-3">
          Daftar tonton
        </li>
        <li className="d-md-flex justify-content-md-between p-md-3">
          <div>
            <img src={kidssafe} alt="kidssafe" />
          </div>
          <div>
            <Form.Check type="switch" id="custom-switch-md" />
          </div>
        </li>
        <li id="genres" className="p-md-3 pb-md-4 d-md-flex">
          <i className="bx bx-mask mr-md-3"></i>
          <span>Genres</span>
        </li>
      </ul>
    </div>
  );
}
