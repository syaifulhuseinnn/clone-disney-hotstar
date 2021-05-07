import React from "react";
import Slider from "react-slick";
import "react-lazy-load-image-component/src/effects/blur.css";
import NextButton from "./nextButton";
import PrevButton from "./prevButton";
import CustomSlide from "./customSlide";
import { settings } from "./_settings";
import { genreIdToName } from "../../../common/commonFunction";
import "./style.css";

export default function Carousel(props) {
  const { resource, genres: genreList } = props;

  return (
    <div className="my-1">
      <Slider
        {...settings}
        nextArrow={<NextButton />}
        prevArrow={<PrevButton />}
      >
        {resource.results.slice(0, 7).map((carousel, index) => (
          <CustomSlide
            key={index}
            index={index}
            backdrop={carousel.backdrop_path}
            title={carousel.original_name}
            overview={carousel.overview}
            genres={genreIdToName(carousel.genre_ids, genreList)}
          />
        ))}
      </Slider>
    </div>
  );
}
