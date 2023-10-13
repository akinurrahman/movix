import React from "react";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import Banner from "./banner section/Banner";
const Details = () => {
  const { mediaType, id } = useParams(); 
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: credits_loading } = useFetch(`/${mediaType}/${id}/credits`);
  return (
    <div>
      <Banner video={data?.results?.[0]} crew={credits?.crew} />
    </div>
  );
};

export default Details;
