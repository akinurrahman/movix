import React from "react";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import Banner from "./banner section/Banner";
const Details = () => {
  // const { mediaType, id } = useParams();
  // const { data, loading } = useFetch(`/${mediaType}/${id}`);
  return (
    <div>
      <Banner />
    </div>
  );
};

export default Details;
