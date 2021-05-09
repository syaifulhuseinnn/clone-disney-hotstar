import React from "react";
import "./style.css";

export default function Description(props) {
  const { title, genre, season, episode, overview } = props;
  return (
    <div className="p-3 d-lg-none" id="description">
      <div className="details-container">
        <span className="title d-block">{title}</span>
        <span className="genre d-block">{genre}</span>
        <span className="season-episode d-block">{`${season} Season . ${episode} Episode`}</span>
        <p className="overview">{overview}</p>
        <ul className="action">
          <li>
            <i className="bx bx-plus"></i>
          </li>
          <li>
            <i className="bx bxl-facebook-square"></i>
          </li>
          <li>
            <i className="bx bxl-twitter"></i>
          </li>
          <li>
            <i className="bx bx-link-alt"></i>
          </li>
        </ul>
      </div>
    </div>
  );
}
