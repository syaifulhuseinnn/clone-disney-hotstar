import React from "react";
import { useParams } from "react-router-dom";
import Details from "../../templates/details";

export default function MovieDetails() {
  const { id } = useParams();

  return (
    <Details>
      <h1>Hello!!! {id}</h1>
    </Details>
  );
}
