// import logo from "./logo.svg";
// import "./App.css";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Home from "./pages/Home/Home";
import CategoryMovies from "./pages/details/CategoryMovies";
import SearchResult from "./pages/searchResult/SearchResult";
import Footer from "./components/footer/Footer";
import Explore from "./pages/explore/Explore";
import SignInPage from "./pages/signIn/SignInPage";
// import PageNotFound from "./pages/404/PageNotFound";
import Details from "./pages/moviedetails/Details";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routePath } from "./constants/route";
import Header from "./components/header/Header";
import { fetchDataFromApi } from "./services/api";
import { getApiConfiguration, getGenres } from "./store/homeSlice";
import SignUpPage from "./pages/signUp/SignUp";
function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  console.log(url);

  useEffect(() => {
    fetchApiConfig();
    genresCall();
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
  const genresCall = async () => {
    let promises = [];
    let endPoints = ["tv", "movie"];
    let allGenres = {};

    endPoints.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`));
    });
    const data = await Promise.all(promises);
    data.map(({ genres }) => {
      return genres.map((item) => (allGenres[item.id] = item));
    });
    dispatch(getGenres(allGenres));
  };
  return (
    <Router>
      <Header />
      <div style={{ paddingTop: "45px" }}>
        <Routes>
          <Route path={routePath.home} element={<Home />} />
          <Route path={routePath.categories} element={<CategoryMovies />} />
          <Route path={routePath.invalid} element={<Home />} />
          <Route path={routePath.movieDetails} element={<Details />} />
          <Route path={routePath.searchResult} element={<SearchResult />} />
          <Route path={routePath.explore} element={<Explore />} />
          <Route path={routePath.signIn} element={<SignInPage />} />
          <Route path={routePath.signUp} element={<SignUpPage />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
