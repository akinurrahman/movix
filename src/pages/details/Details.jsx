import React from "react";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import Banner from "./banner section/Banner";
import Cast from "./cast/Cast";
import VideosSection from "./video section/VideoSection";
import Recommendation from "./carousels/Recommendation";
import Similar from "./carousels/Similar";
const Details = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: credits_loading } = useFetch(
    `/${mediaType}/${id}/credits`
  );
  return (
    <div>
      <Banner video={data?.results?.[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={credits_loading} />
      <VideosSection data={data} loading={loading} />
      <Similar mediaType={mediaType} id={id} />
      <Recommendation mediaType={mediaType} id={id} />
    </div>
  );
};

export default Details;
