import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "react-bootstrap";
import {
  getMovieDetails,
  movieDetails,
} from "../../../features/movieDetails/movieDetailsSlice";
import { useParams } from "react-router-dom";
import Details from "../../templates/details";

export default function MovieDetails() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const details = useSelector(movieDetails);
  const movieStatus = useSelector((state) => state.movie.status);

  useEffect(() => {
    dispatch(getMovieDetails(id));
  }, [id, dispatch]);

  return (
    <Container className="p-0" fluid>
      {movieStatus === "succeeded" && (
        <Details hero={details} movie={true}></Details>
      )}
    </Container>
  );
}
