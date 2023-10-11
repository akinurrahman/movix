import React from "react";
import Banner from "./hero banner/Banner";
import Trending from "./trending/Trending";
import "./style.scss";

const Home = () => {
  return (
    <div className="homePage">
      <Banner />
      <Trending />
      <div style={{ height: 1000 }}></div>
    </div>
  );
};

export default Home;
