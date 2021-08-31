import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import NextButton from "./nextButton";
import PrevButton from "./prevButton";
import { settings } from "./_settings";
import { genreIdToName } from "../../../common/commonFunction";
import "./style.css";

export default function MovieTvList(props) {
  const { headings, lists, genres: genreList } = props;

  const checkTvOrMovieFromTitle = (original_title, original_name) => {
    if (original_title) {
      return "movie";
    } else if (original_name) {
      return "tv";
    }
  };

  return (
    <div className="mt-2 mb-4 my-xl-4 thumbnail-container">
      <div className="d-flex d-lg-block justify-content-between px-3 pl-md-4 pr-md-2 px-lg-5 px-xl-5">
        <h5 className="ml-md-1">{headings}</h5>
        <span className="d-lg-none">LEBIH</span>
      </div>
      <div className="my-3">
        <Slider
          {...settings}
          nextArrow={<NextButton />}
          prevArrow={<PrevButton />}
        >
          {lists.map((list, index) => (
            <CustomSlide
              key={index}
              index={index}
              id={list.id}
              thumbnail={list.poster_path}
              title={list.original_name ?? list.original_title}
              overview={list.overview}
              genres={genreIdToName(list.genre_ids, genreList)}
              date={list.first_air_date ?? list.release_date}
              type={checkTvOrMovieFromTitle(
                list.original_title,
                list.original_name
              )}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}

function CustomSlide(props) {
  const {
    index,
    id,
    thumbnail,
    title,
    overview,
    genres,
    date,
    type,
    ...otherprops
  } = props;

  const takeTwoGenres = (genres) => {
    return genres.slice(0, 2).join(" . ");
  };

  const takeOnlyYear = (date) => {
    return new Date(date).getFullYear();
  };

  const reformatTitle = (title) => {
    return title.replaceAll(" ", "-").toLowerCase();
  };

  return (
    <div {...otherprops}>
      <Link to={`/${type}/${reformatTitle(title)}/${id}`}>
        <div className="thumbnail mr-2">
          <div>
            <LazyLoadImage
              src={`https://image.tmdb.org/t/p/w300${thumbnail}`}
              alt={title}
              effect="blur"
            />
          </div>
          <div className="meta-details">
            <div className="description">
              <span className="d-block content-title">{title}</span>
              <span className="d-block content-genres">
                {`${takeTwoGenres(genres)}, ${takeOnlyYear(date)}`}
              </span>
              <span className="content-overview">{overview}</span>
            </div>
            <div className="p-1">
              <Button
                size="sm"
                className="text-uppercase bg-transparent border-0 p-1 d-flex align-items-center"
                block
              >
                <i className="bx bx-plus mr-lg-1"></i> Tambah ke daftar tonton
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
