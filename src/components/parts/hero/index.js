import React from "react";
import "./style.css";

export default function Hero(props) {
  const { hero } = props;

  return (
    <div className="position-relative my-2 my-lg-0 my-xl-2" id="hero">
      <div className="hero-container">
        <img
          src={`https://image.tmdb.org/t/p/w780${hero.backdrop_path}`}
          alt=""
          className="img-fluid"
        />
        <div className="hero-overlay"></div>
        <div className="details">
          <div className="data-container d-none d-lg-block">
            <span className="title">{hero.original_name}</span>
            <span className="data">{`${hero.number_of_seasons} Seasons . ${hero.number_of_episodes} Episode . ${hero.genres[0].name} . ${hero.spoken_languages[0].name} . ${hero.production_companies[0].name}`}</span>
            <p className="overview">{hero.overview}</p>
          </div>
          <div className="action">
            <div className="d-flex align-items-center season-episode">
              <i className="bx bx-play"></i>
              <span className="">{`S${hero.number_of_seasons} E${hero.number_of_episodes} . ${hero.first_air_date}`}</span>
            </div>
            <div className="add-share d-none d-lg-block">
              <div className="text-center d-inline-block mr-4">
                <i className="bx bx-plus d-block"></i>
                <span className="d-block">Daftar Tonton</span>
              </div>
              <div className="text-center d-inline-block">
                <i class="bx bxs-share-alt"></i>
                <span className="d-block">bagikan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
