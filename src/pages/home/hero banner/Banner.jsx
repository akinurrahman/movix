import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
const Banner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const nevigate = useNavigate();

  const { data, loading } = useFetch("/movie/popular");
  // console.log("banner comp", background);
  useEffect(() => {
    if (data && data.results) {
      const bg =
        data.results[Math.floor(Math.random() * data.results.length)]
          .backdrop_path;
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
      <div className="wrapper">
        <div className="heroBannerControl">
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
      </div>
    </div>
  );
};

export default Banner;
