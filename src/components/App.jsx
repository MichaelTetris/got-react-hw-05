import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./Navigation/Navigation";
import HomePage from "../pages/HomePage/HomePage";
import MoviesPage from "../pages/MoviesPage/MoviesPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:moviesId" element={<div>MovieDetailsPage</div>} />
        <Route path="cast" element={<div>MovieCast</div>} />
        <Route path="reviews" element={<div>MovieReviews</div>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
