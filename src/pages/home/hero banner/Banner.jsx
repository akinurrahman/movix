import React, { useEffect, useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import Img from "../../../components/lazy load image/Img";
import ContentWrapper from "../../../components/content wrapper/ContentWrapper";
const Banner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const nevigate = useNavigate();
  const { url } = useSelector((state) => state.home);
  // console.log("banner comp", url.backdrop);
  const { data, loading } = useFetch("/movie/popular");
  useEffect(() => {
    if (data && data.results) {
      const bg =
        url.backdrop +
        data?.results?.[Math.floor(Math.random() * data.results.length)]
          ?.backdrop_path;
      setBackground(bg);
    }
  }, [data]);

  const searchQueryHandler = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      nevigate(`/search/${query}`);
    }
  };

  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          <Img src={background} />
        </div>
      )}

      <div className="opacity-layer"></div>

      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome</span>
          <span className="subTitle">
            Millions of movies, TV shows and people to discover. Explore now
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for movie or tv shows"
              onKeyUp={searchQueryHandler}
              onChange={(e) => setQuery(e.target.value)}
            />
            {/* <img src={background} alt="" /> */}
            <button>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Banner;
