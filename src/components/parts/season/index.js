import React from "react";
import Slider from "react-slick";
import { settings } from "./_settings";
import NextButton from "./nextButton";
import PrevButton from "./prevButton";
import "./style.css";

export default function Season(props) {
  const { seasons } = props;
  return (
    <div id="seasons">
      <span className="heading">Season</span>
      <div className="mt-3">
        <Slider
          {...settings}
          nextArrow={<NextButton />}
          prevArrow={<PrevButton />}
        >
          {seasons.map((season, index) => (
            <div key={index}>
              <div className="mr-1 mr-md-2 mr-lg-2 position-relative season-thumb-container">
                <img
                  src={`https://image.tmdb.org/t/p/w500${season.poster_path}`}
                  alt=""
                  className="img-fluid"
                  loading="lazy"
                />
                <div className="meta-desc p-1">
                  <span className="season-number">{season.name}</span>
                  <span className="episode-number">
                    {season.episode_count} Episodes
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
