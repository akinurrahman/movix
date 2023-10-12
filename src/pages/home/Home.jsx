import React from "react";
import Banner from "./hero banner/Banner";
import Trending from "./trending/Trending";
import "./style.scss";
import Popular from "./popular section/Popular";
import TopRated from "./top rated section/TopRated";

const Home = () => {
  return (
    <div className="homePage">
      <Banner />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  );
};

export default Home;
