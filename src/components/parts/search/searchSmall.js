import React, { useContext } from "react";
import { Form } from "react-bootstrap";
import { HeaderContext } from "../header";
import "./style.css";

export default function SearchSmall() {
  const { search, setSearch } = useContext(HeaderContext);
  return (
    <div id="search-form" className={search ? "show d-lg-none" : "d-lg-none"}>
      <div className="d-flex justify-content-between align-items-center search-container">
        <div onClick={() => setSearch(!search)}>
          <i className="bx bx-left-arrow-alt"></i>
        </div>
        <div className="flex-grow-1">
          <Form>
            <Form.Control
              as="input"
              size="lg"
              autoComplete="false"
              placeholder="Mulai Mencari..."
              className="input-keyword"
            />
          </Form>
        </div>
        <div>
          <i className="bx bx-x"></i>
        </div>
      </div>
      <div
        id="results"
        className="d-flex flex-column align-items-center justify-content-center"
        style={{ height: "90vh" }}
      >
        <h5 className="text-center">Mencari</h5>
        <h5 className="text-center">Acara, film, dan dokumenter</h5>
      </div>
    </div>
  );
}
