import React from "react";
import "./style.css";

export default function PrevButton(props) {
  const { onClick } = props;
  return (
    <div
      className="position-absolute prev-season text-center"
      onClick={onClick}
    >
      <i className="fas fa-chevron-left fa-2x"></i>
    </div>
  );
}
