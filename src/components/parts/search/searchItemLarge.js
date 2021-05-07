import React from "react";
import "./style.css";

export default function SearchItemLarge(props) {
  const { imgSource } = props;
  return (
    <div className="card-result d-lg-flex justify-content-lg-between my-lg-2 rounded">
      <div className="w-50">
        <img
          src={imgSource}
          alt="thumbnail"
          className="img-fluid rounded-left"
        />
      </div>
      <div className="flex-grow-1 py-lg-2 px-lg-3">
        <h6>Godzilla vs KONG</h6>
        <span>Action, Disney</span>
      </div>
    </div>
  );
}
