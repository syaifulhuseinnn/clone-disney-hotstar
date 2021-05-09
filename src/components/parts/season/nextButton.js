import React from "react";
import "./style.css";

export default function NextButton(props) {
  const { onClick } = props;
  return (
    <div
      className="position-absolute next-season text-center"
      onClick={onClick}
    >
      <i className="fas fa-chevron-right fa-2x"></i>
    </div>
  );
}
