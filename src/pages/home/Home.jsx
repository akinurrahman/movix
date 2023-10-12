import React from "react";
import Banner from "./hero banner/Banner";
import Trending from "./trending/Trending";
import "./style.scss";
import Popular from "./popular section/Popular";

const Home = () => {
  return (
    <div className="homePage">
      <Banner />
      <Trending />
      <Popular/>
      <div style={{ height: 1000 }}></div>
    </div>
  );
};

export default Home;
