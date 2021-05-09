import React from "react";
import Slider from "react-slick";
import { Button } from "react-bootstrap";
import { settings } from "./_settings";
import NextButton from "./nextButton";
import PrevButton from "./prevButton";
import "./style.css";

export default function Episode(props) {
  const { episodes } = props;

  console.log(episodes);

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
                <div className="mr-1 mr-md-2 mr-lg-2 position-relative episode-thumb-container">
                  <img
                    src={`https://image.tmdb.org/t/p/w300${episode.still_path}`}
                    alt=""
                    className="img-fluid"
                    loading="lazy"
                  />
                  <div className="meta-desc-eps">
                    <span className="d-flex align-items-center">
                      <i className="bx bx-play"></i>
                      {`S${episode.season_number}  E${episode.episode_number} . ${episode.air_date}`}
                    </span>
                    <p className="px-2 m-0 d-none">{episode.overview}</p>
                    <div className="p-1 btn-add-episode d-none">
                      <Button
                        size="sm"
                        className="text-uppercase bg-transparent border-0 p-1 d-flex align-items-center"
                        block
                      >
                        <i className="bx bx-plus mr-lg-1"></i> Tambah ke daftar
                        tonton
                      </Button>
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
