import React, { useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfiguration } from "./redux/slices/homeSlice";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import SearchResult from "./pages/search results/SeachReasults";
import Explore from "./pages/explore/Explore";
import PageNotFound from "./pages/404/PageNotFound";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const App = () => {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  useEffect(() => {
    fetchApiConfig();
  }, []);

  const fetchApiConfig = () => {
    fetchDataFromApi("/movie/popular").then((res) => {
      // console.log("app comp" , res);

      // const url = {
      // backdrop: res.images.secure_base_url + "original",
      // poster: res.images.secure_base_url + "original",
      // profile: res.images.secure_base_url + "original",
      // };

      dispatch(getApiConfiguration(res));
    });
  };
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
