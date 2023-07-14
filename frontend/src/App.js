// import logo from "./logo.svg";
// import "./App.css";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Home from "./pages/Home/Home";
import CategoryMovies from "./pages/details/CategoryMovies";
import SearchResult from "./pages/searchResult/SearchResult";
import Footer from "./components/footer/Footer";
import Explore from "./pages/explore/Explore";
// import PageNotFound from "./pages/404/PageNotFound";
import Details from "./pages/moviedetails/Details";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routePath } from "./constants/route";
import Header from "./components/header/Header";
import { fetchDataFromApi } from "./services/api";
import { getApiConfiguration, getGenres } from "./store/homeSlice";
function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  console.log(url);

  useEffect(() => {
    fetchApiConfig();
    // genresCall();
  }, []);

  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
      console.log(res);

      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };

      dispatch(getApiConfiguration(url));
    });
  };
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={routePath.home} element={<Home />} />
        <Route path={routePath.categories} element={<CategoryMovies />} />
        <Route path={routePath.invalid} element={<Home />} />
        <Route path={routePath.movieDetails} element={<Details />} />
        <Route path={routePath.searchResult} element={<SearchResult />} />
        <Route path={routePath.explore} element={<Explore />} />
        {/* <Route path={routePath.invalid} element={<PageNotFound />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
