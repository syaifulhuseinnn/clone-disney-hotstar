import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "react-bootstrap";
import General from "../../templates/general";
import GeneralPageSkeleton from "../../skeletons/GeneralPageSkeleton";
import MovieTvList from "../../parts/movie-tv-lists";
import {
  getMovieAndTv,
  selectAllMovieAndTv,
} from "../../../features/movieAndTv/movieAndTvSlice";
import {
  getGenres,
  selectAllGenres,
} from "../../../features/genres/genreSlice";

export default function HomePage() {
  const dispatch = useDispatch();
  const movieAndTv = useSelector(selectAllMovieAndTv);
  const genres = useSelector(selectAllGenres);

  const movieAndTvStatus = useSelector((state) => state.movieAndTv.status);
  const genresStatus = useSelector((state) => state.genres.status);

  const headingsCollection = [
    "Baru di Disney+ Hotstar",
    "Original Disney",
    "Pahlawan Marvel",
    "Populer Disney",
    "Akan Datang",
    "Film Indonesia",
    "Trending",
  ];

  useEffect(() => {
    if (movieAndTvStatus === "idle") {
      dispatch(getMovieAndTv());
    }
  }, [movieAndTvStatus, dispatch]);

  useEffect(() => {
    if (genresStatus === "idle") {
      dispatch(getGenres());
    }
  }, [genresStatus, dispatch]);

  if (movieAndTvStatus === "loading") {
    return (
      <Container className="p-0" fluid>
        <GeneralPageSkeleton />
      </Container>
    );
  }

  function posterAndGenresNotNull(datas) {
    return datas.filter(
      (data) =>
        data.poster_path !== null &&
        data.genre_ids.length > 0 &&
        data.overview.length > 0
    );
  }

  return (
    <Container className="p-0" fluid>
      {movieAndTvStatus === "succeeded" && genresStatus === "succeeded" && (
        <General carousel={movieAndTv[1]} genres={genres}>
          {movieAndTv.map((list, index) => (
            <MovieTvList
              key={index}
              lists={posterAndGenresNotNull(list.results)}
              headings={headingsCollection[index]}
              genres={genres}
            />
          ))}
        </General>
      )}
    </Container>
  );
}
