// import logo from "./logo.svg";
// import "./App.css";
import Home from "./pages/Home/Home";
import CategoryMovies from "./pages/details/CategoryMovies";
import SearchResult from "./pages/searchResult/SearchResult";
import Footer from "./components/common/Footer";
import Explore from "./pages/explore/Explore";
import PageNotFound from "./pages/404/PageNotFound";
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import { routePath } from "./constants/route";

function App() {
  return(
    <Router>
      <Routes>
        <Route path={routePath.home} element={<Home />} />
        <Route path={routePath.categories} element={<CategoryMovies />} />
        <Route path={routePath.invalid} element={<Home />} />
      </Routes>
    </Router>
  ) ;
}

export default App;

