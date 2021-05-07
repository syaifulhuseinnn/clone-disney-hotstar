import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getTvDetails,
  tvDetails,
} from "../../../features/tvDetails/tvDetailsSlice";
import Details from "../../templates/details";
import GeneralPageSkeleton from "../../skeletons/GeneralPageSkeleton";
import Description from "../../parts/description";
import Season from "../../parts/season";
import Episode from "../../parts/episode";

export default function TvDetails() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const details = useSelector(tvDetails);
  const tvDetailsStatus = useSelector((state) => state.tv.status);

  useEffect(() => {
    dispatch(getTvDetails(id));
  }, [id, dispatch]);

  if (tvDetailsStatus === "loading") {
    return <GeneralPageSkeleton />;
  }

  return (
    <Container className="p-0" fluid>
      {tvDetailsStatus === "succeeded" && (
        <Details hero={details.tvDetails}>
          <Description
            title={details.tvDetails.original_name}
            genre={details.tvDetails.genres[0].name}
            season={details.tvDetails.number_of_seasons}
            episode={details.tvDetails.number_of_episodes}
            overview={details.tvDetails.overview}
          />
          <Episode episodes={details.tvSeasonDetails} />
          <Season seasons={details.tvDetails.seasons} />
        </Details>
      )}
    </Container>
  );
}
