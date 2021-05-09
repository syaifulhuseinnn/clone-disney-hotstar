import React from "react";
import "./style.css";

export default function Hero(props) {
  const { hero, movie } = props;

  let metaData;
  let watch;

  if (movie) {
    metaData = `${hero.runtime} minutes . ${new Date(
      hero.release_date
    ).getFullYear()} . ${hero.genres[0].name}`;

    watch = "Tonton Film";
  } else {
    metaData = `${hero.number_of_seasons} Seasons . ${hero.number_of_episodes} Episode . ${hero.genres[0].name} . ${hero.spoken_languages[0].name} . ${hero.production_companies[0].name}`;

    watch = `S${hero.number_of_seasons} E${hero.number_of_episodes} . ${hero.first_air_date}`;
  }

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
            <span className="title">
              {hero.original_name ?? hero.original_title}
            </span>
            <span className="data">{metaData}</span>
            <p className="overview">{hero.overview}</p>
          </div>
          <div className="action">
            <div className="d-flex align-items-center season-episode">
              <i className="bx bx-play"></i>
              <span className="">{watch}</span>
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

Hero.defaultProps = {
  movie: false,
};
