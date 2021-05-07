import React from "react";
import Slider from "react-slick";
import { settings } from "./_settings";
import NextButton from "./nextButton";
import PrevButton from "./prevButton";
import "./style.css";

export default function Episode(props) {
  const { episodes } = props;

  const filterStillPath = (episodes) => {
    return episodes.map((episode) =>
      episode.episodes.filter((episode) => episode.still_path !== null)
    );
  };

  return (
    <div id="episodes" className="mb-4 my-lg-4">
      <span className="heading">Episode</span>
      <div className="mt-3">
        <Slider
          {...settings}
          nextArrow={<NextButton />}
          prevArrow={<PrevButton />}
        >
          {filterStillPath(episodes).map((episode) =>
            episode.map((episode, index) => (
              <div key={index}>
                <div className="mr-1 mr-lg-2 position-relative episode-thumb-container">
                  <img
                    src={`https://image.tmdb.org/t/p/w300${episode.still_path}`}
                    alt=""
                    className="img-fluid"
                    loading="lazy"
                  />
                  <div className="meta-desc-eps p-1 p-lg-2">
                    <i className="bx bx-play"></i>
                    <div>
                      <span className="episode-number">{`S${episode.season_number}  E${episode.episode_number}`}</span>
                      <span className="episode-release">{` . ${episode.air_date}`}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </Slider>
      </div>
    </div>
  );
}
